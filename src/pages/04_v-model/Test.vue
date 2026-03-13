<template>
  <input
    type="text"
    :value="yonghuming"
    @input="emit('update:yonghuming', ($event.target as HTMLInputElement)?.value || '')"
  />
  <br />
  <input
    type="text"
    :value="mima"
    @input="emit('update:mima', ($event.target as HTMLInputElement)?.value || '')"
  />
</template>

<script setup lang="ts" name="Test">
defineProps(['yonghuming', 'mima'])
const emit = defineEmits(['update:yonghuming', 'update:mima'])
</script>
