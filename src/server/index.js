'use strict';

const app = require('./app');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

const socketHandler = require('./socketHandler');
const io = require('socket.io')(server);

io.on('connection', socketHandler);
