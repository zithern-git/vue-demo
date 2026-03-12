import { createApp } from 'vue'
import App from './App.vue'

// 第一步：引入 pinia （先执行：npm i pinia）
import { createPinia } from 'pinia'

const app = createApp(App)
// 第二步：创建 pinia
const pinia = createPinia()
// 第三步：安装 pinia
app.use(pinia)

app.mount('#app')
