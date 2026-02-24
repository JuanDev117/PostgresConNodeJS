 
const { User, UserSchema } = require('./users.model');
const { Customer, CustomerSchema } = require('./customer.model');
 
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');




 

function setupModels(sequelize) {
  // --- FASE 1: INICIALIZACIÓN (INIT) ---
  // Aquí le decimos a Sequelize: "Toma este molde (Schema) y esta conexión (config) 
  // y crea el modelo en la memoria del programa".  
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  //---------------------------------------------------------
  // --- FASE 2: ASOCIACIONES (ASSOCIATE) ---
  // Una vez que todos los modelos están "vivos" (inicializados), 
  // les decimos cómo se relacionan entre sí.
  
  // Pasamos 'sequelize.models' porque ahí es donde Sequelize guardó todos 
  // los modelos que acabamos de inicializar arriba.
 
  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);  


}

module.exports = setupModels;