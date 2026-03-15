// 创建一个路由器，并暴露出去

// 1.引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import About from '../pages/About.vue'

// 创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes: [
    // 一个一个路由
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
