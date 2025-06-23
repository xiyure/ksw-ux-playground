import { defineComponent as L, onMounted as V, computed as $, onUpdated as x, ref as m, watch as H, nextTick as P, unref as n, createElementBlock as d, openBlock as a, renderSlot as f, createCommentVNode as g, createElementVNode as c, createVNode as D, createTextVNode as M, toDisplayString as k } from "vue";
import { useLocale as K } from "../../hooks/use_locale.mjs";
import O from "../../node_modules/ksw-vue-icon/es/icons/base/loading.mjs";
const U = {
  key: 0,
  class: "k-list-loading"
}, W = { class: "k-list-default-loading" }, Y = {
  key: 1,
  class: "k-list-finished"
}, j = { class: "k-list-default-finished" }, q = { class: "k-list-default-error" }, G = /* @__PURE__ */ L({
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
    const { t: u } = K(), o = B, s = R;
    V(() => {
      var e, t;
      (t = (e = v.value) == null ? void 0 : e.addEventListener) == null || t.call(e, "scroll", l, { passive: !0 }), o.immediate && l();
    }), x(() => {
      i.value = o.loading;
    });
    const v = $(() => o.scroller ? o.scroller : b(p.value)), p = m(), y = m(), i = m(o.loading), S = /scroll|auto|overlay/i;
    H(() => [o.loading, o.error, o.finished], (e) => {
      e[1] && (i.value = !1, s("update:loading", !1)), l();
    });
    function _() {
      s("update:error", !1), l();
    }
    function l() {
      P(() => {
        if (i.value || o.finished || o.disabled || o.error)
          return;
        const e = +o.offset, t = w(v);
        if (!t.height || E(p))
          return;
        w(y).bottom - t.bottom <= e && (i.value = !0, s("update:loading", !0), s("load"));
      });
    }
    function b(e) {
      let t = e;
      for (; t && t !== window && t instanceof Element; ) {
        const { overflowY: r } = window.getComputedStyle(t);
        if (S.test(r))
          return t;
        t = t.parentNode;
      }
      return e;
    }
    function E(e) {
      const t = n(e);
      if (!t)
        return !1;
      const r = window.getComputedStyle(t), h = r.display === "none", N = t.offsetParent === null && r.position !== "fixed";
      return h || N;
    }
    function w(e) {
      const t = n(e);
      if (t === window) {
        const r = t.innerWidth, h = t.innerHeight;
        return T(r, h);
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
            D(n(O)),
            M(" " + k(e.loadingText ?? n(u)("list.loadingText")), 1)
          ])
        ])
      ])) : g("", !0),
      e.finished && !e.error ? (a(), d("div", Y, [
        f(e.$slots, "finished", {}, () => [
          c("div", j, k(e.finishedText ?? n(u)("list.finishedText")), 1)
        ])
      ])) : g("", !0),
      e.error ? (a(), d("div", {
        key: 2,
        class: "k-list-error",
        onClick: _
      }, [
        f(e.$slots, "error", {}, () => [
          c("div", q, k(e.errorText ?? n(u)("list.errorText")), 1)
        ])
      ])) : g("", !0),
      c("div", {
        ref_key: "placeholder",
        ref: y,
        class: "k-list-placeholder"
      }, null, 512)
    ], 512));
  }
});
export {
  G as default
};
