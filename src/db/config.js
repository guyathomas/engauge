const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'engauge',
    },
    port: 3000,
    db: {
      database: 'engauge',
      // user: 'guy',
      // password: 'tangl3w00d',
      options: {
        host: 'postgres',
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
