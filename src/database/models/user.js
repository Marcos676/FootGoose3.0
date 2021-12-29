'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol, {
        as: "rol",
        foreignKey: "rolId"
      }),
      User.hasMany(models.Order, {
        as: "orders",
        foreignKey: "userId",
        onDelete : 'cascade'
      }),
      User.belongsToMany(models.Product, {
        as: "favorites",
        through: "Favorite",
        foreignKey: "userId",
        otherKey: "productId",
        onDelete : 'cascade'
      }),
      User.belongsToMany(models.Product, {
        as: "comments",
        through: "comments",
        foreignKey: "userId",
        otherKey: "productId",
        onDelete : 'cascade'
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    tel: DataTypes.STRING,
    provinces: DataTypes.INTEGER,
    locality: DataTypes.INTEGER,
    address: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};