import { defineComponent as E, onMounted as v, onUnmounted as A, ref as S, computed as c, provide as p, createBlock as b, openBlock as z, unref as d, mergeProps as q, createSlots as P, renderList as x, withCtx as L, renderSlot as R, normalizeProps as _, guardReactiveProps as $ } from "vue";
import { getExposeProxy as g } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { getElement as a, isInputElement as B } from "../../utils/dom.mjs";
import { useSize as T, SIZE_KEY as C } from "../../hooks/use_size.mjs";
import { FORM_PARAMS_KEY as K } from "./const.mjs";
import { ElForm as I } from "../../node_modules/element-plus/es/components/form/index.mjs";
const J = /* @__PURE__ */ E({
  name: "KForm",
  __name: "form",
  props: {
    size: {},
    showColon: { type: Boolean },
    showLabel: { type: Boolean, default: !0 },
    hideRequiredAsterisk: { type: Boolean, default: !1 },
    requireAsteriskPosition: { default: "left" },
    autoFocusFirst: { type: Boolean, default: !1 },
    autoFocusTo: {}
  },
  emits: ["submit"],
  setup(F, { expose: k, emit: w }) {
    const o = F;
    v(() => {
      window.addEventListener("keydown", m), setTimeout(() => {
        (o.autoFocusFirst || o.autoFocusTo) && h();
      });
    }), A(() => {
      window.removeEventListener("keydown", m);
    });
    const l = w, u = T(o), n = S();
    function h() {
      var s, i;
      let e = null;
      if (typeof o.autoFocusTo == "string")
        e = a(o.autoFocusTo);
      else {
        const t = o.autoFocusTo;
        e = (t == null ? void 0 : t.$el) ?? t;
      }
      if (e && B(e)) {
        (s = e.focus) == null || s.call(e);
        return;
      }
      e = e ? a("input, textarea", e) : null, !e && ((i = n.value) != null && i.$el) && o.autoFocusFirst && (e = a("input, textarea", n.value.$el)), typeof (e == null ? void 0 : e.focus) == "function" && e.focus();
    }
    function m(e) {
      var f;
      if (e.key !== "Enter")
        return;
      const s = Array.from(document.querySelectorAll("button, input, a[href], area[href]")), i = document.activeElement;
      if (!i)
        return;
      const t = s.indexOf(i), r = (f = n.value) == null ? void 0 : f.$el;
      r != null && r.contains(s[t]) && (t === s.length - 1 || !(r != null && r.contains(s[t + 1]))) && l("submit");
    }
    const y = {
      size: c(() => u.value.ownSize)
    };
    return k(g(y, n)), p(C, u), p(K, c(() => ({
      showColon: o.showColon,
      showLabel: o.showLabel,
      hideRequiredAsterisk: o.hideRequiredAsterisk,
      requireAsteriskPosition: o.requireAsteriskPosition
    }))), (e, s) => (z(), b(d(I), q({
      ref_key: "KFormRef",
      ref: n,
      class: "k-form"
    }, e.$attrs, {
      size: d(u).elSize,
      "hide-required-asterisk": !0,
      onSubmit: s[0] || (s[0] = () => {
        l("submit");
      })
    }), P({ _: 2 }, [
      x(e.$slots, (i, t) => ({
        name: t,
        fn: L((r) => [
          R(e.$slots, t, _($(r)))
        ])
      }))
    ]), 1040, ["size"]));
  }
});
export {
  J as default
};
