module.exports = (sequelize, DataTypes) => {
  const Study = sequelize.define('study', {
    url: DataTypes.STRING,
    shortCode: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Study.belongsTo(models.user);
        Study.hasMany(models.session);
      },
    },
    tableName: 'CaseStudies',
  });

  return Study;
};
