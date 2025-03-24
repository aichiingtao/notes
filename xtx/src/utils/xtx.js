import axios from 'axios'
import {Mountain} from '@/stores/login.js'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {ElMessage} from 'element-plus';
import 'element-plus/es/components/message/style/css'
import {useUserStore} from '@/stores/user.js'

const app = createApp({});
const pinia = createPinia();
app.use(pinia);

const Sunshine = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})


//  请求拦截
axios.interceptors.request.use(function (config) {
  const Peace = Mountain()
  const userStore = useUserStore()
  const token = userStore.token
  //  把token 拼接到每个接口的头部，
  if (token){
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


//  响应拦截
axios.interceptors.response.use(function (response) {
  ElMessage({
    type: 'warning',
    message: 'Congrats, this is a success message.'
  })
  return response;
});

export default Sunshine
