<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}</h2>
    <button @click="changePrice">修改价格</button>
    <br />
    <h2>游戏列表</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏名称</button>
  </div>
</template>

<script setup name="Person">
import { ref } from 'vue'

let car = ref({
  brand: '奔驰',
  price: 100,
})
console.log('@@@', car)

function changePrice() {
  car.value.price += 10
}

let games = ref([
  { id: 'aysd01', name: '王者荣耀' },
  { id: 'aysd02', name: '原神' },
  { id: 'aysd03', name: '三国志' },
])

function changeFirstGame() {
  games.value[0].name = 'switch'
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
