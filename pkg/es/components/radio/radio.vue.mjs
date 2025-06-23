import { defineComponent as h, inject as z, computed as m, ref as d, watch as L, nextTick as P, createBlock as b, openBlock as w, unref as g, mergeProps as x, createSlots as C, renderList as E, withCtx as B, renderSlot as S, normalizeProps as F, guardReactiveProps as K } from "vue";
import { getExposeProxy as O } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { GetColorLevelNew as j } from "../../utils/color.mjs";
import { useSize as G } from "../../hooks/use_size.mjs";
import { FILL_COLOR_KEY as I, colors as N } from "./const.mjs";
import { ElRadio as T } from "../../node_modules/element-plus/es/components/radio/index.mjs";
const U = /* @__PURE__ */ h({
  name: "KRadio",
  __name: "radio",
  props: {
    size: {},
    color: { default: "" },
    button: { type: Boolean, default: !1 }
  },
  setup(v, { expose: k }) {
    const n = z(I, m(() => {
    })), t = v, $ = G(t), y = d(t.color), r = d();
    L(
      () => [t.color, n.value],
      () => {
        var l, s;
        const o = t.color || n.value;
        if (!o)
          return;
        y.value = o;
        const e = (s = (l = j) == null ? void 0 : l(o)) == null ? void 0 : s.colorLevel;
        P(() => {
          var a, c, i, u;
          if (r.value && ((a = r.value.$el) != null && a.style)) {
            const _ = (i = (c = e == null ? void 0 : e["--k-oklch-500"]) == null ? void 0 : c.match(/\(([^)]+)\)/)) == null ? void 0 : i[1];
            (u = r.value.$el) == null || u.style.setProperty("--radio-color--focus", `rgba(${_}, 0.2)`), N.forEach((p) => {
              var f;
              (f = r.value.$el) == null || f.style.setProperty(
                `--radio${p.name}`,
                e == null ? void 0 : e[`--k-oklch-${p.value}`]
              );
            });
          }
        });
      },
      { immediate: !0 }
    );
    const R = m(() => {
      const { ownSize: o } = $.value;
      return o ? `k-radio--${o}` : "";
    });
    return k(O({}, r)), (o, e) => (w(), b(g(T), x(o.$attrs, {
      ref_key: "kRadioRef",
      ref: r,
      class: ["k-radio", [R.value, { "is-button": t.button === !0 }]]
    }), C({ _: 2 }, [
      E(o.$slots, (l, s) => ({
        name: s,
        fn: B((a) => [
          S(o.$slots, s, F(K(a)))
        ])
      }))
    ]), 1040, ["class"]));
  }
});
export {
  U as default
};
