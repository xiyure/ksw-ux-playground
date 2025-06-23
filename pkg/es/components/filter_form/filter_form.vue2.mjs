import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KInput as F } from "../input/index.mjs";
import { KSelect as ee, KOption as oe } from "../select/index.mjs";
import { KRadioGroup as le, KRadio as te } from "../radio/index.mjs";
import { KCheckboxGroup as ae, KCheckbox as I } from "../checkbox/index.mjs";
import { KDatePicker as se } from "../date_picker/index.mjs";
import { KButton as L } from "../button/index.mjs";
import { KFormItem as ue, KForm as re } from "../form/index.mjs";
import { getExposeProxy as ne } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as pe } from "../../hooks/use_size.mjs";
import { useLocale as ie } from "../../hooks/use_locale.mjs";
import { defineComponent as de, onMounted as ce, onUnmounted as ve, computed as M, watch as U, createElementBlock as f, openBlock as n, createVNode as C, withCtx as h, createElementVNode as G, Fragment as x, renderList as k, createBlock as c, createCommentVNode as K, mergeProps as v, renderSlot as q, resolveDynamicComponent as me, withDirectives as ye, createTextVNode as P } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as g, unref as p } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeStyle as fe, toDisplayString as H } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { vShow as ge } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
const Ae = /* @__PURE__ */ de({
  name: "KFilterForm",
  __name: "filter_form",
  props: {
    items: { default: () => [] },
    size: {},
    collapse: { type: Boolean, default: !0 },
    reserve: { type: Boolean, default: !1 },
    visible: { type: Boolean, default: !1 },
    showColon: { type: Boolean }
  },
  emits: ["search", "reset", "change"],
  setup(O, { expose: Z, emit: j }) {
    const B = ["base", "sm"], m = O, J = pe(m), T = j, s = g({});
    let b = {};
    const u = g(), a = g(), d = g(), t = g(), w = g(m.collapse), z = g(1), S = g(1), Q = g(""), { t: _ } = ie();
    ce(() => {
      if (!m.collapse) {
        N();
        return;
      }
      $(), t == null || t.value.style.setProperty("--transition-duration", "0.3s"), t == null || t.value.classList.remove("is-expand"), d == null || d.value.classList.remove("is-expand");
    }), window.addEventListener("resize", $), ve(() => {
      window.removeEventListener("resize", $);
    });
    const y = M(() => (l = {}) => {
      const { size: r } = l;
      return r && B.includes(r) ? r : J.value.ownSize;
    }), E = M(() => (l) => {
      let r = l.visible ?? !0;
      if (typeof r == "function" && (r = r(s.value)), r === !1 && l.prop && !m.reserve) {
        const e = m.items.find((o) => o.prop === l.prop);
        s.value[l.prop] = e == null ? void 0 : e.value;
      }
      return r;
    });
    U(
      () => m.items,
      () => {
        b = {};
      }
    ), U(
      () => m.items,
      () => {
        var l;
        (l = m.items) == null || l.forEach((r) => {
          const { prop: e, value: o } = r;
          o !== b[e] && (s.value[e] = o, b[e] = o);
        });
      },
      { deep: !0, immediate: !0 }
    ), U(
      () => s.value,
      (l) => {
        T("change", l), setTimeout(() => {
          var i, V;
          const r = d.value.offsetTop;
          u == null || u.value.style.setProperty("--top-new", `${r}px`);
          const e = ((i = a.value) == null ? void 0 : i.$el.clientHeight) ?? 0;
          t == null || t.value.style.setProperty("--expandHeight", `${e}px`);
          const o = getComputedStyle((V = a == null ? void 0 : a.value) == null ? void 0 : V.$el).gridTemplateRows.split(" ");
          Q.value = o[0], S.value = o.length, $();
        }, 100);
      },
      { deep: !0 }
    );
    function D() {
      u == null || u.value.classList.toggle("is-expand"), d == null || d.value.classList.toggle("is-expand"), t == null || t.value.classList.toggle("is-expand"), w.value = !w.value;
      const l = d.value.offsetTop;
      u == null || u.value.style.setProperty("--top-new", `${l}px`), setTimeout(() => {
        var o;
        const r = ((o = a.value) == null ? void 0 : o.$el.clientHeight) ?? 0;
        t == null || t.value.style.setProperty("--expandHeight", `${r}px`);
        const e = d.value.offsetTop;
        u == null || u.value.style.setProperty("--top-new", `${e}px`);
      }, 1);
    }
    function N() {
      u == null || u.value.classList.add("is-expand"), a == null || a.value.$el.classList.add("is-expand"), w.value = !1;
    }
    function W() {
      u == null || u.value.classList.remove("is-expand"), a == null || a.value.$el.classList.remove("is-expand"), w.value = !0;
    }
    function X() {
      T("search", s.value);
    }
    function A() {
      m.items.forEach((l) => {
        s.value[l.prop] = l.value;
      }), a.value.resetFields(), T("reset");
    }
    function Y() {
      return s.value;
    }
    function $() {
      var e, o;
      if (!((e = a == null ? void 0 : a.value) != null && e.$el)) return;
      let l = 1;
      const r = getComputedStyle((o = a == null ? void 0 : a.value) == null ? void 0 : o.$el).gridTemplateColumns.split(" ");
      for (let i = 1; i < r.length; i++) {
        if (Math.abs(parseInt(r[i]) - parseInt(r[i - 1])) > 2) {
          z.value = l;
          break;
        }
        l++;
      }
      z.value = l, setTimeout(() => {
        R();
      }, 1);
    }
    function R() {
      var i, V;
      const l = ((i = a.value) == null ? void 0 : i.$el.clientHeight) ?? 0, r = d.value.offsetTop, e = getComputedStyle((V = a == null ? void 0 : a.value) == null ? void 0 : V.$el).gridTemplateRows.split(" "), o = e[0];
      S.value = e.length, t == null || t.value.style.setProperty("--expandHeight", `${l}px`), t == null || t.value.style.setProperty("--transition-duration", "0.3s"), u == null || u.value.style.setProperty("--top-new", `${r}px`), t == null || t.value.style.setProperty("--firstRowHeight", `${o}`);
    }
    return Z(ne({ reset: A, getFormData: Y, toggle: D, expand: N, collapse: W }, a)), (l, r) => (n(), f("div", {
      ref_key: "filterForm",
      ref: t,
      class: "filterForm is-expand"
    }, [
      C(p(re), {
        ref_key: "KFormRef",
        ref: a,
        class: "filter-items w-full relative grid grid-cols-1 2xs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 base:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",
        model: s.value,
        size: l.size,
        "show-colon": l.showColon
      }, {
        default: h(() => [
          (n(!0), f(x, null, k(l.items, (e) => (n(), f(x, {
            key: e.prop
          }, [
            E.value(e) ? (n(), c(p(ue), v({
              key: e.prop
            }, e, {
              style: `grid-column: span ${e.column === void 0 ? 1 : e.column < z.value ? e.column : z.value}`,
              class: "grid-auto-rows:max-content;"
            }), {
              default: h(() => [
                q(l.$slots, e.prop, { formData: s.value }, () => [
                  typeof e.render == "function" ? (n(), c(me(e.render(s.value)), { key: 0 })) : e.type === "select" ? (n(), c(p(ee), v({
                    key: 1,
                    modelValue: s.value[e.prop],
                    "onUpdate:modelValue": (o) => s.value[e.prop] = o
                  }, e.attrs, {
                    size: y.value(e.attrs)
                  }), {
                    default: h(() => [
                      (n(!0), f(x, null, k(e.options, (o) => (n(), c(p(oe), v(o, { key: o }), null, 16))), 128))
                    ]),
                    _: 2
                  }, 1040, ["modelValue", "onUpdate:modelValue", "size"])) : e.type === "radio" ? (n(), c(p(le), v({
                    key: 2,
                    modelValue: s.value[e.prop],
                    "onUpdate:modelValue": (o) => s.value[e.prop] = o
                  }, e.attrs, {
                    size: y.value(e.attrs)
                  }), {
                    default: h(() => [
                      (n(!0), f(x, null, k(e.options, (o) => (n(), c(p(te), v(o, { key: o }), null, 16))), 128))
                    ]),
                    _: 2
                  }, 1040, ["modelValue", "onUpdate:modelValue", "size"])) : e.type === "checkbox" ? (n(), f(x, { key: 3 }, [
                    Array.isArray(e.value) ? (n(), c(p(ae), v({
                      key: 0,
                      modelValue: s.value[e.prop],
                      "onUpdate:modelValue": (o) => s.value[e.prop] = o
                    }, e.attrs, {
                      size: y.value(e.attrs)
                    }), {
                      default: h(() => [
                        (n(!0), f(x, null, k(e.options, (o) => (n(), c(p(I), v(o, {
                          key: o,
                          size: y.value(e.attrs)
                        }), null, 16, ["size"]))), 128))
                      ]),
                      _: 2
                    }, 1040, ["modelValue", "onUpdate:modelValue", "size"])) : (n(!0), f(x, { key: 1 }, k(e.options, (o) => (n(), c(p(I), v(o, {
                      key: o,
                      modelValue: s.value[e.prop],
                      "onUpdate:modelValue": (i) => s.value[e.prop] = i,
                      size: y.value(e.attrs)
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "size"]))), 128))
                  ], 64)) : e.type === "date" ? (n(), c(p(se), v({
                    key: 4,
                    modelValue: s.value[e.prop],
                    "onUpdate:modelValue": (o) => s.value[e.prop] = o
                  }, e.attrs, {
                    size: y.value(e.attrs)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "size"])) : (n(), f(x, { key: 5 }, [
                    E.value(e) ? (n(), c(p(F), v({
                      key: 0,
                      modelValue: s.value[e.prop],
                      "onUpdate:modelValue": (o) => s.value[e.prop] = o
                    }, e.attrs, {
                      size: y.value(e.attrs)
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "size"])) : K("", !0)
                  ], 64))
                ], !0)
              ]),
              _: 2
            }, 1040, ["style"])) : K("", !0)
          ], 64))), 128)),
          G("div", {
            ref_key: "markers",
            ref: d,
            class: "markers flex w-full h-8 is-expand",
            style: fe(`grid-column: ${z.value} / ${z.value + 1}; `)
          }, null, 4),
          G("div", {
            ref_key: "filterBtn",
            ref: u,
            class: "filter-btns flex bg-white"
          }, [
            q(l.$slots, "action", {}, () => [
              C(p(L), {
                size: y.value(),
                onClick: A
              }, {
                default: h(() => {
                  var e;
                  return [
                    P(H((e = p(_)) == null ? void 0 : e("filterForm.reset")), 1)
                  ];
                }),
                _: 1
              }, 8, ["size"]),
              C(p(L), {
                size: y.value(),
                main: "",
                onClick: X
              }, {
                default: h(() => {
                  var e;
                  return [
                    P(H((e = p(_)) == null ? void 0 : e("filterForm.query")), 1)
                  ];
                }),
                _: 1
              }, 8, ["size"]),
              ye(C(p(L), {
                text: "",
                "icon-right": w.value ? "IconArrowBottom" : "IconArrowTop",
                onClick: D
              }, {
                default: h(() => {
                  var e, o;
                  return [
                    P(H(w.value ? (e = p(_)) == null ? void 0 : e("filterForm.expand") : (o = p(_)) == null ? void 0 : o("filterForm.collapse")), 1)
                  ];
                }),
                _: 1
              }, 8, ["icon-right"]), [
                [ge, S.value > 1]
              ])
            ], !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["model", "size", "show-colon"])
    ], 512));
  }
});
export {
  Ae as default
};
