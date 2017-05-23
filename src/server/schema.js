// https://www.youtube.com/watch?v=DNPVqK_woRQ
const GraphQLJSON = require('graphql-type-json');
const GraphQLDate = require('graphql-date');
const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLSchema,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
	GraphQLNonNull,
} = require('graphql');
const db = require('../db/models/index.js');
const { resolver, attributeFields, defaultListArgs } = require('graphql-sequelize');
const _ = require('lodash');
// console.log('Models', Object.keys())

// const makeAllMandatory = (model) => {
//   const fields = _.assign(attributeFields(model));

//   for (const key in fields) {
//     const type = fields[key].type;
//     fields[key].type = new GraphQLNonNull(type);
//     console.log(fields[key]);
//   }
//   return fields;
// };

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
    session: {
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
    user: {
      type: new GraphQLList(User),
      args: _.assign(defaultListArgs(), {}),
      resolve: resolver(db.sequelize.models.user),
    },
    study: {
      type: new GraphQLList(Study),
      args: _.assign(defaultListArgs(), {}),
      resolve: resolver(db.sequelize.models.study),
    },
    session: {
      type: new GraphQLList(Session),
      args: _.assign(defaultListArgs(), {}),
      resolve: resolver(db.sequelize.models.session),
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields() {
    return {
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
          socketId: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(source, args) {
          return db.sequelize.models.session.create({
            duration: args.duration,
            recording: args.recording,
            socketId: args.socketId,
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
