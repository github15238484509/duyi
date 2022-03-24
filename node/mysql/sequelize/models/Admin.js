const db = require("./db")
const { DataTypes } = require("sequelize")
const admin = db.define("Admin", {
    account: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descript:{
        type:DataTypes.STRING,
    }
}, {
    paranoid: false
})
module.exports = admin