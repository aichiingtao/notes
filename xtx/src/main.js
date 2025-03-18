
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

//  引入初始化样式文件
import '@/style/common.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.use(ElementPlus)


