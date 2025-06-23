import { defineComponent as a, ref as c, provide as u, createBlock as d, openBlock as S, unref as t, mergeProps as z, createSlots as _, withCtx as o, createVNode as h, renderSlot as n, renderList as k, normalizeProps as E, guardReactiveProps as P } from "vue";
import $ from "./options.mjs";
import { getExposeProxy as g } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as K, SIZE_KEY as R } from "../../hooks/use_size.mjs";
import { useInheritSlot as v } from "../../hooks/use_inherit_slot.mjs";
import { ElSelect as x } from "../../node_modules/element-plus/es/components/select/index.mjs";
const q = /* @__PURE__ */ a({
  name: "KSelect",
  __name: "select",
  props: {
    size: {}
  },
  setup(p, { expose: l }) {
    const r = K(p), s = c(), f = v(["default"]);
    return u(R, r), l(g({}, s)), (e, C) => (S(), d(t(x), z({
      ref_key: "inputRef",
      ref: s,
      class: "k-select"
    }, e.$attrs, {
      size: t(r).elSize
    }), _({
      default: o(() => [
        h(t($), null, {
          default: o(() => [
            n(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 2
    }, [
      k(t(f)(e.$slots), (I, i) => ({
        name: i,
        fn: o((m) => [
          n(e.$slots, i, E(P(m)))
        ])
      }))
    ]), 1040, ["size"]));
  }
});
export {
  q as default
};
