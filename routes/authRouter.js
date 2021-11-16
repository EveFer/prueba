const express = require("express");
const router = express.Router();
const cita = require("../usercases/cita");
const contador = require("../usercases/contador");
const documentos = require("../usercases/documentos");
const mensajes = require("../usercases/mensajes");
const servicios = require("../usercases/servicios");
const usuario = require("../usercases/usuario");


module.exports = router;
