import { computed as m } from "vue";
import { Emitter as t } from "../utils/constructor/emitter.mjs";
import { ElementObserver as o } from "../utils/constructor/element_observer.mjs";
import "../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../node_modules/culori/src/index.mjs";
import { setGlobalProps as p } from "../utils/config_store.mjs";
import { SIZE_KEY as i } from "../hooks/use_size.mjs";
function u(e, r) {
  e.provide("__elementObserver", new o()), e.provide("_emitter", new t()), e.provide(i, m(() => r == null ? void 0 : r.size)), p((r == null ? void 0 : r.props) ?? {});
}
export {
  u as provide
};
