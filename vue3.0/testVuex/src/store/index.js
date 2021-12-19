import { ref, reactive, readonly, toRefs } from "vue"
import * as userServ from "../api/index.js"
const user = reactive({
    user: null,
    loading: false
})
export const getUser = toRefs(readonly(user))

export async function login(username, password) {
    user.loading = true
    var result = await userServ.login(username, password)
    user.user = result
    user.loading = false
    return result
}
export async function whoAmI() {
    user.loading = true
    var result = await userServ.whoAmI()
    user.user = result
    user.loading = false
}
export async function logout() {
    user.loading = true
    await userServ.loginOut(username, password)
    user.user = null
    user.loading = false
    return true
}










