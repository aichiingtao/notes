import  Sunshine from '@/utils/xtx.js'

export function Umbrella({account, password}){
  // 接收用户的账号密码
   return Sunshine({
     url:'/login',
     method: 'post',
     // 请求时携带的参数
     data:{
       account,
       password
     }
   })
}
