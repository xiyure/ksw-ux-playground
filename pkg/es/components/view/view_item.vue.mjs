import { defineComponent as B, inject as f, ref as I, computed as N, createElementBlock as h, openBlock as r, normalizeClass as P, unref as n, createElementVNode as m, renderSlot as C, createBlock as _, createCommentVNode as c, createTextVNode as k, resolveDynamicComponent as R, normalizeStyle as S, toDisplayString as u, withCtx as a, withModifiers as K, createVNode as d } from "vue";
import { useLocale as M } from "../../hooks/use_locale.mjs";
import { ACTIVE_VIEW_KEY as z, P_PROPS_KEY as A } from "./const.mjs";
import { getRestAttrs as T } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { isVueComponent as Y } from "../../utils/dom.mjs";
import { ElDropdown as $, ElDropdownMenu as j, ElDropdownItem as L } from "../../node_modules/element-plus/es/components/dropdown/index.mjs";
import O from "../../node_modules/ksw-vue-icon/es/icons/base/ellipsis-horizontal.mjs";
const W = ["data-view-value"], q = { class: "k-view-item__label" }, F = { class: "k-view-item__other" }, G = { key: 0 }, ne = /* @__PURE__ */ B({
  name: "KViewItem",
  __name: "view_item",
  props: {
    label: {},
    value: {},
    count: {},
    custom: { type: Boolean },
    disabled: { type: Boolean },
    showCustomControl: { type: Boolean },
    originData: {}
  },
  emits: ["change", "remove"],
  setup(g, { emit: y }) {
    const { t: b } = M(), i = g, v = y, p = f(z, I(0)), l = f(A, {}), s = N(() => {
      const { iconMethod: e } = l ?? {};
      if (typeof e != "function")
        return null;
      const t = e(i.originData, void 0), o = (t == null ? void 0 : t.icon) ?? t;
      return typeof o == "string" || Y(o) ? { _icon: o, ...T(t, ["icon"]) } : null;
    });
    function D(e) {
      switch (e) {
        case "remove":
          V();
      }
    }
    function E() {
      i.disabled || p.value === i.value || v("change", i.originData);
    }
    function V() {
      v("remove", i.originData);
    }
    return (e, t) => (r(), h("div", {
      class: P([
        "k-view-item",
        {
          "k-view-active": n(p) === e.value,
          "k-view-disabled": e.disabled,
          "k-view-custom": e.custom,
          "k-view-common": !e.custom
        }
      ]),
      "data-view-value": e.value,
      onClick: E
    }, [
      m("div", q, [
        C(e.$slots, "label", {}, () => [
          C(e.$slots, "label-text", {}, () => {
            var o, w;
            return [
              (o = s.value) != null && o._icon ? (r(), _(R((w = s.value) == null ? void 0 : w._icon), {
                key: 0,
                style: S({ marginRight: "0.25rem", ...s.value })
              }, null, 8, ["style"])) : c("", !0),
              k(" " + u(i.label), 1)
            ];
          })
        ])
      ]),
      m("div", F, [
        n(l).showCount ? (r(), h("span", G, u(i.count), 1)) : c("", !0),
        e.showCustomControl ?? n(l).showCustomControl ? (r(), _(n($), {
          key: 1,
          trigger: "click",
          onCommand: D
        }, {
          dropdown: a(() => [
            d(n(j), null, {
              default: a(() => [
                d(n(L), { command: "remove" }, {
                  default: a(() => {
                    var o;
                    return [
                      k(u((o = n(b)) == null ? void 0 : o("view.remove")), 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          default: a(() => [
            m("span", {
              class: "k-view-item-remove",
              onClick: t[0] || (t[0] = K(() => {
              }, ["stop", "prevent"]))
            }, [
              d(n(O))
            ])
          ]),
          _: 1
        })) : c("", !0)
      ])
    ], 10, W));
  }
});
export {
  ne as default
};
