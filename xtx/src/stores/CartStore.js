import { defineStore } from 'pinia'
import {ref} from 'vue'
export const uesCartStore = defineStore('Cart',() => {
  const cartList = ref([])
  const addCart = {

  }

  return{
    cartList,
    addCart,
  }

})
