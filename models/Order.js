'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'user_id', 
        as: 'user', 
      });
      Order.belongsToMany(models.Product, {
        through: models.OrderProduct,
        foreignKey: 'order_id',
        as: 'products', 
      });
    }
  }
  Order.init({
      totalAmount: DataTypes.FLOAT, 
      status: DataTypes.STRING, 
  }, {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};