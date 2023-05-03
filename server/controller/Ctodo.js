const { Todo } = require("../models");
const { Op } = require("sequelize");

exports.readTodos = async (_, res) => {
  try {
    let todos = await Todo.findAll({
      order: [["id", "DESC"]], 
    });

    res.send(todos);
  } catch (err) {
    res.send(err);
  }
};

exports.createTodo = async (req, res) => {
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
      done: false, 
    });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    let [idUpdated] = await Todo.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: {
          id: { [Op.eq]: req.params.todoId },
        },
      }
    );

    if (idUpdated === 0) {
      return res.send(false);
    }
    res.send(true);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    console.log("delete id >>> ", req.params.todoId);
    let isDeleted = await Todo.destroy({
      where: {
        id: { [Op.eq]: req.params.todoId },
      },
      raw: true,
    });
    if (!isDeleted) {
      return res.send(false);
    }
    res.send(true);
  } catch (err) {
    res.send(err);
  }
};
