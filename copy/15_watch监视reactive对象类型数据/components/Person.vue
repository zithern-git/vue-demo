<template>
  <div class="person">
    <h1>情况二：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改全部</button>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script setup name="Person">
import { reactive, watch } from 'vue'

let person = reactive({
  name: 'Tom',
  age: 18,
})

let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
})

function changeName() {
  person.name = 'Jerry'
}

function changeAge() {
  person.age++
}

function changePerson() {
  Object.assign(person, {
    name: 'Kim',
    age: 90,
  })
}

function test() {
  obj.a.b.c = 888
}

// 监视【reactive】定义的【对象类型】数据，隐式创建深层监听且无法关闭
watch(person, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
})

watch(obj, (newValue, oldValue) => {
  console.log('obj变化了', newValue, oldValue)
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
