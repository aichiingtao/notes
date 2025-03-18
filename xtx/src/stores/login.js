import { Umbrella } from '@/apis/login.js'
import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import { onMounted } from 'vue';

export const Mountain = defineStore('counter',() => {

  const login = ref[{}]
  const Ocean = async () => {
    const res = await Umbrella()
    login.value = res.data.result.token
  }
  onMounted(() => Ocean())

  return{
    login,
    Ocean
  }

})



