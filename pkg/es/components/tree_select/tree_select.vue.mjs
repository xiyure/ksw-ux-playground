import { defineComponent as h, ref as d, computed as k, provide as x, createBlock as f, openBlock as y, unref as l, mergeProps as B, createSlots as K, withCtx as a, renderSlot as i, createTextVNode as S, toDisplayString as I, normalizeProps as v, guardReactiveProps as z, createElementVNode as P, normalizeClass as N, normalizeStyle as R, resolveDynamicComponent as q, renderList as w } from "vue";
import { genRandomStr as L, getExposeProxy as _ } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as Q, SIZE_KEY as V } from "../../hooks/use_size.mjs";
import { useInheritSlot as O } from "../../hooks/use_inherit_slot.mjs";
import { ElTreeSelect as Y } from "../../node_modules/element-plus/es/components/tree-select/index.mjs";
import Z from "../../node_modules/lodash-es/debounce.mjs";
const ee = /* @__PURE__ */ h({
  name: "KTreeSelect",
  __name: "tree_select",
  props: {
    name: {},
    icon: {},
    size: {},
    expandIcon: {},
    collapseIcon: {},
    debounce: { default: 500 },
    className: {},
    nodeStyle: {},
    useFolderIcon: { type: Boolean, default: !1 }
  },
  emits: ["input", "blur"],
  setup($, { expose: b, emit: F }) {
    const o = $, u = Q(o), m = F, c = d(), s = d({
      value: ""
    }), p = L(8), g = O(["empty", "default"]), C = k(() => (n) => {
      const { node: t, data: e } = n, r = o.useFolderIcon;
      return e.icon ? e.icon : t.isLeaf ? o.icon ?? r ? "IconFlowNested" : null : t.expanded ? o.expandIcon ?? r ? "IconFolderOpen" : null : o.collapseIcon ?? r ? "IconFlowNested" : null;
    }), E = (n) => {
      Z(() => {
        const e = c.value.$el.querySelector(`[name="${o.name ?? p}"]`);
        s.value.value = e.value;
      }, o.debounce)(), m("input", n);
    };
    return x(V, u), b(_({}, c)), (n, t) => (y(), f(l(Y), B({
      ref_key: "KTreeSelectRef",
      ref: c,
      name: n.name ?? l(p),
      class: "k-tree-select",
      size: l(u).elSize
    }, n.$attrs, {
      onInput: E,
      onBlur: t[0] || (t[0] = (e) => {
        s.value.value = "", m("blur", e);
      })
    }), K({
      default: a((e) => [
        i(n.$slots, "default", v(z(e)), () => [
          P("span", {
            style: R(
              typeof o.nodeStyle == "function" ? o.nodeStyle(e) : o.nodeStyle
            ),
            class: N(
              typeof o.className == "function" ? o.className(e) : o.className
            )
          }, [
            (y(), f(q(C.value(e)), {
              class: N([{ "tree-item-icon--noChildren": e.node.isLeaf }])
            }, null, 8, ["class"])),
            S(" " + I(e.data.label), 1)
          ], 6)
        ])
      ]),
      empty: a(() => [
        i(n.$slots, "empty", { query: s.value }, () => [
          S("未找到'" + I(s.value.value) + "'相关内容", 1)
        ])
      ]),
      _: 2
    }, [
      w(l(g)(n.$slots), (e, r) => ({
        name: r,
        fn: a((T) => [
          i(n.$slots, r, v(z(T)))
        ])
      }))
    ]), 1040, ["name", "size"]));
  }
});
export {
  ee as default
};
