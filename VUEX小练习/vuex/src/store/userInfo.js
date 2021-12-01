import { login, logout, howit } from "@/api/user"
import { whoAmi } from "../api/user"

export default {
    namespaced: true,
    state: {
        loading: false,
        data: null
    },
    getters: {
        status(state) {
            if (state.loading && state) {
                return "loading"
            } else if (state.data) {
                return "login"
            } else {
                return "unlogin"
            }
        }
    },
    mutations: {
        setLoading(state, preload) {
            state.loading = preload
        },
        setUserInfo(state, preload) {
            state.data = preload
        },
    },
    actions: {
        async login(context, preload) {
            context.commit("setLoading", true)
            const result = await login(preload)
            console.log(result);
            context.commit("setUserInfo", result && result.name)
            context.commit("setLoading", false)
            return result
        },
        async logout(context, preload) {
            context.commit("setLoading", true)
            const result = await logout(preload)
            context.commit("setUserInfo", null)
            context.commit("setLoading", false)
            return result
        },
        async whoAmi(context, preload) {
            context.commit("setLoading", true)
            const result = await whoAmi(preload)
            console.log(result);
            context.commit("setUserInfo", result && result.name)
            context.commit("setLoading", false)
            return result
        },
    }
}