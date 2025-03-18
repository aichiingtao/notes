<script setup>
import {grtCategoryAPI} from '@/apis/layout.js'
import { Umbrella } from '@/apis/login.js'
import {onClickOutside} from '@vueuse/core'
import {onMounted, useTemplateRef} from 'vue'
import {ref} from 'vue'



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
  console.log(res.data.c)
}
onMounted(() => Banana())


//
const Journey = ref({})
const Violin = async () => {
  const Ice = await Umbrella()
  Journey.value = Ice.data
  console.log(Ice.data )
}
onMounted(() => Violin())



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
    <div class="container">
      <ul class="top-nav-links">
        <li><a href="#">请先登录</a> |</li>
        <li><a href="#">免费注册</a> |</li>
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
        <input type="text" placeholder="搜一搜">
        <a href="#" class="cart-icon">🛒<span class="cart-count">0</span></a>
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
