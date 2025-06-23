import { defineComponent as n, provide as p, computed as i, ref as u, createElementBlock as f, openBlock as c, normalizeClass as m, createVNode as d, unref as y, mergeProps as S, createSlots as k, renderList as B, withCtx as C, renderSlot as _, normalizeProps as P, guardReactiveProps as g } from "vue";
import { getExposeProxy as v } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElCollapse as A } from "../../node_modules/element-plus/es/components/collapse/index.mjs";
const L = /* @__PURE__ */ n({
  name: "KCollapse",
  __name: "collapse",
  props: {
    block: { type: Boolean, default: !1 },
    isOutline: { type: Boolean, default: !1 },
    useAntStyle: { type: Boolean, default: !1 },
    useStepStyle: { type: Boolean, default: !1 }
  },
  setup(s, { expose: t }) {
    const r = s;
    p(
      "__isBlock__",
      i(() => r.block)
    );
    const l = u(null);
    return t(v({}, l)), (e, R) => (c(), f("div", {
      class: m([{ "k-collapse-outline": e.isOutline }])
    }, [
      d(y(A), S({
        ref_key: "kCollapseRef",
        ref: l,
        class: [
          "k-collapse",
          { "is-useAntStyle": e.useAntStyle, "is-useStepStyle": e.useStepStyle }
        ]
      }, e.$attrs), k({ _: 2 }, [
        B(e.$slots, ($, o) => ({
          name: o,
          fn: C((a) => [
            _(e.$slots, o, P(g(a)))
          ])
        }))
      ]), 1040, ["class"])
    ], 2));
  }
});
export {
  L as default
};
