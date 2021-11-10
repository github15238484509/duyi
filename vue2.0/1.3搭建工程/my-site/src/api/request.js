import axios from "axios";
import showMessage from "@/utils/showMessage"
const request = axios.create()

request.timeout = 2000
request.interceptors.request.use(function (res) {
    return res
})
request.interceptors.response.use(function (res) {
    const info = res.data
    if (info.code !== 200) {
        showMessage({
            content: info.msg,
            type: "error"
        })
        return null
    } else {
        return info.data
    }
})

export default request