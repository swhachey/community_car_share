module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define("Type", {
    type: DataTypes.STRING,
  });

  Type.associate = (models) => {
    
    Type.hasMany(models.Vehicle, {
      onDelete: "cascade",
    });
  };

  return Type;
};
