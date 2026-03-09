<template>
  <Person v-if="isShow"></Person>
</template>

<script setup lang="ts">
import Person from './components/Person.vue'
import { ref } from 'vue'

let isShow = ref(true)
</script>
