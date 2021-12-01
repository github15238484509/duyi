import { getSetting } from "@/api"
export default {
    namespaced:true,
    state: {
        data:null
    },
    mutations: {
        setSeting(state,preload){
            state.data = preload
        }
    },
    actions: {
        async getSetting(ctx) {
            const result = await getSetting()
            ctx.commit('setSeting',result)
        }
    }
}