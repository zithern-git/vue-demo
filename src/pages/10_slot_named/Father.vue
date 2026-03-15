<template>
  <div class="father">
    <h1>父组件</h1>
    <div class="content">
      <Category title="游戏列表">
        <template v-slot:s1>
          <h2>games list</h2>
        </template>
        <template v-slot:s2>
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Category>

      <Category>
        <template v-slot:s1>
          <h2>photos</h2>
        </template>
        <template #s2>
          <img :src="imgURL" alt="" />
        </template>
      </Category>

      <Category>
        <template v-slot:s1>
          <h2>video</h2>
        </template>
        <template #s2>
          <video :src="videoURL" controls></video>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts">
import Category from './Category.vue'
import { ref } from 'vue'

let games = ref([
  { id: '36252201', name: '马里奥' },
  { id: '36252202', name: '魂斗罗' },
  { id: '36252203', name: '马年大吉' },
  { id: '36252204', name: '心想事成' },
])

let imgURL = ref(
  'https://gips2.baidu.com/it/u=195724436,3554684702&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
)

let videoURL = ref('https://haokan.baidu.com/v?vid=2697041759430912240&tab=recommend')
</script>

<style scoped>
.father {
  background-color: #aae0af;
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

h2 {
  font-size: 15px;
  text-align: center;
  background-color: #ed8e12;
}
</style>
