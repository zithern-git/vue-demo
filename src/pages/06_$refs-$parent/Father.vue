<template>
  <div class="father">
    <h2>父组件</h2>
    <h4>房产：{{ house }}</h4>
    <button @click="changeToy">修改子组件1的玩具</button>
    <button @click="changePC">修改子组件2的PC</button>
    <button @click="changeBook($refs)">修改子组件的书籍</button>
    <Child1 ref="c1"></Child1>
    <Child2 ref="c2"></Child2>
  </div>
</template>

<script setup lang="ts" name="Father">
import { k } from 'vue-router/dist/router-CWoNjPRp.mjs'
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { ref, reactive } from 'vue'

let house = ref(4)
let c1 = ref()
let c2 = ref()

// 注意点：当访问obj.c的时候，底层会自动读取value属性，因为c是在obj这个响应式对象中
/* 测试用例
let obj = reactive({
  a: 1,
  b: 2,
  c: ref(3),
})
console.log(obj.a) // 1
console.log(obj.b) // 2
console.log(obj.c) // 3 */

function changeToy() {
  c1.value.toy = '玲娜贝儿'
}

function changePC() {
  c2.value.pc = 'Lenovo'
}

function changeBook(refs: any) {
  for (let key in refs) {
    refs[key].book += 3
  }
}

defineExpose({ house })
</script>

<style scoped>
.father {
  background-color: #f7fccf;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
