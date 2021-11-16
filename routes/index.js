const citaRouter=require(".cita/Router")
const contadorRouter=require("./contadorRouter")
const documentosRouter=require("./documentosRouter")
const mensajesRouter=require("./mensajesRouter")
const serviciosRouter=require("./serviciosRouter")
const usuarioRouter=require("./usuarioRouter")

const authRouter=require("./authRouter")


const apiRouter=(app)=>{
    app.use("/cita",citaRouter);
    app.use("/contador",contadorRouter);
    app.use("/documentos",documentosRouter);
	app.use("/mensajes",mensajesRouter);
    app.use("/servicios",serviciosRouter);
	app.use("/usuario",usuarioRouter);
	
    app.use("/auth",authRouter);
}

module.exports=apiRouter;