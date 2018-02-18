module.exports = ( sequelize, DataTypes ) => {
  const Study = sequelize.define( 'study', {
    url: { type: DataTypes.STRING, allowNull: false },
    shortCode: { type: DataTypes.STRING, allowNull: false },
  }, {
    // schema: 'engauge',
    classMethods: {
      associate: ( models ) => {
        Study.belongsTo( models.user );
        Study.hasMany( models.session );
      },
    },
    tableName: 'Studies',
  });
  return Study;
};
