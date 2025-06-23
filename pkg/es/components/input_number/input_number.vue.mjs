import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as D } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as z } from "../../hooks/use_size.mjs";
import { ElInputNumber as C } from "../../node_modules/element-plus/es/components/input-number/index.mjs";
import { defineComponent as v, computed as P, createBlock as _, openBlock as x, createSlots as k, renderList as R, mergeProps as $, withCtx as I, renderSlot as N, guardReactiveProps as A } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as B, unref as m } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as K } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const O = /* @__PURE__ */ v({
  name: "KInputNumber",
  __name: "input_number",
  props: {
    size: {},
    onlyDigits: { type: Boolean },
    supportSymbols: { default: () => ["+", "-", ".", "e", "E"] }
  },
  setup(c, { expose: d }) {
    const r = c, g = z(r), a = B(null), o = ["+", "-", ".", "e", "E"];
    let u = "";
    const n = P(() => {
      if (r.onlyDigits)
        return new Set(o);
      if (Array.isArray(r.supportSymbols)) {
        const e = new Set(o);
        return r.supportSymbols.forEach((t) => {
          t === "e" || t === "E" ? (e.delete("e"), e.delete("E")) : e.delete(t);
        }), e.size === o.length ? /* @__PURE__ */ new Set() : e;
      }
      return /* @__PURE__ */ new Set();
    });
    function E(e) {
      return n.value.has(e.key) ? (e.preventDefault(), !1) : !0;
    }
    function b(e) {
      s(e.target) && i() && p() && (u = e.target.value);
    }
    function h(e) {
      if (s(e.target) && i() && p()) {
        e.target.value = u;
        const t = new Event("input", { bubbles: !0 });
        e.target.dispatchEvent(t);
      }
    }
    function S(e) {
      if (s(e.target) && i()) {
        const l = (e.clipboardData || window.clipboardData).getData("text/plain");
        y().test(l) && e.preventDefault();
      }
    }
    function i() {
      return n.value.size > 0;
    }
    function p() {
      return n.value.has("e") || n.value.has("E");
    }
    function y() {
      let e = "";
      return Array.from(n.value).forEach((t) => {
        t === "." || t === "+" ? e += `\\${t}|` : e += `${t}|`;
      }), e = e.substring(0, e.length - 1), new RegExp(e, "i");
    }
    function s(e) {
      return e instanceof HTMLInputElement;
    }
    return d(D({}, a)), (e, t) => (x(), _(m(C), $({
      ref_key: "inputNumberRef",
      ref: a,
      class: "k-input-number"
    }, e.$attrs, {
      size: m(g).elSize,
      onKeydown: E,
      onCompositionstart: b,
      onCompositionend: h,
      onPaste: S
    }), k({ _: 2 }, [
      R(e.$slots, (l, f) => ({
        name: f,
        fn: I((w) => [
          N(e.$slots, f, K(A(w)))
        ])
      }))
    ]), 1040, ["size"]));
  }
});
export {
  O as default
};
