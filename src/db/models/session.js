module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('session', {
    date: DataTypes.STRING,
    duration: DataTypes.STRING,
    recording: DataTypes.JSON,
    IPAddress: DataTypes.STRING,
    location: DataTypes.STRING,
    browser: DataTypes.STRING,
    gavePermission: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    facebookInfo: DataTypes.JSON,
  }, {
    classMethods: {
      associate: (models) => {
        Session.belongsTo(models.casestudy);
      },
    },
    tableName: 'Observations',
  });
  return Session;
};
