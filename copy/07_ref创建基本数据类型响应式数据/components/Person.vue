<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">显示电话</button>
  </div>
</template>

<script setup name="Person">
import { ref } from 'vue'

// const count = ref({ name: 'Jerry', age: 18 })
let name = ref('Jerry')
console.log('name:', name)

let age = ref(18)

function changeName() {
  name.value = 'Tom'
}
function changeAge() {
  age.value++
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
