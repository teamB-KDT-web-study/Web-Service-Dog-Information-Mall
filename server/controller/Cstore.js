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
