<template>
  <div class="talk-box">
    <button @click="getTalk">获取一句土味情话</button>
    <ul id="list-container">
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { ref } from 'vue'
import { nanoid } from 'nanoid'

let talkList = ref([
  { id: '36252201', title: '1234456789' },
  { id: '36252202', title: 'qwertyutyu' },
  { id: '36252203', title: '@#$%^&%^&*$' },
])

function getTalk() {
  /*  const liEle = document.createElement('li')
  liEle.textContent = '这是一个新创建的li元素'
  const ulEle = document.getElementById('list-container')
  ulEle?.appendChild(liEle) */

  let obj = { id: nanoid(), title: '这是一个新创建的li元素' }
  talkList.value.unshift(obj)
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
