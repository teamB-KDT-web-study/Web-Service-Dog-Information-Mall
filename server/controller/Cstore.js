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
    console.log('result >>> ', result);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.showCategory = async (req, res) => {
  console.log('req.params >>> ', req.params);
  const result = await model.Product.findAll({
    attributes: ['id', 'title', 'category', 'choice', 'image', 'price'],
    order: [['id', 'desc']],
    where: { category: `강아지 ${req.params.category}` },
    limit: 16,
  });
  console.log('result >>> ', result);
  res.send(result);
};

exports.moreItems = async (req, res) => {
  req.body.startNum;
  req.body.category;
  const result = await model.Product.findAll({
    where: { category: req.body.category, id: { [Op.lt]: startNum } },
    order: [['product_id', 'desc']],
  });
};

// id: { [Op.eq]: req.session.loginData },
