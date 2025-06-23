import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as c } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as n, SIZE_KEY as m } from "../../hooks/use_size.mjs";
import { ElCascader as f } from "../../node_modules/element-plus/es/components/cascader/index.mjs";
import { defineComponent as l, provide as d, createBlock as u, openBlock as z, createSlots as _, renderList as S, withCtx as k, renderSlot as C, guardReactiveProps as E, mergeProps as P } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as g, unref as t } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as x } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const q = /* @__PURE__ */ l({
  name: "KCascader",
  __name: "cascader",
  props: {
    size: {}
  },
  setup(a, { expose: p }) {
    const r = n(a);
    d(m, r);
    const o = g(null);
    return p(c({}, o)), (e, h) => (z(), u(t(f), P({
      ref_key: "cascaderRef",
      ref: o,
      class: "k-cascader"
    }, e.$attrs, {
      size: t(r).elSize
    }), _({ _: 2 }, [
      S(e.$slots, (v, s) => ({
        name: s,
        fn: k((i) => [
          C(e.$slots, s, x(E(i)))
        ])
      }))
    ]), 1040, ["size"]));
  }
});
export {
  q as default
};
