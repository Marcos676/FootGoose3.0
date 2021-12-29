'use strict';

let nameCategory = [
  {name: 'Alimento'},
  {name: 'Accesorio'},
  {name: 'Higiene'},
  {name: 'Salud'}
]
let namesCategories = []

for (let i = 0; i < 6; i++) {
  namesCategories.push(...nameCategory)
}

let idAnimal = 1
let c = 0

let categories = []

namesCategories.forEach(category => {

  let item = {
    ...category,
    animalId: idAnimal,
    createdAt: new Date
  }
  ++c
  if (c == 4) {
    ++idAnimal
    c = 0
  }
  categories.push(item)
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Categories', null, {});
     
  }
};