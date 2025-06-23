import { defineComponent as A, ref as y, computed as E, watch as z, provide as N, createElementBlock as w, openBlock as m, createElementVNode as a, normalizeClass as v, createCommentVNode as C, createVNode as i, renderSlot as r, unref as c, withCtx as p, mergeProps as O, createSlots as j, renderList as H, normalizeProps as D, guardReactiveProps as F, createBlock as K } from "vue";
import { OverlayScrollbarsComponent as _ } from "../../node_modules/overlayscrollbars-vue/overlayscrollbars-vue.mjs";
import L from "./subMenu.vue.mjs";
import { transformTreeData as R } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElMenu as T } from "../../node_modules/element-plus/es/components/menu/index.mjs";
import q from "../../node_modules/ksw-vue-icon/es/icons/base/left-menu-display.mjs";
const G = { class: "k-layout-container h-screen flex overflow-hidden" }, J = { class: "k-layout-content h-screen overflow-hidden flex flex-col flex-1" }, Q = { class: "k-layout-header bg-white h-12 px-4 flex w-full justify-between items-center border-b" }, U = { class: "k-layout-main" }, W = { class: "k-layout-footer" }, ae = /* @__PURE__ */ A({
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
    const o = b, h = S, t = y(!1), d = y(/* @__PURE__ */ new Set([])), u = [], f = E(() => o.collapse !== void 0 ? o.collapse : t.value);
    z(() => o.options, () => {
      const e = R(
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
    }, M = () => {
      o.collapse === void 0 && (t.value = !t.value);
    }, P = (e) => {
      k(e), h("select", e);
    };
    function k(e) {
      if (!e)
        return;
      d.value.clear();
      const n = new Map(u.map((l) => [l.index, l]));
      let s = e;
      for (; s; ) {
        const l = n.get(s);
        l && (d.value.add(l.index), s = l.pid);
      }
    }
    return k(o.defaultActive), N("__activeSet__", d), g({ collapse: x, expand: B, toggleExpand: M }), (e, n) => (m(), w("div", G, [
      a("div", {
        class: v(["k-layout-aside flex flex-col", { "is-collapse": f.value }])
      }, [
        e.$slots["app-logo"] ? (m(), w("div", {
          key: 0,
          class: v(["logo-box h-12 flex justify-start items-center p-4", { "is-collapse": f.value }])
        }, [
          r(e.$slots, "app-logo")
        ], 2)) : C("", !0),
        i(c(_), {
          defer: "",
          class: "OverlayScrollbarsComponent flex-1",
          options: { scrollbars: { autoHide: "scroll", theme: "os-theme-light" } }
        }, {
          default: p(() => [
            i(c(T), O({
              collapse: f.value,
              "default-active": e.defaultActive
            }, e.$attrs, { onSelect: P }), {
              default: p(() => [
                i(L, {
                  options: e.options,
                  link: e.link,
                  onClick: $
                }, j({ _: 2 }, [
                  H(e.$slots, (s, l) => ({
                    name: l,
                    fn: p((V) => [
                      r(e.$slots, l, D(F(V)))
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
          o.showCollapse && o.collapse === void 0 ? (m(), K(c(q), {
            key: 0,
            class: v([{ "rotate-180": !t.value }, "collapse-btn cursor-pointer"]),
            color: "black",
            size: "20",
            onClick: n[0] || (n[0] = (s) => t.value = !t.value)
          }, null, 8, ["class"])) : C("", !0),
          r(e.$slots, "header")
        ]),
        i(c(_), {
          defer: "",
          options: { scrollbars: { autoHide: "scroll" } },
          class: "flex-1"
        }, {
          default: p(() => [
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
  ae as default
};
