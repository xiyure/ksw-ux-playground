import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { useLocale as V } from "../../hooks/use_locale.mjs";
import L from "../../node_modules/ksw-vue-icon/es/icons/base/loading.mjs";
import { defineComponent as $, onMounted as x, computed as H, onUpdated as P, watch as D, nextTick as M, createElementBlock as d, openBlock as a, renderSlot as f, createCommentVNode as h, createElementVNode as c, createVNode as K, createTextVNode as O } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as g, unref as n } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as k } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const U = {
  key: 0,
  class: "k-list-loading"
}, W = { class: "k-list-default-loading" }, Y = {
  key: 1,
  class: "k-list-finished"
}, j = { class: "k-list-default-finished" }, q = { class: "k-list-default-error" }, Q = /* @__PURE__ */ $({
  name: "KList",
  __name: "list",
  props: {
    loading: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    finished: { type: Boolean, default: !1 },
    offset: { default: 0 },
    loadingText: {},
    errorText: {},
    finishedText: {},
    disabled: { type: Boolean, default: !1 },
    scroller: {},
    immediate: { type: Boolean, default: !0 }
  },
  emits: ["update:loading", "update:error", "load"],
  setup(B, { expose: C, emit: R }) {
    const { t: u } = V(), o = B, s = R;
    x(() => {
      var e, t;
      (t = (e = v.value) == null ? void 0 : e.addEventListener) == null || t.call(e, "scroll", l, { passive: !0 }), o.immediate && l();
    }), P(() => {
      i.value = o.loading;
    });
    const v = H(() => o.scroller ? o.scroller : _(p.value)), p = g(), y = g(), i = g(o.loading), N = /scroll|auto|overlay/i;
    D(() => [o.loading, o.error, o.finished], (e) => {
      e[1] && (i.value = !1, s("update:loading", !1)), l();
    });
    function S() {
      s("update:error", !1), l();
    }
    function l() {
      M(() => {
        if (i.value || o.finished || o.disabled || o.error)
          return;
        const e = +o.offset, t = w(v);
        if (!t.height || b(p))
          return;
        w(y).bottom - t.bottom <= e && (i.value = !0, s("update:loading", !0), s("load"));
      });
    }
    function _(e) {
      let t = e;
      for (; t && t !== window && t instanceof Element; ) {
        const { overflowY: r } = window.getComputedStyle(t);
        if (N.test(r))
          return t;
        t = t.parentNode;
      }
      return e;
    }
    function b(e) {
      const t = n(e);
      if (!t)
        return !1;
      const r = window.getComputedStyle(t), m = r.display === "none", E = t.offsetParent === null && r.position !== "fixed";
      return m || E;
    }
    function w(e) {
      const t = n(e);
      if (t === window) {
        const r = t.innerWidth, m = t.innerHeight;
        return T(r, m);
      }
      return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : T(0, 0);
    }
    function T(e, t) {
      return {
        top: 0,
        left: 0,
        right: e,
        bottom: t,
        width: e,
        height: t
      };
    }
    return C({ check: l }), (e, t) => (a(), d("div", {
      ref_key: "list",
      ref: p,
      class: "k-list"
    }, [
      f(e.$slots, "default"),
      i.value && !e.finished && !e.error ? (a(), d("div", U, [
        f(e.$slots, "loading", {}, () => [
          c("div", W, [
            K(n(L)),
            O(" " + k(e.loadingText ?? n(u)("list.loadingText")), 1)
          ])
        ])
      ])) : h("", !0),
      e.finished && !e.error ? (a(), d("div", Y, [
        f(e.$slots, "finished", {}, () => [
          c("div", j, k(e.finishedText ?? n(u)("list.finishedText")), 1)
        ])
      ])) : h("", !0),
      e.error ? (a(), d("div", {
        key: 2,
        class: "k-list-error",
        onClick: S
      }, [
        f(e.$slots, "error", {}, () => [
          c("div", q, k(e.errorText ?? n(u)("list.errorText")), 1)
        ])
      ])) : h("", !0),
      c("div", {
        ref_key: "placeholder",
        ref: y,
        class: "k-list-placeholder"
      }, null, 512)
    ], 512));
  }
});
export {
  Q as default
};
