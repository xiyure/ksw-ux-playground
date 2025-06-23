import { defineComponent as p, ref as s, createBlock as i, openBlock as a, unref as m, mergeProps as f, createSlots as l, renderList as c, withCtx as u, renderSlot as _, normalizeProps as d, guardReactiveProps as k } from "vue";
import { getExposeProxy as O } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElOption as P } from "../../node_modules/element-plus/es/components/select/index.mjs";
const E = /* @__PURE__ */ p({
  name: "KOption",
  __name: "option",
  setup(g, { expose: t }) {
    const o = s(null);
    return t(O({}, o)), (e, K) => (a(), i(m(P), f({
      ref_key: "KOptionRef",
      ref: o,
      value: "",
      class: "k-option"
    }, e.$attrs), l({ _: 2 }, [
      c(e.$slots, (R, r) => ({
        name: r,
        fn: u((n) => [
          _(e.$slots, r, d(k(n)))
        ])
      }))
    ]), 1040));
  }
});
export {
  E as default
};
