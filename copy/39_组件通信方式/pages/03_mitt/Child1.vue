<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emitter.emit('send-toy', toy)">哥哥给弟弟玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue'
import emitter from '@/utils/emitter'

let toy = ref('奥特曼')
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
