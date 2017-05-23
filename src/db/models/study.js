module.exports = (sequelize, DataTypes) => {
  const Study = sequelize.define('study', {
    url: DataTypes.STRING,
    shortCode: DataTypes.STRING,
  }, {
    // schema: 'engauge',
    classMethods: {
      associate: (models) => {
        Study.belongsTo(models.user);
        Study.hasMany(models.session);
      },
    },
    tableName: 'Studies',
  });
  Study.schema('engauge');
  return Study;
};
