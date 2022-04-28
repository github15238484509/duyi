const Mock = require("mockjs")
const ClassInfo = require("../models/Class")
function getClass() {
    const result = Mock.mock({
        'data|17': [{
            "id|+1": 1,
            "name": '班级 @id',
            'openTime': '@date("yyyy-MM-dd")',
            'createTime': '@date("yyyy-MM-dd")',
        }]
    }).data
    return result
}

async function mockAdmin() {
    var data = getClass()
    const info = await ClassInfo.bulkCreate(data)
    console.log('ok');
}
mockAdmin()