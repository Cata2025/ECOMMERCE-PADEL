'use strict';
const {
  Model
} = require('sequelize');
const Categorie = require('./Categorie');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Categorie, {
        foreignKey: 'categorie_id',
        as: 'categorie', 
      });
      Product.belongsToMany(models.Order, {
        through: models.OrderProduct,
        foreignKey: 'product_id',
        as: 'orders', 
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    on_sale: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};