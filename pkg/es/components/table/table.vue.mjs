import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import "../../node_modules/vxe-table/es/components.mjs";
import u from "../../node_modules/dom-zindex/es/index.esm.mjs";
import { genRandomStr as M, getExposeProxy as B } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { CLEAR_SORT as D, SORT_CHANGE as y, FILTER_VISIBLE as G, FILTER_CHANGE as H, CLEAR_FILTER as K, HIDE_COLUMN as E, DESC_CHANGE as _, SORT_CONFIG_KEY as U, FILTER_CONFIG_KEY as V, SHOW_COLUMN_MENU_KEY as Y, SET_FILTER as Z, CLEAR_FILTER_OUTSIDE as $, OPEN_FILTER_PANEL as j, RESET_FILTER_PANEL as z, SAVE_FILTER_PANEL as W, CLOSE_FILTER_PANEL as q, TABLE_KEY as J, TABLE_ID as Q } from "./const.mjs";
import { VxeTable as X } from "../../node_modules/vxe-table/es/table/index.mjs";
import { defineComponent as ee, computed as a, inject as te, onMounted as ne, onUnmounted as re, provide as i, createBlock as oe, openBlock as ie, createSlots as le, renderList as ce, withCtx as se, renderSlot as ae, guardReactiveProps as me, mergeProps as fe } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as ue, unref as Ee } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as _e } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const Se = /* @__PURE__ */ ee({
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
  setup(p, { expose: C, emit: d }) {
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
        name: K,
        callback: O.bind(this)
      },
      filterChange: {
        name: H,
        callback: v.bind(this)
      },
      filterVisible: {
        name: G,
        callback: x.bind(this)
      },
      sortChange: {
        name: y,
        callback: A.bind(this)
      },
      clearSort: {
        name: D,
        callback: N.bind(this)
      }
    }, c = p, g = a(() => {
      const { chronological: e, multiple: t } = c.sortConfig ?? {};
      return { chronological: e, multiple: t, remote: !0 };
    }), b = a(() => ({ remote: !0 })), n = M(8), r = te("_emitter");
    for (const e in l) {
      const { name: t, callback: s } = l[e];
      r.on(t, n, s);
    }
    const o = d;
    ne(() => {
      h();
    });
    const m = ue();
    re(() => {
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
        r.emit(Z, n, e, t), s(!0);
      });
    }
    function R(e) {
      return new Promise((t) => {
        r.emit($, n, e), t(!0);
      });
    }
    function I(e) {
      return new Promise((t) => {
        r.emit(j, n, e), t(!0);
      });
    }
    function P() {
      return new Promise((e) => {
        r.emit(z, n), e(!0);
      });
    }
    function S() {
      return new Promise((e) => {
        r.emit(W, n), e(!0);
      });
    }
    function k() {
      return new Promise((e) => {
        r.emit(q, n), e(!0);
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
    return i(J, m), i(Q, n), i(
      U,
      a(() => c.sortConfig)
    ), i(
      V,
      a(() => c.filterConfig ?? {})
    ), i(Y, c.showColumnMenu), C(B({
      setFilter: T,
      clearFilter: R,
      openFilter: I,
      closeFilter: k,
      resetFilterPanel: P,
      saveFilterPanel: S
    }, m)), (e, t) => (ie(), oe(Ee(X), fe({
      ref_key: "vxeTableRef",
      ref: m,
      class: "k-table",
      "sort-config": g.value,
      "filter-config": b.value
    }, e.$attrs), le({ _: 2 }, [
      ce(e.$slots, (s, f) => ({
        name: f,
        fn: se((w) => [
          ae(e.$slots, f, _e(me(w)))
        ])
      }))
    ]), 1040, ["sort-config", "filter-config"]));
  }
});
export {
  Se as default
};
