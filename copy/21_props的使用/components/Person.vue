<template>
  <div class="person">
    <ul>
      <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
    </ul>
  </div>
</template>

<script setup name="Person" lang="ts">
// import { defineProps, withDefaults } from 'vue'
import { type Persons } from '@/types'

// 只接收list
// defineProps(['list'])

// 接收list + 限制类型
// defineProps<{ list: Persons }>()

// 接收list + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [
    { id: '36252201', name: 'p1', age: 32 },
    { id: '36252202', name: 'p2', age: 45 },
    { id: '36252203', name: 'p3', age: 63 },
  ],
})
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
