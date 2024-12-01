'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.hasMany(models.Order,{
        foreignKey: 'user_id',
        as: 'orders', 
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    birth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};