import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { OverlayScrollbarsComponent as y } from "../../node_modules/overlayscrollbars-vue/overlayscrollbars-vue.mjs";
import A from "./subMenu.vue.mjs";
import { transformTreeData as E } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElMenu as N } from "../../node_modules/element-plus/es/components/menu/index.mjs";
import z from "../../node_modules/ksw-vue-icon/es/icons/base/left-menu-display.mjs";
import { defineComponent as O, computed as j, watch as H, provide as D, createElementBlock as w, openBlock as m, createElementVNode as a, createCommentVNode as C, createVNode as n, renderSlot as r, withCtx as c, mergeProps as F, createSlots as K, renderList as L, guardReactiveProps as R, createBlock as T } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as _, unref as p } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeClass as v, normalizeProps as q } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const G = { class: "k-layout-container h-screen flex overflow-hidden" }, J = { class: "k-layout-content h-screen overflow-hidden flex flex-col flex-1" }, Q = { class: "k-layout-header bg-white h-12 px-4 flex w-full justify-between items-center border-b" }, U = { class: "k-layout-main" }, W = { class: "k-layout-footer" }, ne = /* @__PURE__ */ O({
  name: "KMenuView",
  __name: "MenuView",
  props: {
    options: { default: () => [] },
    defaultActive: {},
    showCollapse: { type: Boolean, default: !0 },
    collapse: { type: Boolean, default: void 0 },
    link: { type: Boolean, default: !1 }
  },
  emits: ["click", "select"],
  setup(b, { expose: g, emit: S }) {
    const o = b, h = S, t = _(!1), d = _(/* @__PURE__ */ new Set([])), u = [], f = j(() => o.collapse !== void 0 ? o.collapse : t.value);
    H(() => o.options, () => {
      const e = E(
        o.options,
        { parentField: "index", children: "children", addPid: !0, deleteChildren: !0 }
      );
      u.length = 0, u.push(...e);
    }, { immediate: !0, deep: !0 });
    const $ = (e) => {
      h("click", e);
    }, x = () => {
      o.collapse === void 0 && (t.value = !0);
    }, B = () => {
      o.collapse === void 0 && (t.value = !1);
    }, V = () => {
      o.collapse === void 0 && (t.value = !t.value);
    }, M = (e) => {
      k(e), h("select", e);
    };
    function k(e) {
      if (!e)
        return;
      d.value.clear();
      const i = new Map(u.map((l) => [l.index, l]));
      let s = e;
      for (; s; ) {
        const l = i.get(s);
        l && (d.value.add(l.index), s = l.pid);
      }
    }
    return k(o.defaultActive), D("__activeSet__", d), g({ collapse: x, expand: B, toggleExpand: V }), (e, i) => (m(), w("div", G, [
      a("div", {
        class: v(["k-layout-aside flex flex-col", { "is-collapse": f.value }])
      }, [
        e.$slots["app-logo"] ? (m(), w("div", {
          key: 0,
          class: v(["logo-box h-12 flex justify-start items-center p-4", { "is-collapse": f.value }])
        }, [
          r(e.$slots, "app-logo")
        ], 2)) : C("", !0),
        n(p(y), {
          defer: "",
          class: "OverlayScrollbarsComponent flex-1",
          options: { scrollbars: { autoHide: "scroll", theme: "os-theme-light" } }
        }, {
          default: c(() => [
            n(p(N), F({
              collapse: f.value,
              "default-active": e.defaultActive
            }, e.$attrs, { onSelect: M }), {
              default: c(() => [
                n(A, {
                  options: e.options,
                  link: e.link,
                  onClick: $
                }, K({ _: 2 }, [
                  L(e.$slots, (s, l) => ({
                    name: l,
                    fn: c((P) => [
                      r(e.$slots, l, q(R(P)))
                    ])
                  }))
                ]), 1032, ["options", "link"])
              ]),
              _: 3
            }, 16, ["collapse", "default-active"])
          ]),
          _: 3
        })
      ], 2),
      a("div", J, [
        a("div", Q, [
          o.showCollapse && o.collapse === void 0 ? (m(), T(p(z), {
            key: 0,
            class: v([{ "rotate-180": !t.value }, "collapse-btn cursor-pointer"]),
            color: "black",
            size: "20",
            onClick: i[0] || (i[0] = (s) => t.value = !t.value)
          }, null, 8, ["class"])) : C("", !0),
          r(e.$slots, "header")
        ]),
        n(p(y), {
          defer: "",
          options: { scrollbars: { autoHide: "scroll" } },
          class: "flex-1"
        }, {
          default: c(() => [
            a("div", U, [
              r(e.$slots, "main")
            ]),
            a("div", W, [
              r(e.$slots, "footer")
            ])
          ]),
          _: 3
        })
      ])
    ]));
  }
});
export {
  ne as default
};
