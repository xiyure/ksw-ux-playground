import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as h } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { GetColorLevelNew as z } from "../../utils/color.mjs";
import { useSize as L } from "../../hooks/use_size.mjs";
import { FILL_COLOR_KEY as P, colors as b } from "./const.mjs";
import { ElRadio as w } from "../../node_modules/element-plus/es/components/radio/index.mjs";
import { defineComponent as g, inject as x, computed as f, watch as C, nextTick as E, createBlock as B, openBlock as S, createSlots as F, renderList as K, withCtx as O, renderSlot as j, guardReactiveProps as G, mergeProps as I } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as d, unref as N } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as T } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const Z = /* @__PURE__ */ g({
  name: "KRadio",
  __name: "radio",
  props: {
    size: {},
    color: { default: "" },
    button: { type: Boolean, default: !1 }
  },
  setup(v, { expose: k }) {
    const i = x(P, f(() => {
    })), t = v, $ = L(t), y = d(t.color), r = d();
    C(
      () => [t.color, i.value],
      () => {
        var l, s;
        const o = t.color || i.value;
        if (!o)
          return;
        y.value = o;
        const e = (s = (l = z) == null ? void 0 : l(o)) == null ? void 0 : s.colorLevel;
        E(() => {
          var a, n, c, u;
          if (r.value && ((a = r.value.$el) != null && a.style)) {
            const _ = (c = (n = e == null ? void 0 : e["--k-oklch-500"]) == null ? void 0 : n.match(/\(([^)]+)\)/)) == null ? void 0 : c[1];
            (u = r.value.$el) == null || u.style.setProperty("--radio-color--focus", `rgba(${_}, 0.2)`), b.forEach((m) => {
              var p;
              (p = r.value.$el) == null || p.style.setProperty(
                `--radio${m.name}`,
                e == null ? void 0 : e[`--k-oklch-${m.value}`]
              );
            });
          }
        });
      },
      { immediate: !0 }
    );
    const R = f(() => {
      const { ownSize: o } = $.value;
      return o ? `k-radio--${o}` : "";
    });
    return k(h({}, r)), (o, e) => (S(), B(N(w), I(o.$attrs, {
      ref_key: "kRadioRef",
      ref: r,
      class: ["k-radio", [R.value, { "is-button": t.button === !0 }]]
    }), F({ _: 2 }, [
      K(o.$slots, (l, s) => ({
        name: s,
        fn: O((a) => [
          j(o.$slots, s, T(G(a)))
        ])
      }))
    ]), 1040, ["class"]));
  }
});
export {
  Z as default
};
