// import { setLogin, setUser } from "../store/index"
/**
 * 
 * @param {时间秒} time 
 * @returns 
 */
export function delay(time = 1000) {
    return new Promise(resove => {
        setTimeout(() => {
            resove()
        }, time);
    })
}
/**
 * 
 * @param {用户账号} account 
 * @param {用户密码} password 
 * @returns 
 */
export async function login(account, password) {
    await delay()
    if (account === "admin" && password === "123123") {
        return {
            name: "管理员",
        }
    } else {
        return null
    }
}
export async function logout() {
    await delay()
    return true
}
export async function whoAmI() {
    await delay()
    const user = localStorage.getItem("user")
    if (user) {
        return JSON.parse(user)
    }
    return null
}


