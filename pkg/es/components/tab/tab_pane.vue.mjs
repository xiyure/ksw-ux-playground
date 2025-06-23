import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as h } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { KTooltip as _ } from "../tooltip/index.mjs";
import { ElTabPane as g } from "../../node_modules/element-plus/es/components/tabs/index.mjs";
import { defineComponent as P, useSlots as k, computed as x, createBlock as y, openBlock as B, withCtx as r, renderSlot as m, createVNode as C, createElementVNode as E, createTextVNode as K, mergeProps as N } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as p, unref as b } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeClass as S, toDisplayString as V } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const F = /* @__PURE__ */ P({
  name: "KTabPane",
  __name: "tab_pane",
  props: {
    closable: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(d, { expose: T }) {
    const o = d, s = p(null), l = k(), a = p(!1), i = x(() => {
      var e, t, u;
      if (l.label) {
        const f = ((u = (t = (e = l.label) == null ? void 0 : e.call(l)) == null ? void 0 : t[0]) == null ? void 0 : u.children) ?? "";
        return typeof f == "string" ? f : "";
      }
      return o.label;
    });
    let n = null;
    function v(e) {
      const t = e.target;
      if (t.clientWidth < t.scrollWidth) {
        n = setTimeout(() => {
          a.value = !0;
        }, 500);
        return;
      }
      c();
    }
    function c() {
      n && clearTimeout(n), a.value = !1;
    }
    return T(h({}, s)), (e, t) => (B(), y(b(g), N({
      ref_key: "KTabPaneRef",
      ref: s,
      class: "k-tab-item"
    }, e.$attrs, {
      closable: o.closable
    }), {
      label: r(() => [
        C(b(_), {
          content: i.value,
          visible: a.value && !!i.value
        }, {
          default: r(() => [
            E("span", {
              class: S(o.closable ? "k-tab-item-closeable" : ""),
              onMouseenter: v,
              onMouseleave: c
            }, [
              m(e.$slots, "label", {}, () => [
                K(V(o.label), 1)
              ])
            ], 34)
          ]),
          _: 3
        }, 8, ["content", "visible"])
      ]),
      default: r(() => [
        m(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["closable"]));
  }
});
export {
  F as default
};
