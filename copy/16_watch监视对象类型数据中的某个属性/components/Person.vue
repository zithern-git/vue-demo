<template>
  <div class="person">
    <h1>情况四：监视ref或reactive定义的【对象类型】数据中的某个属性</h1>
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
import { ref, reactive, watch } from 'vue'

let person = reactive({
  name: 'Tom',
  age: 18,
})

let obj = ref({
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
  obj.value.a.b.c = 888
}

// 监视ref或reactive定义的【对象类型】数据中的某个属性
watch([() => person.name, () => person.age], (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
})

// ！！！要写obj.value.a.b.c，不是写obj.a.b.c，以及配置{ deep: true },
watch(
  () => obj.value.a.b.c,
  (newValue, oldValue) => {
    console.log('obj变化了', newValue, oldValue)
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
