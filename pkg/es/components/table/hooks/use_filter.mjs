import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { FILTER_CONFIG_KEY as B, SAVE_FILTER_PANEL as S, RESET_FILTER_PANEL as N, CLOSE_FILTER_PANEL as y, OPEN_FILTER_PANEL as O, CLEAR_FILTER_OUTSIDE as V, SET_FILTER as b, FILTER_VISIBLE as w, CLEAR_FILTER as x, FILTER_CHANGE as h, TABLE_ID as g } from "../const.mjs";
import { inject as L, computed as u } from "../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as D } from "../../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
function K(t, a, i, c) {
  const o = L(g), F = L(B, u(() => ({}))), s = {
    setFilter: {
      name: b,
      callback: A
    },
    clearFilterOutside: {
      name: V,
      callback: C
    },
    openFilterPanel: {
      name: O,
      callback: E
    },
    closeFilterPanel: {
      name: y,
      callback: v
    },
    resetFilterPanel: {
      name: N,
      callback: d
    },
    saveFilterPanel: {
      name: S,
      callback: k
    }
  };
  for (const e in s) {
    const { name: l, callback: n } = s[e];
    i.on(l, o, n);
  }
  const f = D(!1), I = u(() => {
    var e;
    return ((e = t.value) == null ? void 0 : e.isActiveFilterByColumn(a.field)) ?? !1;
  }), T = u(() => {
    var n;
    const { showIcon: e, iconVisibleMethod: l } = F.value;
    if (typeof l == "function") {
      const r = (n = t.value) == null ? void 0 : n.getColumnByField(a.field ?? null);
      return !!l({ $table: t.value, column: r });
    }
    return a.filters && e !== !1;
  }), _ = u(() => {
    const { confirmButtonText: e, resetButtonText: l } = F.value;
    return {
      confirmButtonText: e,
      resetButtonText: l
    };
  });
  async function m(e) {
    var n;
    const { filterList: l } = e;
    await ((n = t.value) == null ? void 0 : n.setFilter(a.field, l)), i.emit(h, o, e);
  }
  async function P(e) {
    var l;
    t.value && (await ((l = t.value) == null ? void 0 : l.clearFilter(a.field)), i == null || i.emit(x, o, e));
  }
  function R(e) {
    i.emit(w, o, e);
  }
  function A(e, l) {
    var n, r;
    (n = t.value) == null || n.setFilter(e, l), (r = c.value) == null || r.setFilter(l);
  }
  function C(e) {
    var l, n;
    (l = t.value) == null || l.clearFilter(e), (n = c.value) == null || n.clearFilter();
  }
  function E() {
    f.value = !0;
  }
  function v() {
    f.value = !1;
  }
  function d() {
    var e;
    (e = c.value) == null || e.resetFilter();
  }
  function k() {
    var e;
    (e = c.value) == null || e.saveFilter();
  }
  return {
    showFilterIcon: T,
    isFilter: I,
    filterConfig: F,
    filterButtonText: _,
    filterPanelVisible: f,
    setFilter: m,
    clearFilter: P,
    filterVisible: R,
    onCloseFilterPanel: v,
    onOpenFilterPanel: E
  };
}
export {
  K as useFilter
};
