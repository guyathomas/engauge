// https://www.youtube.com/watch?v=DNPVqK_woRQ
const GraphQLJSON = require('graphql-type-json');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');
const db = require('../db/models/index.js');
const { resolver, attributeFields, defaultListArgs } = require('graphql-sequelize');
const _ = require('lodash');
const utils = require('./utils');

const Session = new GraphQLObjectType({
  name: 'Session',
  description: 'A session of a particular image',
  fields: () => (_.assign(attributeFields(db.sequelize.models.session), {
    study: {
      type: Study,
      resolve(session) {
        return session.getStudy();
      },
    },
  })),

});

const Study = new GraphQLObjectType({
  name: 'Study',
  description: 'A study of a particular image',
  fields: () => (_.assign(attributeFields(db.sequelize.models.study), {
    sessions: {
      type: new GraphQLList(Session),
      resolve(study) {
        return study.getSessions();
      },
    },
    user: {
      type: User,
      resolve(study) {
        return study.getUser();
      },
    },
  })),
});

const User = new GraphQLObjectType({
  name: 'User',
  description: 'A user that has created a study',
  fields: () => (_.assign(attributeFields(db.sequelize.models.user), {
    study: {
      type: new GraphQLList(Study),
      resolve(user) {
        return user.getStudies();
      },
    },
  })),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    users: {
      type: new GraphQLList(User),
      args: _.assign(defaultListArgs(), {}),
      resolve: resolver(db.sequelize.models.user),
    },
    user: {
      type: User,
      args: _.assign(defaultListArgs(), {
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
      }),
      resolve: resolver(db.sequelize.models.user),
    },
    studies: {
      type: new GraphQLList(Study),
      args: _.assign(defaultListArgs(), {}),
      resolve: resolver(db.sequelize.models.study),
    },
    study: {
      type: Study,
      args: _.assign(defaultListArgs(), {
        shortCode: {
          type: new GraphQLNonNull(GraphQLString),
        },
      }),
      resolve: resolver(db.sequelize.models.study),
    },
    sessions: {
      type: new GraphQLList(Session),
      args: _.assign(defaultListArgs(), {}),
      resolve: resolver(db.sequelize.models.session),
    },
    session: {
      type: Session,
      args: _.assign(defaultListArgs(), {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      }),
      resolve: resolver(db.sequelize.models.session),
    },
  }),
});


const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields() {
    return {
      newUserStudy: {
        type: Study,
        args: {
          email: {
            type: new GraphQLNonNull(GraphQLString),
          },
          url: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(source, args) {
          const { url, email } = args;
          const shortCode = utils.createSha(url + email);
          return db.sequelize.models.user.findOrCreate({ where: { email } })
          .then(res => (
            db.sequelize.models.study.findOrCreate({ where: {
              shortCode,
              url,
              userId: res[0].dataValues.id,
            } })
          ))
          .then(res => res[0]);
        },
      },
      addUser: {
        type: User,
        args: {
          email: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(source, args) {
          return db.sequelize.models.user.create({
            email: args.email.toLowerCase(),
          });
        },
      },
      addStudy: {
        type: Study,
        args: {
          shortCode: {
            type: new GraphQLNonNull(GraphQLString),
          },
          url: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(source, args) {
          return db.sequelize.models.study.create({
            shortCode: args.shortCode,
            url: args.url,
          });
        },
      },
      addSession: {
        type: Session,
        args: {
          duration: {
            type: new GraphQLNonNull(GraphQLInt),
          },
          recording: {
            type: new GraphQLNonNull(GraphQLJSON),
          },
          screenSize: {
            type: new GraphQLNonNull(GraphQLJSON),
          },
          shortCode: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(source, args) {
          // db.sequelize.models.session.create({
          //   duration: args.duration,
          //   recording: args.recording,
          // })
          return db.sequelize.models.study.findOne({ where: { shortCode: args.shortCode } })
          .then((res) => {
            console.log('Going to create with', res.dataValues.id);
            return db.sequelize.models.session.create({
              duration: args.duration,
              recording: args.recording,
              studyId: res.dataValues.id,
              screenSize: args.screenSize,
            });
            // return
            // console.log('Result from findONe', res);
          });
        },
      },
    };
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});


module.exports = Schema;

// OLD(More verbose method without using graphql-sequelize)
// const User = new GraphQLObjectType({
//   name: 'User',
//   description: 'A user that has created a study',
//   fields: () => ({
//     id: {
//       type: GraphQLID,
//       resolve(user) {
//         return user.id;
//       },
//     },
//     email: {
//       type: GraphQLString,
//       resolve(user) {
//         return user.email;
//       },
//     },
//   }),
// });

// const Query = new GraphQLObjectType({
//   name: 'Query',
//   description: 'This is a root query',
//   fields: () => ({
//     users: {
//       type: new GraphQLList(User),
//       resolve(root, args) {
//         return db.sequelize.models.user.findAll({ where: args });
//       },
//     },
//     study: {
//       type: new GraphQLList(Study),
//       resolve(root, args) {
//         return db.sequelize.models.study.findAll({ where: args });
//       },
//     },
//     session: {
//       type: new GraphQLList(Session),
//       resolve(root, args) {
//         return db.sequelize.models.session.findAll({ where: args });
//       },
//     },
//   }),
// });
