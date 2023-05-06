const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      grade: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: '초심자',
      },
      profile_photo: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: 'default사진아이디',
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = User;
