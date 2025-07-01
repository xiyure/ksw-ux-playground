import ElementPlus from 'element-plus'
import KUI from '@ksware/ksw-ux'
import { getCurrentInstance } from 'vue'

let installed = false
await loadStyle1()

export function setupElementPlus() {
  if (installed) return
  const instance = getCurrentInstance()
  // instance.appContext.app.use(ElementPlus)
  instance.appContext.app.use(KUI)
  installed = true
}

export function loadStyle() {
  return
  const styles = ['#STYLE#', '#DARKSTYLE#'].map((style) => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = style
      link.addEventListener('load', resolve)
      link.addEventListener('error', reject)
      document.body.append(link)
    })
  })
  return Promise.allSettled(styles)
}

export function loadStyle1() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href =
    'https://cdn.jsdelivr.net/gh/xiyure/ksw-ux-run@main/releases/style.css'
  document.body.append(link)
}
