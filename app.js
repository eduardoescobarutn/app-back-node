import Express from "express";
import Cors from "cors";
import db from "./database/db.js";
import articuloRoutes from "./routes/routes.js";

const app = Express()

app.use(Cors())

app.use(Express.json())

app.use('/articulos',articuloRoutes)

try {
    await db.authenticate()
    console.log('Se conecto a la base de datos')
} catch (error) {
    console.log('No se conecto a la base de datos: ${error}')
}
/*
app.get('/',(req,res)=>{
    res.send('ddddd')
})
*/
app.listen(8000, ()=> {
    console.log('Servidor esta corriendo en http://localhost:8000/')
})