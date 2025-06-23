import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getCSSVar as d, isValidColor as U, getExposeProxy as A, compatibleSlots as L } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { GetColorLevelNew as F } from "../../utils/color.mjs";
import { btnTypes as G } from "./const.mjs";
import { useSize as K } from "../../hooks/use_size.mjs";
import { ElButton as M } from "../../node_modules/element-plus/es/components/button/index.mjs";
import { defineComponent as Y, computed as s, watch as j, nextTick as q, createBlock as f, openBlock as r, withCtx as H, renderSlot as g, createElementBlock as z, createCommentVNode as p, resolveDynamicComponent as b, mergeProps as J } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as Q, unref as h } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as W } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const X = {
  key: 0,
  class: "k-button__content"
}, Z = {
  key: 1,
  class: "k-button__content"
}, ue = /* @__PURE__ */ Y({
  name: "KButton",
  __name: "button",
  props: {
    type: { default: "" },
    main: { type: Boolean, default: !1 },
    secondary: { type: Boolean, default: !1 },
    text: { type: Boolean, default: !1 },
    icon: { type: Boolean, default: !1 },
    size: {},
    iconLeft: { default: "" },
    iconRight: { default: "" },
    value: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    loadingIcon: { default: "IconLoading" },
    color: { default: "" },
    shadow: { type: Boolean },
    useDefaultStyle: { type: Boolean, default: !0 }
  },
  setup(T, { expose: E }) {
    const k = ["main", "secondary", "text", "icon"], i = {
      primary: d("--k-theme-primary"),
      success: d("--k-theme-success"),
      info: d("--k-theme-info"),
      warning: d("--k-theme-warning"),
      danger: d("--k-theme-danger")
    }, t = T, v = K(t), o = Q(), D = s(() => !!(t.main || !t.secondary && !t.text && (i[t.type] || U(t.color)))), P = s(() => {
      const { ownSize: e } = v.value;
      return e ? `el-button--${e}` : "";
    }), R = s(() => {
      if (i[t.type])
        return "";
      for (let e = 0; e < k.length; e++)
        if (t[k[e]])
          return "";
      return "k-button--base";
    }), m = s(() => {
      var n;
      const { color: e, type: l } = t, a = e || i[l] || i.primary;
      return ((n = F(a)) == null ? void 0 : n.colorLevel) ?? {};
    }), V = s(() => {
      var n, u, c;
      const { shadow: e, text: l } = t;
      if (!e || !l)
        return "";
      const a = (c = (u = (n = m.value) == null ? void 0 : n["--k-oklch-500"]) == null ? void 0 : u.match(/\(([^)]+)\)/)) == null ? void 0 : c[1];
      return { "--text-shadow-color": a ? `rgba(${a}, 0.08)` : "transparent" };
    });
    j(
      [() => t.color, () => t.type],
      () => {
        q(() => {
          var e, l, a, n, u, c, $;
          if ((l = (e = o == null ? void 0 : o.value) == null ? void 0 : e.$el) != null && l.style) {
            const y = (a = o.value.$el) == null ? void 0 : a.classList, N = (c = (u = (n = m.value) == null ? void 0 : n["--k-oklch-500"]) == null ? void 0 : u.match(/\(([^)]+)\)/)) == null ? void 0 : c[1];
            for (const B of G) {
              const O = `el-button--${B.type}`;
              y != null && y.contains(O) && B.vars.forEach((S) => {
                var w, C;
                (C = o.value.$el) == null || C.style.setProperty(
                  `--k-button-${S.name}`,
                  (w = m.value) == null ? void 0 : w[`--k-oklch-${S.value}`]
                );
              });
            }
            ($ = o.value.$el) == null || $.style.setProperty("--k-button-focus", `rgba(${N}, 0.2)`);
          }
        });
      },
      { immediate: !0 }
    );
    const I = {
      size: s(() => v.value.ownSize)
    };
    return E(A(I, o)), (e, l) => (r(), f(h(M), J({
      ref_key: "buttonRef",
      ref: o,
      class: ["k-button", [
        "el-button",
        {
          "el-button--main": D.value,
          "el-button--secondary": e.secondary,
          "el-button--text": e.text,
          "el-button--icon": e.icon,
          "is-loading": e.loading,
          "is-disabled": e.disabled,
          "button-loading": e.loading,
          "is-shadow": e.shadow,
          "use-default-style": e.useDefaultStyle
        },
        i[t.type] ? `el-button--${e.type}` : "",
        P.value,
        R.value
      ]],
      style: V.value,
      loading: e.loading,
      "loading-icon": e.loadingIcon,
      disabled: e.disabled
    }, e.$attrs), {
      default: H(() => [
        g(e.$slots, h(L)(e.$slots, ["icon-left", "iconLeft"]), { class: "icon-left" }, () => [
          t.iconLeft ? (r(), f(b(t.iconLeft), { key: 0 })) : p("", !0)
        ]),
        t.value && t.icon === !1 ? (r(), z("label", X, W(t.value), 1)) : e.$slots.default ? (r(), z("label", Z, [
          g(e.$slots, "default", { class: "slot-content" })
        ])) : p("", !0),
        g(e.$slots, h(L)(e.$slots, ["icon-right", "iconRight"]), { class: "icon-right" }, () => [
          t.iconRight ? (r(), f(b(t.iconRight), { key: 0 })) : p("", !0)
        ]),
        t.loading ? (r(), f(b(t.loadingIcon), {
          key: 2,
          class: "loading-icon"
        })) : p("", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "loading", "loading-icon", "disabled"]));
  }
});
export {
  ue as default
};
