<template>
  <div>
    <h2>这是News</h2>
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <RouterLink
          replace
          :to="{
            name: 'detail',
            query: { id: news.id, title: news.title, content: news.content },
          }"
          >{{ news.title }}</RouterLink
        >
      </li>
    </ul>
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { onMounted, onUnmounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()

/* //❌ 错误写法 interface的首字母大写
// Interface NewsInter {
//正确写法 interface的首字母小写
interface NewsInter {
  id: string
  title: string
  content: string
} */

//❌错误写法 type的首字母大写
// Type NewsType {
//正确写法 type 的首字母小写
type NewsInter = {
  id: string
  title: string
  content: string
}

function showNewsDetail(news: NewsInter) {
  router.push({
    name: 'detail',
    query: {
      id: news.id,
      title: news.title,
      content: news.content,
    },
  })
}

const newsList = [
  { id: '36252201', title: 'HTML', content: 'div' },
  { id: '36252202', title: 'CSS', content: 'flex' },
  { id: '36252203', title: 'JavaScript', content: 'const' },
]

onMounted(() => {
  console.log('onMounted')
})

onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
