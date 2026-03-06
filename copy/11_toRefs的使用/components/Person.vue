<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}</h2>
    <button @click="changeBrand">修改汽车品牌</button>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeCar">修改汽车</button>
    <br />
    <h2>当前求和为{{ sum }}</h2>
    <button @click="changeSum">点我和+1</button>
  </div>
</template>

<script setup name="Person">
import { reactive, ref, toRefs } from 'vue'

let car = reactive({
  brand: '奔驰',
  price: 100,
})

let sum = ref(0)

function changeBrand() {
  car.brand = '宝马'
}

function changePrice() {
  car.price += 10
}

function changeCar() {
  let { brand, price } = toRefs(car)
  brand.value = '宝马'
  price.value = 95
}

function changeSum() {
  sum.value++
}
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
