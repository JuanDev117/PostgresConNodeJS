const { Model, DataTypes, Sequelize } = require('sequelize');
const {USER_TABLE} = require('./user.model')

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,  
    field: 'created_at',
    defaultValue: Sequelize.NOW, 
  },
  // llave que une customer -> user
  userId: {
    field: 'user_id',  // para renombrar columna en la base de datos , 
                      //la columna q viede de la tabla padre .
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true ,
    references: {
      model: USER_TABLE, // que tabla debe mirar 
      key: 'id', //esta es la FK 
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

//denino la clase customer q Extiende de model , una propiedad de sequalize 
// En Sequelize, Model es una clase fundamental de la librería que representa
//  una tabla en tu base de datos.
//  Al extender esta clase (class Customer extends Model), 
// transformas una clase simple de JavaScript en una entidad capaz de realizar consultas
//  (CRUD) a la base de datos sin escribir SQL.
class Customer extends Model {
  //metodo estatico para definir relaciones con otros modelos 
  static associate(models) {
    // aqui digo q este modelo pertenece a .
    this.belongsTo(models.User, { as: 'user' });// aqui este as , user es para
    //cuando yo vaya a mandar un json ponga , en un campo , 
    //user:{} y adentro pongo el id de el usuario de la tabla users
    
  }

  static config(sequelize) {
    return {
      sequelize, // instancia de la coneccion (activa la conexion)
      tableName: CUSTOMER_TABLE, //tabla customers en postgres 
      modelName: 'Customer', //asi se va a llamar sequialize en este archivo 
      timestamps: false,// para colocar cuando fue creada
    };
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer }; 