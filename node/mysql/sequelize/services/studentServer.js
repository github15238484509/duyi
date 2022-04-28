const Student = require("../models/Student")

exports.addStudent = async function (option) {
    const info = await Student.build(option)
    try {
        info.save()
        return {
            type:true,
            data:info.toJSON()
        }
    } catch (error) {
        return {
            type:false,
            data:error
        }
    }

    // try {
    //     console.log(option);
    //     const info = Student.create(option)
    //     return {
    //         type: true,
    //         data: info.toJSON()
    //     }
    // } catch (error) {
    //     return {
    //         type: false,
    //         data: error
    //     }
    // }
}

exports.deleteStudent = async function (id) {
    // 第一中
    // var info = await Student.findByPk(id)
    // if (info === null) {
    //     return '暂无此用户'
    // }
    // try {
    //     const result = await info.destroy()
    //     return {
    //         type: true,
    //         data: result.toJSON()
    //     }
    // } catch (error) {
    //     return {
    //         type: false,
    //         data: error
    //     }
    // }

    // 第二种
    try {
        const info = Student.destroy({
            where: {
                id: id
            }
        })
        return {
            type: true,
            data: info.toJSON()
        }
    } catch (error) {
        return {
            type: false,
            data: error
        }
    }
}


exports.updataStudent = async function (bookId, option) {
    // 第一种
    // const info = await Student.findByPk(bookId)
    // try {
    //     for (const key in option) {
    //         if (Object.hasOwnProperty.call(option, key)) {
    //             info[key] = option[key];
    //         }
    //     }
    //     info.save()
    //     return {
    //         type: true,
    //         data: info.toJSON()
    //     }
    // } catch (error) {
    //     return {
    //         type: false,
    //         data: error
    //     }
    // }

    try {
        const info = await Student.update(option, {
            where: {
                id: bookId
            }
        })
        return {
            type: true,
            data: info.toJSON()
        }
    } catch (error) {
        return {
            type: false,
            data: error
        }
    }
}
exports.getAllStudent = async function ({
    page = 1,
    limit = 10
}) {
    let {
        count,
        rows
    } = await Student.findAndCountAll({
        limit: limit * 1,
        offset: (page * 1 - 1) * limit,
    })
    rows = rows.map((el) => {
        return el.toJSON()
    })
    return {
        count,
        rows
    }
}
exports.getOneStudent = async function (id) {
    let result = await Student.findByPk(id)
    return result
}