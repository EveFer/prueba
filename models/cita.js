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
		minlength: 1,
	  },
	link: {
		type: String,
		required: true,
		minlength: 1,
	  },	
	hora: {
		type: String,
		required: true,
		minlength: 1,
	  },	
	servicio: {
		type: String,
		required: true,
		minlength: 1,
	  },	
	totalPago: {
		type: String,
		required: false,
		minlength: 1,
	  },	
});

module.exports = {
  model: mongoose.model("Cita", schema),
  schema,
};
