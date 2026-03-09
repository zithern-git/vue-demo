<template>
  <div class="person">
    <h2>{{ person }}</h2>
    <h3 v-for="item in personList">{{ item.name }}</h3>
  </div>
</template>

<script setup name="Person" lang="ts">
import { type PersonInter, type Persons } from '@/types'

let person: PersonInter = {
  id: '36252201',
  name: 'Tom',
  age: 18,
}

/* let personList: Array<PersonInter> = [
  { id: '36252201', name: 'Tom', age: 18 },
  { id: '36252202', name: 'Kim', age: 25 },
  { id: '36252203', name: 'Jerry', age: 30 },
] */

let personList: Persons = [
  { id: '36252201', name: 'Tom', age: 18 },
  { id: '36252202', name: 'Kim', age: 25 },
  { id: '36252203', name: 'Jerry', age: 30 },
]
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
