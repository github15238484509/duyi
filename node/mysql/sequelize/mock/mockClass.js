const Mock = require("mockjs")
const ClassInfo = require("../models/Class")
function getClass() {
    const result = Mock.mock({
        'data|1-15': [{
            "id|+1": 1,
            "name": '班级 @id',
            'openTime': '@date("yyyy-MM-dd")',
            'createTime': '@date("yyyy-MM-dd")',
        }]
    }).data
    console.log(result);
    return result
}
ClassInfo.bulkCreate(getClass())