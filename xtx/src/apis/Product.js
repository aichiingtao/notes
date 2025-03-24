import Sunshine from '@/utils/xtx.js'
export function Product()  {
  return Sunshine({
    url:'/goods',
    method:'get',
    params:{
      id:4000914,
    }
  })
}
