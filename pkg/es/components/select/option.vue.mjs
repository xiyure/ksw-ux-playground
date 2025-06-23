import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as p } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElOption as i } from "../../node_modules/element-plus/es/components/select/index.mjs";
import { defineComponent as s, createBlock as m, openBlock as a, createSlots as f, renderList as l, withCtx as c, renderSlot as u, guardReactiveProps as _, mergeProps as d } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as k, unref as O } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as P } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const z = /* @__PURE__ */ s({
  name: "KOption",
  __name: "option",
  setup(g, { expose: t }) {
    const r = k(null);
    return t(p({}, r)), (o, K) => (a(), m(O(i), d({
      ref_key: "KOptionRef",
      ref: r,
      value: "",
      class: "k-option"
    }, o.$attrs), f({ _: 2 }, [
      l(o.$slots, (R, e) => ({
        name: e,
        fn: c((n) => [
          u(o.$slots, e, P(_(n)))
        ])
      }))
    ]), 1040));
  }
});
export {
  z as default
};
