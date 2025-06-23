import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { Emitter as m } from "../utils/constructor/emitter.mjs";
import { ElementObserver as t } from "../utils/constructor/element_observer.mjs";
import "../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../node_modules/culori/src/index.mjs";
import { setGlobalProps as o } from "../utils/config_store.mjs";
import { SIZE_KEY as p } from "../hooks/use_size.mjs";
import { computed as i } from "../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function w(e, r) {
  e.provide("__elementObserver", new t()), e.provide("_emitter", new m()), e.provide(p, i(() => r == null ? void 0 : r.size)), o((r == null ? void 0 : r.props) ?? {});
}
export {
  w as provide
};
