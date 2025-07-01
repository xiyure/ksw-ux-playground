<script setup lang="ts">
import { ElementPlus } from '@element-plus/icons-vue'
import { version as epVersion } from 'element-plus'
import { ref, version as vueVersion } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <k-input v-model="msg" />
</template>
