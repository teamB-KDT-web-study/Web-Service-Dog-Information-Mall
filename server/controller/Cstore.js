const model = require('../models');
const { Op } = require('sequelize');

exports.addCart = async (req, res) => {
  try {
    const result = await model.Shopping_cart.create({
      user_id: req.body.user_id,
      product_id: req.body.product_id,
      choice: req.body.choice,
      amount: req.body.amount,
    });
    res.send({ isOk: true });
  } catch (err) {
    res.send(err);
  }
};

exports.showCart = async (req, res) => {
  try {
    let result = await model.Shopping_cart.findAll({
      attributes: ['product_id', 'choice', 'amount'],
      where: {
        user_id: req.body.user_id,
      },

      include: [
        {
          model: model.Product,
          required: false,
          attributes: ['title', 'image', 'price'],
        },
      ],
    });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const result = await model.Shopping_cart.destroy({
      where: {
        user_id: req.body.user_id,
        product_id: req.body.product_id,
        choice: req.body.choice,
      },
    });
    res.send({ isOk: result });
  } catch (err) {
    res.send(err);
  }
};

exports.showProduct = async (req, res) => {
  try {
    const result = await model.Product.findAll({
      attributes: ['id', 'title', 'category', 'choice', 'image', 'price'],
      order: [['id', 'desc']],
      limit: 16,
    });
    console.log('컨트롤러 실행');
    const lastId = await model.Product.findOne({
      attributes: ['id'],
    });

    // console.log('result >>> ', result);
    // console.log('lastId >>> ', lastId);
    res.send({ data: result, lastId: lastId.dataValues.id });
  } catch (err) {
    res.send(err);
  }
};

exports.showCategory = async (req, res) => {
  try {
    console.log('req.params >>> ', req.params);
    const result = await model.Product.findAll({
      attributes: ['id', 'title', 'category', 'choice', 'image', 'price'],
      order: [['id', 'desc']],
      where: { category: `강아지 ${req.params.category}` },
      limit: 16,
    });
    const lastId = await model.Product.findOne({
      attributes: ['id'],
      where: { category: `강아지 ${req.params.category}` },
    });

    console.log('lastId >>> ', lastId);
    res.send({ data: result, lastId: lastId.dataValues.id });
  } catch (err) {
    res.send(err);
  }
};
exports.getItem = async (req, res) => {
  try {
    console.log('getItem');
    const result = await model.Product.findOne({
      where: { id: req.query.product_id },
      attributes: ['id', 'title', 'category', 'choice', 'image', 'price'],
    });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
exports.moreItems = async (req, res) => {
  try {
    console.log(req.query);
    let query = {
      where: {
        id: { [Op.lt]: req.query.startNum },
      },
      order: [['id', 'desc']],
      attributes: ['id', 'title', 'category', 'choice', 'image', 'price'],
      limit: 16,
    };
    if (req.query.category != 'undefined') {
      query.where.category = `강아지 ${req.query.category}`;
    }
    const result = await model.Product.findAll(query);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.searchProduct = async (req, res) => {
  try {
    const keyword = req.query.keyword.replaceAll("'", '').replaceAll('"', '');
    console.log(keyword);
    const result = await model.Product.findAll({
      where: {
        title: { [Op.like]: `%${keyword}%` },
      },
      attributes: ['id', 'title', 'category', 'choice', 'image', 'price'],
      order: [['id', 'desc']],
      limit: 16,
    });

    res.send({ data: result });
  } catch (err) {
    res.send(err);
  }
};
