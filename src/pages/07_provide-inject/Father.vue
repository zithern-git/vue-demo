<template>
  <div class="father">
    <h2>父组件</h2>
    <h4>钱包：{{ money }}</h4>
    <h4>车：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <Child></Child>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref, provide } from 'vue'

let money = ref(100)
let car = ref({
  brand: '奔驰',
  price: 100,
})

function changeMoney(val: number) {
  money.value -= val
}

provide('money', money)
provide('car', car)
provide('changeMoney', changeMoney)
</script>

<style scoped>
.father {
  background-color: #efcffc;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
