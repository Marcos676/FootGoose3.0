'use strict';

let states = [
  {
    name: "pending",
    createdAt: new Date
  },
  {
    name: "canceled",
    createdAt: new Date
  },
  {
    name: "finished",
    createdAt: new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('States', states, {});
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('States', null, {});
     
  }
};