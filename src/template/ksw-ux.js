import { getCurrentInstance } from 'vue'
import KUI from '@ksware/ksw-ux'

let installed = false
loadStyle()

export function loadDependency() {
  if (installed) return
  const instance = getCurrentInstance()
  instance.appContext.app.use(KUI, { registerIcon: true })
  installed = true
}

export function loadStyle() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://cdn.jsdelivr.net/npm/ksw-ux-types@latest/style.css'
  document.body.append(link)
}
