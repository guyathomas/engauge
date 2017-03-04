const db = require('../db/models');

function socketHandler(socket) {
// Find the shortID for the site being visited
  const sourceURL = socket.handshake.headers.referer;
  const lastSlashIndex = sourceURL.lastIndexOf('/') + 1;
  const shortCode = sourceURL.substr(lastSlashIndex);

  const socketID = socket.id;
  const dataPoints = {};
  console.log('The id is', socketID, 'for the short URL', shortCode);

  socket.on('data', (data) => {
    console.log(data);
    dataPoints[data.time] = { x: data.x, y: data.y };
  });

  socket.on('disconnect', () => {
    const recordKeys = Object.keys(dataPoints);
    const endTime = recordKeys[recordKeys.length - 1];
    const startTime = recordKeys[0];
    const duration = endTime - startTime;

    db.casestudy.findAll({
      where: { shortCode },
    }).then((response) => {
      const data = response[0];
      // const isNewRecord = response[1];
      return data.id;
    }).then((casestudyId) => {
      db.session.create({ casestudyId, socketID, duration, dataPoints });
    });
    console.log('Source URL has disconnected', shortCode);
  });
}

module.exports = socketHandler;
