const ClassInfo = require("../models/Class")

exports.addClass = async function (classInfo) {
    // const info = await ClassInfo.build(classInfo)
    // try {
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
        const info = await ClassInfo.create(classInfo)
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
exports.deleteClass = async function (classId) {
    // const info = await ClassInfo.findByPk(classId)
    // try {
    //     info.destroy()
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
        const info = await ClassInfo.destroy({
            where: {
                id: classId
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

exports.updataClass = async function (classId, option) {
    // 第一种
    // const info = await ClassInfo.findByPk(classId)
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

    // 第二种
    const info = await  ClassInfo.update(option,{
        where:{
            id:classId
        }
    })
}