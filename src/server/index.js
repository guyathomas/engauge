'use strict';

const app = require('./app');

process.env.HOST = process.env.HOST || '0.0.0.0';
process.env.PORT = process.env.PORT || 3000;

const server = app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
  console.log(`The full server details ${JSON.stringify(server.address())}`);
  console.log(`Launched at: ${new Date()}!`);
});

const socketHandler = require('./socketHandler');
const io = require('socket.io')(server);

io.on('connection', socketHandler);
