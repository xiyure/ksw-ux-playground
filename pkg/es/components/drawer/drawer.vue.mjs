import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as n } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElDrawer as a } from "../../node_modules/element-plus/es/components/drawer/index.mjs";
import { defineComponent as p, createBlock as m, openBlock as i, createSlots as f, renderList as c, withCtx as l, renderSlot as u, guardReactiveProps as _, mergeProps as d } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as w, unref as k } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as D } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const z = /* @__PURE__ */ p({
  name: "KDrawer",
  __name: "drawer",
  setup(P, { expose: t }) {
    const e = w(null);
    return t(n({}, e)), (r, x) => (i(), m(k(a), d({
      ref_key: "KDrawerRef",
      ref: e,
      class: "k-drawer"
    }, r.$attrs), f({ _: 2 }, [
      c(r.$slots, (K, o) => ({
        name: o,
        fn: l((s) => [
          u(r.$slots, o, D(_(s)))
        ])
      }))
    ]), 1040));
  }
});
export {
  z as default
};
