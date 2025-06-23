import { defineComponent as E, inject as w, useSlots as z, ref as m, onMounted as S, onBeforeUnmount as T, computed as I, watch as R, provide as V, createElementBlock as _, openBlock as b, createElementVNode as d, renderSlot as k, normalizeStyle as $, createVNode as j, unref as D, mergeProps as H, withCtx as K, createBlock as M, resolveDynamicComponent as N } from "vue";
import A from "./dropdown_menu.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { flattenChildren as L, isValidElement as O, camelize as P } from "../../utils/props.mjs";
import "../../node_modules/culori/src/index.mjs";
import { isElementInContainerView as U, getElementAll as Y } from "../../utils/dom.mjs";
import { useSize as Z, SIZE_KEY as q } from "../../hooks/use_size.mjs";
const F = { class: "k-button-more-trigger" }, oe = /* @__PURE__ */ E({
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
  setup(C) {
    const n = w("__elementObserver"), f = C, a = z(), s = m(), i = m(), u = m([]);
    S(() => {
      n.observe(i.value, h);
    }), T(() => {
      var e;
      i.value && ((e = n == null ? void 0 : n.unobserve) == null || e.call(n, i.value));
    });
    const c = I(() => {
      var e;
      return B(L((e = a.default) == null ? void 0 : e.call(a)));
    }), g = Z(f);
    R(
      () => g.value,
      () => {
        setTimeout(() => {
          h();
        }, 100);
      },
      { deep: !0 }
    );
    function B(e) {
      return e.map((t) => {
        if (O(t)) {
          const o = { ...t.props || {} };
          for (const [r, p] of Object.entries(o))
            delete o[r], o[P(r)] = p;
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
        const p = l.getBoundingClientRect();
        !U(p, t) && c.value[r] ? (l.style.opacity = "0", e.push({ ...c.value[r], index: r })) : l.style.opacity = "1";
      }), u.value = e;
    }
    function y(e) {
      var o;
      const t = (o = v()) == null ? void 0 : o[e];
      t && t.click();
    }
    function v() {
      return Y(".k-button", s.value) ?? [];
    }
    return V(q, g), (e, t) => (b(), _("div", {
      ref_key: "box",
      ref: i,
      class: "k-button-container"
    }, [
      d("div", {
        ref_key: "container",
        ref: s,
        class: "container"
      }, [
        k(e.$slots, "default")
      ], 512),
      d("div", {
        class: "k-button-more",
        style: $({
          opacity: u.value.length > 0 ? 1 : 0
        })
      }, [
        j(D(A), H({
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
          title: K(() => [
            d("span", F, [
              k(e.$slots, "trigger", {}, () => [
                (b(), M(N(f.triggerIcon)))
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
  oe as default
};
