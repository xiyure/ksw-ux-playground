import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KPopover as B } from "../popover/index.mjs";
import { genRandomStr as N, getExposeProxy as b } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import w from "../../node_modules/lodash-es/isNumber.mjs";
import { ElStep as K } from "../../node_modules/element-plus/es/components/steps/index.mjs";
import { defineComponent as R, inject as u, watch as p, nextTick as T, createBlock as _, createElementBlock as F, openBlock as m, createSlots as M, renderList as O, withCtx as y, renderSlot as E, guardReactiveProps as $, mergeProps as A, createVNode as D, createTextVNode as x, createElementVNode as L, createCommentVNode as j, resolveDynamicComponent as U } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as z, unref as l } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as I, toDisplayString as P } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const q = ["id"], G = { class: "k-step__title" }, rt = /* @__PURE__ */ R({
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
    const k = N(8), i = {
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
        if (!w(t) || s === -1 || e.status || e.color)
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
      typeof window < "u" && T(() => {
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
    const C = z(null);
    return v(b({}, C)), (t, s) => l(a).capsule ? (m(), F("div", {
      key: 1,
      id: l(k),
      class: "k-step__capsule-box"
    }, [
      D(l(B), {
        "show-after": 500,
        disabled: !e.description
      }, {
        reference: y(() => [
          E(t.$slots, "title", {}, () => [
            L("span", G, [
              e.icon ? (m(), _(U(e.icon), { key: 0 })) : j("", !0),
              x(" " + P(e.title), 1)
            ])
          ])
        ]),
        default: y(() => [
          x(" " + P(e.description), 1)
        ]),
        _: 3
      }, 8, ["disabled"])
    ], 8, q)) : (m(), _(l(K), A({
      key: 0,
      ref_key: "KStepRef",
      ref: C,
      class: "k-step"
    }, t.$attrs, {
      title: t.title,
      description: t.description,
      icon: t.icon,
      status: d(t.status)
    }), M({ _: 2 }, [
      O(t.$slots, (o, r) => ({
        name: r,
        fn: y((n) => [
          E(t.$slots, r, I($(n)))
        ])
      }))
    ]), 1040, ["title", "description", "icon", "status"]));
  }
});
export {
  rt as default
};
