import axios from 'axios'


const instance = axios.create({
    url:'https://pcapi-xiaotuxian-front-devtest.itheima.net/goods',
    timeout: 1000
})
export default instance

