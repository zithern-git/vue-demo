<template>
  <div class="father">
    <h2>父组件</h2>
    <h4>用户名：{{ userName }}</h4>
    <h4>密码：{{ password }}</h4>
    <!-- v-model用在HTML标签上 -->
    <!-- <input v-model="userName" /> -->
    <!-- <input :value="userName" @input="userName = ($event.target as HTMLInputElement)?.value || ''" /> -->
    <!-- $event 是 Vue 为原生 DOM 事件提供的内置特殊变量，它代表「触发事件时的原生事件对象（Event） -->

    <!-- v-model用在组件标签上 -->
    <!-- 使用组件库的组件时，可以直接使用v-model进行组件通信 -->
    <!-- <Test v-model="userName"></Test> -->
    <!-- <Test :modelValue="userName" @update:modelValue="userName = $event"></Test> -->
    <!-- $event是子组件触发 update:modelValue 事件时传递的参数（也就是子组件输入框的最新值） -->

    <!-- 给modelValue换名字 -->
    <Test v-model:yonghuming="userName" v-model:mima="password"></Test>
  </div>
</template>

<script setup lang="ts" name="Father">
import Test from './Test.vue'
import { ref } from 'vue'

let userName = ref('Tom')
let password = ref('123456')
</script>

<style scoped>
.father {
  background-color: #efcffc;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
