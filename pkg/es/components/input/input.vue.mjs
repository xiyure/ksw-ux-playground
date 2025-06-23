import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KPopover as q } from "../popover/index.mjs";
import { getExposeProxy as G } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as J, SIZE_KEY as Q } from "../../hooks/use_size.mjs";
import { useLocale as X } from "../../hooks/use_locale.mjs";
import { useCursor as _ } from "../../hooks/use_cursor.mjs";
import ee from "../../node_modules/ksw-vue-icon/es/icons/base/down.mjs";
import oe from "../../node_modules/ksw-vue-icon/es/icons/base/eye-off.mjs";
import te from "../../node_modules/ksw-vue-icon/es/icons/base/eye.mjs";
import { ElScrollbar as le } from "../../node_modules/element-plus/es/components/scrollbar/index.mjs";
import { ElInput as ne } from "../../node_modules/element-plus/es/components/input/index.mjs";
import { defineComponent as re, onMounted as se, onBeforeUnmount as pe, computed as h, watch as D, provide as ie, createBlock as S, createSlots as ae, withCtx as u, mergeProps as ue, openBlock as d, createElementVNode as E, renderSlot as m, createVNode as K, createCommentVNode as $, createElementBlock as b, Fragment as de, renderList as fe, resolveDynamicComponent as ve } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as a, unref as s } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeClass as y, toDisplayString as M } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { withModifiers as me } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
const ce = ["onClick"], we = { class: "k-input-options-empty" }, De = /* @__PURE__ */ re({
  name: "KInput",
  __name: "input",
  props: {
    modelValue: { default: "" },
    placeholder: {},
    size: {},
    iconLeft: { default: void 0 },
    iconRight: { default: void 0 },
    prefixIcon: { default: void 0 },
    suffixIcon: { default: void 0 },
    showPassword: { type: Boolean, default: !1 },
    type: { default: "text" },
    selectable: { type: Boolean, default: !1 },
    filterable: { type: Boolean },
    options: { default: () => [] },
    popperClass: { default: "" },
    popperStyle: { default: () => ({}) },
    teleported: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "input", "change", "popper-show", "popper-hide"],
  setup(U, { expose: W, emit: A }) {
    const l = U, f = a(), V = J(l), { recordCursor: H, setCursor: O } = _(f), { t: L } = X(), p = A, v = a(!1), n = a(""), B = a(0), r = a(!1), k = a(""), g = a(!1), i = a(-1);
    se(() => {
      window.addEventListener("click", x), window.addEventListener("resize", C), window.addEventListener("keydown", N), C();
    }), pe(() => {
      window.removeEventListener("click", x), window.removeEventListener("resize", C), window.removeEventListener("keydown", N);
    });
    const I = h(() => l.type !== "password" && (!l.showPassword || v.value) ? l.type : v.value ? "text" : "password"), P = h(() => l.selectable && I.value === "text" && !l.showPassword), c = h(() => {
      var e;
      return l.filterable && !g.value && n.value ? (e = l.options) == null ? void 0 : e.filter((o) => o.toString().includes(n.value.toString())) : l.options;
    });
    D(
      () => l.modelValue,
      (e) => {
        e !== n.value && (n.value = e);
      },
      { immediate: !0 }
    ), D(() => r.value, (e) => {
      e || (g.value = !1);
    });
    const z = h(() => (e) => {
      var t;
      if (typeof e != "function")
        return "";
      switch (typeof ((t = e()) == null ? void 0 : t[0].type)) {
        case "string":
          return "k-input-slot--htmlTag";
        case "object":
          return "k-input-slot--component";
        case "symbol":
          return "k-input-slot--string";
        default:
          return "";
      }
    });
    function j() {
      H(), v.value = !v.value, setTimeout(O);
    }
    function T(e) {
      n.value !== e && (n.value = e, p("update:modelValue", e), p("input", e), p("change", e));
    }
    function F() {
      r.value || (g.value = !0), r.value = !r.value;
    }
    function Y(e) {
      var o;
      l.filterable && n.value && ((o = c.value) != null && o.length) ? r.value = !0 : r.value = !1, p("update:modelValue", e), p("input", e);
    }
    function N(e) {
      var t;
      if (!r.value)
        return;
      const o = ((t = c.value) == null ? void 0 : t.length) ?? 0;
      e.code === "ArrowUp" ? i.value = (i.value - 1 + o) % o : e.code === "ArrowDown" ? i.value = (i.value + 1) % o : e.code === "Enter" && i.value >= 0 && i.value < o && (T(c.value[i.value]), r.value = !1);
    }
    function x() {
      r.value = !1;
    }
    function C() {
      setTimeout(() => {
        var e, o;
        return B.value = (o = (e = f.value) == null ? void 0 : e.$el) == null ? void 0 : o.offsetWidth;
      });
    }
    return ie(Q, V), W(G({}, f)), (e, o) => (d(), S(s(ne), ue({
      ref_key: "inputRef",
      ref: f
    }, e.$attrs, {
      modelValue: n.value,
      "onUpdate:modelValue": o[4] || (o[4] = (t) => n.value = t),
      class: [
        "k-input",
        {
          "k-input-has-prepend": e.$slots.prepend,
          "k-input-has-append": e.$slots.append
        }
      ],
      "prefix-icon": e.iconLeft ?? e.prefixIcon,
      "suffix-icon": e.iconRight ?? e.suffixIcon,
      type: I.value,
      size: s(V).elSize,
      placeholder: e.placeholder ?? s(L)("input.placeholder"),
      onInput: Y,
      onChange: o[5] || (o[5] = (t) => {
        p("change", t);
      })
    }), ae({
      prefix: u(() => [
        m(e.$slots, "prefix")
      ]),
      _: 2
    }, [
      e.$slots.prepend ? {
        name: "prepend",
        fn: u(() => [
          E("div", {
            class: y(z.value(e.$slots.prepend))
          }, [
            m(e.$slots, "prepend")
          ], 2)
        ]),
        key: "0"
      } : void 0,
      e.$slots.append ? {
        name: "append",
        fn: u(() => [
          E("div", {
            class: y(z.value(e.$slots.append))
          }, [
            m(e.$slots, "append")
          ], 2)
        ]),
        key: "1"
      } : void 0,
      P.value ? {
        name: "suffix",
        fn: u(() => [
          K(s(ee), {
            class: y(["k-input__arrow", { "is-rotate": r.value }]),
            onClick: me(F, ["prevent", "stop"])
          }, null, 8, ["class"]),
          P.value ? (d(), S(s(q), {
            key: 0,
            visible: r.value,
            "show-arrow": !1,
            width: B.value,
            "virtual-triggering": "",
            "virtual-ref": f.value,
            offset: 3,
            teleported: e.teleported,
            "popper-style": {
              padding: 0,
              ...e.popperStyle
            },
            "popper-class": `k-input__popper ${k.value} ${e.popperClass}`,
            onBeforeEnter: o[0] || (o[0] = () => {
              k.value = "k-input__popper-enter";
            }),
            onBeforeLeave: o[1] || (o[1] = () => {
              k.value = "k-input__popper-leave";
            }),
            onShow: o[2] || (o[2] = () => {
              p("popper-show");
            }),
            onHide: o[3] || (o[3] = () => {
              p("popper-hide");
            })
          }, {
            default: u(() => {
              var t;
              return [
                K(s(le), {
                  class: "k-input-scrollbar",
                  "max-height": ((t = e.popperStyle) == null ? void 0 : t.maxHeight) ?? 200
                }, {
                  default: u(() => {
                    var R;
                    return [
                      (d(!0), b(de, null, fe(c.value, (w, Z) => (d(), b("li", {
                        key: w,
                        class: y([
                          "k-input-option",
                          {
                            "is-selected": n.value === w,
                            "is-highlight": i.value === Z
                          }
                        ]),
                        onClick: () => {
                          T(w);
                        }
                      }, M(w), 11, ce))), 128)),
                      (R = e.options) != null && R.length ? $("", !0) : m(e.$slots, "empty", { key: 0 }, () => [
                        E("div", we, M(s(L)("input.empty")), 1)
                      ])
                    ];
                  }),
                  _: 3
                }, 8, ["max-height"])
              ];
            }),
            _: 3
          }, 8, ["visible", "width", "virtual-ref", "teleported", "popper-style", "popper-class"])) : $("", !0)
        ]),
        key: "2"
      } : {
        name: "suffix",
        fn: u(() => [
          m(e.$slots, "suffix"),
          e.showPassword && n.value ? (d(), b("div", {
            key: 0,
            onClick: j
          }, [
            (d(), S(ve(v.value ? s(te) : s(oe))))
          ])) : $("", !0)
        ]),
        key: "3"
      }
    ]), 1040, ["modelValue", "class", "prefix-icon", "suffix-icon", "type", "size", "placeholder"]));
  }
});
export {
  De as default
};
