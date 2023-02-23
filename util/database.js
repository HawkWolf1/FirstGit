// const mysql = require('mysql')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'vsc',
//     password: 'Avinash123@'
// })

// mynewpromise = pool.promise(() => {})

// module.exports = mynewpromise

const Sequelize = require('sequelize')

const dotenv = require('dotenv')

const sequelize = new Sequelize('process.env.vsc', 'process.env.root', 'process.env.Avinash123@', {
    dialect: 'mysql',
    host: process.env.localhost
})

module.exports = sequelize