<template>
  <div class="talk-box">
    <button @click="getTalk">获取一句土味情话</button>
    <ul id="list-container">
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useTalkStore } from '@/store/talk'
import { nanoid } from 'nanoid'

const talkStore = useTalkStore()

function getTalk() {
  let obj = { id: nanoid(), title: '这是一个新创建的li元素' }
  talkStore.talkList.unshift(obj)
}
</script>

<style scoped>
.talk-box {
  width: 100%;
  /* height: 300px; */
  border: 1px solid;
  border-radius: 10px;
  background-color: #efef4e;
}

button {
  margin: 20px;
}
</style>
