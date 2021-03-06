'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubCategory.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId"
      }),
      SubCategory.hasMany(models.Product, {
        as: "products",
        foreignKey: "subCategoryId",
        onDelete : 'cascade'
      })
    }
  };
  SubCategory.init({
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};