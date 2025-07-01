<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core'
import { KMessage } from '@ksware/ksw-ux'
import type { Ref } from 'vue'

const emit = defineEmits<{
  (e: 'refresh'): void
}>()
const dark = useDark()
const toggleDark = useToggle(dark)

interface Version {
  text: string
  published: Ref<string[]>
  active: string
}

async function copyLink() {
  await navigator.clipboard.writeText(location.href)
  KMessage.success('Sharable URL has been copied to clipboard.')
}

function refreshView() {
  emit('refresh')
}
</script>

<template>
  <nav>
    <div m-0 flex items-center font-medium>
      <img
        relative
        mr-2
        ml-2
        h-24px
        v="mid"
        top="-2px"
        alt="logo"
        src="../assets/logo.svg"
      />
      <div flex="~ gap-1" items-center lt-sm-hidden>
        <div text-xl>Ksw Ux Playground</div>
      </div>
    </div>

    <div flex="~ gap-2" items-center>
      <div flex="~ gap-4" text-lg>
        <k-button
          class="nav-btn"
          i-ri-refresh-line
          title="Refresh sandbox"
          @click="refreshView"
        />
        <k-button
          class="nav-btn"
          i-ri-share-line
          title="Copy link"
          @click="copyLink"
        />
        <k-button
          class="nav-btn"
          i-ri-sun-line
          title="Toggle theme"
          dark:i-ri-moon-line
          disabled
          @click="toggleDark()"
        />
        <a
          href="https://github.com/element-plus/element-plus-playground"
          target="_blank"
          flex
        >
          <k-button class="nav-btn" title="View on GitHub" i-ri-github-fill />
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="less">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;

  .nav-btn {
    &:hover {
      background-color: rgb(59, 130, 246);
    }

    &.is-disabled {
      background-color: rgb(158, 156, 156);
      cursor: no-drop;
    }
  }
}
</style>
