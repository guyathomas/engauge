const db = require('../db/models');

function socketHandler(socket) {
// Find the shortID for the site being visited
  const sourceURL = socket.handshake.headers.referer;
  const lastSlashIndex = sourceURL.lastIndexOf('/') + 1;
  const shortCode = sourceURL.substr(lastSlashIndex);

  const socketID = socket.id;
  const recording = [];
  console.log('The id is', socketID, 'for the short URL', shortCode);

  socket.on('data', (data) => {
    console.log(data);
    recording.push({ x: data.x, y: data.y, time: data.time });
  });

  socket.on('disconnect', () => {
    if (recording.length === 0) { return; }
    // const recordKeys = Object.keys(recording);
    const endTime = recording[recording.length - 1].time;
    const startTime = recording[0].time;
    const duration = endTime - startTime;
    //TODO: Only save entry if there are records
    db.casestudy.findAll({
      where: { shortCode },
    }).then((response) => {
      const data = response[0];
      // const isNewRecord = response[1];
      return data.id;
    }).then((casestudyId) => {
      db.session.create({ casestudyId, socketID, duration, recording });
    });
    console.log('Source URL has disconnected', shortCode);
  });
}

module.exports = socketHandler;
