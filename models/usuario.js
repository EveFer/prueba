const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  idUsuario: {
    type: String,
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
});

module.exports = {
  model: mongoose.model("Usuario", schema),
  schema,
};
