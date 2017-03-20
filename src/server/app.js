'use strict'
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
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

// TODO: Move the handlers into their own files
app.post('/api/caseStudies', (req, res) => {
  const url = req.body.url;
  const email = req.body.email;
  const shortCode = utils.createSha(url + email);

  db.user.findOrCreate({
    where: { email },
  }).then((result) => {
    const record = result[0];
    const doesExist = result[1];
    if (doesExist) { console.log('User already exists'); }

    return record.id;
  }).then((userId) => {
    // TODO: Find a way of not having nested promises
    db.casestudy.findOrCreate({
      where: { userId, url, shortCode },
    });
  });
  res.status(200).send({ shortCode });
});

app.get('/api/caseStudies', (req, res) => {
  db.casestudy.findAll({})
  .then((result) => {
    const dataValues = [];
    result.forEach((caseStudy) => {
      dataValues.push(caseStudy.dataValues);
    });

    return dataValues;
  }).then((caseStudys) => {
    res.status(200).send(caseStudys);
  });
});

app.get('/api/caseStudies/:shortCode', (req, res) => {
  const shortCode = req.params.shortCode;
  db.casestudy.findOne({ where: { shortCode } })
  .then((caseStudys) => {
    res.status(200).send(caseStudys.dataValues);
  });
});


// app.get('/api/sessions', (req, res) => {
// });

app.get('/api/sessions/:shortCode', (req, res) => {
  const shortCode = req.params.shortCode;
  db.casestudy.findOne({ where: { shortCode } })
  .then((result) => {
    const casestudyId = result.dataValues.id;
    db.session.findAll({
      attributes: ['id', 'duration', 'socketID', 'createdAt', 'recording'],
      where: {
        casestudyId,
      },
    }).then((sessions) => {
      const reducedStats = [];
      sessions.forEach((session) => {
        reducedStats.push(session.dataValues);
      });
      const jsonStats = {data: reducedStats};
      res.status(200).json(jsonStats);
    });
  });
});





// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

module.exports = app;
