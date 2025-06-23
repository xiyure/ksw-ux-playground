import { defineComponent as Y, ref as v, computed as x, watch as Z, createBlock as ee, openBlock as s, unref as n, withCtx as k, renderSlot as M, createCommentVNode as $, createElementBlock as f, createElementVNode as z, createVNode as b, Fragment as K, renderList as O, normalizeClass as A, toDisplayString as y, createTextVNode as R } from "vue";
import { KPopover as le } from "../popover/index.mjs";
import { KCheckbox as T } from "../checkbox/index.mjs";
import { KButton as U } from "../button/index.mjs";
import { useLocale as te } from "../../hooks/use_locale.mjs";
const ae = {
  key: 0,
  class: "filter-menu"
}, re = { class: "filter-menu-item" }, ie = ["onClick"], ne = {
  key: 2,
  class: "filter-buttons"
}, de = /* @__PURE__ */ Y({
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
    const o = D, { t: m } = te(), p = H, C = v(), u = v(!1), c = v(!1), g = v(!1), a = v([]);
    let L = "[]";
    const V = x(() => {
      var e;
      return ((e = o.filters.find((l) => l.checked)) == null ? void 0 : e.value) ?? null;
    });
    Z(
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
      V.value !== l.value && (w(), l.checked = !0, E(e));
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
    function S(e) {
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
    function w() {
      a.value.forEach((e) => {
        e.checked = !1;
      }), h(), d();
    }
    function W() {
    }
    function X() {
    }
    return _({
      popperRef: x(() => {
        var e, l;
        return (l = (e = C.value) == null ? void 0 : e.popperRef) == null ? void 0 : l.contentRef;
      }),
      setFilter: Q,
      clearFilter: w,
      resetFilterPanel: W,
      saveFilterPanel: X,
      closeFilterPanel: G
    }), (e, l) => {
      var r;
      return s(), ee(n(le), {
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
          M(e.$slots, "default", {
            disabled: !a.value.length
          })
        ]),
        default: k(() => [
          g.value ? M(e.$slots, "filter", { key: 0 }, () => {
            var i, N;
            return [
              e.filterMultiple ? (s(), f("ul", ae, [
                z("li", re, [
                  b(n(T), {
                    modelValue: u.value,
                    "onUpdate:modelValue": l[0] || (l[0] = (t) => u.value = t),
                    label: (i = n(m)) == null ? void 0 : i("table.all"),
                    value: "all",
                    indeterminate: c.value,
                    onChange: j
                  }, null, 8, ["modelValue", "label", "indeterminate"])
                ]),
                (s(!0), f(K, null, O(a.value, (t, B) => (s(), f("li", {
                  key: B,
                  class: "filter-menu-item"
                }, [
                  b(n(T), {
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
                z("li", {
                  class: A(["filter-menu-item", { "is-active": V.value === null }]),
                  onClick: l[1] || (l[1] = (t) => {
                    S(t);
                  })
                }, y((N = n(m)) == null ? void 0 : N("table.all")), 3),
                (s(!0), f(K, null, O(a.value, (t, B) => (s(), f("li", {
                  key: B,
                  class: A(["filter-menu-item", { "is-active": V.value === t.value }]),
                  onClick: (F) => {
                    q(F, t);
                  }
                }, y(t.label), 11, ie))), 128))
              ], 2)),
              e.filterMultiple ? (s(), f("div", ne, [
                b(n(U), {
                  size: "sm",
                  onClick: S
                }, {
                  default: k(() => {
                    var t;
                    return [
                      R(y(e.text.resetButtonText ?? ((t = n(m)) == null ? void 0 : t("table.reset"))), 1)
                    ];
                  }),
                  _: 1
                }),
                b(n(U), {
                  class: "filter-btn-item",
                  size: "sm",
                  secondary: "",
                  onClick: E
                }, {
                  default: k(() => {
                    var t;
                    return [
                      R(y(e.text.confirmButtonText ?? ((t = n(m)) == null ? void 0 : t("table.filter"))), 1)
                    ];
                  }),
                  _: 1
                })
              ])) : $("", !0)
            ];
          }) : $("", !0)
        ]),
        _: 3
      }, 8, ["trigger", "disabled", "visible"]);
    };
  }
});
export {
  de as default
};
