import { defineComponent as n, ref as a, createBlock as p, openBlock as i, unref as m, mergeProps as f, createSlots as c, renderList as l, withCtx as d, renderSlot as g, normalizeProps as u, guardReactiveProps as _ } from "vue";
import { getExposeProxy as b } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElBadge as k } from "../../node_modules/element-plus/es/components/badge/index.mjs";
const v = /* @__PURE__ */ n({
  name: "KBadge",
  __name: "badge",
  setup(B, { expose: t }) {
    const r = a(null);
    return t(b({}, r)), (e, x) => (i(), p(m(k), f({
      ref_key: "badgeRef",
      ref: r,
      class: "k-badge"
    }, e.$attrs), c({ _: 2 }, [
      l(e.$slots, (R, o) => ({
        name: o,
        fn: d((s) => [
          g(e.$slots, o, u(_(s)))
        ])
      }))
    ]), 1040));
  }
});
export {
  v as default
};
