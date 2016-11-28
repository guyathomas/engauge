module.exports = (sequelize, DataTypes) => {
  const Observation = sequelize.define('observation', {
    url: DataTypes.STRING,
    shortURL: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        console.log('The models are ', models);
        console.log('Observation', Observation);
        Observation.hasMany(models.sesssion, { as: 'observation' });
        Observation.belongTo(models.user);
      },
    },
    tableName: 'Observations',
  });

  return Observation;
};
