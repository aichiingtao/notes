import instance from '@/utils/axios.js'

export function Apple(){
    return instance({
        url:'/login',
        method: 'post',
        data:{
            account:13123456789,
            password:123456,
        }
    })
}