module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define("Type", {
    type: DataTypes.STRING,
  });

  Type.associate = (models) => {
    
    Type.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };

  return Type;
};
