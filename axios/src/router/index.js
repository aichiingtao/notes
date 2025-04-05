import {createWebHistory, createRouter} from 'vue-router'
import login from '@/views/Login/index.vue'
import layout from '@/views/layout/index.vue'

const router = createRouter({
    // 指定路由的历史记录模式    createMemoryHistory() 刷新跳转/页
    history: createWebHistory(), //  刷新不会跳转到/页
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