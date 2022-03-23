const db = require("./db")
const { DataTypes } = require("sequelize")
const student = require("./Student")
const ClassGrand = db.define("Class", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    openTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createTime: {
        type: DataTypes.DATE,
        allowNull: false
    }

}, {
    paranoid: true
})
ClassGrand.hasMany(student)
module.exports = ClassGrand