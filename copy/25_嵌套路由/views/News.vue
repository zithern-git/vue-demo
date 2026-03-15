<template>
  <div>
    <h2>这是News</h2>
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink :to="{ path: '/news/detail' }">{{ news.title }}</RouterLink>
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
  { id: '36252201', title: 'HTML' },
  { id: '36252201', title: 'CSS' },
  { id: '36252201', title: 'JavaScript' },
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
