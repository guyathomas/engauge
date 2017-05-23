module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('session', {
    duration: DataTypes.STRING,
    recording: DataTypes.JSON,
    socketId: DataTypes.STRING,
  }, {
    // schema: 'engauge',
    classMethods: {
      associate: (models) => {
        Session.belongsTo(models.study);
      },
    },
    tableName: 'Sessions',
  });
  Session.schema('engauge');
  return Session;
};

