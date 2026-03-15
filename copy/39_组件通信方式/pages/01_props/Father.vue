<template>
  <div class="father">
    <h2>父组件</h2>
    <div>父亲的车：{{ car }}</div>
    <div v-show="toy">孩子给的玩具：{{ toy }}</div>
    <Child :car="car" :sendToy="getToy"></Child>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'
let car = ref('奔驰')
let toy = ref('')

function getToy(val: string) {
  toy.value = val
}
</script>

<style scoped>
.father {
  background-color: #cfebfc;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
