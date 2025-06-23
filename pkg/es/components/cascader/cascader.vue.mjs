import { defineComponent as p, provide as i, ref as m, createBlock as f, openBlock as l, unref as t, mergeProps as d, createSlots as u, renderList as z, withCtx as _, renderSlot as S, normalizeProps as k, guardReactiveProps as C } from "vue";
import { getExposeProxy as E } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as P, SIZE_KEY as g } from "../../hooks/use_size.mjs";
import { ElCascader as x } from "../../node_modules/element-plus/es/components/cascader/index.mjs";
const Z = /* @__PURE__ */ p({
  name: "KCascader",
  __name: "cascader",
  props: {
    size: {}
  },
  setup(a, { expose: c }) {
    const r = P(a);
    i(g, r);
    const o = m(null);
    return c(E({}, o)), (e, h) => (l(), f(t(x), d({
      ref_key: "cascaderRef",
      ref: o,
      class: "k-cascader"
    }, e.$attrs, {
      size: t(r).elSize
    }), u({ _: 2 }, [
      z(e.$slots, (v, s) => ({
        name: s,
        fn: _((n) => [
          S(e.$slots, s, k(C(n)))
        ])
      }))
    ]), 1040, ["size"]));
  }
});
export {
  Z as default
};
