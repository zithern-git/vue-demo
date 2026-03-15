<template>
  <div class="father">
    <h2>父组件</h2>
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
</script>

<style scoped>
.father {
  background-color: #f7fccf;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
