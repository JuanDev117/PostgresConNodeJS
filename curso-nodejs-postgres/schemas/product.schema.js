//VALIDACION DE DATOS 
const Joi = require('joi');// importacion de libreria


const id = Joi.string().uuid(); // El ID debe ser una cadena de texto (string) y tener formato UUID 
// (ej: '550e8400-e29b-41d4-a716-446655440000').


const name = Joi.string().min(3).max(15); //debe ser tipo txt minimo 3 letras y maximo 15
const price = Joi.number().integer().min(10); // el precio debe ser un numero entero y como minimo 10
const description = Joi.String().min(10); // La descripción debe ser texto y tener al menos 10 caracteres para que sea informativa.
const image = Joi.string().uri();// formato url 

const createProductSchema = Joi.object({// esto hace que sea obligatorio 
  //estos requerimientos para crear 
  name: name.required(),
  price: price.required(),
  description:description.required(),
  image: image.required()
  //la db crea el id 
});

const updateProductSchema = Joi.object({
  name: name, // se puede cambiar solo esto 
  price: price,
  image: image
});

const getProductSchema = Joi.object({
  id: id.required(), // para hacer un get con el id 
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
