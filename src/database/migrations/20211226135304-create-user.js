'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: 'undefined.PNG'
      },
      tel: {
        type: Sequelize.STRING
      },
      provinces: {
        type: Sequelize.INTEGER
      },
      locality: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      rolId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Rols"
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
    await queryInterface.dropTable('Users');
  }
};