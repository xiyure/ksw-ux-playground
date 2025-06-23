import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@unocss/reset/tailwind.css'
import '@vue/repl/style.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css'

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: 'repl',
}

createApp(App).use(ElementPlus).mount('#app')
