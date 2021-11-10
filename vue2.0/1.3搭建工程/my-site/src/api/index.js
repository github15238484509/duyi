import request from "./request"
export async function getBanner(data) {
    return await request.post("/Home/banner/bannerList")
}
export async function getMock(data) {
    return result = await request.get("/mock")
}