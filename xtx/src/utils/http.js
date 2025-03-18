import axios from 'axios'

const httpIndex = axios.create({
  baseURL: 'http://www.dedao.cn/pc',
  timeout: 5000,
})


axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default httpIndex
