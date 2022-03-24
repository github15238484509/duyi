const admin = require("../models/Admin.js")
/**
 * 
 * @param {Object,151,545,845} adminInfo 789798
 * @returns 
 */
exports.addAdmin = async function (adminInfo) {
    const ins = admin.build(adminInfo)
    try {
        const result = await ins.save()
        return {
            type: true,
            data: result.toJSON()
        }
    } catch (error) {
        console.log('error', error);
        return {
            type: false,
            data: error
        }
    }

    // 第二种
    // try {
    //     const result = await admin.create(adminInfo);
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
}

exports.deleteAdmin = async function (adminId) {
    // 第一种
    // const ins = await admin.findByPk(adminId)
    // try {
    //     const info = await ins.destroy()
    //     console.log(info.toJSON());
    // } catch (error) {
    //     console.log(error);
    // }

    // 第二种
    const info = await admin.destroy({
        where: {
            id: adminId
        }
    })
    return info
}

exports.updataAdmin = async function (adminId, adminInfo) {
    // 第一种方式
    // let info = await admin.findByPk(adminId)
    // try {
    //     for (const key in adminInfo) {
    //         if (Object.hasOwnProperty.call(adminInfo, key)) {
    //             info[key] = adminInfo[key];
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
    const info = await admin.update(adminInfo, {
        where: {
            id: adminId
        }
    })
    return info
}