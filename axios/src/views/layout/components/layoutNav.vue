<script setup>
import {  useRouter } from 'vue-router'
const router = useRouter()

</script>

<template>
  <div class="layoutNav">
    <div class="Nav">
      <div v-if="false">
        <ul>
          <li>我的订单</li>|
          <li>会员中心</li>|
          <li>帮助我们</li>|
          <li>我的</li>
        </ul>
      </div>

      <div v-else>
        <ul>
          <li @click="router.push('/login')">登录注册</li>|
          <li>我的订单</li>|
          <li>会员中心</li>|
          <li>帮助我们</li>|
          <li>我的</li>
        </ul>
      </div>
    </div>
  </div>



</template>

<style scoped>
.layoutNav{
  background-color: #2c3e50;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}

.Nav{
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}

ul{
  margin-right: 200px;
  list-style: none;
  padding-left: 0;
  display: flex;
  li{
    margin: 0 10px;
    color: #ffffff;
  }
}

</style>