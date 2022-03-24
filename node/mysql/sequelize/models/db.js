const { Sequelize } = require('sequelize');
const db = new Sequelize('test', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})
async function test() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
test()

module.exports = db