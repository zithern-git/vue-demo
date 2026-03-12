<template>
  <ul>
    <li>编码：{{ params.id }}</li>
    <li>标题：{{ params.title }}</li>
    <li>内容：{{ params.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
const route = useRoute()
const { params } = toRefs(route)
</script>
