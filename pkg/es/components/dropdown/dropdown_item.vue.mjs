import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as t } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElDropdownItem as n } from "../../node_modules/element-plus/es/components/dropdown/index.mjs";
import { defineComponent as m, createBlock as p, openBlock as s, withCtx as f, renderSlot as i, mergeProps as a } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as c, unref as d } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const B = /* @__PURE__ */ m({
  name: "KDropdownItem",
  __name: "dropdown_item",
  setup(l, { expose: r }) {
    const o = c(null);
    return r(t({}, o)), (e, u) => (s(), p(d(n), a({
      ref_key: "kDropDownItemRef",
      ref: o,
      class: "k-dropdown-item"
    }, e.$attrs), {
      default: f(() => [
        i(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  B as default
};
