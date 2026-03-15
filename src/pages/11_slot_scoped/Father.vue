<template>
  <div class="father">
    <h2>父组件</h2>
    <div class="content">
      <Game>
        <template v-slot:s="params">
          <ul>
            <li v-for="game in params.games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <template #s="params">
          <ol>
            <li v-for="game in params.games" :key="game.id">{{ game.name }}</li>
          </ol>
        </template>
      </Game>
      <Game>
        <template #s="{ games }">
          <h4 v-for="game in games" :key="game.id">{{ game.name }}</h4>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts">
import Game from './Game.vue'
</script>

<style scoped>
.father {
  background-color: #e2ecbd;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
}
.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>
