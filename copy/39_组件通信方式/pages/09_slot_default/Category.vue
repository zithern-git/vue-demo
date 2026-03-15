<template>
  <div class="category">
    <h2>{{ title }}</h2>
    <!-- 默认插槽 -->
    <!-- <slot></slot> -->
    <slot name="default"></slot>
  </div>
</template>

<script setup lang="ts" name="" Category>
defineProps(['title'])
</script>
<style scoped>
.category {
  background-color: #a3dce6;
  border: 1px solid;
  border-radius: 5px;
  width: 150px;
  height: 200px;
}

h2 {
  font-size: 15px;
  text-align: center;
  background-color: #ed8e12;
}
</style>
