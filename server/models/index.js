'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Board = require('./Board')(sequelize, Sequelize);
db.Dog = require('./Dog')(sequelize, Sequelize);
db.Product = require('./Product')(sequelize, Sequelize);
db.Shopping_cart = require('./Shopping_cart')(sequelize, Sequelize);
db.User = require('./User')(sequelize, Sequelize);

db.User.hasMany(db.Dog, {
  foreignKey: 'pet_owner',
  sourceKey: 'id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

db.Dog.belongsTo(db.User, {
  foreignKey: 'pet_owner',
  targetKey: 'id',
});

db.User.hasMany(db.Board, {
  foreignKey: 'user_id',
  sourceKey: 'id',
  onUpdate: 'set NULL',
  onDelete: 'cascade',
});

db.Board.belongsTo(db.User, {
  foreignKey: 'user_id',
  targetKey: 'id',
});

db.User.hasMany(db.Shopping_cart, {
  foreignKey: 'user_id',
  sourceKey: 'id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

db.Shopping_cart.belongsTo(db.User, {
  foreignKey: 'user_id',
  targetKey: 'id',
});

db.Product.hasMany(db.Shopping_cart, {
  foreignKey: 'product_id',
  sourceKey: 'id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

db.Shopping_cart.belongsTo(db.Product, {
  foreignKey: 'user_id',
  targetKey: 'id',
});

module.exports = db;
