import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { genRandomStr as T, getExposeProxy as h } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as k, SIZE_KEY as x } from "../../hooks/use_size.mjs";
import { useInheritSlot as K } from "../../hooks/use_inherit_slot.mjs";
import { ElTreeSelect as P } from "../../node_modules/element-plus/es/components/tree-select/index.mjs";
import R from "../../node_modules/lodash-es/debounce.mjs";
import { defineComponent as q, computed as w, provide as L, createBlock as d, openBlock as f, createSlots as V, renderList as _, withCtx as c, renderSlot as i, guardReactiveProps as y, createTextVNode as S, createElementVNode as Q, resolveDynamicComponent as O, mergeProps as Y } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as I, unref as l } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as v, toDisplayString as N, normalizeClass as z, normalizeStyle as Z } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const te = /* @__PURE__ */ q({
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
    const o = $, m = k(o), u = F, a = I(), s = I({
      value: ""
    }), p = T(8), g = K(["empty", "default"]), B = w(() => (n) => {
      const { node: t, data: e } = n, r = o.useFolderIcon;
      return e.icon ? e.icon : t.isLeaf ? o.icon ?? r ? "IconFlowNested" : null : t.expanded ? o.expandIcon ?? r ? "IconFolderOpen" : null : o.collapseIcon ?? r ? "IconFlowNested" : null;
    }), C = (n) => {
      R(() => {
        const e = a.value.$el.querySelector(`[name="${o.name ?? p}"]`);
        s.value.value = e.value;
      }, o.debounce)(), u("input", n);
    };
    return L(x, m), b(h({}, a)), (n, t) => (f(), d(l(P), Y({
      ref_key: "KTreeSelectRef",
      ref: a,
      name: n.name ?? l(p),
      class: "k-tree-select",
      size: l(m).elSize
    }, n.$attrs, {
      onInput: C,
      onBlur: t[0] || (t[0] = (e) => {
        s.value.value = "", u("blur", e);
      })
    }), V({
      default: c((e) => [
        i(n.$slots, "default", v(y(e)), () => [
          Q("span", {
            style: Z(
              typeof o.nodeStyle == "function" ? o.nodeStyle(e) : o.nodeStyle
            ),
            class: z(
              typeof o.className == "function" ? o.className(e) : o.className
            )
          }, [
            (f(), d(O(B.value(e)), {
              class: z([{ "tree-item-icon--noChildren": e.node.isLeaf }])
            }, null, 8, ["class"])),
            S(" " + N(e.data.label), 1)
          ], 6)
        ])
      ]),
      empty: c(() => [
        i(n.$slots, "empty", { query: s.value }, () => [
          S("未找到'" + N(s.value.value) + "'相关内容", 1)
        ])
      ]),
      _: 2
    }, [
      _(l(g)(n.$slots), (e, r) => ({
        name: r,
        fn: c((E) => [
          i(n.$slots, r, v(y(E)))
        ])
      }))
    ]), 1040, ["name", "size"]));
  }
});
export {
  te as default
};
