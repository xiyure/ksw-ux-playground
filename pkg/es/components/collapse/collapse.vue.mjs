import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as p } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElCollapse as n } from "../../node_modules/element-plus/es/components/collapse/index.mjs";
import { defineComponent as i, provide as f, computed as m, createElementBlock as u, openBlock as c, createVNode as d, createSlots as y, renderList as S, withCtx as k, renderSlot as B, guardReactiveProps as C, mergeProps as _ } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as P, unref as g } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as v, normalizeClass as A } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const j = /* @__PURE__ */ i({
  name: "KCollapse",
  __name: "collapse",
  props: {
    block: { type: Boolean, default: !1 },
    isOutline: { type: Boolean, default: !1 },
    useAntStyle: { type: Boolean, default: !1 },
    useStepStyle: { type: Boolean, default: !1 }
  },
  setup(l, { expose: s }) {
    const r = l;
    f(
      "__isBlock__",
      m(() => r.block)
    );
    const o = P(null);
    return s(p({}, o)), (e, R) => (c(), u("div", {
      class: A([{ "k-collapse-outline": e.isOutline }])
    }, [
      d(g(n), _({
        ref_key: "kCollapseRef",
        ref: o,
        class: [
          "k-collapse",
          { "is-useAntStyle": e.useAntStyle, "is-useStepStyle": e.useStepStyle }
        ]
      }, e.$attrs), y({ _: 2 }, [
        S(e.$slots, ($, t) => ({
          name: t,
          fn: k((a) => [
            B(e.$slots, t, v(C(a)))
          ])
        }))
      ]), 1040, ["class"])
    ], 2));
  }
});
export {
  j as default
};
