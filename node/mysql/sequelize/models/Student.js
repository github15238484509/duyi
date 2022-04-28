const db = require('./db')
const { DataTypes } = require('sequelize')
const ClassGrand = require("./Class")
const student = db.define("Student", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:new Date()
    },
    isMale: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    moblie: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    stuId: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '学号'
    },
}, {
    paranoid: true
})
module.exports = student