const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  idProfesional: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
    minlength: 1,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  contrasena: {
    type: String,
    required: true,
    minlength: 1,
  },
  correo: {
    type: String,
    required: true,
    minlength: 1,
  },
  telefono: {
    type: Int32,
    minlength: 1,
  },
  cedula: {
    type: String,
    minlength: 1,
  },
  fotoPerfil: {
    type: String,
  },
  calle: {
    type: String,
	minlength: 1,
  },
  numeroInterior: {
    type: String,
    minlength: 1,
  },
  numeroExterior: {
    type: String,
    minlength: 1,
  },
  colonia: {
    type: String,
    minlength: 1,
  },
  municipio: {
    type: Date,
    minlength: 1,
  },
  estado: {
    type: String,
    minlength: 1,
  },
  cp: {
    type: Int32,
    minlength: 1,
  },
  description: {
    type: String,
    minlength: 1,
  },
});

module.exports = {
  model: mongoose.model("Contador", schema),
  schema,
};
