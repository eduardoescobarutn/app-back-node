// importo la base
import db from "../database/db.js";

// importo sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('articulos',{
    titulo: { type: DataTypes.STRING},
    descripcion : { type: DataTypes.STRING},
    precio: {type: DataTypes.NUMBER}
})

export default BlogModel