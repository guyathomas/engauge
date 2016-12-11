module.exports = (sequelize, DataTypes) => {
  const Observation = sequelize.define('observation', {
    url: DataTypes.STRING,
    shortURL: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Observation.belongsTo(models.user);
        Observation.hasMany(models.session);
      },
    },
    tableName: 'Observations',
  });

  return Observation;
};
