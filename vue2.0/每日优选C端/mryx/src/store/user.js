export default {
    namespaced: true,
    state: () => {
        return {
            userinfo: null
        }
    },
    mutations: {
        changeUser(state, payload) {
            state.userinfo = payload
        }
    }
}