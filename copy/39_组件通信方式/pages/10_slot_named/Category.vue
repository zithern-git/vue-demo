<template>
  <div class="category">
    <!-- 具名插槽 -->
    <slot name="s1"></slot>
    <slot name="s2"></slot>
  </div>
</template>

<script setup lang="ts" name="" Category>
defineProps(['title'])
</script>
<style scoped>
.category {
  background-color: #eb96e1;
  border: 1px solid;
  border-radius: 5px;
  width: 150px;
  height: 200px;
}
</style>
