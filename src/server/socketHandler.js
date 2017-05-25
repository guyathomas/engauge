const db = require('../db/models');

function socketHandler(socket) {

  //Find the current case Study ID
  const sourceURL = socket.handshake.headers.referer;
  const lastSlashIndex = sourceURL.lastIndexOf('/') + 1;
  const shortCode = sourceURL.substr(lastSlashIndex);

  const socketId = socket.id;
  const recording = [];

  socket.on('data', (data) => {
    recording.push({ x: data.x, y: data.y, time: data.time });
  });

  socket.on('disconnect', () => {
    if (recording.length === 0) { return; }
    const endTime = recording[recording.length - 1].time;
    const startTime = recording[0].time;
    const duration = endTime - startTime;

    db.study.findAll({ where: { shortCode } })
    .then(response => (response[0].id))
    .then(studyId => (
      db.session.create({ studyId, socketId, duration, recording })
    ));
  });
}

module.exports = socketHandler;
