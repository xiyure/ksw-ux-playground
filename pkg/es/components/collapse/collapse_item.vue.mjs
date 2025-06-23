import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as p } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElCollapseItem as f } from "../../node_modules/element-plus/es/components/collapse/index.mjs";
import { defineComponent as m, inject as c, computed as u, createBlock as d, openBlock as k, createSlots as B, renderList as y, withCtx as w, renderSlot as g, guardReactiveProps as C, mergeProps as _ } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as h, unref as r } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as I } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const A = /* @__PURE__ */ m({
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
    const a = t, n = c(
      "__isBlock__",
      u(() => a.block)
    ), o = h(null);
    return l(p({}, o)), (e, b) => (k(), d(r(f), _({
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
          g(e.$slots, s, I(C(i)))
        ])
      }))
    ]), 1040, ["class"]));
  }
});
export {
  A as default
};
