const express = require( 'express' );
const morgan = require( 'morgan' );
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const db = require( '../db/models' );
const GraphHTTP = require( 'express-graphql' );
const Schema = require( './schema.js' );
const cors = require( 'cors' );

const app = express();

// Setup logger
app.use( morgan( ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

// Serve static assets
app.use( express.static( path.resolve( __dirname, '..', 'client' ) ) );
db.sequelize.sync( /* { force: true } */ )
  .catch( ( err ) => {
    console.log( 'Error in syncing', err );
  });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
||||||| parent of 75cc5d1... Change shortURL references to shortCode
=======
//TODO: Move the handlers into their own files
<<<<<<< HEAD
>>>>>>> 75cc5d1... Change shortURL references to shortCode
app.post('/api/url', (req, res) => {
||||||| parent of 77805bf... Socket IDs now appear on review list
app.post('/api/url', (req, res) => {
=======
app.post('/api/addUrl', (req, res) => {
>>>>>>> 77805bf... Socket IDs now appear on review list
  console.log('The post req was recieved - req.data', req.body);
||||||| parent of c6a70e7... Cleaned up unessary code
//TODO: Move the handlers into their own files
app.post('/api/addUrl', (req, res) => {
  console.log('The post req was recieved - req.data', req.body);
=======
// TODO: Move the handlers into their own files
<<<<<<< HEAD
//
app.post('/api/caseStudy', (req, res) => {
>>>>>>> c6a70e7... Cleaned up unessary code
||||||| parent of 02810af... change /api/caseStudy to /api/caseStudies
//
app.post('/api/caseStudy', (req, res) => {
=======
app.post('/api/caseStudies', (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 02810af... change /api/caseStudy to /api/caseStudies
  const url = req.body.url;
  const email = req.body.email;
||||||| parent of fb5f54a... Cleaned up the hero page
  const url = req.body.url;
  const email = req.body.email;
=======
||||||| parent of 9641277... Passing three tests
=======
  console.log('req.body', req.body);
>>>>>>> 9641277... Passing three tests
  const url = req.body.formUrl;
  const email = req.body.formEmail;
>>>>>>> fb5f54a... Cleaned up the hero page
||||||| parent of dd4f928... Simply testing, simplify variable names on the server and fix insecure request for sockets.
  console.log('req.body', req.body);
  const url = req.body.formUrl;
  const email = req.body.formEmail;
=======
  const { url, email } = req.body;
>>>>>>> dd4f928... Simply testing, simplify variable names on the server and fix insecure request for sockets.
  const shortCode = utils.createSha(url + email);
  let isNewEmail;

  db.user.findOrCreate({
    where: { email },
  })
  .then((result) => {
    const record = result[0];
    isNewEmail = result[1];
    if (isNewEmail) { console.log('User already exists'); }

    return record.id;
<<<<<<< HEAD
  }).then(userId =>
    // TODO: Find a way of not having nested promises
<<<<<<< HEAD
    return db.casestudy.findOrCreate({
      where: { userId, url, shortCode },
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  });
||||||| parent of 695b1b9... Started with trying to find URL and taking action if not found
app.post('/api/link', (req, res) => {
  console.log('The post req was recieved - req.data', req);
  db.casestudy.find().then(results => console.log(results));
=======
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
>>>>>>> 695b1b9... Started with trying to find URL and taking action if not found
  res.status(200).send('Hoory, post recieved');
});
||||||| parent of 7c63446... Fix issues that merge conflicts caused
  });
=======
||||||| parent of e23016d... Add get longURL route
=======
||||||| parent of b0c475b... Add basic testing and refactored DB connection to get all details from .env file
=======
  })
||||||| parent of 9641277... Passing three tests
    return db.casestudy.findOrCreate({
      where: { userId, url, shortCode },
    });
  })
=======
     db.casestudy.findOrCreate({
       where: { userId, url, shortCode },
     }))
>>>>>>> 9641277... Passing three tests
||||||| parent of 963a5bf... Implement working app with 2 tests
  }).then(userId =>
    // TODO: Find a way of not having nested promises
     db.casestudy.findOrCreate({
       where: { userId, url, shortCode },
     }))
=======
  })
>>>>>>> 963a5bf... Implement working app with 2 tests
  .then((record) => {
    console.log('The record',  record);
    res.status(200).send({
      updated: { shortCode, url, email },
      isNewEmail,
    });
  })
  .catch((err) => {
    console.log('Error posting to DB', err);
    res.status(400).send('Error posting to DB');
>>>>>>> b0c475b... Add basic testing and refactored DB connection to get all details from .env file
  });
});

app.get('/api/caseStudies', (req, res) => {
  db.casestudy.findAll({})
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

app.get('/api/caseStudies/:shortCode', (req, res) => {
  console.log('TEST1:req', req.params);
  const shortCode = req.params.shortCode;
  db.casestudy.findOne({ where: { shortCode } })
  .then((caseStudys) => {
    console.log('TEST1:', caseStudys.dataValues);
    res.status(200).send(caseStudys.dataValues);
  });
});


app.get('/api/sessions/:shortCode', (req, res) => {
  console.log('TEST2:req', req.params);
  const shortCode = req.params.shortCode;
<<<<<<< HEAD
  console.log('shortCode', shortCode);
  db.casestudy.findOne({
    where: {
      shortCode,
    },
<<<<<<< HEAD
>>>>>>> e23016d... Add get longURL route
  })
  .then((result) => {
    const record = result[0];
    const doesExist = result[1]; // boolean stating if it was created or not
    if (doesExist) {
      console.log('User already exists');
    } else {
      console.log('New user created');
    }
    res.status(200).send(record.longURL);
||||||| parent of 77805bf... Socket IDs now appear on review list
  })
  .then((result) => {
    const record = result[0];
    const doesExist = result[1]; // boolean stating if it was created or not
    if (doesExist) {
      console.log('User already exists');
    } else {
      console.log('New user created');
    }
    res.status(200).send(record.longURL);
=======
  }).then((result) => {
||||||| parent of a8c407e... Fix error with casestudies route
  console.log('shortCode', shortCode);
  db.casestudy.findOne({
    where: {
      shortCode,
    },
  }).then((result) => {
=======
  db.casestudy.findOne({ where: { shortCode } })
  .then((result) => {
>>>>>>> a8c407e... Fix error with casestudies route
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
>>>>>>> 77805bf... Socket IDs now appear on review list
  });
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7c63446... Fix issues that merge conflicts caused

||||||| parent of 77805bf... Socket IDs now appear on review list

=======
>>>>>>> 77805bf... Socket IDs now appear on review list
||||||| parent of 30eeba3... Watch list now shows basic data to be on the cards
=======
app.get('/api/caseStudys', (req, res) => {
  db.casestudy.findAll()
||||||| parent of e94a09a... Bring images through onto review page
app.get('/api/caseStudys', (req, res) => {
  db.casestudy.findAll()
=======
app.get('/api/casestudys', (req, res) => {
||||||| parent of 02810af... change /api/caseStudy to /api/caseStudies
app.get('/api/casestudys', (req, res) => {
=======
app.get('/api/caseStudies', (req, res) => {
>>>>>>> 02810af... change /api/caseStudy to /api/caseStudies
  db.casestudy.findAll({})
>>>>>>> e94a09a... Bring images through onto review page
  .then((result) => {
    console.log('Result of casestudies query is', result);
    const dataValues = [];
    result.forEach((caseStudy) => {
      dataValues.push(caseStudy.dataValues);
    });
||||||| parent of a8c407e... Fix error with casestudies route
app.get('/api/caseStudies', (req, res) => {
  db.casestudy.findAll({})
  .then((result) => {
    console.log('Result of casestudies query is', result);
    const dataValues = [];
    result.forEach((caseStudy) => {
      dataValues.push(caseStudy.dataValues);
    });
=======
>>>>>>> a8c407e... Fix error with casestudies route


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 30eeba3... Watch list now shows basic data to be on the cards
||||||| parent of df9dfbf... Image now dynamically comes through on watch page
=======
app.get('/api/caseStudys/:shortCode', (req, res) => {
||||||| parent of 02810af... change /api/caseStudy to /api/caseStudies
app.get('/api/caseStudys/:shortCode', (req, res) => {
=======
app.get('/api/caseStudies/:shortCode', (req, res) => {
>>>>>>> 02810af... change /api/caseStudy to /api/caseStudies
  const shortCode = req.params.shortCode;
  db.casestudy.findOne({
    where: {
      shortCode,
    },
  }).then((caseStudys) => {
    console.log('caseStudys just before sending2222', caseStudys.dataValues);
    res.status(200).send(caseStudys.dataValues);
  });
});
||||||| parent of ee70724... Fix /api/caseStudies, /api/caseStudies, /api/caseStudies/:shortCode, /api/sessions/:shortCode
app.get('/api/caseStudies/:shortCode', (req, res) => {
  const shortCode = req.params.shortCode;
  db.casestudy.findOne({
    where: {
      shortCode,
    },
  }).then((caseStudys) => {
    console.log('caseStudys just before sending2222', caseStudys.dataValues);
    res.status(200).send(caseStudys.dataValues);
  });
});
=======

>>>>>>> ee70724... Fix /api/caseStudies, /api/caseStudies, /api/caseStudies/:shortCode, /api/sessions/:shortCode
||||||| parent of 31027f0... Add generic sessions route



=======
app.get('/api/sessions', (req, res) => {
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
>>>>>>> 31027f0... Add generic sessions route
||||||| parent of 8183ed9... Refactor routes into seperate module
// TODO: Move the handlers into their own files
app.post('/api/caseStudies', (req, res) => {
  const { url, email } = req.body;
  const shortCode = utils.createSha(url + email);
  let isNewEmail;

  db.user.findOrCreate({
    where: { email },
  })
  .then((result) => {
    const record = result[0];
    isNewEmail = result[1];
    if (isNewEmail) { console.log('User already exists'); }

    return record.id;
  })
  .then((record) => {
    console.log('The record',  record);
    res.status(200).send({
      updated: { shortCode, url, email },
      isNewEmail,
    });
  })
  .catch((err) => {
    console.log('Error posting to DB', err);
    res.status(400).send('Error posting to DB');
  });
});

app.get('/api/caseStudies', (req, res) => {
  db.casestudy.findAll({})
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

app.get('/api/caseStudies/:shortCode', (req, res) => {
  console.log('TEST1:req', req.params);
  const shortCode = req.params.shortCode;
  db.casestudy.findOne({ where: { shortCode } })
  .then((caseStudys) => {
    console.log('TEST1:', caseStudys.dataValues);
    res.status(200).send(caseStudys.dataValues);
  });
});


app.get('/api/sessions/:shortCode', (req, res) => {
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

app.get('/api/sessions', (req, res) => {
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
=======
app.use('/api', router);
<<<<<<< HEAD
>>>>>>> 8183ed9... Refactor routes into seperate module
||||||| parent of 3fd819c... Implement GraphQL server and change casestudy references to studies
=======
||||||| parent of 0287c77... Complete refactor to graphql on client side
app.use('/api', router);
=======
>>>>>>> 0287c77... Complete refactor to graphql on client side
app.use('/graphql', GraphHTTP({
||||||| parent of d4fcfdf... Basic functionality is working
app.use('/graphql', GraphHTTP({
=======
app.use('/graphql', cors(), GraphHTTP({
>>>>>>> d4fcfdf... Basic functionality is working
||||||| parent of 481852f... Cleanup props
app.use('/graphql', cors(), GraphHTTP({
=======
app.use( '/graphql', cors(), GraphHTTP({
>>>>>>> 481852f... Cleanup props
  schema: Schema,
  pretty: true,
  graphiql: true,
<<<<<<< HEAD
}));
>>>>>>> 3fd819c... Implement GraphQL server and change casestudy references to studies
||||||| parent of 481852f... Cleanup props
}));
=======
}) );
>>>>>>> 481852f... Cleanup props

>>>>>>> df9dfbf... Image now dynamically comes through on watch page
// Always return the main index.html, so react-router render the route in the client
app.get( '*', ( req, res ) => {
  res.sendFile( path.resolve( __dirname, '..', 'client', 'index.html' ) );
});

module.exports = app;
