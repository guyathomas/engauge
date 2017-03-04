

const db = require('../db/models');
const app = require('./app');
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

const io = require('socket.io')(server);
io.on('connection', (socket) => {
// Find the shortID for the site being visited
  const sourceURL = socket.handshake.headers.referer;
  const lastSlashIndex = sourceURL.lastIndexOf('/') + 1;
  const shortURL = sourceURL.substr(lastSlashIndex);

  const socketID = socket.id;
  const recording = {};
  console.log('The server has ackowledged the connection');
  console.log('The id is', socketID, 'for the short URL', shortURL);
	// TODO: Create a database connection for this ID

  socket.on('data', (data) => {
    console.log(data);
    recording[data.time] = { x: data.x, y: data.y };
  });
  socket.on('disconnect', (data) => {
  	const recordKeys = Object.keys(recording);
  	const duration = recordKeys[recordKeys.length - 1];

    db.casestudy.findAll({
      where: { shortURL },
    }).then((response) => {
    	const data = response[0];
    	const isNewRecord = response[1];
      console.log('response from findAll', data.id);
      return data.id;
    }).then((casestudyId) => {
    	// db.session.findOrCreate({
    	//   where: {casestudyId, socketID, duration, recording},
    	// })
    	console.log('casestudyId, socketID, duration, recording', casestudyId, socketID, duration, recording);
    	db.session.create({ casestudyId, socketID, duration, recording })
    })
    console.log('Source URL has disconnected', shortURL);
  });
});
