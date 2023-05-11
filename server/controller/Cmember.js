const model = require("../models");
const { Op } = require("sequelize");

exports.checkLogin = async (req, res) => {
  try {
    if (Object.keys(req.session).includes("loginData")) {
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
      res.send({ loginId: null, isLogin: false });
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
    if (Object.keys(req).includes("file")) {
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
    let update_data = {
      password: req.body.password,
      nickname: req.body.nickname,
    };

    if (Object.keys(req).includes("file")) {
      update_data.profile_img = req.file.filename;
    }
    let result = {};
    result.user = model.User.update(update_data, {
      where: { id: req.body.id },
    });
    keys = Object.keys(req.body);
    dog_inf = {};

    for (let i of keys) {
      console.log(i);
      let last = i.slice(-1);
      console.log(last);
      if (!isNaN(last)) {
        if (!(last in dog_inf)) dog_inf[last] = [i];
        else dog_inf[last].push(i);
      }
    }
    console.log(dog_inf);
    for (let i of Object.keys(dog_inf)) {
      let update_dog = {};
      let name_dog;
      for (let j of dog_inf[i]) {
        let attr = j.slice(0, -1);
        if (attr == "name") name_dog = j;
        else update_dog[j.slice(0, -1)] = req.body[j];
      }
      result[i] = await model.Dog.update(update_dog, {
        where: { pet_owner: req.body.id, name: req.body[name_dog] },
      });
    }
    res.send({ isOk: true });
  } catch (err) {
    res.send(err);
  }
};
exports.showProfile = async (req, res) => {
  try {
    user_data = await model.User.findOne({ where: { id: req.body.id } });
    dog_data = await model.Dog.findAll({ where: { pet_owner: req.body.id } });
    user_data = user_data.dataValues;
    dog_data = dog_data.map((dog) => {
      return dog.dataValues;
    });
    res.send({ user_data: user_data, dog_data: dog_data });
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
exports.gradeUp = async (req, res) => {
  try {
    const result = await model.User.update(
      {
        grade: req.body.toGrade,
      },
      {
        where: {
          nickname: { [Op.eq]: req.body.nickname },
          grade: { [Op.eq]: req.body.nowGrade },
        },
      }
    );
    if (result[0] === 0) {
      if (req.body.nickname === undefined) {
        res.send("not login");
      } else {
        res.send("aleady solved");
      }
    } else {
      res.send("grade up");
    }
  } catch (err) {
    res.send(err);
  }
};
