import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import i from "../../assets/svg/empty.svg.mjs";
import { getExposeProxy as a } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElEmpty as c } from "../../node_modules/element-plus/es/components/empty/index.mjs";
import { defineComponent as f, createBlock as l, openBlock as u, createSlots as y, renderList as _, withCtx as o, renderSlot as m, guardReactiveProps as d, createElementVNode as E, mergeProps as g } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as k, unref as s } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as P } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const $ = ["src"], j = /* @__PURE__ */ f({
  name: "KEmpty",
  __name: "empty",
  setup(h, { expose: p }) {
    const r = k(null);
    return p(a({}, r)), (e, K) => (u(), l(s(c), g({
      ref_key: "KEmptyRef",
      ref: r,
      class: "k-empty"
    }, e.$attrs), y({
      image: o(() => [
        m(e.$slots, "icon", {}, () => [
          E("img", { src: s(i) }, null, 8, $)
        ])
      ]),
      _: 2
    }, [
      _(e.$slots, (R, t) => ({
        name: t,
        fn: o((n) => [
          m(e.$slots, t, P(d(n)))
        ])
      }))
    ]), 1040));
  }
});
export {
  j as default
};
