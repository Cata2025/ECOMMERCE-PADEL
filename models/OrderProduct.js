'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    static associate(models) {
      OrderProduct.belongsTo(models.Order, {
        foreignKey: 'order_id',
        as: 'order',
      });

      OrderProduct.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product',
      });
    }
  }

  OrderProduct.init({
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders', 
        key: 'id', 
      },
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products', 
        key: 'id', 
      },
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1, 
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'OrderProduct',
    tableName: 'OrderProducts', 
  });

  return OrderProduct;
};