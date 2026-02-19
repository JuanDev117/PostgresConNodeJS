

//este de aqui exporta el pool
const {Pool} = require('pg');

const pool= new Pool({

host: "localhost",
port: 5432,
user: "juan",
password: "juan3",
database: "My_store"

});

module.exports = pool ;
