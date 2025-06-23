import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getRestAttrs as d, getExposeProxy as h } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { isVueComponent as g } from "../../utils/dom.mjs";
import { ElTree as _ } from "../../node_modules/element-plus/es/components/tree/index.mjs";
import { defineComponent as k, computed as S, createBlock as a, openBlock as m, createSlots as b, withCtx as u, renderSlot as y, createCommentVNode as w, createElementVNode as v, resolveDynamicComponent as x, createTextVNode as C, mergeProps as I } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as M, unref as T } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeStyle as V, toDisplayString as B } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const F = { class: "k-tree-node-label" }, q = /* @__PURE__ */ k({
  name: "KTree",
  __name: "tree",
  props: {
    filterMethod: { type: Function, default: (s, i) => {
      var e;
      return (e = i.label) == null ? void 0 : e.includes(s);
    } },
    icon: { type: [Function, String], default: "" },
    expandIcon: { type: [Function, String], default: "" },
    collapseIcon: { type: [Function, String], default: "" },
    showArrow: { type: Boolean, default: !0 },
    props: {},
    iconMethod: {}
  },
  setup(s, { expose: i }) {
    const e = s, c = M(), l = S(() => (r, p) => {
      if (typeof e.iconMethod == "function") {
        const o = e.iconMethod(p, r), n = (o == null ? void 0 : o.icon) ?? String(o);
        return typeof n == "string" || g(n) ? { _icon: n, ...d(o, ["icon"]) } : {};
      }
      let t = "";
      return r.isLeaf ? t = e.icon : r.expanded ? t = e.expandIcon : t = e.collapseIcon, typeof t == "function" ? { _icon: t(r, p) } : { _icon: t };
    });
    return i(h({}, c)), (r, p) => (m(), a(T(_), I({
      ref_key: "KTreeRef",
      ref: c,
      class: ["k-tree", { "k-tree-show-arrow": e.showArrow }],
      "filter-method": r.filterMethod,
      props: e.props
    }, r.$attrs), b({
      default: u(({ node: t, data: o }) => [
        l.value(t, o)._icon ? (m(), a(x(l.value(t, o)._icon), {
          key: 0,
          style: V({ marginRight: "0.25rem", ...l.value(t, o) })
        }, null, 8, ["style"])) : w("", !0),
        v("span", F, [
          y(r.$slots, "default", {
            node: t,
            data: o
          }, () => {
            var n, f;
            return [
              C(B(typeof ((n = e.props) == null ? void 0 : n.label) == "function" ? o[e.props.label(o, t) ?? "label"] : o[((f = e.props) == null ? void 0 : f.label) ?? "label"]), 1)
            ];
          })
        ])
      ]),
      _: 2
    }, [
      r.$slots.empty ? {
        name: "empty",
        fn: u(() => [
          y(r.$slots, "empty")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["class", "filter-method", "props"]));
  }
});
export {
  q as default
};
