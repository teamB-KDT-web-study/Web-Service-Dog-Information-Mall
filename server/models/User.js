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
        unique: true,
      },
      grade: {
        type: DataTypes.ENUM(
          "남남",
          "서먹한 친구",
          "그냥 친구",
          "친한 친구",
          "베스트 프렌드"
        ),
        allowNull: true,
        defaultValue: "남남",
      },
      profile_img: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "default.jpg",
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
