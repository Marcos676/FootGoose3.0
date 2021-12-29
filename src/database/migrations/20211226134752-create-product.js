'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      expiration: {
        type: Sequelize.DATE
      },
      cuantity: {
        type: Sequelize.INTEGER
      },
      solds: {
        type: Sequelize.INTEGER
      },
      labelId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Labels"
          },
          key: "id"
        }
      },
      subCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "SubCategories"
          },
          key: "id"
        }
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};