import { defineComponent as N, ref as f, watch as V, createElementBlock as l, createCommentVNode as p, openBlock as a, createElementVNode as s, toDisplayString as u, unref as i, Fragment as v, renderList as y, normalizeClass as F, createVNode as h, withCtx as k, createBlock as K, createTextVNode as M } from "vue";
import { KDropdown as O, KDropdownItem as T } from "../dropdown/index.mjs";
import { useLocale as x } from "../../hooks/use_locale.mjs";
import A from "../../node_modules/ksw-vue-icon/es/icons/base/close.mjs";
import E from "../../node_modules/ksw-vue-icon/es/icons/base/ellipsis-horizontal.mjs";
const I = {
  key: 0,
  class: "k-operate"
}, L = {
  key: 0,
  class: "k-operate__header"
}, $ = { class: "k-operate__content" }, q = { class: "k-operate__list" }, z = { class: "list-header" }, S = ["onClick"], j = { class: "k-operate-list__label" }, G = {
  key: 0,
  class: "k-operate-rest"
}, H = { class: "el-dropdown-link" }, J = { class: "k-operate__close" }, X = /* @__PURE__ */ N({
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
    const { t: w } = x(), t = C, n = f([]), d = f([]);
    V(() => [t.data, t.max], () => {
      var r;
      if (!Array.isArray(t.data)) {
        d.value = [], n.value = [];
        return;
      }
      const { max: e } = t;
      ((r = t.data) == null ? void 0 : r.length) > e ? (d.value = t.data.slice(0, e), n.value = t.data.slice(e)) : (d.value = t.data, n.value = []);
    }, { immediate: !0, deep: !0 });
    const g = b;
    function m(e) {
      const { disabled: r, handler: c } = e;
      if (!r && typeof c == "function") {
        const o = typeof t.checkMethod == "function" ? t.checkMethod(e) : [];
        c({ data: o });
      }
    }
    function D() {
      g("close");
    }
    return (e, r) => {
      var c;
      return Number.isInteger(e.total) && e.total > 0 ? (a(), l("div", I, [
        e.showTotal ? (a(), l("span", L, u(e.total || "-"), 1)) : p("", !0),
        s("div", $, [
          s("ul", q, [
            s("li", z, u((c = i(w)) == null ? void 0 : c("operate.title")) + ":", 1),
            (a(!0), l(v, null, y(d.value, (o, _) => (a(), l("li", {
              key: _,
              class: F(["k-operate-list__item", { "k-operate-list__item--disabled": o.disabled }]),
              onClick: (B) => m(o)
            }, [
              s("span", j, u(o.label), 1)
            ], 10, S))), 128)),
            n.value.length ? (a(), l("li", G, [
              h(i(O), {
                trigger: "click",
                "hide-on-click": e.hideOnClick
              }, {
                title: k(() => [
                  s("span", H, [
                    h(i(E), { color: "#2882FF" })
                  ])
                ]),
                default: k(() => [
                  (a(!0), l(v, null, y(n.value, (o, _) => (a(), K(i(T), {
                    key: _,
                    disabled: o.disabled,
                    class: "k-dropdown-item__content",
                    onClick: (B) => m(o)
                  }, {
                    default: k(() => [
                      M(u(o.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"]))), 128))
                ]),
                _: 1
              }, 8, ["hide-on-click"])
            ])) : p("", !0)
          ]),
          s("div", J, [
            h(i(A), { onClick: D })
          ])
        ])
      ])) : p("", !0);
    };
  }
});
export {
  X as default
};
