const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
	usuario: {
		type: String,
		required: true,
		minlength: 1,
	  },
	profesional: {
		type: String,
		required: true,
		minlength: 1,
	  },
	fecha: {
		type: Date,
		required: true,
		default:Date.now(),	
	  },
	mensaje: {
		type: String,
		required: true,
		minlength: 1,
	  },	
	nombreDocumento: {
		type: String,
	  },	
	documento: {
		type: String,
	  },	
});

module.exports = {
  model: mongoose.model("Mensajes", schema),
  schema,
};
