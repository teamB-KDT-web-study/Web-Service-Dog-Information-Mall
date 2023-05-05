const Shopping_cart = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "shopping_cart",
    {
      user_id: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      choice: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      tableName: "shopping_cart",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = Shopping_cart;
