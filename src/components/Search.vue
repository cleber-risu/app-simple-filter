<script setup>
import { ref } from 'vue'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const searched = ref('')

const emit = defineEmits(['searching-user'])

function searching(event) {
  let type = 'highligth'
  if (event.keyCode === 13 || event.type === 'submit') {
    type = 'search'
  }
  emit('searching-user', { type, searching: searched.value })
}

function highlighting(event) {
  if (event.keyCode !== 13 && event.type !== 'submit') {
    emit('searching-user', { type: 'highlight', searching: searched.value })
  }
}
</script>

<template>
  <form @submit.prevent="searching">
    <InputText
      v-model.trim="searched"
      placeholder="Search..."
      class="p-inputtext-lg"
      @input="highlighting"
    />

    <Button
      type="submit"
      label="Search"
      icon="pi pi-search"
      iconPos="left"
      class="p-button-secondary p-button-lg button-search"
    />
  </form>
</template>

<style scoped>
.button-search {
  margin-left: 5px;
}
</style>
