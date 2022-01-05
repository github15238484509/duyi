import axios from "./index"

export function login(config) {
    return axios.post("/passport/login", config)
}