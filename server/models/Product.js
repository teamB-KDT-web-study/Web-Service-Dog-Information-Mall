const Product = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    'product',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      choice: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: 'default이미지id',
      },
      price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      tableName: 'product',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = Product;
