<template>
  <div class="grand-child">
    <h2>孙组件</h2>
    <h4>钱包：{{ money }}</h4>
    <h4>车：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <button @click="changeMoney(5)">修改爷爷的钱包</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
import { inject } from 'vue'

type changeMoneyFn = (val: number) => void

let money = inject('money', 666)
let car = inject('car', { brand: '宝马', price: 80 })
let changeMoney = inject<changeMoneyFn>('changeMoney', (val: number) => {})
</script>

<style scoped>
.grand-child {
  background-color: #eff3ab;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
