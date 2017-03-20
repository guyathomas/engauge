module.exports = (sequelize, DataTypes) => {
  const CaseStudy = sequelize.define('casestudy', {
    url: DataTypes.STRING,
    shortCode: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        CaseStudy.belongsTo(models.user);
        CaseStudy.hasMany(models.session);
      },
    },
    tableName: 'CaseStudies',
  });

  return CaseStudy;
};
