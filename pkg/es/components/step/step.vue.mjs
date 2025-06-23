import { defineComponent as b, inject as u, watch as p, nextTick as w, ref as B, createBlock as _, createElementBlock as K, unref as l, openBlock as m, mergeProps as N, createSlots as R, renderList as T, withCtx as y, renderSlot as E, normalizeProps as F, guardReactiveProps as M, createVNode as O, createTextVNode as x, toDisplayString as P, createElementVNode as $, createCommentVNode as A, resolveDynamicComponent as D } from "vue";
import { KPopover as L } from "../popover/index.mjs";
import { genRandomStr as j, getExposeProxy as U } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import z from "../../node_modules/lodash-es/isNumber.mjs";
import { ElStep as I } from "../../node_modules/element-plus/es/components/steps/index.mjs";
const q = ["id"], G = { class: "k-step__title" }, et = /* @__PURE__ */ b({
  name: "KStep",
  __name: "step",
  props: {
    title: { default: "" },
    description: { default: "" },
    icon: {},
    status: { default: "" },
    color: {},
    textColor: {}
  },
  setup(g, { expose: v }) {
    const e = g, a = u("stepProps", {}), S = u("steps", []), h = u("stepMethods");
    h.registerStep(e.title);
    const k = j(8), i = {
      primary: "#2882FF",
      success: "#22C55E",
      error: "#EF4444",
      wait: "#EAE8EB"
    };
    p(() => e.title, (t, s) => {
      t !== s && h.updateStep(t, s);
    }), p(
      () => a.active,
      (t) => {
        const s = S.indexOf(e.title);
        if (!z(t) || s === -1 || e.status || e.color)
          return;
        t = Math.max(Math.min(t, S.length), -1);
        const o = Object.keys(i);
        let r = "";
        if (t === s) {
          const c = d(a.processStatus);
          r = o.includes(c) ? i[c] : i.primary;
        } else if (t > s) {
          const c = d(a.finishStatus);
          r = o.includes(c) ? i[c] : i.success;
        } else
          r = i.wait;
        if (!r)
          return;
        const n = e.textColor || (t < s ? "var(--k-theme-text--normal)" : "#fff");
        f(r, n);
      },
      { immediate: !0 }
    ), p(
      () => [e.color, e.status],
      (t) => {
        if (!t[0] && !t[1])
          return;
        let s;
        i[e.status] ? s = i[e.status] : e.color ? s = e.color : s = i.primary;
        const o = e.textColor || (e.status === "wait" ? "var(--k-theme-text--normal)" : "#fff");
        f(s, o);
      },
      { immediate: !0 }
    ), p(() => e.textColor, (t) => {
      f(void 0, t);
    });
    function f(t, s) {
      typeof window < "u" && w(() => {
        var r, n;
        const o = document.getElementById(k);
        t && ((r = o == null ? void 0 : o.style) == null || r.setProperty("--default-bg-color", t)), s && ((n = o == null ? void 0 : o.style) == null || n.setProperty("--default-color", s));
      });
    }
    function d(t) {
      switch (t) {
        case "primary":
          return "finish";
        case "wait":
          return "wait";
        case "success":
          return "success";
        case "error":
          return "error";
        default:
          return "";
      }
    }
    const C = B(null);
    return v(U({}, C)), (t, s) => l(a).capsule ? (m(), K("div", {
      key: 1,
      id: l(k),
      class: "k-step__capsule-box"
    }, [
      O(l(L), {
        "show-after": 500,
        disabled: !e.description
      }, {
        reference: y(() => [
          E(t.$slots, "title", {}, () => [
            $("span", G, [
              e.icon ? (m(), _(D(e.icon), { key: 0 })) : A("", !0),
              x(" " + P(e.title), 1)
            ])
          ])
        ]),
        default: y(() => [
          x(" " + P(e.description), 1)
        ]),
        _: 3
      }, 8, ["disabled"])
    ], 8, q)) : (m(), _(l(I), N({
      key: 0,
      ref_key: "KStepRef",
      ref: C,
      class: "k-step"
    }, t.$attrs, {
      title: t.title,
      description: t.description,
      icon: t.icon,
      status: d(t.status)
    }), R({ _: 2 }, [
      T(t.$slots, (o, r) => ({
        name: r,
        fn: y((n) => [
          E(t.$slots, r, F(M(n)))
        ])
      }))
    ]), 1040, ["title", "description", "icon", "status"]));
  }
});
export {
  et as default
};
