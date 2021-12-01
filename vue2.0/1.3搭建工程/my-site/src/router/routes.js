import Message from '@/views/Message'
import About from '@/views/About'
import Project from '@/views/Project'
import BlogDetail from '@/views/Blog/BlogDetail'
import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
function duration(time = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}
function getPageComponent(asyncConponent) {
    return async () => {
        start()
        await duration(Math.random() * 2000)
        const component = await asyncConponent()
        done()
        return component
    }
}
const routes = [{
    name: 'Home',
    path: '/',
    component: getPageComponent(() => import("@/views/Home")),
    meta: {
        title: '首页'
    }
},
{
    name: 'Blog',
    path: '/blog',
    component: getPageComponent(() => import("@/views/Blog")),
    meta: {
        title: '文章'
    }
},
{
    name: 'CategoryBlog',
    path: '/blog/cate/:categoryId',
    component: getPageComponent(() => import("@/views/Blog")),
    meta: {
        title: '文章'
    }
},
{
    name: "BlogDetail",
    path: "/blog/:id",
    component: BlogDetail,
    meta: {
        title: '文章详情'
    }
},
{
    name: 'Message',
    path: '/message',
    component: Message,
    meta: {
        title: '留言板'
    }
},
{
    name: 'About',
    path: '/about',
    component: About,
    meta: {
        title: '关于我'
    }
},
{
    name: 'Project',
    path: '/project',
    component: Project,
    meta: {
        title: '项目&效果'
    }
},
]
export default routes