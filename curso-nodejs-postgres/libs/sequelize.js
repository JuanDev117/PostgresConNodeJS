 const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models'); 
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//esta son las conecciones para la base de datos 

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});
setupModels(sequelize);//

 
// Verificar que el modelo User esté registrado
console.log('Modelos registrados:', Object.keys(sequelize.models));

module.exports = {
  sequelize,
  models: sequelize.models,
};
