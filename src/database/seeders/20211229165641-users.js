'use strict';

let bcrypt = require("bcryptjs")

let users = [
  {
    firstName: 'admin',
    email: 'admin@footGoose.com',
    password: bcrypt.hashSync('123123', 10),
    rolId: 2,
    createdAt: new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};