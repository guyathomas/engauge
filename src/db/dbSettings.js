const path = require('path');
const rootPath = path.normalize(`${__dirname}/..`);

const config = {
  root: rootPath,
  app: {
    name: 'engauge',
  },
  port: 5432,
  db: {
    database: process.env.POSTGRES_DB || 'engauge',
    user: process.env.POSTGRES_USER || 'guy',
    password: process.env.POSTGRES_PASSWORD || 'password',
    options: {
      host: process.env.POSTGRES_HOST || 'localhost',
      dialect: 'postgres',
      pool: {
        max: 100,
        min: 1,
        idle: 120000,
      },
    },
  },
};
console.log('DB settings', config);
console.log('Nodeenv', process.env.NODE_ENV);
module.exports = config;
