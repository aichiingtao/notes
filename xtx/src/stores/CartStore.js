import { defineStore } from 'pinia'
import { ref } from 'vue'

export const uesCartStore = defineStore('Cart',() => {
  const cartList = ref([])
  const addCart = (Cart) => {
    const item = cartList.value.findIndex(item => item.id === Cart.id)

    if(item !== -1){
      cartList.value[item].count +=1
    }
    else {
      cartList.value.push(Cart)
    }

  }

  const del = (id) => {
    const idx = cartList.value.findIndex(item => id !== item.id)
    //  splice 删除元素，
    cartList.value.splice(idx,1)

  }


  return{
    cartList,
    addCart,
    del,
  }
},
  {
    //  开启持久储存
    persist:true
  })
