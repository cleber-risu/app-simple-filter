<script setup>
import { onMounted, reactive, ref } from 'vue'

import Search from './components/Search.vue'
import Chip from 'primevue/chip'

import data from './assets/json/data.json'

const users = reactive({ data: [] })
const highlight = ref('')
const highlightCount = ref(0)

onMounted(() => {
  users.data = data
})

function filterUsers(searched) {
  return users.data.filter((user) =>
    user.firstName.toLowerCase().includes(searched.searching.toLowerCase()),
  )
}

function highlightUser(searched) {
  if (!searched.searching.length) {
    highlight.value = ''
    users.data = data
    highlightCount.value = 0
    return
  }
  if (searched.type === 'search') {
    users.data = filterUsers(searched)
  } else {
    highlight.value = searched.searching
    highlightCount.value = filterUsers(searched).length
  }
}
</script>

<template>
  <h2>Simple Filter</h2>
  <Search @searching-user="highlightUser" />
  <div class="chip">
    <Chip
      :label="highlightCount.toString()"
      icon="pi pi-user"
      class="chip-highligth"
    />
  </div>
  <ul>
    <li
      v-for="user in users.data"
      :key="user.id"
      :class="{
        highlight:
          highlight.length > 0 &&
          user.firstName.toLowerCase().includes(highlight.toLowerCase()),
      }"
    >
      {{ user.firstName }} {{ user.lastName }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

ul li {
  background-color: aliceblue;
  color: black;

  padding: 5px;
  margin-right: 2px;
  margin-bottom: 5px;
  border: 1px solid #333;
}

.highlight {
  background-color: blueviolet;
  color: cornsilk;
}

.chip {
  margin-top: 10px;
}
</style>
