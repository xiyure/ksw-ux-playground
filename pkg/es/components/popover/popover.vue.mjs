import { defineComponent as s, ref as n, createBlock as a, openBlock as i, unref as m, mergeProps as f, createSlots as c, renderList as l, withCtx as u, renderSlot as P, normalizeProps as _, guardReactiveProps as v } from "vue";
import { getExposeProxy as d } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElPopover as k } from "../../node_modules/element-plus/es/components/popover/index.mjs";
const S = /* @__PURE__ */ s({
  name: "KPopover",
  __name: "popover",
  setup(g, { expose: t }) {
    const o = n(null);
    return t(d({}, o)), (e, K) => (i(), a(m(k), f({
      ref_key: "KPopoverRef",
      ref: o,
      class: "k-popover"
    }, e.$attrs), c({ _: 2 }, [
      l(e.$slots, (R, r) => ({
        name: r,
        fn: u((p) => [
          P(e.$slots, r, _(v(p)))
        ])
      }))
    ]), 1040));
  }
});
export {
  S as default
};
