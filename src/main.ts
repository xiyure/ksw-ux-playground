import { createApp } from 'vue'
import App from '@/App.vue'
import KUI from 'element-plus'
import '@ksware/ksw-ux/kingsware-ui/style.css'
import '@unocss/reset/tailwind.css'
import '@vue/repl/style.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css'

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: 'repl',
}

createApp(App).use(KUI).mount('#app')
