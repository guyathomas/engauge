const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
// require('../db/models/index');
const db = require('../db/models');
const utils = require('./utils.js');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'client')));

db.sequelize.sync()
    .catch((e) => {
      throw new Error(e);
    });

app.post('/api/url', (req, res) => {
  console.log('The post req was recieved - req.data', req.body);
  const url = req.body.url;
  const email = req.body.email;
  const shortURL = utils.createSha(url);

  db.user.findOrCreate({
    where: {
      email,
    },
  }).then((result) => {
    const record = result[0];
    const doesExist = result[1]; // boolean stating if it was created or not
    console.log('UniquerecordID found was', record.id);
    if (doesExist) {
      console.log('User already exists');
    } else {
      console.log('New user created');
    }
    return record.id;
  }).then((userId) => {
    db.casestudy.findOrCreate({
      where: {
        userId,
        url,
        shortURL,
      },
    }).then((result) => {
      const record = result[0];
      const doesExist = result[1]; // boolean stating if it was created or not
      if (doesExist) {
        console.log('casestudy already exists for this user');
      } else {
        console.log('A new case study was created');
      }
    });
  });

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

module.exports = app;
