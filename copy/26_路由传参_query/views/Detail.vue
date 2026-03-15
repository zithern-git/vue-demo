<template>
  <ul>
    <li>编码：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
const route = useRoute()
const { query } = toRefs(route)
</script>
