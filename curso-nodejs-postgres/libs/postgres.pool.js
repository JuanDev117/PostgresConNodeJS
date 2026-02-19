//este de aqui exporta el pool
const {Pool} = require ('pg');

const {config} = require('./../config/config');

const USER = encodeURIComponent ( config.dbUser);
const PASSWORD= encodeURIComponent( config.dbPassword);
const URI = `postges:// ${USER}:${PASSWORD}@ ${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool= new Pool({

 connectionString: URI

});

module.exports = pool ;

// Configura un Pool de conexiones usando una URI dinámica.
// Sirve para centralizar los datos en una sola dirección (URL),
// asegurar que caracteres especiales en la clave no rompan la conexión
// y preparar la app para subirla a servidores reales (nube).
