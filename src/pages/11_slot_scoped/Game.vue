<template>
  <div class="game">
    <h2>游戏列表</h2>
    <slot name="s" :games="games"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let games = [
  { id: '36252201', name: '马里奥' },
  { id: '36252202', name: '魂斗罗' },
  { id: '36252203', name: '马年大吉' },
  { id: '36252204', name: '心想事成' },
]
</script>

<style scoped>
.game {
  width: 150px;
  background-color: #e78484;
}

h2 {
  font-size: 15px;
  text-align: center;
  background-color: #ed8e12;
}
</style>
