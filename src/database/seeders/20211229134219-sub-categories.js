'use strict';

function pushItem (originArray, id, destinateArray){
  originArray.forEach(element => {
    let item = {
      ...element,
      categoryId: id,
      createdAt: new Date
    }
    destinateArray.push(item)
  })
}

let alimentos = [
  { name: "Alimento balanceado" },
  { name: "Alimento natural" },
  { name: "Alimento medicado" }
]
let accesorios = [
  { name: "Juguetes" },
  { name: "Comederos y bebederos" },
  { name: "Vivienda y comodidades" },
  { name: "Accesorios varios" }
]
let higiene = [
  { name: "Baño" },
  { name: "Limpieza de habitat" },
  { name: "Limpieza animal" },
  { name: "Mantenimiento de habitat" }
]
let salud = [
  { name: "Antiparasitarios y antibacterias" },
  { name: "Vitaminas" },
]

let categorias = [alimentos, accesorios, higiene, salud]

let subCategorias = []

let idCategory = 1

for (let i = 0; i < 6; i++) { //itero 6 veces porque hay 6 animales a los que perteneces estas categorias

  categorias.forEach(category => {

      pushItem(category, idCategory, subCategorias)
      ++idCategory
      
  });

}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('SubCategories', subCategorias, {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('SubCategories', null, {});
     
  }
};