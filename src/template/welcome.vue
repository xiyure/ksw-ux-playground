<template>
  <h1 class="initial-title">Welcome to KSW-UX Playground</h1>
  <p class="input-example">
    <k-input v-model="msg" />
  </p>
  <p class="output-text">Input Content： <em>{{ msg }}</em></p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<style lang="less" scoped>
.initial-title {
  color: firebrick;
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0 20px 0;
}

.input-example {
  margin: 20px 0;
}

.output-text {
  font-weight: bold;

  em {
    font-weight: normal;
  }
}
</style>
