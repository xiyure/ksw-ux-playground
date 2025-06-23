import { defineComponent as i, ref as a, createBlock as c, openBlock as l, unref as o, mergeProps as f, createSlots as u, withCtx as s, renderSlot as m, createElementVNode as y, renderList as _, normalizeProps as d, guardReactiveProps as E } from "vue";
import g from "../../assets/svg/empty.svg.mjs";
import { getExposeProxy as k } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElEmpty as P } from "../../node_modules/element-plus/es/components/empty/index.mjs";
const $ = ["src"], N = /* @__PURE__ */ i({
  name: "KEmpty",
  __name: "empty",
  setup(h, { expose: n }) {
    const t = a(null);
    return n(k({}, t)), (e, R) => (l(), c(o(P), f({
      ref_key: "KEmptyRef",
      ref: t,
      class: "k-empty"
    }, e.$attrs), u({
      image: s(() => [
        m(e.$slots, "icon", {}, () => [
          y("img", { src: o(g) }, null, 8, $)
        ])
      ]),
      _: 2
    }, [
      _(e.$slots, (x, r) => ({
        name: r,
        fn: s((p) => [
          m(e.$slots, r, d(E(p)))
        ])
      }))
    ]), 1040));
  }
});
export {
  N as default
};
