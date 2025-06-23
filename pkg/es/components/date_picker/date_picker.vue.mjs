import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as y } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as P, SIZE_KEY as M } from "../../hooks/use_size.mjs";
import { useLocale as v } from "../../hooks/use_locale.mjs";
import { ElDatePicker as S } from "../../node_modules/element-plus/es/components/date-picker/index.mjs";
import { defineComponent as C, computed as i, provide as z, createBlock as R, openBlock as _, createSlots as x, renderList as H, withCtx as E, renderSlot as Y, guardReactiveProps as B, mergeProps as Q } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as $, unref as p } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as K } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const O = /* @__PURE__ */ C({
  name: "KDatePicker",
  __name: "date_picker",
  props: {
    size: {},
    shortcuts: {},
    showDefaultShortcuts: { type: Boolean, default: !0 },
    type: {}
  },
  setup(f, { expose: l }) {
    const s = f, { t: r } = v(), a = P(s), u = $(null), D = i(() => [
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
        value: h()
      },
      {
        text: r == null ? void 0 : r("datePicker.curQuarter"),
        value: g()
      },
      {
        text: r == null ? void 0 : r("datePicker.curYear"),
        value: k()
      }
    ]), m = i(() => (s.type === "daterange" || s.type === "datetimerange") && s.showDefaultShortcuts ? [...D.value, ...s.shortcuts || []] : s.shortcuts);
    function c(t) {
      const e = /* @__PURE__ */ new Date(), o = /* @__PURE__ */ new Date();
      return o.setDate(o.getDate() + t), t > 0 ? [e, o] : [o, e];
    }
    function h() {
      const t = /* @__PURE__ */ new Date();
      t.setDate(1), t.setHours(0, 0, 0, 0);
      const e = d(), o = /* @__PURE__ */ new Date();
      return o.setDate(e), o.setHours(23, 59, 59, 59), [t, o];
    }
    function d() {
      const t = (/* @__PURE__ */ new Date()).getMonth() + 1, e = [1, 3, 5, 7, 8, 10, 12], o = [4, 6, 9, 11];
      if (e.includes(t))
        return 31;
      if (o.includes(t))
        return 30;
      const n = (/* @__PURE__ */ new Date()).getFullYear();
      return n % 4 === 0 && n % 100 !== 0 || n % 400 === 0 ? 29 : 28;
    }
    function g() {
      const t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date(), o = t.getMonth(), n = Math.floor(o / 3);
      return t.setMonth(n * 3), t.setDate(1), t.setHours(0, 0, 0, 0), e.setMonth(n * 3 + 2), e.setHours(23, 59, 59, 59), n === 0 || n === 3 ? e.setDate(31) : e.setDate(30), [t, e];
    }
    function k() {
      const t = /* @__PURE__ */ new Date(), e = /* @__PURE__ */ new Date();
      return t.setMonth(0), t.setDate(1), t.setHours(0, 0, 0, 0), e.setMonth(11), e.setDate(31), e.setHours(23, 59, 59, 59), [t, e];
    }
    return z(M, a), l(y({}, u)), (t, e) => (_(), R(p(S), Q({
      ref_key: "datePickerRef",
      ref: u,
      class: "k-date-picker"
    }, t.$attrs, {
      type: t.type,
      shortcuts: m.value,
      size: p(a).elSize
    }), x({ _: 2 }, [
      H(t.$slots, (o, n) => ({
        name: n,
        fn: E((w) => [
          Y(t.$slots, n, K(B(w)))
        ])
      }))
    ]), 1040, ["type", "shortcuts", "size"]));
  }
});
export {
  O as default
};
