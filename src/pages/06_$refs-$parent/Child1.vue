<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>书籍：{{ book }}本</h4>
    <button @click="minusHouse($parent)">减少父组件一套房</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue'
let toy = ref('奥特曼')
let book = ref(6)

function minusHouse(parent: any) {
  parent.house -= 1
}

defineExpose({ toy, book })
</script>

<style scoped>
.child {
  background: #eabce8;
  /* height: 120px; */
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
}
</style>
