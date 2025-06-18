import fs from 'node:fs'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import replPkg from '@vue/repl/package.json' assert { type: 'json' }
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Mkcert from 'vite-plugin-mkcert'
import pkg from './package.json' assert { type: 'json' }

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(pkg),
    'import.meta.env.REPL_VERSION': JSON.stringify(replPkg),
  },
  build: {
    rollupOptions: {
      external: ['typescript'],
    },
  },
  server: {
    host: true,
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
        fs: {
          fileExists: fs.existsSync,
          readFile: (file) => fs.readFileSync(file, 'utf-8'),
        },
      },
    }),
    Unocss(),
    Mkcert(),
    Inspect(),
  ],
  optimizeDeps: {
    exclude: ['@vue/repl'],
  },
})
