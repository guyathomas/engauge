#Create a root directory file called .env for docker-compose environment variables
POSTGRES_USER=username
POSTGRES_PASSWORD=password
POSTGRES_DB=database

#Create a root directory file with the following format for db credentials and other credentials
const config = {
  db: {
    user: 'guy',
    database: 'db',
    password: 'pass',
  },
};

module.exports = config;
