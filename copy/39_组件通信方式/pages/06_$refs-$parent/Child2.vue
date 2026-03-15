<template>
  <div class="child">
    <h3>子组件2</h3>
    <h4>电脑：{{ pc }}</h4>
    <h4>书籍：{{ book }}本</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from 'vue'
let pc = ref('Mac')
let book = ref(3)
defineExpose({ pc, book })
</script>

<style scoped>
.child {
  background: #bcdbea;
  /* height: 120px; */
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
}
</style>
