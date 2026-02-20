'use strict';

/** @type {import('sequelize-cli').Migration} */


const{UserSchema, USER_TABLE}= require ('../models/users.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE,UserSchema);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.drop(USER_TABLE);
    
    }
};
