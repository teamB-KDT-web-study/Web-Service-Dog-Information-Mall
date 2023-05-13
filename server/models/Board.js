const Board = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "board",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nickname: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      view_count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0,
      },
      like_count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now(),
      },
    },
    {
      tableName: "board",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = Board;
