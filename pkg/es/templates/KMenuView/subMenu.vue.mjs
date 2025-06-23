import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { ElIcon as _ } from "../../node_modules/element-plus/es/components/icon/index.mjs";
import { ElSubMenu as V, ElMenuItem as A } from "../../node_modules/element-plus/es/components/menu/index.mjs";
import { defineComponent as P, inject as w, computed as k, resolveComponent as z, createElementBlock as n, openBlock as t, Fragment as h, renderList as f, createBlock as l, withCtx as i, createVNode as D, createSlots as I, renderSlot as c, guardReactiveProps as j, createCommentVNode as y, resolveDynamicComponent as C, createElementVNode as S, mergeProps as F } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { normalizeProps as L, toDisplayString as s, normalizeClass as R } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { unref as r } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const q = {
  key: 0,
  class: "k-menu-item__title"
}, G = ["href"], H = {
  key: 1,
  class: "k-menu-item__title"
}, J = {
  key: 0,
  class: "k-menu-item__title"
}, K = ["href"], O = {
  key: 1,
  class: "k-menu-item__title"
}, u = /* @__PURE__ */ P({
  name: "SubMenu",
  __name: "subMenu",
  props: {
    options: {},
    link: { type: Boolean }
  },
  emits: ["click"],
  setup(v, { emit: x }) {
    const $ = v, g = x, m = w("__activeSet__", k(() => /* @__PURE__ */ new Set())), B = k(() => (o) => {
      const { children: E, ...a } = o;
      return a;
    }), d = (o) => {
      g("click", o);
    };
    return (o, E) => {
      const a = z("sub-menu", !0);
      return t(!0), n(h, null, f($.options, (e) => (t(), n(h, null, [
        Array.isArray(e.children) && e.children.length > 0 ? (t(), l(r(V), F({
          key: 0,
          class: { "custom-class-name": r(m).has(e.index) },
          index: e.index
        }, B.value(e)), {
          title: i(() => [
            e.icon ? (t(), l(r(_), { key: 0 }, {
              default: i(() => [
                (t(), l(C(e.icon)))
              ]),
              _: 2
            }, 1024)) : y("", !0),
            c(o.$slots, `${e.index}-title`, { option: e }, () => [
              o.link ? (t(), n("span", q, [
                S("a", {
                  href: e.href
                }, s(e.title), 9, G)
              ])) : (t(), n("span", H, s(e.title), 1))
            ])
          ]),
          default: i(() => [
            D(a, {
              options: e.children,
              link: o.link,
              onClick: d
            }, I({ _: 2 }, [
              f(o.$slots, (Q, p) => ({
                name: p,
                fn: i((N) => [
                  c(o.$slots, p, L(j(N)))
                ])
              }))
            ]), 1032, ["options", "link"])
          ]),
          _: 2
        }, 1040, ["class", "index"])) : (t(), l(r(A), {
          key: 1,
          class: R({ "custom-class-name": r(m).has(e.index) }),
          index: e.index,
          disabled: e.disabled,
          route: e.route,
          onClick: d
        }, {
          title: i(() => [
            c(o.$slots, `${e.index}-title`, { option: e }, () => [
              o.link ? (t(), n("span", J, [
                S("a", {
                  href: e.href
                }, s(e.title), 9, K)
              ])) : (t(), n("span", O, s(e.title), 1))
            ])
          ]),
          default: i(() => [
            e.icon ? (t(), l(r(_), { key: 0 }, {
              default: i(() => [
                (t(), l(C(e.icon)))
              ]),
              _: 2
            }, 1024)) : y("", !0)
          ]),
          _: 2
        }, 1032, ["class", "index", "disabled", "route"]))
      ], 64))), 256);
    };
  }
});
export {
  u as default
};
