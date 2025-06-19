
<template>
  <h1>{{ msg }}</h1>
  <el-input v-model="text"></el-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello World')
const text = ref('')
</script>
