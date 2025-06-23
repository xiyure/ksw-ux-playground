import { defineComponent as n, ref as s, createBlock as i, openBlock as a, unref as m, mergeProps as u, createSlots as f, renderList as c, withCtx as l, renderSlot as _, normalizeProps as d, guardReactiveProps as g } from "vue";
import { getExposeProxy as k } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElOptionGroup as G } from "../../node_modules/element-plus/es/components/select/index.mjs";
const E = /* @__PURE__ */ n({
  name: "KOptionGroup",
  __name: "option_group",
  setup(O, { expose: t }) {
    const r = s(null);
    return t(k({}, r)), (o, x) => (a(), i(m(G), u({
      ref_key: "KOptionGroupRef",
      ref: r,
      class: "k-option-group"
    }, o.$attrs), f({ _: 2 }, [
      c(o.$slots, (K, e) => ({
        name: e,
        fn: l((p) => [
          _(o.$slots, e, d(g(p)))
        ])
      }))
    ]), 1040));
  }
});
export {
  E as default
};
