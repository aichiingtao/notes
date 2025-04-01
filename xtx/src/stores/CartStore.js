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

  const del = () => {

  }


  return{
    cartList,
    addCart,
  }
},
  {
    //  开启持久储存
    persist:true
  })
