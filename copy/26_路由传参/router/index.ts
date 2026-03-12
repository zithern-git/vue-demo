import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      children: [
        {
          // path: 'detail',
          path: 'detail/:id/:title/:content',
          name: 'detail',
          component: Detail,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
