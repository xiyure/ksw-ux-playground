import { computed, reactive, toRefs, watch, watchEffect } from 'vue';
import {
  compileFile,
  File,
  mergeImportMap,
  useStore as useReplStore,
  type ImportMap,
  type StoreState,
} from '@vue/repl'
import { objectOmit, useToggle, useDebounceFn } from '@vueuse/core'
import { IS_DEV } from '@/constants'
import {
  genCompilerSfcLink,
  genImportMap,
} from '@/utils/dependency'
import { atou, utoa } from '@/utils/encode'
import kswUxCode from '../template/ksw-ux.js?raw'
import mainCode from '../template/main.vue?raw'
import tsconfigCode from '../template/tsconfig.json?raw'
import welcomeCode from '../template/welcome.vue?raw'

export interface Initial {
  serializedState?: string
  initialized?: () => void
}
export type VersionKey = 'vue' | 'kswUx' | 'typescript'
export type Versions = Record<VersionKey, string>
export interface UserOptions {
  styleSource?: string
  showHidden?: boolean
  vueVersion?: string
  tsVersion?: string
  epVersion?: string
}
export type SerializeState = Record<string, string> & {
  _o?: UserOptions
}

const MAIN_FILE = 'src/PlaygroundMain.vue'
const APP_FILE = 'src/App.vue'
const KSW_UX_FILE = 'src/ksw-ux.js'
const LEGACY_IMPORT_MAP = 'src/import_map.json'
export const IMPORT_MAP = 'import-map.json'
export const TSCONFIG = 'tsconfig.json'

export const useStore = (initial: Initial) => {
  const saved: SerializeState | undefined = initial.serializedState
    ? deserialize(initial.serializedState)
    : undefined

  const versions = reactive<Versions>({
    vue: saved?._o?.vueVersion ?? 'latest',
    kswUx: ('latest'),
    typescript: saved?._o?.tsVersion ?? 'latest',
  })
  const userOptions: UserOptions = {}
  const hideFile = !IS_DEV

  const [nightly, toggleNightly] = useToggle(false)
  const builtinImportMap = computed<ImportMap>(() => {
    let importMap = genImportMap(versions, nightly.value)
    return importMap
  })

  const storeState: Partial<StoreState> = toRefs(
    reactive({
      files: initFiles(),
      mainFile: MAIN_FILE,
      activeFilename: APP_FILE,
      vueVersion: computed(() => versions.vue),
      typescriptVersion: versions.typescript,
      builtinImportMap,
      template: {
        welcomeSFC: mainCode,
      },
      sfcOptions: {
        script: {
          propsDestructure: true,
        },
      },
    }),
  )
  const store = useReplStore(storeState)
  store.files[KSW_UX_FILE].hidden = hideFile
  store.files[MAIN_FILE].hidden = hideFile
  setVueVersion(versions.vue).then(() => {
    initial.initialized?.()
  })

  watch(
    builtinImportMap,
    (newBuiltinImportMap) => {
      const importMap = JSON.parse(store.files[IMPORT_MAP].code)
      store.files[IMPORT_MAP].code = JSON.stringify(
        mergeImportMap(importMap, newBuiltinImportMap),
        undefined,
        2,
      )
    },
    { deep: true },
  )

  function generatekswUxCode(styleSource?: string) {
    console.log(styleSource)
    const style = styleSource
      ? styleSource
      : '@ksware/ksw-ux/kingware-ui/style.css'
    return kswUxCode.replace('#STYLE#', style)
  }
  function init() {
    watchEffect(() => {
      compileFile(store, store.activeFile).then((errs) => (store.errors = errs))
    })
    for (const [filename, file] of Object.entries(store.files)) {
      if (filename === store.activeFilename) continue
      compileFile(store, file).then((errs) => store.errors.push(...errs))
    }

    watch(
      () => [
        store.files[TSCONFIG]?.code,
        store.typescriptVersion,
        store.locale,
        store.dependencyVersion,
        store.vueVersion,
      ],
      useDebounceFn(() => store.reloadLanguageTools?.(), 300),
      { deep: true },
    )
  }
  function serialize() {
    const state: SerializeState = { ...store.getFiles() }
    state._o = userOptions
    return utoa(JSON.stringify(state))
  }
  function deserialize(text: string): SerializeState {
    const state = JSON.parse(atou(text))
    return state
  }
  function initFiles() {
    const files: Record<string, File> = Object.create(null)
    if (saved) {
      for (let [filename, file] of Object.entries(objectOmit(saved, ['_o']))) {
        if (
          ![IMPORT_MAP, TSCONFIG].includes(filename) &&
          !filename.startsWith('src/')
        ) {
          filename = `src/${filename}`
        }
        if (filename === LEGACY_IMPORT_MAP) {
          filename = IMPORT_MAP
        }
        files[filename] = new File(filename, file as string)
      }
    } else {
      files[APP_FILE] = new File(APP_FILE, welcomeCode)
    }
    if (!files[KSW_UX_FILE]) {
      files[KSW_UX_FILE] = new File(
        KSW_UX_FILE,
        generatekswUxCode(versions.elementPlus, userOptions.styleSource),
      )
    }
    if (!files[TSCONFIG]) {
      files[TSCONFIG] = new File(TSCONFIG, tsconfigCode)
    }
    return files
  }
  async function setVueVersion(version: string) {
    store.compiler = await import(
      /* @vite-ignore */ genCompilerSfcLink(version) ?? ''
    )
    versions.vue = version
  }
  async function setVersion(key: VersionKey, version: string) {
    switch (key) {
      case 'vue':
        userOptions.vueVersion = version
        await setVueVersion(version)
        break
      case 'elementPlus':
        versions.elementPlus = version
        userOptions.epVersion = version
        break
      case 'typescript':
        store.typescriptVersion = version
        userOptions.tsVersion = version
        break
    }
  }

  const utils = {
    versions,
    setVersion,
    toggleNightly,
    serialize,
    init,
  }
  Object.assign(store, utils)

  return store as typeof store & typeof utils
}

export type Store = ReturnType<typeof useStore>
