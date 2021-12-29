'use strict';

let faker = require('faker')

let features = [...Array(20)].map(element => {
  return {
    name: faker.commerce.productAdjective(),
    createdAt: new Date
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Features', features, {});
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Features', null, {});
     
  }
};
