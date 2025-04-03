<script setup>
import {uesCartStore} from '@/stores/CartStore.js'
const CartStore = uesCartStore()
import {Delete} from '@element-plus/icons-vue'
import {ElInputNumber} from 'element-plus'



</script>

<template>
  <div v-for="item in CartStore.cartList" :key="item.id" class="box">
    <img src="https://yanxuan-item.nosdn.127.net/feec7bde4d52521ae70ab4c5010ce992.png" alt="">
    <div>
      <p>{{ item.name }}</p>
      <p>{{ item.oldPrice }}</p>
      <el-input-number v-model="item.count" @change="handleChange"/>
      <br>
      <el-button type="danger" :icon="Delete" circle @click="CartStore.del(item.id)"/>
    </div>

  </div>

</template>

<style scoped>
.box {
  display: flex;
}

img {
  width: 200px;
  height: 200px;
  margin-right: 10px;
}

</style>
