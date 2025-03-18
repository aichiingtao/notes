import axios from 'axios'
import {Mountain} from '@/stores/login.js'
import { createApp } from 'vue';
import { createPinia } from 'pinia';

const app = createApp({});
const pinia = createPinia();
app.use(pinia);

const Sunshine = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})


const Peace = Mountain()
const {login} = Peace
const token = login.getItem('token')
axios.interceptors.request.use(function (config) {
  if (token){
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default Sunshine
