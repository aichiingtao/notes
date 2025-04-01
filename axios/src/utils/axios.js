import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
    //  添加请求头信息
    headers: {'X-Requested-With': 'XMLHttpRequest'},
})

//   请求拦截器
axios.interceptors.request.use((config) => {
    return config;
})
export default instance

