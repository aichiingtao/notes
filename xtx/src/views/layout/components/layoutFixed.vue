<script setup>

import {useScroll} from '@vueuse/core'

const { y } = useScroll(window)

</script>

<template>

  <!DOCTYPE html>
  <html lang="zh-CN">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小兔鲜儿导航栏</title>
  </head>

  <body>
  <nav class="navbar">
    <div class="container" v-show="y > 78">
      <a href="#" class="logo">
        <img src="https://erabbit.itheima.net/img/logo.0940ebb5.png">
        <span class="slogan">新鲜·亲民·快捷</span>
      </a>
      <ul class="nav-links">
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
        <li class="divider"></li>
        <li><a href="#">品牌</a></li>
        <li><a href="#">专题</a></li>
      </ul>
    </div>
  </nav>
  </body>

  </html>

</template>

<style scoped>
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

.navbar {
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
}

.logo {
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
}

.logo img {
  vertical-align: middle;
  height: 40px;
}

.slogan {
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  color: #666;
  margin-left: 5px;
}

.nav-links {
  list-style: none;
  display: inline-block;
  vertical-align: middle;
  margin-left: 50px;
}

.nav-links li {
  display: inline-block;
  margin: 0 20px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #009966;
}

.divider {
  width: 1px;
  height: 14px;
  background-color: #ccc;
  margin: 0 20px;
  display: inline-block;
  vertical-align: middle;
}
</style>
