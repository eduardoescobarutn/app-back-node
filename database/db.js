import { Sequelize } from "sequelize";

const db = new Sequelize('eescobarutn_articulos','291242','dop424Utn',{
    host:'mysql-eescobarutn.alwaysdata.net',
    dialect: 'mysql'
})

export default db