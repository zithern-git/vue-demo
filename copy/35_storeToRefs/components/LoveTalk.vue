<template>
  <div class="talk-box">
    <button @click="getTalk">获取一句土味情话</button>
    <ul id="list-container">
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useTalkStore } from '@/store/talk'
import { storeToRefs } from 'pinia'

const talkStore = useTalkStore()
let { talkList } = storeToRefs(talkStore)

function getTalk() {
  talkStore.getATalk()
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
