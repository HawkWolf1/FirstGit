const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.INTEGER,
    amount: {
        type: Sequelize.INTEGER,
        unique: false
    },
    description: {
        type: Sequelize.STRING,
        unique: true
    },
    description: {
        type: Sequelize.STRING,
        unique: false
    }

})
module.exports = User

