const { Sequelize } = require("sequelize") // CON S MAYÚSCULA

const conexion = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'clase_orm',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres' // OPCIÓN SOLO PARA SEQUELIZE
})

module.exports = conexion;