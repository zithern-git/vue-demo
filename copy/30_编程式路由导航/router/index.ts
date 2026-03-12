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
          // path: '/news/detail/:id/:title/:content?', // ?代表content是可选项，可传参或不传参
          path: 'detail',
          name: 'detail',
          component: Detail,
          // 第一种：将路由收到的所有params参数作为props传给路由组件
          // props: true,

          // 第二种：函数写法，可以自己决定将什么作为props给路由组件
          props(route) {
            return route.query
          },

          // 第三种：对象写法，可以自己决定将什么作为props给路由组件
          /* props: {
            id: 'xxx',
            title: 'xxx',
            content: 'xxx',
          }, */
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
