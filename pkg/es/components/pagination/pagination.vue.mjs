import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as a } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as s } from "../../hooks/use_size.mjs";
import { ElPagination as p } from "../../node_modules/element-plus/es/components/pagination/index.mjs";
import { defineComponent as m, createBlock as f, openBlock as c, withCtx as l, renderSlot as u, mergeProps as g } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as z, unref as t } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const R = /* @__PURE__ */ m({
  name: "KPagination",
  __name: "pagination",
  props: {
    size: {}
  },
  setup(r, { expose: n }) {
    const i = s(r), e = z(null);
    return n(a({}, e)), (o, d) => (c(), f(t(p), g({
      ref_key: "KPaginationRef",
      ref: e,
      class: "k-pagination"
    }, o.$attrs, {
      size: t(i).elSize
    }), {
      default: l(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["size"]));
  }
});
export {
  R as default
};
