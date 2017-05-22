const router = require('express').Router();
const utils = require('./utils');
const db = require('../db/models');


router.post('/caseStudies', (req, res) => {
	console.log('post /caseStudies')
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
    db.casestudy.findOrCreate({
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
	console.log('get /caseStudies')
  db.casestudy.findAll({})
  .then((results) => {
    const dataValues = [];
    results.forEach((result) => {
      dataValues.push(result.dataValues);
    });
    return dataValues;
  })
  .then((caseStudys) => {
  	console.log('The case studies after querying the db', caseStudys);
    res.status(200).send(caseStudys);
  })
  .catch(err => console.log('Error getting the case studies', err));
});

router.get('/caseStudies/:shortCode', (req, res) => {
  console.log('/caseStudies/:shortCode', req.params);
  const shortCode = req.params.shortCode;
  db.casestudy.findOne({ where: { shortCode } })
  .then((caseStudys) => {
    console.log('TEST1:', caseStudys.dataValues);
    res.status(200).send(caseStudys.dataValues);
  });
});


router.get('/sessions/:shortCode', (req, res) => {
  console.log('TEST2:req', req.params);
  const shortCode = req.params.shortCode;
  db.casestudy.findOne({ where: { shortCode } })
  .then((result) => {
    const casestudyId = result.dataValues.id;

    db.session.findAll({
      attributes: ['id', 'duration', 'socketID', 'createdAt', 'recording'],
      where: { casestudyId } })
    .then((sessions) => {
      const reducedStats = [];
      sessions.forEach((session) => {
        reducedStats.push(session.dataValues);
      });
      const jsonStats = { data: reducedStats };
      console.log('TEST2:', jsonStats);
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
    console.log('TEST3:', caseStudys);
    res.status(200).send(caseStudys);
  });
});
console.log('The router', router)
module.exports = router;
