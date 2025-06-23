import { defineComponent as U, ref as A, computed as s, watch as F, nextTick as G, createBlock as f, openBlock as r, unref as g, mergeProps as K, withCtx as M, renderSlot as b, createElementBlock as L, createCommentVNode as p, resolveDynamicComponent as h, toDisplayString as Y } from "vue";
import { getCSSVar as d, isValidColor as j, getExposeProxy as q, compatibleSlots as z } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { GetColorLevelNew as H } from "../../utils/color.mjs";
import { btnTypes as J } from "./const.mjs";
import { useSize as Q } from "../../hooks/use_size.mjs";
import { ElButton as W } from "../../node_modules/element-plus/es/components/button/index.mjs";
const X = {
  key: 0,
  class: "k-button__content"
}, Z = {
  key: 1,
  class: "k-button__content"
}, se = /* @__PURE__ */ U({
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
    }, t = T, v = Q(t), o = A(), D = s(() => !!(t.main || !t.secondary && !t.text && (i[t.type] || j(t.color)))), P = s(() => {
      const { ownSize: e } = v.value;
      return e ? `el-button--${e}` : "";
    }), R = s(() => {
      if (i[t.type])
        return "";
      for (let e = 0; e < k.length; e++)
        if (t[k[e]])
          return "";
      return "k-button--base";
    }), y = s(() => {
      var n;
      const { color: e, type: l } = t, a = e || i[l] || i.primary;
      return ((n = H(a)) == null ? void 0 : n.colorLevel) ?? {};
    }), V = s(() => {
      var n, u, c;
      const { shadow: e, text: l } = t;
      if (!e || !l)
        return "";
      const a = (c = (u = (n = y.value) == null ? void 0 : n["--k-oklch-500"]) == null ? void 0 : u.match(/\(([^)]+)\)/)) == null ? void 0 : c[1];
      return { "--text-shadow-color": a ? `rgba(${a}, 0.08)` : "transparent" };
    });
    F(
      [() => t.color, () => t.type],
      () => {
        G(() => {
          var e, l, a, n, u, c, $;
          if ((l = (e = o == null ? void 0 : o.value) == null ? void 0 : e.$el) != null && l.style) {
            const m = (a = o.value.$el) == null ? void 0 : a.classList, N = (c = (u = (n = y.value) == null ? void 0 : n["--k-oklch-500"]) == null ? void 0 : u.match(/\(([^)]+)\)/)) == null ? void 0 : c[1];
            for (const B of J) {
              const O = `el-button--${B.type}`;
              m != null && m.contains(O) && B.vars.forEach((S) => {
                var w, C;
                (C = o.value.$el) == null || C.style.setProperty(
                  `--k-button-${S.name}`,
                  (w = y.value) == null ? void 0 : w[`--k-oklch-${S.value}`]
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
    return E(q(I, o)), (e, l) => (r(), f(g(W), K({
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
      default: M(() => [
        b(e.$slots, g(z)(e.$slots, ["icon-left", "iconLeft"]), { class: "icon-left" }, () => [
          t.iconLeft ? (r(), f(h(t.iconLeft), { key: 0 })) : p("", !0)
        ]),
        t.value && t.icon === !1 ? (r(), L("label", X, Y(t.value), 1)) : e.$slots.default ? (r(), L("label", Z, [
          b(e.$slots, "default", { class: "slot-content" })
        ])) : p("", !0),
        b(e.$slots, g(z)(e.$slots, ["icon-right", "iconRight"]), { class: "icon-right" }, () => [
          t.iconRight ? (r(), f(h(t.iconRight), { key: 0 })) : p("", !0)
        ]),
        t.loading ? (r(), f(h(t.loadingIcon), {
          key: 2,
          class: "loading-icon"
        })) : p("", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "loading", "loading-icon", "disabled"]));
  }
});
export {
  se as default
};
