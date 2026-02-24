const { Model, DataTypes, Sequelize } = require('sequelize');

const{CATEGORY_TABLE} = require ('./category.model')
const PRODUCT_TABLE = 'products';

const ProductSchema ={
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
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
       
      },
      
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue:Sequelize.NOW,
    }, 
    categoryId: {
        field: 'category_id',  // para renombrar columna en la base de datos , 
                          //la columna q viede de la tabla padre .
        allowNull: false,
        type: DataTypes.INTEGER,
        
        references: {
          model: CATEGORY_TABLE, // que tabla debe mirar 
          key: 'id', //esta es la FK 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      
}


class Product extends Model {
   
    static associate(models) {
  
      this.belongsTo(models.Category, { as: 'category' });
      
    }
  
    static config(sequelize) {
      return {
        sequelize, // instancia de la coneccion (activa la conexion)
        tableName: PRODUCT_TABLE, //tabla customers en postgres 
        modelName: 'Product', //asi se va a llamar sequialize en este archivo 
        timestamps: false,// para colocar cuando fue creada
      };
    }
}
  
module.exports = { PRODUCT_TABLE, ProductSchema, Product };

