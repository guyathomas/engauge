module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('session', {
    duration: { type: DataTypes.STRING, allowNull: false },
    recording: { type: DataTypes.JSON, allowNull: false },
    screenSize: { type: DataTypes.JSON, allowNull: false},
  }, {
    // schema: 'engauge',
    classMethods: {
      associate: (models) => {
        Session.belongsTo(models.study);
      },
    },
    tableName: 'Sessions',
  });
  return Session;
};

