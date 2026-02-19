

//este de aca exporta el get conection, es decir, cada vez que se necesite una conexion nueva, se llama a esta funcion y se obtiene una nueva conexion a la base de datos

const {Client} = require('pg');

 async function getConnection (){

 const client = new Client({
  host: 'localhost',
  port: 5432,
  user: "juan",
  password: "juan3",
  database: "My_store"
 });
  await client.connect();
  return client;
}

module.exports = getConnection;
