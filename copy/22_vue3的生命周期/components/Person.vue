<template>
  <div class="person">
    <h2>current sum: {{ sum }}</h2>
    <button @click="add">+1</button>
  </div>
</template>

<script setup name="Person" lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

let sum = ref(0)

function add() {
  sum.value++
}

onBeforeMount(() => {
  console.log('挂载前')
})

onMounted(() => {
  console.log('挂载完毕')
})

onBeforeUpdate(() => {
  console.log('更新前')
})

onUpdated(() => {
  console.log('更新完毕')
})

onBeforeUnmount(() => {
  console.log('卸载前')
})

onUnmounted(() => {
  console.log('卸载完毕')
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
