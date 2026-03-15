<template>
  <div class="child">
    <h3>子组件</h3>
    <div>孩子的玩具：{{ toy }}</div>
    <div>父亲给孩子的车：{{ car }}</div>
    <!-- <button @click="props.sendToy(toy)">孩子把玩具送给父亲</button> -->
    <button @click="sendToy(toy)">孩子把玩具送给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'

let toy = ref('奥特曼')
// const props = defineProps(['car', 'sendToy'])
defineProps(['car', 'sendToy'])
</script>

<style scoped>
.child {
  background: #f5f389;
  /* height: 120px; */
  border-radius: 8px;
  padding: 10px;
}
</style>
