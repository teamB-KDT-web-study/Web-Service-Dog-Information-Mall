const Board_like = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    'board_like',
    {
      board_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      nickname: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      tableName: 'board_like',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = Board_like;
