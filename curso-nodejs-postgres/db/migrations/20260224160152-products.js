'use strict';
/** @type {import('sequelize-cli').Migration} */
// 1. IMPORTACIÓN DE ESQUEMAS Y NOMBRES DE TABLA
 
 // Asegúrate de que los nombres de las variables coincidan con lo que exportas
const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');


module.exports = {
  /**
  * Método UP: Se ejecuta cuando corres la migración.
  * Sirve para CREAR o MODIFICAR la base de datos.
  */
  async up (queryInterface, Sequelize) {


    
    console.log('--- TEST DE VARIABLES ---');
  console.log('Tabla Categoría:', CATEGORY_TABLE);
  console.log('Esquema Categoría:', CategorySchema);
  console.log('Tabla Producto:', PRODUCT_TABLE);
  console.log('Esquema Producto:', ProductSchema);
     
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
 
     
  },

  /**
   * Método DOWN: Se ejecuta si quieres deshacer la migración (rollback).
   * Debe dejar la base de datos exactamente como estaba antes.
   */
  async down (queryInterface, Sequelize) {
    // Eliminamos las tablas en orden inverso
    // Primero el hijo (Product) y luego el padre (Category) para evitar errores de FK
       await queryInterface.dropTable(CATEGORY_TABLE);
       await queryInterface.dropTable(PRODUCT_TABLE);

 
  }
};
