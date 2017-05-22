const GraphQLJSON = require('graphql-type-json');
const GraphQLDate = require('graphql-date');
const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLSchema,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
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
    recording: {
      type: GraphQLJSON,
      resolve(session) {
        return session.recording;
      },
    },
    socketId: {
      type: GraphQLString,
      resolve(session) {
        return session.socketId;
      },
    },

    createdAt: {
      type: GraphQLDate,
      resolve(session) {
        return session.createdAt;
      },
    },
    updatedAt: {
      type: GraphQLDate,
      resolve(session) {
        return session.updatedAt;
      },
    },
    studyId: {
      type: GraphQLInt,
      resolve(session) {
        return session.studyId;
      },
    },
    study: {
      type: Study,
      resolve(session) {
        return session.getStudy();
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
    createdAt: {
      type: GraphQLDate,
      resolve(study) {
        return study.createdAt;
      },
    },
    updatedAt: {
      type: GraphQLDate,
      resolve(study) {
        return study.updatedAt;
      },
    },
    userId: {
      type: GraphQLString,
      resolve(study) {
        return study.userId;
      },
    },
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
    createdAt: {
      type: GraphQLDate,
      resolve(user) {
        return user.createdAt;
      },
    },
    updatedAt: {
      type: GraphQLDate,
      resolve(user) {
        return user.updatedAt;
      },
    },
    study: {
      type: new GraphQLList(Study),
      resolve(user) {
        return user.getStudies();
      },
    },
  }),
});

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
    session: {
      type: new GraphQLList(Session),
      resolve(root, args) {
        return db.sequelize.models.session.findAll({ where: args });
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
});

module.exports = Schema;
