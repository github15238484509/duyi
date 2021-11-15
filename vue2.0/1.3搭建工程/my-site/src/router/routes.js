import Home from '@/views/Home'
import Blog from '@/views/Blog'
import Message from '@/views/Message'
import About from '@/views/About'
import Project from '@/views/Project'
import BlogDetail from '@/views/Blog/BlogDetail'

const routes = [{
    name: 'Home',
    path: '/',
    component: Home
},
{
    name: 'Blog',
    path: '/blog',
    component: Blog
},
{
    name: 'CategoryBlog',
    path: '/blog/cate/:categoryId',
    component: Blog
},
{
    name: "BlogDetail",
    path: "/blog/:id",
    component: BlogDetail
},
{
    name: 'Message',
    path: '/message',
    component: Message
},
{
    name: 'About',
    path: '/about',
    component: About
},
{
    name: 'Project',
    path: '/project',
    component: Project
},
]
export default routes