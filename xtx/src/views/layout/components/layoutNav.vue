<script setup>
import {grtCategoryAPI} from '@/apis/layout.js'
import {Umbrella} from '@/apis/login.js'
import {onClickOutside} from '@vueuse/core'
import {onMounted, useTemplateRef} from 'vue'
import {ref} from 'vue'
import {Zebra} from '@/apis/page.js'
import {useUserStore} from '@/stores/user.js'
import {uesCartStore} from '@/stores/CartStore.js'

const CartStore = uesCartStore()
const userStore = useUserStore()


const getCategory = async () => {
  const res = await grtCategoryAPI()
  console.log(res)
  console.log(111)
}


import {useCounterStore} from "@/stores/counter.js"

const add = useCounterStore()
const str = add.str


const target = useTemplateRef < HTMLElement > ('target')
const Apple = ref('李四')

onClickOutside(target, event => console.log(123))


const Elephant = ref({})

const Banana = async () => {
  const res = await grtCategoryAPI()
  Elephant.value = res.data.c
}
onMounted(() => Banana())


const Watermelon = ref({})

const Xylophone = async () => {
  const Yacht = await Zebra()
  Watermelon.value = Yacht.data
  console.log(Yacht.data)
}
onMounted(() => Xylophone())


const Journey = ref({})
const Violin = async () => {
  const Ice = await Umbrella()
  Journey.value = Ice.data
  console.log(Ice.data)
}
onMounted(() => Violin())
const Adventure = defineModel()


// 退出操作
import {useRouter} from "vue-router";

const router = useRouter()
const confirmEvent = () => {
  //  调用清楚用户信息函数
  userStore.quitLogin()

  //跳转登录页面
  router.replace({path: '/Login'})
}


// 获取购物车的商品数量
const Yacht = CartStore.cartList.length


</script>

<template>
  <!DOCTYPE html>
  <html lang="zh-CN">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小兔鲜儿</title>
  </head>

  <body>
  <!-- 顶部导航条 -->
  <div class="top-nav">
    <div class="container" v-if="userStore.userInfo.token">
      <ul class="top-nav-links">
        <li><a href="#">我的订单</a> |</li>
        <li><a href="#" @click="$router.push('/Product')">商品详情</a> |</li>
        <li><a href="#">帮助中心</a> |</li>
        <li><a href="#">关于我们</a> |</li>

        <el-popconfirm
          confirm-button-text="确认"
          cancel-button-text="取消"
          title="确认要退出吗?"
          @confirm="confirmEvent">

          <template #reference>
            <el-button>退出登录</el-button>
          </template>

        </el-popconfirm>
      </ul>
    </div>
    <div class="container" v-else>
      <ul class="top-nav-links">
        <li><a href="#" @click="router.push('/Login')">请先登录</a> |</li>
        <li><a href="#">我的订单</a> |</li>
        <li><a href="#">会员中心</a> |</li>
        <li><a href="#">帮助中心</a> |</li>
        <li><a href="#">关于我们</a> |</li>
        <li><a href="#">手机版</a></li>
      </ul>
    </div>
  </div>
  <!-- 主导航条 -->
  <div class="main-nav">
    <div class="container">
      <a href="#" class="logo">
        <img src="https://erabbit.itheima.net/img/logo.0940ebb5.png" alt="小兔鲜儿logo">
        <span class="slogan">新鲜·亲民·快捷</span>
      </a>
      <ul class="main-nav-links">
        <li><a href="#">首页</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">服饰</a></li>
        <li><a href="#">母婴</a></li>
        <li><a href="#">个护</a></li>
        <li><a href="#">严选</a></li>
        <li><a href="#">数码</a></li>
        <li><a href="#">运动</a></li>
        <li><a href="#">杂项</a></li>
      </ul>
      <div class="search-cart">
        <input type="text" placeholder="搜一搜" v-model="Adventure">
        <a href="#" class="cart-icon" @click="router.push('/Csrt')">🛒<span
          class="cart-count">{{ Yacht }}</span></a>
      </div>
      <div>
        {{ Adventure }}
      </div>
    </div>
    <div>

      {{ str }}
      <div>
        <div ref="target">
          {{ Apple }}
        </div>
        <div>Outside element</div>
      </div>
    </div>
  </div>
  </body>

  </html>
</template>

<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

/* 顶部导航条样式 */
.top-nav {
  background-color: #333;
  color: white;
  padding: 10px 0;
}

.top-nav-links {
  list-style: none;
  text-align: right;
}

.top-nav-links li {
  display: inline-block;
  margin: 0 5px;
}

.top-nav-links a {
  color: white;
  text-decoration: none;
}

/* 主导航条样式 */
.main-nav {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}

.logo {
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
}

.logo img {
  height: 40px;
  vertical-align: middle;
}

.slogan {
  display: block;
  font-size: 12px;
  color: #666;
}

.main-nav-links {
  list-style: none;
  display: inline-block;
  vertical-align: middle;
  margin-left: 50px;
}

.main-nav-links li {
  display: inline-block;
  margin: 0 15px;
}

.main-nav-links a {
  text-decoration: none;
  color: #333;
}

.search-cart {
  display: inline-block;
  vertical-align: middle;
  float: right;
}

.search-cart input {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.cart-icon {
  display: inline-block;
  text-decoration: none;
  margin-left: 10px;
  color: #333;
  position: relative;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -8px;
  background-color: red;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
}

</style>
