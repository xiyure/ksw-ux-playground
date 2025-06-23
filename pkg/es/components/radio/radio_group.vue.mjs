import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as m } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as c, SIZE_KEY as f } from "../../hooks/use_size.mjs";
import { FILL_COLOR_KEY as d } from "./const.mjs";
import { ElRadioGroup as g } from "../../node_modules/element-plus/es/components/radio/index.mjs";
import { defineComponent as _, computed as a, provide as i, createBlock as k, openBlock as R, createSlots as S, renderList as z, withCtx as w, renderSlot as v, guardReactiveProps as y, mergeProps as B } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as E, unref as K } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as C } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const A = /* @__PURE__ */ _({
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
  setup(n, { expose: u }) {
    const o = n, r = c(o), t = E(null), s = a(() => r.value.ownSize ? `k-radio-group--${r.value.ownSize}` : "");
    return i(d, a(() => o.color)), i(f, r), u(m({}, t)), (e, L) => (R(), k(K(g), B({
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
    }, e.$attrs), S({ _: 2 }, [
      z(e.$slots, (P, p) => ({
        name: p,
        fn: w((l) => [
          v(e.$slots, p, C(y(l)))
        ])
      }))
    ]), 1040, ["class"]));
  }
});
export {
  A as default
};
