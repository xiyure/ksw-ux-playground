import { defineComponent as D, ref as z, computed as C, createBlock as v, openBlock as P, unref as c, mergeProps as _, createSlots as x, renderList as k, withCtx as R, renderSlot as $, normalizeProps as I, guardReactiveProps as N } from "vue";
import { getExposeProxy as A } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as B } from "../../hooks/use_size.mjs";
import { ElInputNumber as K } from "../../node_modules/element-plus/es/components/input-number/index.mjs";
const q = /* @__PURE__ */ D({
  name: "KInputNumber",
  __name: "input_number",
  props: {
    size: {},
    onlyDigits: { type: Boolean },
    supportSymbols: { default: () => ["+", "-", ".", "e", "E"] }
  },
  setup(m, { expose: d }) {
    const r = m, g = B(r), a = z(null), o = ["+", "-", ".", "e", "E"];
    let u = "";
    const n = C(() => {
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
      s(e.target) && i() && l() && (u = e.target.value);
    }
    function h(e) {
      if (s(e.target) && i() && l()) {
        e.target.value = u;
        const t = new Event("input", { bubbles: !0 });
        e.target.dispatchEvent(t);
      }
    }
    function S(e) {
      if (s(e.target) && i()) {
        const p = (e.clipboardData || window.clipboardData).getData("text/plain");
        y().test(p) && e.preventDefault();
      }
    }
    function i() {
      return n.value.size > 0;
    }
    function l() {
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
    return d(A({}, a)), (e, t) => (P(), v(c(K), _({
      ref_key: "inputNumberRef",
      ref: a,
      class: "k-input-number"
    }, e.$attrs, {
      size: c(g).elSize,
      onKeydown: E,
      onCompositionstart: b,
      onCompositionend: h,
      onPaste: S
    }), x({ _: 2 }, [
      k(e.$slots, (p, f) => ({
        name: f,
        fn: R((w) => [
          $(e.$slots, f, I(N(w)))
        ])
      }))
    ]), 1040, ["size"]));
  }
});
export {
  q as default
};
