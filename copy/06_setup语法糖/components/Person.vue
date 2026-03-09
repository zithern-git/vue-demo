<template>
  <div class="person">
    <h2>姓名：{{ count.name }}</h2>
    <h2>年龄：{{ count.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">显示电话</button>
  </div>
</template>

<script setup name="Person">
import { ref } from 'vue'

const count = ref({ name: 'Jerry', age: 18 })
function changeName() {
  count.value.name = 'Tom'
}
function changeAge() {
  count.value.age++
}
function showTel() {
  alert('13888888888')
}
</script>

<style>
.person {
  background-color: #4759a1;
}
button {
  margin: 0 5px;
}
</style>
