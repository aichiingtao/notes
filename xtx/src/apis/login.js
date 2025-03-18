import  Sunshine from '@/utils/xtx.js'
export function Umbrella(){
   return Sunshine({
     url:'/login',
     method: 'post',
     data:{
       account:'13123456789',
       password:123456,
     }
   })
}
