import { defineComponent as M, computed as a, inject as B, onMounted as D, ref as y, onUnmounted as G, provide as i, createBlock as H, openBlock as K, unref as U, mergeProps as V, createSlots as Y, renderList as Z, withCtx as $, renderSlot as j, normalizeProps as z, guardReactiveProps as W } from "vue";
import "../../node_modules/vxe-table/es/components.mjs";
import u from "../../node_modules/dom-zindex/es/index.esm.mjs";
import { genRandomStr as q, getExposeProxy as J } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { CLEAR_SORT as Q, SORT_CHANGE as X, FILTER_VISIBLE as ee, FILTER_CHANGE as te, CLEAR_FILTER as ne, HIDE_COLUMN as E, DESC_CHANGE as _, TABLE_KEY as re, TABLE_ID as oe, SORT_CONFIG_KEY as ie, FILTER_CONFIG_KEY as le, SHOW_COLUMN_MENU_KEY as ce, SET_FILTER as se, CLEAR_FILTER_OUTSIDE as ae, OPEN_FILTER_PANEL as me, RESET_FILTER_PANEL as fe, SAVE_FILTER_PANEL as ue, CLOSE_FILTER_PANEL as Ee } from "./const.mjs";
import { VxeTable as _e } from "../../node_modules/vxe-table/es/table/index.mjs";
const Re = /* @__PURE__ */ M({
  name: "KTable",
  __name: "table",
  props: {
    showColumnMenu: { type: Boolean },
    sortConfig: {},
    filterConfig: {}
  },
  emits: [
    "desc-change",
    "hide-column",
    "sort-change",
    "clear-sort",
    "filter-change",
    "filter-visible",
    "clear-filter"
  ],
  setup(C, { expose: p, emit: d }) {
    const l = {
      descChange: {
        name: _,
        callback: L.bind(this)
      },
      hideColumn: {
        name: E,
        callback: F.bind(this)
      },
      clearFilter: {
        name: ne,
        callback: O.bind(this)
      },
      filterChange: {
        name: te,
        callback: v.bind(this)
      },
      filterVisible: {
        name: ee,
        callback: x.bind(this)
      },
      sortChange: {
        name: X,
        callback: A.bind(this)
      },
      clearSort: {
        name: Q,
        callback: N.bind(this)
      }
    }, c = C, g = a(() => {
      const { chronological: e, multiple: t } = c.sortConfig ?? {};
      return { chronological: e, multiple: t, remote: !0 };
    }), b = a(() => ({ remote: !0 })), n = q(8), r = B("_emitter");
    for (const e in l) {
      const { name: t, callback: s } = l[e];
      r.on(t, n, s);
    }
    const o = d;
    D(() => {
      h();
    });
    const m = y();
    G(() => {
      for (const e in l) {
        const { name: t } = l[e];
        r.remove(t, n);
      }
    });
    function h() {
      const e = u.getMax();
      u.setCurrent(e + 1);
    }
    function L(e, t) {
      o(_, e, t);
    }
    function F(e) {
      o(E, e);
    }
    function T(e, t = []) {
      return new Promise((s) => {
        r.emit(se, n, e, t), s(!0);
      });
    }
    function R(e) {
      return new Promise((t) => {
        r.emit(ae, n, e), t(!0);
      });
    }
    function I(e) {
      return new Promise((t) => {
        r.emit(me, n, e), t(!0);
      });
    }
    function P() {
      return new Promise((e) => {
        r.emit(fe, n), e(!0);
      });
    }
    function S() {
      return new Promise((e) => {
        r.emit(ue, n), e(!0);
      });
    }
    function k() {
      return new Promise((e) => {
        r.emit(Ee, n), e(!0);
      });
    }
    function A(e) {
      o("sort-change", e);
    }
    function N(e) {
      o("clear-sort", e);
    }
    function v(e) {
      o("filter-change", e);
    }
    function x(e) {
      o("filter-visible", e);
    }
    function O(e) {
      o("clear-filter", e);
    }
    return i(re, m), i(oe, n), i(
      ie,
      a(() => c.sortConfig)
    ), i(
      le,
      a(() => c.filterConfig ?? {})
    ), i(ce, c.showColumnMenu), p(J({
      setFilter: T,
      clearFilter: R,
      openFilter: I,
      closeFilter: k,
      resetFilterPanel: P,
      saveFilterPanel: S
    }, m)), (e, t) => (K(), H(U(_e), V({
      ref_key: "vxeTableRef",
      ref: m,
      class: "k-table",
      "sort-config": g.value,
      "filter-config": b.value
    }, e.$attrs), Y({ _: 2 }, [
      Z(e.$slots, (s, f) => ({
        name: f,
        fn: $((w) => [
          j(e.$slots, f, z(W(w)))
        ])
      }))
    ]), 1040, ["sort-config", "filter-config"]));
  }
});
export {
  Re as default
};
