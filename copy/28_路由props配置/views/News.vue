<template>
  <div>
    <h2>这是News</h2>
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{
          news.title
        }}</RouterLink> -->
        <!-- 第二种写法 -->
        <RouterLink
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
