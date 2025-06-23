import { defineComponent as f, ref as p, watch as u, provide as r, createBlock as i, openBlock as a, unref as m, mergeProps as k, withCtx as x, renderSlot as h } from "vue";
import { getExposeProxy as C } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as _, SIZE_KEY as b } from "../../hooks/use_size.mjs";
import { ElCheckboxGroup as d } from "../../node_modules/element-plus/es/components/checkbox/index.mjs";
const K = /* @__PURE__ */ f({
  name: "KCheckboxGroup",
  __name: "checkbox_group",
  props: {
    size: {},
    color: { default: "#409eff" }
  },
  setup(s, { expose: l }) {
    const e = s, n = _(e), t = p(e.color), c = p(null);
    return u(
      () => e.color,
      (o) => {
        t.value = o;
      }
    ), r("useCheckboxGroup", !0), r("_fillColor", t), r(b, n), l(C({}, c)), (o, g) => (a(), i(m(d), k({
      ref_key: "kCheckboxGroupRef",
      ref: c,
      class: "k-checkbox-group"
    }, o.$attrs), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  K as default
};
