
<template>
  <h1>{{ msg }}</h1>
  <k-input v-model="msg" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello World')
const text = ref('')
</script>
