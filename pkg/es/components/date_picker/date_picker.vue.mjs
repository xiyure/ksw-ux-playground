import { defineComponent as y, ref as P, computed as i, provide as M, createBlock as v, openBlock as S, unref as l, mergeProps as C, createSlots as z, renderList as R, withCtx as _, renderSlot as x, normalizeProps as H, guardReactiveProps as E } from "vue";
import { getExposeProxy as Y } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as B, SIZE_KEY as Q } from "../../hooks/use_size.mjs";
import { useLocale as $ } from "../../hooks/use_locale.mjs";
import { ElDatePicker as K } from "../../node_modules/element-plus/es/components/date-picker/index.mjs";
const G = /* @__PURE__ */ y({
  name: "KDatePicker",
  __name: "date_picker",
  props: {
    size: {},
    shortcuts: {},
    showDefaultShortcuts: { type: Boolean, default: !0 },
    type: {}
  },
  setup(D, { expose: f }) {
    const s = D, { t: r } = $(), a = B(s), u = P(null), p = i(() => [
      {
        text: r == null ? void 0 : r("datePicker.within7days"),
        value: () => c(-7)
      },
      {
        text: r == null ? void 0 : r("datePicker.within15days"),
        value: () => c(-15)
      },
      {
        text: r == null ? void 0 : r("datePicker.curMonth"),
        value: d()
      },
      {
        text: r == null ? void 0 : r("datePicker.curQuarter"),
        value: g()
      },
      {
        text: r == null ? void 0 : r("datePicker.curYear"),
        value: k()
      }
    ]), h = i(() => (s.type === "daterange" || s.type === "datetimerange") && s.showDefaultShortcuts ? [...p.value, ...s.shortcuts || []] : s.shortcuts);
    function c(t) {
      const e = /* @__PURE__ */ new Date(), n = /* @__PURE__ */ new Date();
      return n.setDate(n.getDate() + t), t > 0 ? [e, n] : [n, e];
    }
    function d() {
      const t = /* @__PURE__ */ new Date();
      t.setDate(1), t.setHours(0, 0, 0, 0);
      const e = m(), n = /* @__PURE__ */ new Date();
      return n.setDate(e), n.setHours(23, 59, 59, 59), [t, n];
    }
    function m() {
      const t = (/* @__PURE__ */ new Date()).getMonth() + 1, e = [1, 3, 5, 7, 8, 10, 12], n = [4, 6, 9, 11];
      if (e.includes(t))
        return 31;
      if (n.includes(t))
        return 30;
      const o = (/* @__PURE__ */ new Date()).getFullYear();
      return o % 4 === 0 && o % 100 !== 0 || o % 400 === 0 ? 29 : 28;
    }
    function g() {
      const t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date(), n = t.getMonth(), o = Math.floor(n / 3);
      return t.setMonth(o * 3), t.setDate(1), t.setHours(0, 0, 0, 0), e.setMonth(o * 3 + 2), e.setHours(23, 59, 59, 59), o === 0 || o === 3 ? e.setDate(31) : e.setDate(30), [t, e];
    }
    function k() {
      const t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date();
      return t.setMonth(0), t.setDate(1), t.setHours(0, 0, 0, 0), e.setMonth(11), e.setDate(31), e.setHours(23, 59, 59, 59), [t, e];
    }
    return M(Q, a), f(Y({}, u)), (t, e) => (S(), v(l(K), C({
      ref_key: "datePickerRef",
      ref: u,
      class: "k-date-picker"
    }, t.$attrs, {
      type: t.type,
      shortcuts: h.value,
      size: l(a).elSize
    }), z({ _: 2 }, [
      R(t.$slots, (n, o) => ({
        name: o,
        fn: _((w) => [
          x(t.$slots, o, H(E(w)))
        ])
      }))
    ]), 1040, ["type", "shortcuts", "size"]));
  }
});
export {
  G as default
};
