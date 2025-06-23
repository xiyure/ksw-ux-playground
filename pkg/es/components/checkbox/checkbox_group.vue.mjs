import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as n } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as i, SIZE_KEY as m } from "../../hooks/use_size.mjs";
import { ElCheckboxGroup as u } from "../../node_modules/element-plus/es/components/checkbox/index.mjs";
import { defineComponent as a, watch as k, provide as r, createBlock as x, openBlock as h, withCtx as C, renderSlot as _, mergeProps as b } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as c, unref as d } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const R = /* @__PURE__ */ a({
  name: "KCheckboxGroup",
  __name: "checkbox_group",
  props: {
    size: {},
    color: { default: "#409eff" }
  },
  setup(s, { expose: f }) {
    const e = s, l = i(e), t = c(e.color), p = c(null);
    return k(
      () => e.color,
      (o) => {
        t.value = o;
      }
    ), r("useCheckboxGroup", !0), r("_fillColor", t), r(m, l), f(n({}, p)), (o, g) => (h(), x(d(u), b({
      ref_key: "kCheckboxGroupRef",
      ref: p,
      class: "k-checkbox-group"
    }, o.$attrs), {
      default: C(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  R as default
};
