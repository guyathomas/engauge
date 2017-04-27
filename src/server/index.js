'use strict';

const app = require('./app');

process.env.WEBHOST = process.env.WEBHOST || '0.0.0.0';
process.env.PORT = process.env.PORT || 3000;

const server = app.listen(process.env.PORT, process.env.WEBHOST, () => {
  console.log(`Launched at: ${new Date()}!`);
  console.log(`App listening on port ${process.env.PORT}!`);
  console.log(`The full server details ${JSON.stringify(server.address())}`);
});

const socketHandler = require('./socketHandler');
const io = require('socket.io')(server);

io.on('connection', socketHandler);
