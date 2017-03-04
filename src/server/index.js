'use strict';

const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

const io = require('socket.io')(server);
io.on('connection', (socket) => {
	var id = socket.id;
	console.log('The id is', id)
	//TODO: Create a database connection for this ID
  	console.log('The server has ackowledged the connection');
  // socket.emit('news', { hello: 'world' });
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});
io.on('data', (data) => {
	console.log(data);
})