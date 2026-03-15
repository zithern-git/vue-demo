<template>
  <div class="father">
    <h2>父组件</h2>
    <div class="content">
      <Category title="游戏列表">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="美食地图">
        <img :src="imgURL" alt="" />
      </Category>
      <Category title="影视聚集">
        <video :src="videoURL" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts">
import Category from './Category.vue'
import { ref } from 'vue'

let games = ref([
  { id: '36252201', name: '王者荣耀' },
  { id: '36252202', name: '斗罗大陆' },
  { id: '36252203', name: '大吉大利' },
  { id: '36252204', name: '今晚吃鸡' },
])

let imgURL = ref(
  'https://gips2.baidu.com/it/u=195724436,3554684702&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
)

let videoURL = ref('https://haokan.baidu.com/v?vid=2697041759430912240&tab=recommend')
</script>

<style scoped>
.father {
  background-color: #c1c0c4;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>
