import { getCurrentInstance } from 'vue'
import KUI, { KswIcon } from '@ksware/ksw-ux'

let installed = false
loadStyle()

export function loadDependency() {
  if (installed) return
  const instance = getCurrentInstance()
  instance.appContext.app.use(KUI)
  instance.appContext.app.use(KswIcon)
  installed = true
}

export function loadStyle() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href =
    'https://cdn.jsdelivr.net/gh/xiyure/ksw-ux-playground@main/releases/style.css'
  document.body.append(link)
}
