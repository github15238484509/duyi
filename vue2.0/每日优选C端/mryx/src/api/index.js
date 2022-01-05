import axios from "axios";

const require = axios.create({
    baseURL: ' https://mallapi.duyiedu.com/'
})

require.interceptors.request.use((config) => {
    return config
})
require.interceptors.response.use((respone) => {

    return respone.data
})

export default require