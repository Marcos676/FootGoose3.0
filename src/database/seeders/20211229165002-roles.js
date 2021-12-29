'use strict';

let roles = [
  {
    name: "user",
    createdAt: new Date
  },
  {
    name: "admin",
    createdAt: new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Rols', roles, {});
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Rols', null, {});
     
  }
};