<template>
  <div class="person">
    <h2>水温：{{ temp }}</h2>
    <h2>水位：{{ height }}</h2>
    <button @click="changeTemp">修改水温</button>
    <button @click="changeHeight">修改水位</button>
    <button @click="changeAll">修改全部</button>
  </div>
</template>

<script setup name="Person">
import { ref, watchEffect } from 'vue'

let temp = ref(10)
let height = ref(0)

function changeTemp() {
  temp.value += 5
}

function changeHeight() {
  height.value++
}

function changeAll() {
  changeTemp()
  changeHeight()
}

watchEffect(() => {
  if (temp.value >= 30 || height.value >= 5) {
    console.log(temp.value, height.value)
  }
})
</script>

<style>
.person {
  background-color: #bbc3e2;
  margin: 0 auto;
}
button {
  margin: 0 5px;
}
</style>
