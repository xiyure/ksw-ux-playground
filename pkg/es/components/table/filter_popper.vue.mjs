import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KPopover as Y } from "../popover/index.mjs";
import { KCheckbox as x } from "../checkbox/index.mjs";
import { KButton as M } from "../button/index.mjs";
import { useLocale as Z } from "../../hooks/use_locale.mjs";
import { defineComponent as ee, computed as $, watch as le, createBlock as te, openBlock as s, withCtx as k, renderSlot as z, createCommentVNode as K, createElementBlock as f, createElementVNode as O, createVNode as b, Fragment as R, renderList as T, createTextVNode as U } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as v, unref as n } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as y, normalizeClass as A } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const ae = {
  key: 0,
  class: "filter-menu"
}, re = { class: "filter-menu-item" }, ie = ["onClick"], ne = {
  key: 2,
  class: "filter-buttons"
}, pe = /* @__PURE__ */ ee({
  __name: "filter_popper",
  props: {
    filters: { default: () => [] },
    column: { default: () => ({}) },
    trigger: { default: "hover" },
    visible: { type: Boolean, default: void 0 },
    text: { default: () => ({}) },
    teleported: { type: Boolean, default: !1 },
    destroyOnClose: { type: Boolean, default: !1 },
    filterMultiple: { type: Boolean, default: !0 }
  },
  emits: ["set-filter", "clear-filter", "filter-visible", "close-filter-panel"],
  setup(D, { expose: _, emit: H }) {
    const o = D, { t: m } = Z(), p = H, C = v(), u = v(!1), c = v(!1), g = v(!1), a = v([]);
    let L = "[]";
    const V = $(() => {
      var e;
      return ((e = o.filters.find((l) => l.checked)) == null ? void 0 : e.value) ?? null;
    });
    le(
      () => o.filters,
      (e) => {
        a.value = Array.isArray(e) ? e : [], h(), d();
      },
      { immediate: !0 }
    );
    function P(e) {
      var l;
      p("filter-visible", {
        column: o.column,
        field: (l = o.column) == null ? void 0 : l.field,
        visible: e,
        filterList: a.value
      });
    }
    function I() {
      g.value = !0;
    }
    function J() {
      o.destroyOnClose && (g.value = !1);
    }
    function h() {
      var l, r;
      if (!Array.isArray(a.value)) {
        u.value = !1;
        return;
      }
      u.value = (l = a.value) == null ? void 0 : l.every((i) => i.checked);
      const e = (r = a.value) == null ? void 0 : r.some((i) => i.checked);
      !u.value && e ? c.value = !0 : c.value = !1;
    }
    function j() {
      var e;
      u.value && c.value && (c.value = !1), (e = a.value) == null || e.forEach((l) => {
        l.checked = u.value;
      });
    }
    function q(e, l) {
      V.value !== l.value && (S(), l.checked = !0, E(e));
    }
    function E(e) {
      const { hasChange: l, values: r } = d();
      l && p("set-filter", {
        column: o.column,
        field: o.column.field,
        filterList: a.value,
        values: r,
        $event: e
      });
    }
    function N(e) {
      a.value.forEach((r) => {
        r.checked = !1;
      }), c.value = !1, u.value = !1;
      const { hasChange: l } = d();
      l && p("clear-filter", { filterList: a.value, $event: e });
    }
    function G() {
      var e;
      if (o.visible === void 0) {
        (e = C.value) == null || e.hide();
        return;
      }
      p("close-filter-panel");
    }
    function d() {
      const e = a.value.filter((i) => i.checked).map((i) => i.value), l = JSON.stringify(e), r = L !== l;
      return r && (L = l), { hasChange: r, values: e };
    }
    function Q(e) {
      a.value = Array.isArray(e) ? e : [], h(), d();
    }
    function S() {
      a.value.forEach((e) => {
        e.checked = !1;
      }), h(), d();
    }
    function W() {
    }
    function X() {
    }
    return _({
      popperRef: $(() => {
        var e, l;
        return (l = (e = C.value) == null ? void 0 : e.popperRef) == null ? void 0 : l.contentRef;
      }),
      setFilter: Q,
      clearFilter: S,
      resetFilterPanel: W,
      saveFilterPanel: X,
      closeFilterPanel: G
    }), (e, l) => {
      var r;
      return s(), te(n(Y), {
        ref_key: "filterPopper",
        ref: C,
        trigger: e.trigger,
        "show-arrow": !1,
        placement: "right-start",
        "popper-class": "filter-box",
        offset: 2,
        disabled: !((r = a.value) != null && r.length),
        teleported: !0,
        visible: e.visible,
        onShow: l[2] || (l[2] = () => {
          P(!0);
        }),
        onHide: l[3] || (l[3] = () => {
          P(!1);
        }),
        onBeforeEnter: I,
        onAfterLeave: J
      }, {
        reference: k(() => [
          z(e.$slots, "default", {
            disabled: !a.value.length
          })
        ]),
        default: k(() => [
          g.value ? z(e.$slots, "filter", { key: 0 }, () => {
            var i, w;
            return [
              e.filterMultiple ? (s(), f("ul", ae, [
                O("li", re, [
                  b(n(x), {
                    modelValue: u.value,
                    "onUpdate:modelValue": l[0] || (l[0] = (t) => u.value = t),
                    label: (i = n(m)) == null ? void 0 : i("table.all"),
                    value: "all",
                    indeterminate: c.value,
                    onChange: j
                  }, null, 8, ["modelValue", "label", "indeterminate"])
                ]),
                (s(!0), f(R, null, T(a.value, (t, B) => (s(), f("li", {
                  key: B,
                  class: "filter-menu-item"
                }, [
                  b(n(x), {
                    modelValue: t.checked,
                    "onUpdate:modelValue": (F) => t.checked = F,
                    label: t.label,
                    value: t.value,
                    onChange: h
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "value"])
                ]))), 128))
              ])) : (s(), f("ul", {
                key: 1,
                class: A(["filter-menu", { "filter-multiple-disabled": !e.filterMultiple }])
              }, [
                O("li", {
                  class: A(["filter-menu-item", { "is-active": V.value === null }]),
                  onClick: l[1] || (l[1] = (t) => {
                    N(t);
                  })
                }, y((w = n(m)) == null ? void 0 : w("table.all")), 3),
                (s(!0), f(R, null, T(a.value, (t, B) => (s(), f("li", {
                  key: B,
                  class: A(["filter-menu-item", { "is-active": V.value === t.value }]),
                  onClick: (F) => {
                    q(F, t);
                  }
                }, y(t.label), 11, ie))), 128))
              ], 2)),
              e.filterMultiple ? (s(), f("div", ne, [
                b(n(M), {
                  size: "sm",
                  onClick: N
                }, {
                  default: k(() => {
                    var t;
                    return [
                      U(y(e.text.resetButtonText ?? ((t = n(m)) == null ? void 0 : t("table.reset"))), 1)
                    ];
                  }),
                  _: 1
                }),
                b(n(M), {
                  class: "filter-btn-item",
                  size: "sm",
                  secondary: "",
                  onClick: E
                }, {
                  default: k(() => {
                    var t;
                    return [
                      U(y(e.text.confirmButtonText ?? ((t = n(m)) == null ? void 0 : t("table.filter"))), 1)
                    ];
                  }),
                  _: 1
                })
              ])) : K("", !0)
            ];
          }) : K("", !0)
        ]),
        _: 3
      }, 8, ["trigger", "disabled", "visible"]);
    };
  }
});
export {
  pe as default
};
