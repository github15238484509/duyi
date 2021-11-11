import request from "./request"
export async function getBanner() {
    return await request.get("/api/banner")
}
export async function getMock(data) {
    return result = await request.get("/mock")
}