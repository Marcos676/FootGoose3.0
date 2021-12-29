'use strict';

function pushImg(name, arrayDestination, idProduct) {
  let item = {
    name: `${name}.jpg`,
    productId: idProduct,
    createdAt: new Date
  }
  arrayDestination.push(item)
}

let img = 1

const imagenes = []

for (let id = 1; id <= 50; id++) { // cada producto tendra 2 imagenes // se pueden agregar mas 
  
  //imagen 1 del producto
  pushImg(img, imagenes, id)
  if (img === 20) img = 0
  ++img

  //imagen 2 del producto
  pushImg(img, imagenes, id)
  if (img === 20) img = 0
  ++img
}


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Images', imagenes, {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Images', null, {});

  }
};