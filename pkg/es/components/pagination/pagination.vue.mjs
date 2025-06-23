import { defineComponent as a, ref as s, createBlock as p, openBlock as m, unref as t, mergeProps as f, withCtx as c, renderSlot as l } from "vue";
import { getExposeProxy as u } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as g } from "../../hooks/use_size.mjs";
import { ElPagination as z } from "../../node_modules/element-plus/es/components/pagination/index.mjs";
const C = /* @__PURE__ */ a({
  name: "KPagination",
  __name: "pagination",
  props: {
    size: {}
  },
  setup(n, { expose: r }) {
    const i = g(n), e = s(null);
    return r(u({}, e)), (o, d) => (m(), p(t(z), f({
      ref_key: "KPaginationRef",
      ref: e,
      class: "k-pagination"
    }, o.$attrs, {
      size: t(i).elSize
    }), {
      default: c(() => [
        l(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["size"]));
  }
});
export {
  C as default
};
