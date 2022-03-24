const Book = require("../models/Book")

exports.addBook = async function (option) {
    // const info = await Book.build(option)
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
        const info = Book.create(option)
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

exports.deleteBook = async function (id) {
    // 第一中
    // const info = await Book.findByPk(id)
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
    const info = Book.destroy({
        where: {
            id: id
        }
    })
}


exports.updataBook = async function (bookId, option) {
    // 第一种
    // const info = await Book.findByPk(bookId)
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
        const info = await Book.update(option, {
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