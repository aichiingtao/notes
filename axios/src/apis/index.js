import instance from '@/utils/axios.js'

export function Apple(account, password) {
    return instance({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}