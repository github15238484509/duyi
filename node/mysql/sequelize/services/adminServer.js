const admin = require("../models/Admin.js")
const {
    Op,
    sequelize
} = require("sequelize")
const md5 = require("js-md5")
/**
 * 
 * @param {Object,151,545,845} adminInfo 789798
 * @returns 
 */
exports.addAdmin = async function (adminInfo) {
    // adminInfo.password = md5(adminInfo.password)
    const ins = admin.build(adminInfo)
    try {
        const result = await ins.save()
        
        console.log(result.allNameDes);
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
// 查询所有的管理员 过滤不要的属性
exports.getAllAdmin = async function () {
    //过滤指定的属性
    // const result = await admin.findAll(
    //     {
    //         attributes:['name','id','account']
    //     }
    // )
    //查询指定id的管理员
    // const result = await admin.findAll({
    //     where: {
    //       id:39
    //     }
    // })
    //查询指定id或者name为 Sarah Lee 的人  Op是可以绑定运算符的
    // const result = await admin.findAll({
    //     where: {
    //         [Op.or]: [{
    //                 id: 39
    //             },
    //             {
    //                 name: 'Sarah Lee'
    //             }
    //         ]
    //     }
    // })

    // 查询名字中带j的管理员
    // const result = await admin.findAll({
    //     where:{
    //         name:{
    //             [Op.like]:'j%'
    //         }
    //     }
    // })

    //分页查询
    // const result = await admin.findAll({
    //     limit:10,
    //     offset:2
    // })

    // 查询数据库的总数
    // const result = await admin.count({

    // })

    //查询数据并获取总数
    const {
        count,
        rows: result
    } = await admin.findAndCountAll({
        limit: 2
    })
    console.log(count);
    console.log(result);
    console.log(JSON.parse(JSON.stringify(result)));
    return result
}

// 登录管理员
exports.login = async function (account, password) {
    const result = await admin.findOne({
        where: {
            account,
            password: md5(password)
        }
    })
    if(result){
        return result.toJSON()
    }
}