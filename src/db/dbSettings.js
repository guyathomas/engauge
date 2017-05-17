const path = require('path');
const rootPath = path.normalize(`${__dirname}/..`);
const config = {
  root: rootPath,
  app: {
    name: 'engauge',
  },
  port: 5432,
  db: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    options: {
      host: process.env.POSTGRES_HOST,
      dialect: 'postgres',
      pool: {
        max: 100,
        min: 1,
        idle: 120000,
      },
    },
  },
};
console.log('Connection settings',  config);
module.exports = config;
