<template>
  <div class="father">
    <h2>父组件</h2>
    <h4 v-show="toy">子给父的玩具：{{ toy }}</h4>
    <Child @custom-event="getToy"></Child>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'

let toy = ref('')

function getToy(val: string) {
  toy.value = val
}
</script>

<style scoped>
.father {
  background-color: #f8f8aa;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
