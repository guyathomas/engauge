const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLSchema,
	GraphQLString,
	GraphQLID,
	GraphQLInt
} = require('graphql');
const db = require('../db/models/index.js');
// console.log('Models', Object.keys())

const Session = new GraphQLObjectType({
  name: 'Session',
  description: 'A session of a particular image',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve(session) {
        return session.id;
      },
    },
    duration: {
      type: GraphQLInt,
      resolve(session) {
        return session.duration;
      },
    },
    // recording: {
    //   type: GraphQLObjectType,
    //   resolve(session) {
    //     return session.recording;
    //   },
    // },
    socketID: {
      type: GraphQLString,
      resolve(session) {
        return session.socketId;
      },
    },

    // createdAt: {
    //   type: GraphQLObjectType,
    //   resolve(session) {
    //     return session.createdAt;
    //   },
    // },
    // updatedAt: {
    //   type: GraphQLObjectType,
    //   resolve(session) {
    //     return session.updatedAt;
    //   },
    // },
    studyId: {
      type: GraphQLInt,
      resolve(session) {
        return session.studyId;
      },
    },
  }),
});

const Study = new GraphQLObjectType({
  name: 'Study',
  description: 'A study of a particular image',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve(study) {
        return study.id;
      },
    },
    url: {
      type: GraphQLString,
      resolve(study) {
        return study.url;
      },
    },
    shortCode: {
      type: GraphQLString,
      resolve(study) {
        return study.shortCode;
      },
    },
    // createdAt: {
    //   type: GraphQLObjectType,
    //   resolve(study) {
    //     return study.createdAt;
    //   },
    // },
    // updatedAt: {
    //   type: GraphQLObjectType,
    //   resolve(study) {
    //     return study.updatedAt;
    //   },
    // },
    userId: {
      type: GraphQLInt,
      resolve(study) {
        return study.userId;
      },
    },
    session: {
      type: Session,
      resolve(study) {
        return study.getSession();
      },
    },
  }),
});


const User = new GraphQLObjectType({
  name: 'User',
  description: 'A user that has created a study',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve(user) {
        return user.id;
      },
    },
    email: {
      type: GraphQLString,
      resolve(user) {
        return user.email;
      },
    },
    studies: {
      type: Study,
      resolve(user) {
        return user.getStudy();
      },
    },
    /* ,
    createdAt: {
      type: GraphQLObjectType,
      resolve(user) {
        return user.createdAt;
      },
    },
    updatedAt: {
      type: GraphQLObjectType,
      resolve(user) {
        return user.updatedAt;
      },
    },*/
    study: {
      type: Study,
      resolve(user) {
        return user.getStudy();
      },
    },
  }),
});

console.log('The models', Object.keys(db.sequelize.models))
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    users: {
      type: new GraphQLList(User),
      resolve(root, args) {
        return db.sequelize.models.user.findAll({ where: args });
      },
    },
    study: {
      type: new GraphQLList(Study),
      resolve(root, args) {
        return db.sequelize.models.study.findAll({ where: args });
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
});

module.exports = Schema;
