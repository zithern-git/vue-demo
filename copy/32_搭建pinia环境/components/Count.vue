<template>
  <div class="count-box">
    <h2>当前求和为：{{ count }}</h2>
    <select class="select-box" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue'
let count = ref(0)
let n = ref(1)

function add() {
  count.value += n.value
}

function minus() {
  count.value -= n.value
}
</script>

<style scoped>
.count-box {
  width: 100%;
  height: 150px;
  border: 1px solid;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #d1edf5;
}

h2 {
  margin: 20px;
}

.select-box {
  margin: 20px;
}

button {
  margin-left: 20px;
}
</style>
