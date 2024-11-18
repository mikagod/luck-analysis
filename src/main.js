import { createApp } from 'vue'
import '@/assets/styles/global.css' // 全局样式
import App from '@/App.vue'
import router from '@/router'
import TopNavigator from '@/components/top-box/top.vue'
import Botton from '@/components/botton-box/botton.vue' 
import { createPinia } from 'pinia';

const app = createApp(App) // app实例
const pinia = createPinia() // pinia实例

    app.component('TopNavigator', TopNavigator)
    app.component('Botton', Botton)

    app.use(pinia) // 使用pinia
    app.use(router) // 使用路由
    app.mount('#app') // 挂载
