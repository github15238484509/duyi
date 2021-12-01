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
        return null
    }
    const data = {
        name: '大帅哥'
    }
    localStorage.setItem("user", JSON.stringify(data))
    return data
}

export async function logout() {
    await duration()
    localStorage.removeItem("user")
}

export async function whoAmi() {
    await duration()
    const data = localStorage.getItem("user")
    if (data) {
        return JSON.parse(data)
    }
    return null
}

