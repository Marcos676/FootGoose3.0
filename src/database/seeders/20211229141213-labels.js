'use strict';

let etiquetas = [
  {
    name: 'Sin etiqueta',
    image: null,
    createdAt: new Date
  },
  {
    name: 'Nuevo',
    image: 'labelNuevo.png',
    createdAt: new Date
  },
  {
    name: 'Descuento',
    image: 'labelDescuento.png',
    createdAt: new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Labels', etiquetas, {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Labels', null, {});
     
  }
};