<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emit('custom-event', toy)">send</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'

let toy = ref('奥特曼')

const emit = defineEmits(['custom-event'])
</script>

<style scoped>
.child {
  background: #bdf1b0;
  /* height: 120px; */
  border-radius: 8px;
  padding: 10px;
}
</style>
