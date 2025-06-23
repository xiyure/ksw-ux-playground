import { defineComponent as _, inject as S, computed as l, ref as C, resolveDirective as R, createBlock as g, openBlock as u, unref as r, mergeProps as y, createSlots as A, withCtx as n, renderSlot as a, normalizeProps as p, guardReactiveProps as c, withDirectives as P, createElementBlock as z, createTextVNode as L, toDisplayString as q } from "vue";
import { getExposeProxy as $ } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as B } from "../../hooks/use_size.mjs";
import { FORM_PARAMS_KEY as F } from "./const.mjs";
import { ElFormItem as E } from "../../node_modules/element-plus/es/components/form/index.mjs";
const I = { ref: "LabelRef" }, Y = /* @__PURE__ */ _({
  name: "KFormItem",
  __name: "form_item",
  props: {
    size: {},
    label: { default: "" },
    showLabel: { type: Boolean, default: void 0 },
    showColon: { type: Boolean, default: void 0 }
  },
  setup(h, { expose: d }) {
    const o = h, t = S(
      F,
      l(() => ({
        showColon: !1,
        showLabel: !0,
        hideRequiredAsterisk: !1,
        requireAsteriskPosition: "left"
      }))
    ), b = B(o), f = C(null), k = l(() => (e) => e ? typeof o.showColon == "boolean" ? o.showColon : t.value.showColon ?? !1 : !1), w = l(() => typeof o.showLabel == "boolean" ? o.showLabel : t.value.showLabel ?? !0);
    function v(e) {
      const m = e == null ? void 0 : e.scrollWidth, s = e == null ? void 0 : e.clientWidth;
      return m > s;
    }
    return d($({}, f)), (e, m) => {
      const s = R("ksw_tooltip");
      return u(), g(r(E), y({
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
      }), A({
        default: n(() => [
          a(e.$slots, "default")
        ]),
        error: n((i) => [
          a(e.$slots, "error", p(c(i)))
        ]),
        _: 2
      }, [
        e.$slots.label || e.label ? {
          name: "label",
          fn: n((i) => [
            P((u(), z("span", I, [
              a(e.$slots, "label", p(c(i)), () => [
                L(q(o.label), 1)
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
  Y as default
};
