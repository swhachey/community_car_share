module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("Vehicle", {
    Make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    Model: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    Year: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    Color: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    Condition: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  //post belongs to an author
  Vehicle.associate = (models) => {
    // We're saying that a Post should belong to an Author

    //this code createsthe Authorsid column in the posts table
    Vehicle.belongsTo(models.Author, {
      // A Post can't be created without an Author due to the foreign key constraint
      foreignKey: {
        //when you create a post it has to have a corresponding author
        allowNull: false,
      },
    });
  };

  return Vehicle;
};
