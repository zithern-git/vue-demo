<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>书籍：{{ book }}本</h4>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue'
let toy = ref('奥特曼')
let book = ref(6)
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
