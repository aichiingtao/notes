import {createMemoryHistory, createRouter} from 'vue-router'
import login from '@/views/Login/index.vue'
import layout from '@/views/layout/index.vue'

const router = createRouter({
    // 指定路由的历史记录模式
    history: createMemoryHistory(), // 提供的一种基于内存的历史记录管理方式
    routes: [
        // 首页
        {
            path: '/',
            component: layout,

        },

        // 登录页面
        {path: '/login', component: login}
    ]
})

export default router