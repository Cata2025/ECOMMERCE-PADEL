'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    static associate(models) {
      // define association here
      Categorie.hasMany(models.Product, {
        foreignKey: 'categorie_id', // Clave foránea en la tabla `Product`
        as: 'products', // Alias para acceder a los productos
      });
    }
  }
  Categorie.init({
    name: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'Categorie',
  });

  return Categorie;
};