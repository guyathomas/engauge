module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('session', {
    duration: DataTypes.STRING,
    recording: DataTypes.JSON,
    socketId: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Session.belongsTo(models.study);
      },
    },
    tableName: 'Sessions',
  });
  return Session;
};
