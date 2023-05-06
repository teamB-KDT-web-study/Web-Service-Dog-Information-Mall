const model = require('../models'); /// 수정해야함!!!!
const { Op } = require('sequelize');

exports.checkLogin = async (req, res) => {
  try {
    console.log(req.sessionID);
    if (Object.keys(req.session).includes('loginData')) {
      const userInfo = await model.User.findOne({
        where: {
          id: { [Op.eq]: req.session.loginData },
        },
      });

      res.send({
        isLogin: true,
        nickname: userInfo.nickname,
        profile_img: userInfo.profile_img,
        grade: userInfo.grade,
      });
    } else {
      res.send({ isLogin: false });
    }
  } catch (err) {
    res.send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const userInfo = await model.User.findOne({
      where: {
        id: { [Op.eq]: req.body.id },
        password: { [Op.eq]: req.body.pw },
      },
    });

    if (!userInfo) {
      res.status(400).send({ loginId: null, isLogin: false });
    } else {
      req.session.loginData = userInfo.id;

      res.send({
        success: true,
        loginId: req.session.loginData,
        profile_img: userInfo.profile_img,
        grade: userInfo.grade,
      });
    }
  } catch (err) {
    res.send(err);
  }
};

// exports.check = async (req, res) => {
//   console.log(req.sessionID);
//   res.send(req.sessionID);
// };

exports.logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }
      console.log(req.sessionID);
      res.send({ success: true });
    });
  } catch (err) {
    res.send(err);
  }
};

exports.signup = async (req, res) => {
  try {
  } catch (err) {
    res.send(err);
  }
};

exports.editProfile = async (req, res) => {
  try {
  } catch (err) {
    res.send(err);
  }
};

exports.signout = async (req, res) => {
  try {
  } catch (err) {
    res.send(err);
  }
};
