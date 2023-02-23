const Sequelize = require('sequelize')

const sequelize = require('.    ./util/database')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    expense_amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    choose_description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    choose_category: {
        type: Sequelize.STRING,
        allowNull: false
    }
})   

module.exports = User