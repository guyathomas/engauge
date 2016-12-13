module.exports = (sequelize, DataTypes) => {
  const CaseStudy = sequelize.define('casestudy', {
    url: DataTypes.STRING,
    shortURL: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        CaseStudy.belongsTo(models.user);
        CaseStudy.hasMany(models.session);
      },
    },
    tableName: 'CaseStudys',
  });

  return CaseStudy;
};
