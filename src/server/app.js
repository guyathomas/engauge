const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/models');
const utils = require('./utils.js');

const app = express();
console.log('PG_DATABASE', PG_DATABASE)

require('../../config');// Import global environment variables

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
//
app.post('/api/caseStudy', (req, res) => {
  const url = req.body.url;
  const email = req.body.email;
  const shortCode = utils.createSha(url);
  let didExist = false;

  db.user.findOrCreate({
    where: { email },
  }).then((result) => {
    const record = result[0];
    const doesExist = result[1]; // boolean stating if it was created or not

    if (doesExist) {
      console.log('User already exists');
    } else {
      console.log('New user created');
    }
    return record.id;
  })
  .then((userId) => {
    // TODO: Find a way of not having nested promises
    db.casestudy.findOrCreate({
      where: {
        userId,
        url,
        shortCode,
      },
    }).then((result) => {
      const record = result[0];
      console.log('record', record);
      didExist = result[1]; // boolean stating if it was created or not
      if (didExist) {
        console.log('casestudy already exists for this user');
      } else {
        console.log('A new case study was created');
      }
    });
  });
  res.status(200).send({ didExist, shortCode });
});

// app.get('/api/longURL', (req, res) => {
//   console.log('The post req was recieved - req.data', req.body);
//   const shortCode = req.body.shortCode;

//   db.user.findAll({
//     where: {
//       shortCode,
//     },
//   })
//   .then((result) => {
//     const record = result[0];
//     const doesExist = result[1]; // boolean stating if it was created or not
//     if (doesExist) {
//       console.log('User already exists');
//     } else {
//       console.log('New user created');
//     }
//     res.status(200).send(record.longURL);
//   });
// });

app.get('/api/sessions/:shortCode', (req, res) => {
  console.log('The get req was recieved for sessions');
  const shortCode = req.params.shortCode;
  console.log('shortCode', shortCode);
  db.casestudy.findOne({
    where: {
      shortCode,
    },
  }).then((result) => {
    const casestudyId = result.dataValues.id;
    console.log('The case study ID', casestudyId);
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
      console.log('jsonStats', jsonStats)
      res.status(200).json(jsonStats);
    });
  });
});

app.get('/api/caseStudys', (req, res) => {
  db.casestudy.findAll()
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

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

module.exports = app;
