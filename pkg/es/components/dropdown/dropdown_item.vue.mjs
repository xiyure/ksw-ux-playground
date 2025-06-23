import { defineComponent as t, ref as n, createBlock as p, openBlock as m, unref as s, mergeProps as f, withCtx as a, renderSlot as i } from "vue";
import { getExposeProxy as c } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElDropdownItem as d } from "../../node_modules/element-plus/es/components/dropdown/index.mjs";
const h = /* @__PURE__ */ t({
  name: "KDropdownItem",
  __name: "dropdown_item",
  setup(l, { expose: r }) {
    const e = n(null);
    return r(c({}, e)), (o, u) => (m(), p(s(d), f({
      ref_key: "kDropDownItemRef",
      ref: e,
      class: "k-dropdown-item"
    }, o.$attrs), {
      default: a(() => [
        i(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  h as default
};
