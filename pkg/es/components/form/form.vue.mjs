import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as E } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { getElement as a, isInputElement as v } from "../../utils/dom.mjs";
import { useSize as A, SIZE_KEY as S } from "../../hooks/use_size.mjs";
import { FORM_PARAMS_KEY as b } from "./const.mjs";
import { ElForm as z } from "../../node_modules/element-plus/es/components/form/index.mjs";
import { defineComponent as q, onMounted as P, onUnmounted as x, computed as p, provide as c, createBlock as L, openBlock as R, createSlots as _, renderList as $, withCtx as g, renderSlot as B, guardReactiveProps as T, mergeProps as C } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as K, unref as d } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as I } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const V = /* @__PURE__ */ q({
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
    P(() => {
      window.addEventListener("keydown", l), setTimeout(() => {
        (o.autoFocusFirst || o.autoFocusTo) && h();
      });
    }), x(() => {
      window.removeEventListener("keydown", l);
    });
    const m = w, u = A(o), n = K();
    function h() {
      var r, i;
      let e = null;
      if (typeof o.autoFocusTo == "string")
        e = a(o.autoFocusTo);
      else {
        const t = o.autoFocusTo;
        e = (t == null ? void 0 : t.$el) ?? t;
      }
      if (e && v(e)) {
        (r = e.focus) == null || r.call(e);
        return;
      }
      e = e ? a("input, textarea", e) : null, !e && ((i = n.value) != null && i.$el) && o.autoFocusFirst && (e = a("input, textarea", n.value.$el)), typeof (e == null ? void 0 : e.focus) == "function" && e.focus();
    }
    function l(e) {
      var f;
      if (e.key !== "Enter")
        return;
      const r = Array.from(document.querySelectorAll("button, input, a[href], area[href]")), i = document.activeElement;
      if (!i)
        return;
      const t = r.indexOf(i), s = (f = n.value) == null ? void 0 : f.$el;
      s != null && s.contains(r[t]) && (t === r.length - 1 || !(s != null && s.contains(r[t + 1]))) && m("submit");
    }
    const y = {
      size: p(() => u.value.ownSize)
    };
    return k(E(y, n)), c(S, u), c(b, p(() => ({
      showColon: o.showColon,
      showLabel: o.showLabel,
      hideRequiredAsterisk: o.hideRequiredAsterisk,
      requireAsteriskPosition: o.requireAsteriskPosition
    }))), (e, r) => (R(), L(d(z), C({
      ref_key: "KFormRef",
      ref: n,
      class: "k-form"
    }, e.$attrs, {
      size: d(u).elSize,
      "hide-required-asterisk": !0,
      onSubmit: r[0] || (r[0] = () => {
        m("submit");
      })
    }), _({ _: 2 }, [
      $(e.$slots, (i, t) => ({
        name: t,
        fn: g((s) => [
          B(e.$slots, t, I(T(s)))
        ])
      }))
    ]), 1040, ["size"]));
  }
});
export {
  V as default
};
