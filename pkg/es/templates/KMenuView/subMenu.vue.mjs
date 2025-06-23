import { defineComponent as N, inject as P, computed as p, resolveComponent as V, createElementBlock as n, openBlock as t, Fragment as k, renderList as h, createBlock as l, unref as r, mergeProps as w, withCtx as i, createVNode as z, createSlots as D, renderSlot as a, normalizeProps as I, guardReactiveProps as j, createCommentVNode as f, resolveDynamicComponent as y, createElementVNode as C, toDisplayString as s, normalizeClass as F } from "vue";
import { ElSubMenu as L, ElMenuItem as R } from "../../node_modules/element-plus/es/components/menu/index.mjs";
import { ElIcon as S } from "../../node_modules/element-plus/es/components/icon/index.mjs";
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
}, X = /* @__PURE__ */ N({
  name: "SubMenu",
  __name: "subMenu",
  props: {
    options: {},
    link: { type: Boolean }
  },
  emits: ["click"],
  setup(v, { emit: x }) {
    const $ = v, g = x, d = P("__activeSet__", p(() => /* @__PURE__ */ new Set())), E = p(() => (o) => {
      const { children: B, ...c } = o;
      return c;
    }), m = (o) => {
      g("click", o);
    };
    return (o, B) => {
      const c = V("sub-menu", !0);
      return t(!0), n(k, null, h($.options, (e) => (t(), n(k, null, [
        Array.isArray(e.children) && e.children.length > 0 ? (t(), l(r(L), w({
          key: 0,
          class: { "custom-class-name": r(d).has(e.index) },
          index: e.index
        }, E.value(e)), {
          title: i(() => [
            e.icon ? (t(), l(r(S), { key: 0 }, {
              default: i(() => [
                (t(), l(y(e.icon)))
              ]),
              _: 2
            }, 1024)) : f("", !0),
            a(o.$slots, `${e.index}-title`, { option: e }, () => [
              o.link ? (t(), n("span", q, [
                C("a", {
                  href: e.href
                }, s(e.title), 9, G)
              ])) : (t(), n("span", H, s(e.title), 1))
            ])
          ]),
          default: i(() => [
            z(c, {
              options: e.children,
              link: o.link,
              onClick: m
            }, D({ _: 2 }, [
              h(o.$slots, (Q, _) => ({
                name: _,
                fn: i((A) => [
                  a(o.$slots, _, I(j(A)))
                ])
              }))
            ]), 1032, ["options", "link"])
          ]),
          _: 2
        }, 1040, ["class", "index"])) : (t(), l(r(R), {
          key: 1,
          class: F({ "custom-class-name": r(d).has(e.index) }),
          index: e.index,
          disabled: e.disabled,
          route: e.route,
          onClick: m
        }, {
          title: i(() => [
            a(o.$slots, `${e.index}-title`, { option: e }, () => [
              o.link ? (t(), n("span", J, [
                C("a", {
                  href: e.href
                }, s(e.title), 9, K)
              ])) : (t(), n("span", O, s(e.title), 1))
            ])
          ]),
          default: i(() => [
            e.icon ? (t(), l(r(S), { key: 0 }, {
              default: i(() => [
                (t(), l(y(e.icon)))
              ]),
              _: 2
            }, 1024)) : f("", !0)
          ]),
          _: 2
        }, 1032, ["class", "index", "disabled", "route"]))
      ], 64))), 256);
    };
  }
});
export {
  X as default
};
