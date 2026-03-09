<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">sum + 1</button>
  </div>
</template>

<script setup name="Person">
import { ref, watch } from 'vue'

let sum = ref(0)

function changeSum() {
  sum.value++
}

// 注意：watch里的sum不用写成sum.value
watch(sum, (newValue, oldValue) => {
  console.log('sum变化了', newValue, oldValue)
})
</script>

<style>
.person {
  background-color: #bbc3e2;
  margin: 0 auto;
}
button {
  margin: 0 5px;
}
</style>
