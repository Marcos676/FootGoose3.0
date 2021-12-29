'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Label, {
        as: "label",
        foreignKey: "labelId"
      }),
      Product.belongsTo(models.SubCategory, {
        as: "subCategory",
        foreignKey: "subCategoryId"
      }),
      Product.hasMany(models.Image, {
        as: "images",
        foreignKey: "productId",
        onDelete : 'cascade'
      }),
      Product.belongsToMany(models.Feature, {
        as: "features",
        through: "ProductFeature",
        foreignKey: "productId",
        otherKey: "featureId",
        onDelete : 'cascade'
      }),
      Product.belongsToMany(models.User, {
        as: "comments",
        through: "comments",
        foreignKey: "productId",
        otherKey: "userId",
        onDelete : 'cascade'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    expiration: DataTypes.DATE,
    cuantity: DataTypes.INTEGER,
    solds: DataTypes.INTEGER,
    labelId: DataTypes.INTEGER,
    subCategoryId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};