import { defineComponent as x, inject as w, computed as C, ref as l, onMounted as P, watch as A, nextTick as S, onBeforeUnmount as V, createElementBlock as u, openBlock as r, Fragment as $, renderList as q, normalizeClass as D, toDisplayString as I } from "vue";
import { l as L } from "../../node_modules/lodash/lodash.mjs";
import { useDeprecated as T } from "../../hooks/use_deprecated.mjs";
const j = ["onClick"], K = /* @__PURE__ */ x({
  name: "KSliderButton",
  __name: "sliderButton",
  props: {
    items: {},
    modelValue: {},
    defaultActive: {},
    active: {}
  },
  emits: ["update:modelValue", "change"],
  setup(_, { emit: h }) {
    const o = w("__elementObserver"), a = _;
    T({
      scope: "k-slider-button",
      from: "active",
      replacement: "default-active",
      version: "2.0.0"
    }, C(() => !!a.active));
    const p = h, s = l((a.defaultActive || a.active) ?? a.items[0].name), t = l(), c = l(), b = L.debounce(() => {
      i();
    }, 10);
    P(() => {
      var e;
      c.value = (e = t == null ? void 0 : t.value) == null ? void 0 : e.querySelector(".k-slider-button-pane.is-active"), c.value && o.observe(c.value, b);
    }), A(() => a.modelValue, (e) => {
      e && (s.value = e, i());
    }, { immediate: !0 });
    async function i() {
      var f, v, k, y;
      await S();
      const e = (f = t == null ? void 0 : t.value) == null ? void 0 : f.querySelector(
        ".k-slider-button-pane.is-active"
      ), { width: m } = (e == null ? void 0 : e.getBoundingClientRect()) || { width: 0 }, n = (e == null ? void 0 : e.offsetTop) || 0, d = (e == null ? void 0 : e.offsetLeft) || 0;
      (v = t == null ? void 0 : t.value) == null || v.style.setProperty("--item-top", `${n}px`), (k = t == null ? void 0 : t.value) == null || k.style.setProperty("--item-left", `${d}px`), (y = t == null ? void 0 : t.value) == null || y.style.setProperty("--item-width", `${m}px`);
    }
    async function g(e) {
      s.value !== e.name && (s.value = e.name, await i(), p("update:modelValue", e.name), p("change", e.name));
    }
    return V(() => {
      var e;
      c.value && ((e = o == null ? void 0 : o.unobserve) == null || e.call(o, c.value));
    }), (e, m) => (r(), u("div", {
      ref_key: "sliderButton",
      ref: t,
      class: "k-slider-button"
    }, [
      (r(!0), u($, null, q(a.items, (n) => (r(), u("div", {
        key: n.name,
        class: D([{ "is-active": s.value === n.name }, "k-slider-button-pane"]),
        onClick: (d) => g(n)
      }, I(n.label), 11, j))), 128))
    ], 512));
  }
});
export {
  K as default
};
