import { defineComponent as p, inject as f, computed as c, ref as m, createBlock as u, openBlock as d, unref as r, mergeProps as k, createSlots as B, renderList as y, withCtx as w, renderSlot as g, normalizeProps as C, guardReactiveProps as _ } from "vue";
import { getExposeProxy as h } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElCollapseItem as I } from "../../node_modules/element-plus/es/components/collapse/index.mjs";
const K = /* @__PURE__ */ p({
  name: "KCollapseItem",
  __name: "collapse_item",
  props: {
    block: { type: Boolean, default: !1 },
    process: { type: Boolean, default: !1 },
    wait: { type: Boolean, default: !1 },
    finish: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    warning: { type: Boolean, default: !1 }
  },
  setup(t, { expose: l }) {
    const a = t, n = f(
      "__isBlock__",
      c(() => a.block)
    ), o = m(null);
    return l(h({}, o)), (e, b) => (d(), u(r(I), k({
      ref_key: "kCollapseItemRef",
      ref: o,
      class: [
        "k-collapse-item",
        { "is-block": r(n) },
        {
          "is-process": e.process,
          "is-wait": e.wait,
          "is-finish": e.finish,
          "is-error": e.error,
          "is-warning": e.warning
        }
      ]
    }, e.$attrs), B({ _: 2 }, [
      y(e.$slots, (R, s) => ({
        name: s,
        fn: w((i) => [
          g(e.$slots, s, C(_(i)))
        ])
      }))
    ]), 1040, ["class"]));
  }
});
export {
  K as default
};
