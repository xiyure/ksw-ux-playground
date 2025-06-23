import { defineComponent as n, ref as a, createBlock as p, openBlock as i, unref as m, mergeProps as f, createSlots as c, renderList as l, withCtx as u, renderSlot as _, normalizeProps as d, guardReactiveProps as w } from "vue";
import { getExposeProxy as k } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElDrawer as D } from "../../node_modules/element-plus/es/components/drawer/index.mjs";
const E = /* @__PURE__ */ n({
  name: "KDrawer",
  __name: "drawer",
  setup(P, { expose: t }) {
    const e = a(null);
    return t(k({}, e)), (r, x) => (i(), p(m(D), f({
      ref_key: "KDrawerRef",
      ref: e,
      class: "k-drawer"
    }, r.$attrs), c({ _: 2 }, [
      l(r.$slots, (K, o) => ({
        name: o,
        fn: u((s) => [
          _(r.$slots, o, d(w(s)))
        ])
      }))
    ]), 1040));
  }
});
export {
  E as default
};
