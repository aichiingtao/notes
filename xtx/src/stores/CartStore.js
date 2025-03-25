import { defineStore } from 'pinia'
import {ref} from 'vue'
export const uesCartStore = defineStore('Cart',() => {
  const cartList = ref([])
  const addCart = (Cart) => {
    cartList.value.push(Cart)
    // const item = addCart.value.find(item => cartList)

  }
  console.log(cartList,11)
  return{
    cartList,
    addCart,
  }

})
