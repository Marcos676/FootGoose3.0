'use strict';

const faker = require('faker')

const productos = [...Array(50)].map(producto => {

  var labelId = faker.datatype.number({ max: 3, min: 1 })
  var expiration;

  labelId == 2 || labelId == 3 ? expiration = faker.date.future() : expiration = null;

  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.datatype.number({ min: 200, max: 3000 }),
    discount: faker.datatype.number({ min: 0, max: 60 }),
    expiration,
    cuantity: faker.datatype.number({ min: 10, max: 50 }),
    solds: faker.datatype.number({ min: 0, max: 20 }),
    labelId,
    subCategoryId: faker.datatype.number({ max: 78, min: 1 }),
    createdAt: new Date
  }

})

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Products', productos, {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};