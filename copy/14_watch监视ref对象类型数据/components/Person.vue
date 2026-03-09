<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改全部</button>
  </div>
</template>

<script setup name="Person">
import { ref, watch } from 'vue'

let person = ref({
  name: 'Tom',
  age: 18,
})
function changeName() {
  person.value.name = 'Jerry'
}

function changeAge() {
  person.value.age++
}

function changePerson() {
  person.value = {
    name: 'Kim',
    age: 90,
  }
}

// 监视【ref】定义的【对象类型】数据,监视的是地址值，若想监视对象内部属性的变化，需要手动开启深度监视
// watch的第一个参数：被监视的数据
// watch的第二个参数：监视的回调
// watch的第三个参数：配置对象（deep、immediate、flush、onTrack / onTrigger、once）
watch(
  person,
  (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
  },
  { deep: true },
)
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
