import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as _ } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as S } from "../../hooks/use_size.mjs";
import { FORM_PARAMS_KEY as C } from "./const.mjs";
import { ElFormItem as R } from "../../node_modules/element-plus/es/components/form/index.mjs";
import { defineComponent as g, inject as y, computed as l, resolveDirective as A, createBlock as P, openBlock as p, createSlots as z, withCtx as n, withDirectives as L, createElementBlock as q, renderSlot as a, guardReactiveProps as u, createTextVNode as $, mergeProps as B } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as F, unref as r } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as c, toDisplayString as E } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const I = { ref: "LabelRef" }, J = /* @__PURE__ */ g({
  name: "KFormItem",
  __name: "form_item",
  props: {
    size: {},
    label: { default: "" },
    showLabel: { type: Boolean, default: void 0 },
    showColon: { type: Boolean, default: void 0 }
  },
  setup(h, { expose: d }) {
    const o = h, t = y(
      C,
      l(() => ({
        showColon: !1,
        showLabel: !0,
        hideRequiredAsterisk: !1,
        requireAsteriskPosition: "left"
      }))
    ), b = S(o), f = F(null), k = l(() => (e) => e ? typeof o.showColon == "boolean" ? o.showColon : t.value.showColon ?? !1 : !1), w = l(() => typeof o.showLabel == "boolean" ? o.showLabel : t.value.showLabel ?? !0);
    function v(e) {
      const m = e == null ? void 0 : e.scrollWidth, s = e == null ? void 0 : e.clientWidth;
      return m > s;
    }
    return d(_({}, f)), (e, m) => {
      const s = A("ksw_tooltip");
      return p(), P(r(R), B({
        ref_key: "KFormItemRef",
        ref: f,
        class: [
          "k-form-item",
          { "k-form-item--colon": k.value(e.$slots.label ?? e.label) },
          { "k-form-item--no-label": !w.value },
          { "asterisk-position__right": !r(t).hideRequiredAsterisk && r(t).requireAsteriskPosition === "right" },
          { "asterisk-position__left": !r(t).hideRequiredAsterisk && r(t).requireAsteriskPosition !== "right" }
        ]
      }, e.$attrs, {
        label: e.label,
        size: r(b).elSize
      }), z({
        default: n(() => [
          a(e.$slots, "default")
        ]),
        error: n((i) => [
          a(e.$slots, "error", c(u(i)))
        ]),
        _: 2
      }, [
        e.$slots.label || e.label ? {
          name: "label",
          fn: n((i) => [
            L((p(), q("span", I, [
              a(e.$slots, "label", c(u(i)), () => [
                $(E(o.label), 1)
              ])
            ])), [
              [s, {
                visible: v
              }]
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["class", "label", "size"]);
    };
  }
});
export {
  J as default
};
