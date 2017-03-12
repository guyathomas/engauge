const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
const env = process.env.NODE_ENV || 'development';
const config = {
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
};

module.exports = config[env];
