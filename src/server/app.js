const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
// require('../db/models/index');
const db = require('../db/models');

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

    // User
    //   .findOrCreate({where: {username: 'sdepold'}, defaults: {job: 'Technical Lead JavaScript'}})
    //   .spread(function(user, created) {
    //     console.log(user.get({
    //       plain: true
    //     }))
    //     console.log(created)
    //       {
    //         username: 'sdepold',
    //         job: 'Technical Lead JavaScript',
    //         id: 1,
    //         createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
    //         updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
    //       }
    //       created: true

    //   })

app.post('/api/link', (req, res) => {
  console.log('The post req was recieved - req.data', req.body);
  console.log('The models are', Object.keys(db));
  db.casestudy.findOrCreate({ where: { url: req.body.url } }).then((first, second) => {
    console.log(first, second);
  });
  res.status(200).send('Hoory, post recieved');
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

module.exports = app;
