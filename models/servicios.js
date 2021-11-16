const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
	id: {
		type: String,
	  },
	nombre: {
		type: String,
		required: true,
	  },
	precio: {
		type: Int32,
		required: true,
	  },
	descripcion: {
		type: String,
		minlength: 1,
	  },	
	entregables: {
		type: String,
		required: true
	  },	
});

module.exports = {
  model: mongoose.model("Servicios", schema),
  schema,
};
