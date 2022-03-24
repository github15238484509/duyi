const Student = require("../models/Student")

exports.addStudent = async function (option) {
    // const info = await Student.build(option)
    // try {
    //     info.save()
    //     return {
    //         type:true,
    //         data:info.toJSON()
    //     }
    // } catch (error) {
    //     return {
    //         type:false,
    //         data:error
    //     }
    // }

    try {
        const info = Student.create(option)
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

exports.deleteStudent = async function (id) {
    // 第一中
    // const info = await Student.findByPk(id)
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
    const info = Student.destroy({
        where: {
            id: id
        }
    })
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