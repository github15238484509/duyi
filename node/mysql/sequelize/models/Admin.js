const db = require("./db")
const { DataTypes } = require("sequelize")
const admin = db.define("Admin", {
    account: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    password: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    name: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    descript:{
        type:DataTypes.STRING,
    }
}, {
    paranoid: true
})
module.exports = admin