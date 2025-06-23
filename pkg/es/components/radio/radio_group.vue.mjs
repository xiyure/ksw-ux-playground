import { defineComponent as c, ref as m, computed as n, provide as p, createBlock as d, openBlock as f, unref as g, mergeProps as _, createSlots as k, renderList as R, withCtx as S, renderSlot as z, normalizeProps as w, guardReactiveProps as v } from "vue";
import { getExposeProxy as y } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as B, SIZE_KEY as E } from "../../hooks/use_size.mjs";
import { FILL_COLOR_KEY as K } from "./const.mjs";
import { ElRadioGroup as C } from "../../node_modules/element-plus/es/components/radio/index.mjs";
const Z = /* @__PURE__ */ c({
  name: "KRadioGroup",
  __name: "radio_group",
  props: {
    size: {},
    direction: {},
    button: { type: Boolean, default: !1 },
    color: {},
    column: { type: Boolean, default: !1 },
    row: { type: Boolean, default: !0 }
  },
  setup(u, { expose: i }) {
    const o = u, r = B(o), t = m(null), s = n(() => r.value.ownSize ? `k-radio-group--${r.value.ownSize}` : "");
    return p(K, n(() => o.color)), p(E, r), i(y({}, t)), (e, L) => (f(), d(g(C), _({
      ref_key: "KRadioGroupRef",
      ref: t,
      class: ["k-radio-group", [
        {
          "k-radio-group--button": o.button === !0,
          "k-radio-group--row": o.row === !0,
          "k-radio-group--column": o.column === !0
        },
        s.value
      ]]
    }, e.$attrs), k({ _: 2 }, [
      R(e.$slots, (P, a) => ({
        name: a,
        fn: S((l) => [
          z(e.$slots, a, w(v(l)))
        ])
      }))
    ]), 1040, ["class"]));
  }
});
export {
  Z as default
};
