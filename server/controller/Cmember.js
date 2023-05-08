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

exports.isExist = async (req, res) => {
  try {
    const searchAttribute = req.body.type;
    const isExist = await model.User.findOne({
      where: {
        [searchAttribute]: { [Op.eq]: req.body.inputData },
      },
    });

    if (!isExist) {
      res.send({ isOk: true });
    } else {
      res.send({ isOk: false });
    }
  } catch (err) {
    res.send(err);
  }
};

exports.signup = async (req, res) => {
  try {
    input_data = {
      id: req.body.id,
      password: req.body.password,
      nickname: req.body.nickname,
    };
    if (Object.keys(req).includes('file')) {
      input_data.profile_img = req.file.filename;
    }

    let result = {};
    result.user = await model.User.create(input_data);

    count = 1;

    while (true) {
      if (!Object.keys(req.body).includes(`name${count}`)) break;
      let dog_data = {
        name: req.body[`name${count}`],
        breed: req.body[`breed${count}`],
        pet_owner: req.body.id,
      };
      console.log(dog_data);
      if (Object.keys(req.body).includes(`gender${count}`)) {
        dog_data.gender = req.body[`gender${count}`];
      }
      console.log(dog_data);

      if (Object.keys(req.body).includes(`age${count}`)) {
        dog_data.age = req.body[`age${count}`];
      }
      console.log(dog_data);

      if (Object.keys(req.body).includes(`weight${count}`)) {
        dog_data.weight = req.body[`weight${count}`];
      }
      console.log(dog_data);

      result[`dog${count}`] = await model.Dog.create(dog_data);
      console.log(dog_data);

      count += 1;
    }
    res.send({ isOk: true });
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
    const result = await model.User.destroy({ where: { id: req.body.id } });
    res.send({ isOk: result });
  } catch (err) {
    res.send(err);
  }
};
