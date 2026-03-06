<template>
  <div class="person">
    firstname:<input type="text" v-model="firstname" /> <br />
    lastname:<input type="text" v-model="lastname" /> <br />
    firstname + lastname: <span>{{ firstname }}-{{ lastname }}</span
    ><br />
    <input type="radio" value="male" name="gender" v-model="gender" /> male
    <input type="radio" value="female" name="gender" v-model="gender" /> female
  </div>
</template>

<script setup name="Person">
import { ref } from 'vue'

let firstname = ref('Tom')
let lastname = ref('Green')
let gender = ref('male')
</script>

<style>
.person {
  background-color: #bbc3e2;
  margin: 0 auto;
}
button {
  margin: 0 5px;
}
</style>
