<template>
  <Person :list="personList"></Person>
</template>

<script setup lang="ts">
import Person from './components/Person.vue'
import { type Persons } from '@/types'
import { ref } from 'vue'

let personList = ref<Persons>([
  { id: '36252201', name: 'Tom', age: 12 },
  { id: '36252202', name: 'Kim', age: 15 },
  { id: '36252203', name: 'Jerry', age: 23 },
])
</script>
