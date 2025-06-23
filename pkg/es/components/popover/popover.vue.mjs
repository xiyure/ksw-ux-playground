import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as s } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElPopover as n } from "../../node_modules/element-plus/es/components/popover/index.mjs";
import { defineComponent as m, createBlock as i, openBlock as f, createSlots as a, renderList as c, withCtx as l, renderSlot as u, guardReactiveProps as P, mergeProps as _ } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as v, unref as d } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as k } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const L = /* @__PURE__ */ m({
  name: "KPopover",
  __name: "popover",
  setup(g, { expose: t }) {
    const r = v(null);
    return t(s({}, r)), (o, K) => (f(), i(d(n), _({
      ref_key: "KPopoverRef",
      ref: r,
      class: "k-popover"
    }, o.$attrs), a({ _: 2 }, [
      c(o.$slots, (R, e) => ({
        name: e,
        fn: l((p) => [
          u(o.$slots, e, k(P(p)))
        ])
      }))
    ]), 1040));
  }
});
export {
  L as default
};
