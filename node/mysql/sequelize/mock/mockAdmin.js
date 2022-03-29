const Mock = require('mockjs')
const admin = require("../models/Admin")
function addAdmin() {
    const result = Mock.mock({
        'data|20': [{
            "account": "@word(5,10)",
            "password":"@word(6)",
            'name': '@name()',
            'descript': '@csentence()'
        }]
    })
    return result.data
}
async function mockAdmin() {
    var data = addAdmin()
    const info = await admin.bulkCreate(data)
    console.log('ok');
}
mockAdmin()