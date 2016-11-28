module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    token: DataTypes.STRING,
    isSignedUp: DataTypes.BOOLEAN,
    organisation: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        User.hasMany(models.observation, { as: 'owner' });
      },
    },
    tableName: 'Users',
  });

  return User;
};
