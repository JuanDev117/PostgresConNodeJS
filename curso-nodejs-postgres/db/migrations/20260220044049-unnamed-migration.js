'use strict';

/** @type {import('sequelize-cli').Migration} */

const{UserSchema, USER_TABLE}= require ('./../dbmodels/users.model');

//migracion para el campo rol 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn( USER_TABLE,'role', UserSchema.role);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn( USER_TABLE,'role');
  }
};
