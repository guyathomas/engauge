const path = require('path');

console.log(`The environment is ${process.env.NODE_ENV}`);
const env = process.env.NODE_ENV || 'development';
const rootPath = path.normalize(`${__dirname}/..`);

const config = {
  //Disabled for testing
  // development: {
  //   root: rootPath,
  //   app: {
  //     name: 'engauge',
  //   },
  //   port: 5432,
  //   db: {
  //     database: 'engauge',
  //     user: 'guy',
  //     password: 'tangl3w00d',
  //     options: {
  //       host: 'database',
  //       dialect: 'postgres',
  //       pool: {
  //         max: 100,
  //         min: 0,
  //         idle: 10000,
  //       },
  //     },
  //   },
  // },
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
  development: {
    root: rootPath,
    app: {
      name: 'engauge',
    },
    port: 5432,
    db: {
      database: 'engauge',
      user: 'guy',
      password: 'password',
      options: {
        host: 'postgres-db.engaugeapp.us-west-2.elasticbeanstalk.com',
        dialect: 'postgres',
        pool: {
          max: 100,
          min: 0,
          idle: 10000,
        },
      },
    },
  },
};
console.log('The DB settings in the export are', config[env]);
module.exports = config[env];
