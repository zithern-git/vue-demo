<template>
  <div class="child">
    <h2>子组件</h2>
    <h4>a:{{ a }}</h4>
    <GrandChild v-bind="$attrs"></GrandChild>
  </div>
</template>

<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue'

defineProps(['a'])
</script>

<style scoped>
.child {
  background-color: #bce2f7;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
