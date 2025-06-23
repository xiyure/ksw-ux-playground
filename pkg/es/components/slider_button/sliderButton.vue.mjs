import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { l as x } from "../../node_modules/lodash/lodash.mjs";
import { useDeprecated as w } from "../../hooks/use_deprecated.mjs";
import { defineComponent as C, inject as P, computed as A, onMounted as S, watch as V, nextTick as $, onBeforeUnmount as q, createElementBlock as l, openBlock as r, Fragment as D, renderList as I } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as u } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeClass as L, toDisplayString as T } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const j = ["onClick"], U = /* @__PURE__ */ C({
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
    const o = P("__elementObserver"), a = _;
    w({
      scope: "k-slider-button",
      from: "active",
      replacement: "default-active",
      version: "2.0.0"
    }, A(() => !!a.active));
    const m = h, c = u((a.defaultActive || a.active) ?? a.items[0].name), t = u(), i = u(), b = x.debounce(() => {
      s();
    }, 10);
    S(() => {
      var e;
      i.value = (e = t == null ? void 0 : t.value) == null ? void 0 : e.querySelector(".k-slider-button-pane.is-active"), i.value && o.observe(i.value, b);
    }), V(() => a.modelValue, (e) => {
      e && (c.value = e, s());
    }, { immediate: !0 });
    async function s() {
      var d, v, k, y;
      await $();
      const e = (d = t == null ? void 0 : t.value) == null ? void 0 : d.querySelector(
        ".k-slider-button-pane.is-active"
      ), { width: p } = (e == null ? void 0 : e.getBoundingClientRect()) || { width: 0 }, n = (e == null ? void 0 : e.offsetTop) || 0, f = (e == null ? void 0 : e.offsetLeft) || 0;
      (v = t == null ? void 0 : t.value) == null || v.style.setProperty("--item-top", `${n}px`), (k = t == null ? void 0 : t.value) == null || k.style.setProperty("--item-left", `${f}px`), (y = t == null ? void 0 : t.value) == null || y.style.setProperty("--item-width", `${p}px`);
    }
    async function g(e) {
      c.value !== e.name && (c.value = e.name, await s(), m("update:modelValue", e.name), m("change", e.name));
    }
    return q(() => {
      var e;
      i.value && ((e = o == null ? void 0 : o.unobserve) == null || e.call(o, i.value));
    }), (e, p) => (r(), l("div", {
      ref_key: "sliderButton",
      ref: t,
      class: "k-slider-button"
    }, [
      (r(!0), l(D, null, I(a.items, (n) => (r(), l("div", {
        key: n.name,
        class: L([{ "is-active": c.value === n.name }, "k-slider-button-pane"]),
        onClick: (f) => g(n)
      }, T(n.label), 11, j))), 128))
    ], 512));
  }
});
export {
  U as default
};
