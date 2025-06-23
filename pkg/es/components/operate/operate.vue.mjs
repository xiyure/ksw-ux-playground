import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KDropdownItem as N, KDropdown as V } from "../dropdown/index.mjs";
import { useLocale as F } from "../../hooks/use_locale.mjs";
import K from "../../node_modules/ksw-vue-icon/es/icons/base/close.mjs";
import M from "../../node_modules/ksw-vue-icon/es/icons/base/ellipsis-horizontal.mjs";
import { defineComponent as O, watch as T, createElementBlock as l, createCommentVNode as _, openBlock as a, createElementVNode as s, Fragment as f, renderList as v, createVNode as h, withCtx as k, createBlock as x, createTextVNode as A } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as y, unref as c } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as u, normalizeClass as E } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const I = {
  key: 0,
  class: "k-operate"
}, L = {
  key: 0,
  class: "k-operate__header"
}, $ = { class: "k-operate__content" }, q = { class: "k-operate__list" }, z = { class: "list-header" }, S = ["onClick"], j = { class: "k-operate-list__label" }, G = {
  key: 0,
  class: "k-operate-rest"
}, H = { class: "el-dropdown-link" }, J = { class: "k-operate__close" }, ee = /* @__PURE__ */ O({
  name: "KOperate",
  __name: "operate",
  props: {
    data: { default: () => [] },
    max: { default: 5 },
    total: { default: 0 },
    hideOnClick: { type: Boolean, default: !0 },
    checkMethod: {},
    showTotal: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(C, { emit: b }) {
    const { t: w } = F(), t = C, r = y([]), d = y([]);
    T(() => [t.data, t.max], () => {
      var n;
      if (!Array.isArray(t.data)) {
        d.value = [], r.value = [];
        return;
      }
      const { max: e } = t;
      ((n = t.data) == null ? void 0 : n.length) > e ? (d.value = t.data.slice(0, e), r.value = t.data.slice(e)) : (d.value = t.data, r.value = []);
    }, { immediate: !0, deep: !0 });
    const g = b;
    function m(e) {
      const { disabled: n, handler: i } = e;
      if (!n && typeof i == "function") {
        const o = typeof t.checkMethod == "function" ? t.checkMethod(e) : [];
        i({ data: o });
      }
    }
    function B() {
      g("close");
    }
    return (e, n) => {
      var i;
      return Number.isInteger(e.total) && e.total > 0 ? (a(), l("div", I, [
        e.showTotal ? (a(), l("span", L, u(e.total || "-"), 1)) : _("", !0),
        s("div", $, [
          s("ul", q, [
            s("li", z, u((i = c(w)) == null ? void 0 : i("operate.title")) + ":", 1),
            (a(!0), l(f, null, v(d.value, (o, p) => (a(), l("li", {
              key: p,
              class: E(["k-operate-list__item", { "k-operate-list__item--disabled": o.disabled }]),
              onClick: (D) => m(o)
            }, [
              s("span", j, u(o.label), 1)
            ], 10, S))), 128)),
            r.value.length ? (a(), l("li", G, [
              h(c(V), {
                trigger: "click",
                "hide-on-click": e.hideOnClick
              }, {
                title: k(() => [
                  s("span", H, [
                    h(c(M), { color: "#2882FF" })
                  ])
                ]),
                default: k(() => [
                  (a(!0), l(f, null, v(r.value, (o, p) => (a(), x(c(N), {
                    key: p,
                    disabled: o.disabled,
                    class: "k-dropdown-item__content",
                    onClick: (D) => m(o)
                  }, {
                    default: k(() => [
                      A(u(o.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"]))), 128))
                ]),
                _: 1
              }, 8, ["hide-on-click"])
            ])) : _("", !0)
          ]),
          s("div", J, [
            h(c(K), { onClick: B })
          ])
        ])
      ])) : _("", !0);
    };
  }
});
export {
  ee as default
};
