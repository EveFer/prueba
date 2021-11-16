const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
	nombreDocumento: {
		type: String,
	  },
	documento: {
		type: String,
		required: true,
	  },	
	descripcion: {
		type: String,
	  },
	creacion:{
		type:Date,
		required:true,
		default:Date.now(),	
	}	
});

module.exports = {
  model: mongoose.model("Documentos", schema),
  schema,
};
