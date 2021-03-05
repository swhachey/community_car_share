module.exports = (sequelize, DataTypes) => {
  var Vehicle = sequelize.define("Vehicle", {
    Type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

//   //post belongs to an author
//   Vehicle.associate = (models) => {
//     // We're saying that a Post should belong to an Author

//     //this code createsthe Authorsid column in the posts table
//     Vehicle.belongsTo(models.Type, {
//       // A Post can't be created without an Author due to the foreign key constraint
//       foreignKey: {
//         //when you create a post it has to have a corresponding author
//         allowNull: false,
//       },
//     });
//   };

  return Vehicle;
};
