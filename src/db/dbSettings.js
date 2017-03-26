const path = require('path');

console.log(`The environment is ${process.env.NODE_ENV}`);
console.log(`The environment variables are ${process.env}`);
console.log('The POSTGRES_PASSWORD is ', POSTGRES_PASSWORD)
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
      database: 'ebdb',
      user: 'guy',
      password: 'password',
      options: {
        host: 'aa1rvrrcabppvg1.c1cvbfuy6thf.us-west-1.rds.amazonaws.com',
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
