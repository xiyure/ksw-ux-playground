import { defineComponent as F, ref as m, onMounted as ee, onUnmounted as le, computed as N, watch as L, createElementBlock as f, openBlock as n, createVNode as C, unref as p, withCtx as h, createElementVNode as M, Fragment as x, renderList as V, createBlock as c, createCommentVNode as G, mergeProps as v, renderSlot as K, resolveDynamicComponent as oe, normalizeStyle as te, withDirectives as ae, createTextVNode as U, toDisplayString as P, vShow as se } from "vue";
import { KInput as ue } from "../input/index.mjs";
import { KSelect as re, KOption as ne } from "../select/index.mjs";
import { KRadioGroup as pe, KRadio as ie } from "../radio/index.mjs";
import { KCheckboxGroup as de, KCheckbox as q } from "../checkbox/index.mjs";
import { KDatePicker as ce } from "../date_picker/index.mjs";
import { KButton as H } from "../button/index.mjs";
import { KForm as ve, KFormItem as ye } from "../form/index.mjs";
import { getExposeProxy as ge } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as me } from "../../hooks/use_size.mjs";
import { useLocale as fe } from "../../hooks/use_locale.mjs";
const He = /* @__PURE__ */ F({
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
    const J = ["base", "sm"], y = O, Q = me(y), T = j, s = m({});
    let b = {};
    const u = m(), a = m(), d = m(), t = m(), w = m(y.collapse), z = m(1), S = m(1), W = m(""), { t: _ } = fe();
    ee(() => {
      if (!y.collapse) {
        A();
        return;
      }
      $(), t == null || t.value.style.setProperty("--transition-duration", "0.3s"), t == null || t.value.classList.remove("is-expand"), d == null || d.value.classList.remove("is-expand");
    }), window.addEventListener("resize", $), le(() => {
      window.removeEventListener("resize", $);
    });
    const g = N(() => (o = {}) => {
      const { size: r } = o;
      return r && J.includes(r) ? r : Q.value.ownSize;
    }), E = N(() => (o) => {
      let r = o.visible ?? !0;
      if (typeof r == "function" && (r = r(s.value)), r === !1 && o.prop && !y.reserve) {
        const e = y.items.find((l) => l.prop === o.prop);
        s.value[o.prop] = e == null ? void 0 : e.value;
      }
      return r;
    });
    L(
      () => y.items,
      () => {
        b = {};
      }
    ), L(
      () => y.items,
      () => {
        var o;
        (o = y.items) == null || o.forEach((r) => {
          const { prop: e, value: l } = r;
          l !== b[e] && (s.value[e] = l, b[e] = l);
        });
      },
      { deep: !0, immediate: !0 }
    ), L(
      () => s.value,
      (o) => {
        T("change", o), setTimeout(() => {
          var i, k;
          const r = d.value.offsetTop;
          u == null || u.value.style.setProperty("--top-new", `${r}px`);
          const e = ((i = a.value) == null ? void 0 : i.$el.clientHeight) ?? 0;
          t == null || t.value.style.setProperty("--expandHeight", `${e}px`);
          const l = getComputedStyle((k = a == null ? void 0 : a.value) == null ? void 0 : k.$el).gridTemplateRows.split(" ");
          W.value = l[0], S.value = l.length, $();
        }, 100);
      },
      { deep: !0 }
    );
    function D() {
      u == null || u.value.classList.toggle("is-expand"), d == null || d.value.classList.toggle("is-expand"), t == null || t.value.classList.toggle("is-expand"), w.value = !w.value;
      const o = d.value.offsetTop;
      u == null || u.value.style.setProperty("--top-new", `${o}px`), setTimeout(() => {
        var l;
        const r = ((l = a.value) == null ? void 0 : l.$el.clientHeight) ?? 0;
        t == null || t.value.style.setProperty("--expandHeight", `${r}px`);
        const e = d.value.offsetTop;
        u == null || u.value.style.setProperty("--top-new", `${e}px`);
      }, 1);
    }
    function A() {
      u == null || u.value.classList.add("is-expand"), a == null || a.value.$el.classList.add("is-expand"), w.value = !1;
    }
    function X() {
      u == null || u.value.classList.remove("is-expand"), a == null || a.value.$el.classList.remove("is-expand"), w.value = !0;
    }
    function Y() {
      T("search", s.value);
    }
    function I() {
      y.items.forEach((o) => {
        s.value[o.prop] = o.value;
      }), a.value.resetFields(), T("reset");
    }
    function B() {
      return s.value;
    }
    function $() {
      var e, l;
      if (!((e = a == null ? void 0 : a.value) != null && e.$el)) return;
      let o = 1;
      const r = getComputedStyle((l = a == null ? void 0 : a.value) == null ? void 0 : l.$el).gridTemplateColumns.split(" ");
      for (let i = 1; i < r.length; i++) {
        if (Math.abs(parseInt(r[i]) - parseInt(r[i - 1])) > 2) {
          z.value = o;
          break;
        }
        o++;
      }
      z.value = o, setTimeout(() => {
        R();
      }, 1);
    }
    function R() {
      var i, k;
      const o = ((i = a.value) == null ? void 0 : i.$el.clientHeight) ?? 0, r = d.value.offsetTop, e = getComputedStyle((k = a == null ? void 0 : a.value) == null ? void 0 : k.$el).gridTemplateRows.split(" "), l = e[0];
      S.value = e.length, t == null || t.value.style.setProperty("--expandHeight", `${o}px`), t == null || t.value.style.setProperty("--transition-duration", "0.3s"), u == null || u.value.style.setProperty("--top-new", `${r}px`), t == null || t.value.style.setProperty("--firstRowHeight", `${l}`);
    }
    return Z(ge({ reset: I, getFormData: B, toggle: D, expand: A, collapse: X }, a)), (o, r) => (n(), f("div", {
      ref_key: "filterForm",
      ref: t,
      class: "filterForm is-expand"
    }, [
      C(p(ve), {
        ref_key: "KFormRef",
        ref: a,
        class: "filter-items w-full relative grid grid-cols-1 2xs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 base:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",
        model: s.value,
        size: o.size,
        "show-colon": o.showColon
      }, {
        default: h(() => [
          (n(!0), f(x, null, V(o.items, (e) => (n(), f(x, {
            key: e.prop
          }, [
            E.value(e) ? (n(), c(p(ye), v({
              key: e.prop
            }, e, {
              style: `grid-column: span ${e.column === void 0 ? 1 : e.column < z.value ? e.column : z.value}`,
              class: "grid-auto-rows:max-content;"
            }), {
              default: h(() => [
                K(o.$slots, e.prop, { formData: s.value }, () => [
                  typeof e.render == "function" ? (n(), c(oe(e.render(s.value)), { key: 0 })) : e.type === "select" ? (n(), c(p(re), v({
                    key: 1,
                    modelValue: s.value[e.prop],
                    "onUpdate:modelValue": (l) => s.value[e.prop] = l
                  }, e.attrs, {
                    size: g.value(e.attrs)
                  }), {
                    default: h(() => [
                      (n(!0), f(x, null, V(e.options, (l) => (n(), c(p(ne), v(l, { key: l }), null, 16))), 128))
                    ]),
                    _: 2
                  }, 1040, ["modelValue", "onUpdate:modelValue", "size"])) : e.type === "radio" ? (n(), c(p(pe), v({
                    key: 2,
                    modelValue: s.value[e.prop],
                    "onUpdate:modelValue": (l) => s.value[e.prop] = l
                  }, e.attrs, {
                    size: g.value(e.attrs)
                  }), {
                    default: h(() => [
                      (n(!0), f(x, null, V(e.options, (l) => (n(), c(p(ie), v(l, { key: l }), null, 16))), 128))
                    ]),
                    _: 2
                  }, 1040, ["modelValue", "onUpdate:modelValue", "size"])) : e.type === "checkbox" ? (n(), f(x, { key: 3 }, [
                    Array.isArray(e.value) ? (n(), c(p(de), v({
                      key: 0,
                      modelValue: s.value[e.prop],
                      "onUpdate:modelValue": (l) => s.value[e.prop] = l
                    }, e.attrs, {
                      size: g.value(e.attrs)
                    }), {
                      default: h(() => [
                        (n(!0), f(x, null, V(e.options, (l) => (n(), c(p(q), v(l, {
                          key: l,
                          size: g.value(e.attrs)
                        }), null, 16, ["size"]))), 128))
                      ]),
                      _: 2
                    }, 1040, ["modelValue", "onUpdate:modelValue", "size"])) : (n(!0), f(x, { key: 1 }, V(e.options, (l) => (n(), c(p(q), v(l, {
                      key: l,
                      modelValue: s.value[e.prop],
                      "onUpdate:modelValue": (i) => s.value[e.prop] = i,
                      size: g.value(e.attrs)
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "size"]))), 128))
                  ], 64)) : e.type === "date" ? (n(), c(p(ce), v({
                    key: 4,
                    modelValue: s.value[e.prop],
                    "onUpdate:modelValue": (l) => s.value[e.prop] = l
                  }, e.attrs, {
                    size: g.value(e.attrs)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "size"])) : (n(), f(x, { key: 5 }, [
                    E.value(e) ? (n(), c(p(ue), v({
                      key: 0,
                      modelValue: s.value[e.prop],
                      "onUpdate:modelValue": (l) => s.value[e.prop] = l
                    }, e.attrs, {
                      size: g.value(e.attrs)
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "size"])) : G("", !0)
                  ], 64))
                ], !0)
              ]),
              _: 2
            }, 1040, ["style"])) : G("", !0)
          ], 64))), 128)),
          M("div", {
            ref_key: "markers",
            ref: d,
            class: "markers flex w-full h-8 is-expand",
            style: te(`grid-column: ${z.value} / ${z.value + 1}; `)
          }, null, 4),
          M("div", {
            ref_key: "filterBtn",
            ref: u,
            class: "filter-btns flex bg-white"
          }, [
            K(o.$slots, "action", {}, () => [
              C(p(H), {
                size: g.value(),
                onClick: I
              }, {
                default: h(() => {
                  var e;
                  return [
                    U(P((e = p(_)) == null ? void 0 : e("filterForm.reset")), 1)
                  ];
                }),
                _: 1
              }, 8, ["size"]),
              C(p(H), {
                size: g.value(),
                main: "",
                onClick: Y
              }, {
                default: h(() => {
                  var e;
                  return [
                    U(P((e = p(_)) == null ? void 0 : e("filterForm.query")), 1)
                  ];
                }),
                _: 1
              }, 8, ["size"]),
              ae(C(p(H), {
                text: "",
                "icon-right": w.value ? "IconArrowBottom" : "IconArrowTop",
                onClick: D
              }, {
                default: h(() => {
                  var e, l;
                  return [
                    U(P(w.value ? (e = p(_)) == null ? void 0 : e("filterForm.expand") : (l = p(_)) == null ? void 0 : l("filterForm.collapse")), 1)
                  ];
                }),
                _: 1
              }, 8, ["icon-right"]), [
                [se, S.value > 1]
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
  He as default
};
