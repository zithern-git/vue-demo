<template>
  <ul>
    <li>编码：{{ id }}</li>
    <li>标题：{{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
defineProps(['id', 'title', 'content'])
</script>
