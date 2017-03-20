module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('session', {
    duration: DataTypes.STRING,
    recording: DataTypes.JSON,
    socketID: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Session.belongsTo(models.casestudy);
      },
    },
    tableName: 'Sessions',
  });
  return Session;
};
