const Mock = require("mockjs");
const student = require("../models/Student")


function getClass() {
    const result = Mock.mock({
        'data|500-700': [{
            "name": '@cname',
            'birthTime': '@date("yyyy-MM-dd")',
            "isMale": '@boolean()',
            'moblie': /1\d{10}/,
            'stuId': /1\d{5}/,
            "ClassId|1-15": 2
        }]
    }).data
    // console.log(result);
    return result
}
var info = getClass()
// console.log(student);
student.bulkCreate(info)