const { Model, DataTypes, Sequelize } = require('sequelize');


const CATEGORY_TABLE = 'categories';

const CategorySchema ={
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        unique:true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
       
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue:Sequelize.NOW,
      }, 

      
};


class Category extends Model {
    //metodo estatico para definir relaciones con otros modelos 
    static associate(models) {
      // aqui digo q este modelo pertenece a .
      this.hasMany(models.Product, { as: 'products',
        foreignKey :'categoryId' });// El puente: le dice a Sequelize que busque en la tabla Product
       // aqui este as , categoryId es para
      //cuando yo vaya a mandar un json ponga , en un campo , 
      //products:{} 
      
    }
  
    static config(sequelize) {
      return {
        sequelize, // instancia de la coneccion (activa la conexion)
        tableName: CATEGORY_TABLE, //tabla customers en postgres 
        modelName: 'Category', //asi se va a llamar sequialize en este archivo 
        timestamps: false,// para colocar cuando fue creada
      };
    }
  }
  
  module.exports = { CATEGORY_TABLE, CategorySchema, Category };
