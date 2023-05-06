const model = require('../models'); /// 수정해야함!!!!
const { Op } = require('sequelize');

exports.login = async (req, res) => {
  try {
    // console.log('실행 됨');
    // console.log(model);
    // console.log(model.User);
    // res.send({ a: 'b' });

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
        loginId: req.session.loginData,
        profile_img: userInfo.profile_img,
        isLogin: true,
      });
    }
  } catch (err) {
    res.send(err);
  }
};

exports.check = async (req, res) => {
  console.log(req.sessionID);
  res.send(req.sessionID);
};

exports.checkLogin = async (req, res) => {
  try {
    if (Object.keys(req.session).includes(longinData)) {
      const userInfo = await model.User.findOne({
        where: {
          id: { [Op.eq]: req.body.id },
          password: { [Op.eq]: req.body.pw },
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
