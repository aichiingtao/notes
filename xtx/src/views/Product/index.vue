<script setup>
import {ElInputNumber, ElMessage} from 'element-plus'
import {ref, onMounted} from 'vue'
import {uesCartStore} from '@/stores/CartStore.js'

const CartStore = uesCartStore()

// 获取购物车商品数量
const Yacht = CartStore.cartList.length


const count = ref(1)
const countChange = () => {
  console.log(113)
}


import {Product} from '@/apis/Product.js'

const productList = ref({})

const getProduct = async () => {
  const res = await Product()
  productList.value = res.data.result
}

onMounted(() => getProduct())

const addCart = () => {
  CartStore.addCart({
    id: productList.value.id,
    name: productList.value.name,
    oldPrice: productList.value.oldPrice,
    img:'https://yanxuan-item.nosdn.127.net/feec7bde4d52521ae70ab4c5010ce992.png',
    count:count.value,

  },
    ElMessage({
      message:'添加成功',
      type: 'success'
    })
  )
}

</script>

<template>
  <div class="box1">
    <a href="#" class="cart-icon" @click="$router.push('/Csrt')">🛒<span class="cart-count">{{ Yacht }}</span></a>
  </div>
  <div class="product-container">
    <div class="product-main">
      <img src="https://yanxuan-item.nosdn.127.net/feec7bde4d52521ae70ab4c5010ce992.png" alt="主图">
    </div>
    <div class="product-images">
      <img src="https://yanxuan-item.nosdn.127.net/af7a8bce64815968659137fe56f31c48.png"
           alt="小图1">
      <img src="https://yanxuan-item.nosdn.127.net/d41a0dac6900846d3499b4707a41fe27.png"
           alt="小图2">
      <img src="https://yanxuan-item.nosdn.127.net/5436c70fe338fad6d357a7f0d0b879a0.png"
           alt="小图3">
      <img src="https://yanxuan-item.nosdn.127.net/fabfa56193d871a939548097fb0e8aec.png"
           alt="小图4">
    </div>

    <div class="product-info">
      <div class="product-title">{{ productList.name }}</div>
      <div class="product-price">{{ productList.oldPrice }}<span
        class="product-old-price">{{ productList.id }}</span></div>
      <div class="product-options">
        <div class="size-options">
          <button>{{ 45 }}</button>
        </div>
        <el-input-number v-model="count" @change="countChange"/>
        <div>
          <el-button class="buy-button" @click="addCart" :plain="true" >加入购物车</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  display: flex;
  padding: 20px;
}
.box1{
  width: 100px;
  height: 100px;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-container {
  display: flex;
}

.product-images {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 20px;
}

.product-images img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #ddd;
  padding: 5px;
}

.product-main img {
  width: 300px;
  height: auto;
}

.product-info {
  max-width: 400px;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  color: red;
  font-size: 20px;
  margin-bottom: 10px;
}

.product-old-price {
  text-decoration: line-through;
  color: #888;
  margin-left: 10px;
}

.product-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
}

.size-options button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  background: none;
}

.buy-button {
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

</style>
