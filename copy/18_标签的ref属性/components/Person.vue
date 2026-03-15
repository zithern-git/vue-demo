<template>
  <div class="person">
    <h1>China</h1>
    <h2 ref="city">Beijing</h2>
    <h2>Shanghai</h2>
    <h2>Guangzhou</h2>
    <button @click="getCity">get city</button>
  </div>
</template>

<script setup name="Person">
import { ref } from 'vue'

let city = ref()

function getCity() {
  // let x = document.getElementById('city')
  console.log(city.value) // [object HTMLHeadingElement]
}

// 可以通过 defineExpose 编译器宏来显式指定在 <script setup> 组件中要暴露出去的属性
defineExpose({ city })
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
