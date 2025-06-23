import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { useLocale as B } from "../../hooks/use_locale.mjs";
import { ACTIVE_VIEW_KEY as N, P_PROPS_KEY as I } from "./const.mjs";
import { getRestAttrs as P } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { isVueComponent as R } from "../../utils/dom.mjs";
import { ElDropdownMenu as S, ElDropdownItem as K, ElDropdown as M } from "../../node_modules/element-plus/es/components/dropdown/index.mjs";
import { defineComponent as z, inject as w, computed as A, createElementBlock as h, openBlock as r, createElementVNode as s, renderSlot as C, createBlock as _, createCommentVNode as c, createTextVNode as k, resolveDynamicComponent as T, withCtx as a, createVNode as u } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as Y, unref as n } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeClass as $, normalizeStyle as j, toDisplayString as d } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { withModifiers as L } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
import O from "../../node_modules/ksw-vue-icon/es/icons/base/ellipsis-horizontal.mjs";
const W = ["data-view-value"], q = { class: "k-view-item__label" }, F = { class: "k-view-item__other" }, G = { key: 0 }, le = /* @__PURE__ */ z({
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
    const { t: V } = B(), i = g, p = y, v = w(N, Y(0)), l = w(I, {}), m = A(() => {
      const { iconMethod: e } = l ?? {};
      if (typeof e != "function")
        return null;
      const t = e(i.originData, void 0), o = (t == null ? void 0 : t.icon) ?? t;
      return typeof o == "string" || R(o) ? { _icon: o, ...P(t, ["icon"]) } : null;
    });
    function b(e) {
      switch (e) {
        case "remove":
          E();
      }
    }
    function D() {
      i.disabled || v.value === i.value || p("change", i.originData);
    }
    function E() {
      p("remove", i.originData);
    }
    return (e, t) => (r(), h("div", {
      class: $([
        "k-view-item",
        {
          "k-view-active": n(v) === e.value,
          "k-view-disabled": e.disabled,
          "k-view-custom": e.custom,
          "k-view-common": !e.custom
        }
      ]),
      "data-view-value": e.value,
      onClick: D
    }, [
      s("div", q, [
        C(e.$slots, "label", {}, () => [
          C(e.$slots, "label-text", {}, () => {
            var o, f;
            return [
              (o = m.value) != null && o._icon ? (r(), _(T((f = m.value) == null ? void 0 : f._icon), {
                key: 0,
                style: j({ marginRight: "0.25rem", ...m.value })
              }, null, 8, ["style"])) : c("", !0),
              k(" " + d(i.label), 1)
            ];
          })
        ])
      ]),
      s("div", F, [
        n(l).showCount ? (r(), h("span", G, d(i.count), 1)) : c("", !0),
        e.showCustomControl ?? n(l).showCustomControl ? (r(), _(n(M), {
          key: 1,
          trigger: "click",
          onCommand: b
        }, {
          dropdown: a(() => [
            u(n(S), null, {
              default: a(() => [
                u(n(K), { command: "remove" }, {
                  default: a(() => {
                    var o;
                    return [
                      k(d((o = n(V)) == null ? void 0 : o("view.remove")), 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          default: a(() => [
            s("span", {
              class: "k-view-item-remove",
              onClick: t[0] || (t[0] = L(() => {
              }, ["stop", "prevent"]))
            }, [
              u(n(O))
            ])
          ]),
          _: 1
        })) : c("", !0)
      ])
    ], 10, W));
  }
});
export {
  le as default
};
