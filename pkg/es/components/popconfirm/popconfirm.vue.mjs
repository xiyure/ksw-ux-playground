import { defineComponent as s, ref as m, createBlock as f, openBlock as a, unref as n, mergeProps as l, createSlots as u, renderList as P, withCtx as d, renderSlot as _, normalizeProps as k, guardReactiveProps as g } from "vue";
import { getExposeProxy as x } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElPopconfirm as y } from "../../node_modules/element-plus/es/components/popconfirm/index.mjs";
import K from "../../node_modules/ksw-vue-icon/es/icons/base/clear.mjs";
const w = /* @__PURE__ */ s({
  name: "KPopconfirm",
  __name: "popconfirm",
  props: {
    icon: {}
  },
  setup(t, { expose: p }) {
    const c = t, r = m(null);
    return p(x({}, r)), (o, $) => (a(), f(n(y), l({
      ref_key: "KPopconfirmRef",
      ref: r,
      class: "k-popconfirm"
    }, o.$attrs, {
      icon: c.icon ?? n(K),
      "cancel-button-type": "default"
    }), u({ _: 2 }, [
      P(o.$slots, (h, e) => ({
        name: e,
        fn: d((i) => [
          _(o.$slots, e, k(g(i)))
        ])
      }))
    ]), 1040, ["icon"]));
  }
});
export {
  w as default
};
