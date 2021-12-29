'use strict';

let animales = [
  {name: 'Perro',
  image: 'iconoPerro.png'},
  {name: 'Gato',
  image: 'iconoGato.png'},
  {name: 'Pez',
  image: 'iconoPez.png'},
  {name: 'Roedor',
  image: 'iconoRoedor.png'},
  {name: 'Ave',
  image: 'iconoAve.png'},
  {name: 'Reptil',
  image: 'iconoReptil.png'}]

  let animals = []

animales.forEach(animal => {
  let item = {
    ...animal,
    createdAt: new Date
  }
  animals.push(item)
})

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Animals', animals, {});
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Animals', null, {});
     
  }
};
