<template>
  <div class="person">
    firstName:<input type="text" v-model="firstName" /> <br />
    lastName:<input type="text" v-model="lastName" /> <br />
    fullname:<span>{{ fullName }}</span
    ><br />
    <button @click="changeFullName">change fullname to Jerry-White</button><br />
    <input type="radio" value="male" name="gender" v-model="gender" /> male
    <input type="radio" value="female" name="gender" v-model="gender" /> female
  </div>
</template>

<script setup name="Person">
import { ref, computed } from 'vue'

let firstName = ref('Tom')
let lastName = ref('Green')
let gender = ref('male')

let fullName = computed({
  get() {
    return firstName.value + '-' + lastName.value
  },
  set(val) {
    console.log('@@', val)
    ;[firstName.value, lastName.value] = val.split('-')
  },
})

function changeFullName() {
  console.log('**', 123)
  fullName.value = 'Jerry-White'
}
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
