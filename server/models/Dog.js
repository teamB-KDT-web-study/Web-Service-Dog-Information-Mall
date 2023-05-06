const Dog = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "dog",
    {
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      pet_owner: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      gender: {
        type: DataTypes.ENUM('F', 'M'),
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
      breed: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
    },
    {
      tableName: "dog",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = Dog;
