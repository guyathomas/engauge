const router = require('express').Router();
const utils = require('./utils');
const db = require('../db/models');


router.post('/caseStudies', (req, res) => {
  console.log('req.body', req.body)
  const { url, email } = req.body;
  const shortCode = utils.createSha(url + email);
  let isNewEmail;
  db.user.findOrCreate({
    where: { email },
  })
  .catch(() => {console.log('Error user caseStudy')})
  .then((result) => {
    const userId = result[0].id;
    isNewEmail = result[1];
    if (!isNewEmail) { console.log('User already exists'); }
    return userId;
  })
  .then((userId) => {
    db.study.findOrCreate({
      where: { userId, url, shortCode },
    })
    .catch(() => {console.log('Error creating caseStudy')})
    .then(() => res.status(200).json({ shortCode, isNewEmail })
    );
  })
  .catch((err) => {
    console.log('Error posting to DB', err);
    res.status(400).send('Error posting to DB');
  });
});

router.get('/caseStudies', (req, res) => {
  db.study.findAll({})
  .then((results) => {
    const dataValues = [];
    results.forEach((result) => {
      dataValues.push(result.dataValues);
    });
    return dataValues;
  })
  .then((caseStudys) => {
    res.status(200).send(caseStudys);
  })
  .catch(err => console.log('Error getting the case studies', err));
});

router.get('/caseStudies/:shortCode', (req, res) => {
  const shortCode = req.params.shortCode;
  db.study.findOne({ where: { shortCode } })
  .then((caseStudys) => {
    console.log('TEST1:', caseStudys.dataValues);
    res.status(200).send(caseStudys.dataValues);
  });
});


router.get('/sessions/:shortCode', (req, res) => {
  const shortCode = req.params.shortCode;
  db.study.findOne({ where: { shortCode } })
  .then((result) => {
    const studyId = result.dataValues.id;

    db.session.findAll({
      attributes: ['id', 'duration', 'socketId', 'createdAt', 'recording'],
      where: { studyId } })
    .then((sessions) => {
      const reducedStats = [];
      sessions.forEach((session) => {
        reducedStats.push(session.dataValues);
      });
      const jsonStats = { data: reducedStats };
      res.status(200).json(jsonStats);
    });
  });
});

router.get('/sessions', (req, res) => {
  db.session.findAll({})
  .then((results) => {
    const dataValues = [];
    results.forEach((result) => {
      dataValues.push(result.dataValues);
    });
    return dataValues;
  })
  .then((caseStudys) => {
    res.status(200).send(caseStudys);
  });
});
module.exports = router;
