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
        <i
          class="nav-btn"
          i-ri-refresh-line
          title="Refresh sandbox"
          @click="refreshView"
        />
        <i
          class="nav-btn"
          i-ri-share-line
          title="Copy link"
          @click="copyLink"
        />
        <i
          class="nav-btn"
          i-ri-sun-line
          title="Toggle theme(to be developed)"
          dark:i-ri-moon-line
          @click="toggleTheme"
        />
        <a
          href="https://github.com/xiyure/ksw-ux-playground"
          target="_blank"
          flex
        >
          <i class="nav-btn" title="View on GitHub" i-ri-github-fill />
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { setTheme, getCurrentTheme, KMessage, type Theme } from '@ksware/ksw-ux'

const emit = defineEmits<{
  (e: 'refresh'): void,
  (e: 'toggle-theme', theme: Theme): void
}>()

function toggleTheme() {
  const theme = getCurrentTheme() === 'dark'? 'light' : 'dark'
  setTheme(theme, true);
  emit('toggle-theme', theme);
}

async function copyLink() {
  await navigator.clipboard.writeText(location.href)
  KMessage.success('Sharable URL has been copied to clipboard.')
}

function refreshView() {
  emit('refresh')
}
</script>

<style lang="less">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;

  .nav-btn {
    cursor: pointer;

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
