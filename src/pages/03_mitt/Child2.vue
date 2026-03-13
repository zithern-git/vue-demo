<template>
  <div class="child">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4 v-show="toy">弟弟收到的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref, onUnmounted } from 'vue'
import emitter from '@/utils/emitter'

let computer = ref('联想')
let toy = ref('')
emitter.on('send-toy', (val: any) => {
  toy.value = val
})

onUnmounted(() => {
  emitter.off('send-toy')
})
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
