const db = require("./db")
const { DataTypes } = require('sequelize')

const test = db.define('test', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'This is a column name that has a comment'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '465456'
    }
}, {

})
module.exports = test



