import { createRouter, createWebHistory } from 'vue-router'
import login from "@/views/login/index.vue"
import layout from "@/views/layout/index.vue"
import home from "@/views/home/index.vue"
import category from "@/views/category/index.vue"
import Product from '@/views/Product/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页
    {
      path:'/',
      component:layout,
      //  配置二级路由
      children:[
        {
          path:'',
          component:home,
        },
        {
          path:'category',
          component:category,
        },

      ]
    },
    // 登录页面
    {path:'/login',component:login},
    // 商品详情
    {path:'/Product',component:Product},
  ],
})

export default router
