import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as n } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElBadge as a } from "../../node_modules/element-plus/es/components/badge/index.mjs";
import { defineComponent as p, createBlock as m, openBlock as i, createSlots as f, renderList as c, withCtx as l, renderSlot as d, guardReactiveProps as g, mergeProps as u } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as _, unref as b } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as k } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const K = /* @__PURE__ */ p({
  name: "KBadge",
  __name: "badge",
  setup(B, { expose: t }) {
    const r = _(null);
    return t(n({}, r)), (e, x) => (i(), m(b(a), u({
      ref_key: "badgeRef",
      ref: r,
      class: "k-badge"
    }, e.$attrs), f({ _: 2 }, [
      c(e.$slots, (R, o) => ({
        name: o,
        fn: l((s) => [
          d(e.$slots, o, k(g(s)))
        ])
      }))
    ]), 1040));
  }
});
export {
  K as default
};
