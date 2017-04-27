'use strict';
const path = require('path');

console.log(`The environment is ${process.env.NODE_ENV}`);
console.log(`The environment variables are ${JSON.stringify(process.env)}`);
console.log(`DB details at: ${new Date()}!`);

const env = process.env.NODE_ENV || 'development';

const rootPath = path.normalize(`${__dirname}/..`);

const config = {
  //Disabled for testing
  development: {
    root: rootPath,
    app: {
      name: 'engauge',
    },
    port: 5432,
    db: {
      database: 'engauge',
      user: 'user',
      password: 'password',
      options: {
        host: 'database',
        dialect: 'postgres',
        pool: {
          max: 100,
          min: 0,
          idle: 10000,
        },
      },
    },
  },
  test: {
    root: rootPath,
    app: {
      name: 'engauge',
    },
    port: 5432,
    db: {
      database: 'engauge-test',
      user: 'guy',
      password: 'password',
      options: {
        host: 'database',
        dialect: 'postgres',
        pool: {
          max: 100,
          min: 0,
          idle: 10000,
        },
      },
    },
  },
  production: {
    root: rootPath,
    app: {
      name: 'engauge',
    },
    port: 5432,
    db: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      options: {
        host: process.env.PGHOST,
        dialect: 'postgres',
        pool: {
          max: 100,
          min: 1,
          idle: 120000,
        },
      },
    },
  },
};
console.log('The DB settings exported are', config[env]);
module.exports = config[env];
