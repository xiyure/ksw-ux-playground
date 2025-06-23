import { defineComponent as d, ref as h, computed as g, createBlock as a, openBlock as m, unref as _, mergeProps as k, createSlots as S, withCtx as u, createCommentVNode as b, createElementVNode as w, resolveDynamicComponent as v, normalizeStyle as x, renderSlot as y, createTextVNode as C, toDisplayString as I } from "vue";
import { getRestAttrs as M, getExposeProxy as T } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { isVueComponent as F } from "../../utils/dom.mjs";
import { ElTree as R } from "../../node_modules/element-plus/es/components/tree/index.mjs";
const V = { class: "k-tree-node-label" }, z = /* @__PURE__ */ d({
  name: "KTree",
  __name: "tree",
  props: {
    filterMethod: { type: Function, default: (l, s) => {
      var e;
      return (e = s.label) == null ? void 0 : e.includes(l);
    } },
    icon: { type: [Function, String], default: "" },
    expandIcon: { type: [Function, String], default: "" },
    collapseIcon: { type: [Function, String], default: "" },
    showArrow: { type: Boolean, default: !0 },
    props: {},
    iconMethod: {}
  },
  setup(l, { expose: s }) {
    const e = l, c = h(), i = g(() => (r, p) => {
      if (typeof e.iconMethod == "function") {
        const t = e.iconMethod(p, r), n = (t == null ? void 0 : t.icon) ?? String(t);
        return typeof n == "string" || F(n) ? { _icon: n, ...M(t, ["icon"]) } : {};
      }
      let o = "";
      return r.isLeaf ? o = e.icon : r.expanded ? o = e.expandIcon : o = e.collapseIcon, typeof o == "function" ? { _icon: o(r, p) } : { _icon: o };
    });
    return s(T({}, c)), (r, p) => (m(), a(_(R), k({
      ref_key: "KTreeRef",
      ref: c,
      class: ["k-tree", { "k-tree-show-arrow": e.showArrow }],
      "filter-method": r.filterMethod,
      props: e.props
    }, r.$attrs), S({
      default: u(({ node: o, data: t }) => [
        i.value(o, t)._icon ? (m(), a(v(i.value(o, t)._icon), {
          key: 0,
          style: x({ marginRight: "0.25rem", ...i.value(o, t) })
        }, null, 8, ["style"])) : b("", !0),
        w("span", V, [
          y(r.$slots, "default", {
            node: o,
            data: t
          }, () => {
            var n, f;
            return [
              C(I(typeof ((n = e.props) == null ? void 0 : n.label) == "function" ? t[e.props.label(t, o) ?? "label"] : t[((f = e.props) == null ? void 0 : f.label) ?? "label"]), 1)
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
  z as default
};
