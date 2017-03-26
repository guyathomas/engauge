const path = require('path');

console.log(`The environment is ${process.env.NODE_ENV}`);
console.log(`The environment variables are ${JSON.stringify(process.env)}`);
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
      database: process.env.RDS_DB_NAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      options: {
        host: process.env.RDS_HOSTNAME,
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
console.log('The DB settings in the export are2', config[env]);
module.exports = config[env];
