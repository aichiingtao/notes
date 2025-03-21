import {defineStore} from 'pinia'
import {ref} from 'vue'
import {Umbrella} from '@/apis/login.js'

export const useUserStore = defineStore('user', () => {

    const userInfo = ref({})

    const getUserInfo = async ({account, password}) => {
      //   在调用Umbrella这个函数时，把账号跟密码传过来
      const res = await Umbrella({account, password})
      userInfo.value = res.data.result
    }

    //  退出时清楚用户信息
  const quitLogin = () =>{
    userInfo.value = {}
  }

    return {
      getUserInfo,
      userInfo,
      quitLogin,

    }

  },
  {
    //  开启持久化，数据可以储存起来，次持久化要安装插件
  persist:true
})
