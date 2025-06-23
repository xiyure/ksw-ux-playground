import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import E from "./dropdown_menu.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { flattenChildren as w, isValidElement as z, camelize as S } from "../../utils/props.mjs";
import "../../node_modules/culori/src/index.mjs";
import { isElementInContainerView as T, getElementAll as I } from "../../utils/dom.mjs";
import { useSize as V, SIZE_KEY as R } from "../../hooks/use_size.mjs";
import { defineComponent as _, inject as N, useSlots as $, onMounted as j, onBeforeUnmount as D, computed as H, watch as K, provide as M, createElementBlock as A, openBlock as b, createElementVNode as p, renderSlot as k, createVNode as L, withCtx as O, createBlock as P, resolveDynamicComponent as U, mergeProps as Y } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as d, unref as Z } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeStyle as q } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const F = { class: "k-button-more-trigger" }, ie = /* @__PURE__ */ _({
  name: "KButtonContainer",
  __name: "button_container",
  props: {
    trigger: { default: "click" },
    maxHeight: { default: 300 },
    placement: { default: "bottom" },
    hideOnClick: { type: Boolean, default: !0 },
    showTimeout: {},
    hideTimeout: {},
    popperClass: {},
    teleported: { type: Boolean, default: !0 },
    triggerIcon: { default: "IconMore" },
    size: {}
  },
  setup(B) {
    const n = N("__elementObserver"), f = B, a = $(), s = d(), i = d(), u = d([]);
    j(() => {
      n.observe(i.value, h);
    }), D(() => {
      var e;
      i.value && ((e = n == null ? void 0 : n.unobserve) == null || e.call(n, i.value));
    });
    const c = H(() => {
      var e;
      return C(w((e = a.default) == null ? void 0 : e.call(a)));
    }), g = V(f);
    K(
      () => g.value,
      () => {
        setTimeout(() => {
          h();
        }, 100);
      },
      { deep: !0 }
    );
    function C(e) {
      return e.map((t) => {
        if (z(t)) {
          const o = { ...t.props || {} };
          for (const [r, m] of Object.entries(o))
            delete o[r], o[S(r)] = m;
          return {
            label: (t.children || {}).default,
            disabled: !!o.disabled
          };
        }
        return null;
      }).filter((t) => t !== null);
    }
    function h() {
      var o;
      const e = [];
      if (!c.value.length)
        return [];
      const t = s.value.getBoundingClientRect();
      (o = v()) == null || o.forEach((l, r) => {
        const m = l.getBoundingClientRect();
        !T(m, t) && c.value[r] ? (l.style.opacity = "0", e.push({ ...c.value[r], index: r })) : l.style.opacity = "1";
      }), u.value = e;
    }
    function y(e) {
      var o;
      const t = (o = v()) == null ? void 0 : o[e];
      t && t.click();
    }
    function v() {
      return I(".k-button", s.value) ?? [];
    }
    return M(R, g), (e, t) => (b(), A("div", {
      ref_key: "box",
      ref: i,
      class: "k-button-container"
    }, [
      p("div", {
        ref_key: "container",
        ref: s,
        class: "container"
      }, [
        k(e.$slots, "default")
      ], 512),
      p("div", {
        class: "k-button-more",
        style: q({
          opacity: u.value.length > 0 ? 1 : 0
        })
      }, [
        L(Z(E), Y({
          tabs: u.value,
          trigger: e.trigger,
          "max-height": e.maxHeight,
          placement: e.placement,
          "hide-on-click": e.hideOnClick,
          teleported: e.teleported,
          "show-timeout": e.showTimeout,
          "hide-timeout": e.hideTimeout,
          "popper-class": e.popperClass
        }, e.$attrs, { onCommand: y }), {
          title: O(() => [
            p("span", F, [
              k(e.$slots, "trigger", {}, () => [
                (b(), P(U(f.triggerIcon)))
              ])
            ])
          ]),
          _: 3
        }, 16, ["tabs", "trigger", "max-height", "placement", "hide-on-click", "teleported", "show-timeout", "hide-timeout", "popper-class"])
      ], 4)
    ], 512));
  }
});
export {
  ie as default
};
