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
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia'

const countStore = useCountStore()
// storeToRefs只会关注store中的数据，不会对方法进行ref包裹
// storeToRefs 是 Pinia 专属 API，仅提取 Store 中的响应式状态（state/getters） 并转 ref，自动忽略非响应式方法；
// toRefs 会把 Store 的所有属性（包括方法、内置 API）都转 ref，导致冗余且调用方法时需 .value，不符合直觉；
const { count } = storeToRefs(countStore)

let n = ref(1)

function add() {
  // 第一种修改数据的方式
  // countStore.count += n.value

  // 第二种修改数据的方式
  /* countStore.$patch({
    count: 666,
  }) */

  // 第三种修改数据的方式
  countStore.plus(n.value)
}

function minus() {
  countStore.count -= n.value
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
