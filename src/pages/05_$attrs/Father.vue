<template>
  <div class="father">
    <h2>父组件</h2>
    <h4>a:{{ a }}</h4>
    <h4>a:{{ b }}</h4>
    <Child :a="a" :b="b" :c="c" :d="d" v-bind="{ x: 100, y: 200 }" :changeA="changeA"></Child>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'
let a = ref(1)
let b = ref(2)
let c = ref(3)
let d = ref(4)

function changeA(value: number) {
  a.value += value
}
</script>

<style scoped>
.father {
  background-color: #efcffc;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
