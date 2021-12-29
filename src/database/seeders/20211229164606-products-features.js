'use strict';

function pushFeature(productId, featureId, arrayDestinate) {
  let item = {
    productId,
    featureId,
    createdAt: new Date
  }
  arrayDestinate.push(item)
}

let feactId = 0

let ProductFeatures = []

for (let prodId = 1; prodId <= 50; prodId++) {
  
  feactId == 20 ? feactId = 0  : null
  feactId++
  pushFeature(prodId, feactId, ProductFeatures)

  feactId == 20 ? feactId = 0  : null
  feactId++
  pushFeature(prodId, feactId, ProductFeatures)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('ProductFeatures', ProductFeatures, {});
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('ProductFeatures', null, {});
     
  }
};
