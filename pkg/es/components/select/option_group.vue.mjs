import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as n } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElOptionGroup as i } from "../../node_modules/element-plus/es/components/select/index.mjs";
import { defineComponent as s, createBlock as m, openBlock as f, createSlots as a, renderList as u, withCtx as c, renderSlot as l, guardReactiveProps as _, mergeProps as d } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as g, unref as k } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as G } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const w = /* @__PURE__ */ s({
  name: "KOptionGroup",
  __name: "option_group",
  setup(O, { expose: t }) {
    const r = g(null);
    return t(n({}, r)), (o, x) => (f(), m(k(i), d({
      ref_key: "KOptionGroupRef",
      ref: r,
      class: "k-option-group"
    }, o.$attrs), a({ _: 2 }, [
      u(o.$slots, (K, e) => ({
        name: e,
        fn: c((p) => [
          l(o.$slots, e, G(_(p)))
        ])
      }))
    ]), 1040));
  }
});
export {
  w as default
};
