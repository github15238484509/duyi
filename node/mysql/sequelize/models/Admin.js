const db = require("./db")
const {
    DataTypes
} = require("sequelize")
const md5 = require("js-md5")
const admin = db.define("Admin", {
    account: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('password', md5(value))
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descript: {
        type: DataTypes.STRING,
    },
    allNameDes:{
        type: DataTypes.VIRTUAL,
        get(){
            return `${this.name} ___ ${this.descript}`;
        }
    }
}, {
    paranoid: false
})
module.exports = admin