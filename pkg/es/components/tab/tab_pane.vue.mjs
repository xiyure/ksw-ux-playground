import { defineComponent as h, ref as p, useSlots as _, computed as g, createBlock as P, openBlock as k, unref as b, mergeProps as x, withCtx as r, renderSlot as m, createVNode as y, createElementVNode as B, normalizeClass as C, createTextVNode as E, toDisplayString as K } from "vue";
import { getExposeProxy as S } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { KTooltip as M } from "../tooltip/index.mjs";
import { ElTabPane as N } from "../../node_modules/element-plus/es/components/tabs/index.mjs";
const j = /* @__PURE__ */ h({
  name: "KTabPane",
  __name: "tab_pane",
  props: {
    closable: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(d, { expose: T }) {
    const l = d, s = p(null), o = _(), a = p(!1), i = g(() => {
      var e, t, u;
      if (o.label) {
        const f = ((u = (t = (e = o.label) == null ? void 0 : e.call(o)) == null ? void 0 : t[0]) == null ? void 0 : u.children) ?? "";
        return typeof f == "string" ? f : "";
      }
      return l.label;
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
    return T(S({}, s)), (e, t) => (k(), P(b(N), x({
      ref_key: "KTabPaneRef",
      ref: s,
      class: "k-tab-item"
    }, e.$attrs, {
      closable: l.closable
    }), {
      label: r(() => [
        y(b(M), {
          content: i.value,
          visible: a.value && !!i.value
        }, {
          default: r(() => [
            B("span", {
              class: C(l.closable ? "k-tab-item-closeable" : ""),
              onMouseenter: v,
              onMouseleave: c
            }, [
              m(e.$slots, "label", {}, () => [
                E(K(l.label), 1)
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
  j as default
};
