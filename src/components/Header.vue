<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core'
import { KMessage } from '@ksware/ksw-ux';

const emit = defineEmits<{
  (e: 'refresh'): void
}>()

const dark = useDark()
const toggleDark = useToggle(dark)

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
    <div leading="[var(--nav-height)]" m-0 flex items-center font-medium>
      <img
        relative
        mr-2
        h-24px
        v="mid"
        top="-2px"
        alt="logo"
        src="../assets/logo.svg"
      />
      <div flex="~ gap-1" items-center lt-sm-hidden>
        <div text-xl>KswUx Playground</div>
      </div>
    </div>

    <div flex="~ gap-2" items-center>
      <div flex="~ gap-4" text-lg>
        <button
          i-ri-refresh-line
          title="Refresh sandbox"
          hover:color-primary
          @click="refreshView"
        />
        <button
          i-ri-share-line
          title="Copy link"
          hover:color-primary
          @click="copyLink"
        />
        <button
          i-ri-sun-line
          title="Toggle theme"
          dark:i-ri-moon-line
          hover:color-primary
          @click="toggleDark()"
        />
        <a
          href="https://github.com/element-plus/element-plus-playground"
          target="_blank"
          flex
          hover:color-primary
        >
          <button title="View on GitHub" i-ri-github-fill />
        </a>

        <el-popover trigger="click" width="300px">
          <!-- <Settings /> -->
          <template #reference>
            <button i-ri:settings-line title="cdn" hover:color-primary />
          </template>
        </el-popover>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  --bg: #fff;
  --bg-light: #fff;
  --border: #ddd;

  --at-apply: 'box-border flex justify-between px-4 z-999 relative';

  height: var(--nav-height);
  background-color: var(--bg);
  box-shadow: 0 0 6px var(--el-color-primary);

  .el-select {
    width: 140px;
  }
}

.dark nav {
  --bg: #1a1a1a;
  --bg-light: #242424;
  --border: #383838;

  --at-apply: 'shadow-none';
  border-bottom: 1px solid var(--border);
}
</style>
