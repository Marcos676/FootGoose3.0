'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reply.belongsTo(models.User, {
        as: "user",
        foreignKey: "userId"
      }),
      Reply.belongsTo(models.Comment, {
        as: "comment",
        foreignKey: "commentId"
      })
    }
  };
  Reply.init({
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};