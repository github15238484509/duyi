import request from "./request"

export async function getBanner() {
    return await request.get("/api/banner")
}

// 获取博客分类
export async function getBlogtype() {
    return await request.post("/api/blogtype")
}


// 获取博客列表
export async function getblog(page, limit, id) {
    const result = await request.get("/api/blog", {
        params: {
            page,
            limit,
            id
        }
    })
    return result
}


// 获取详情
export async function getblogDetail(id) {
    const result = await request.get(`/api/blog/${id}`)
    return result
}

// 获取评论
export async function getcomment() {
    return await request.post("/api/comment")
}