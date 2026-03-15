<template>
  <header>
    <h1>VUE3 组件通信方式</h1>
  </header>
  <hr />
  <div class="main">
    <ul class="main-nav">
      <li>
        <RouterLink
          :to="{
            path: '/props',
            query: {},
          }"
          >props</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/event',
            query: {},
          }"
          >自定义事件</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/mitt',
            query: {},
          }"
          >mitt</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/model',
            query: {},
          }"
          >v-model</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/attrs',
            query: {},
          }"
          >$attrs</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/refs',
            query: {},
          }"
          >$refs、$parent</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/provide',
            query: {},
          }"
          >provide、inject</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/pinia',
            query: {},
          }"
          >pinia</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/slot1',
            query: {},
          }"
          >slot1</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/slot2',
            query: {},
          }"
          >slot2</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/slot3',
            query: {},
          }"
          >slot3</RouterLink
        >
      </li>
    </ul>
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  height: 60px;
  text-align: center;
  line-height: 60px;
}
.main {
  display: flex;
}

.main-nav {
  width: 200px;
  border: 1px solid;
  border-radius: 5px;
  margin-right: 10px;
}

.main-content {
  width: 100%;
  margin: 10px;
}
</style>
