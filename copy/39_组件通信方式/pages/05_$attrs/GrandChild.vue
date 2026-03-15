<template>
  <div class="grand-child">
    <h2>孙组件</h2>
    <!-- a不会有输出 -->
    <h4>a:{{ a }}</h4>
    <h4>b:{{ b }}</h4>
    <h4>c:{{ c }}</h4>
    <h4>d:{{ d }}</h4>
    <h4>x:{{ x }}</h4>
    <h4>y:{{ y }}</h4>
    <button @click="changeA(3)">change</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'changeA'])
</script>

<style scoped>
.grand-child {
  background-color: #eff3ab;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
