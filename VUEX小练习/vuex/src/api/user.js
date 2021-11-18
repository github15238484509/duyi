function duration(duration = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}

export async function login(user) {
    await duration()
    if (user.name !== "admin" && user.password !== "123456") {
        return {
            code: -1,
            message: "用户名或者密码不对"
        }
    }
    return {
        code: 0,
        message: "登录成功",
        data: {
            name: '大帅哥'
        }
    }
}



