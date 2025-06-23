import { inject as L, computed as u, ref as B } from "vue";
import { TABLE_ID as S, FILTER_CONFIG_KEY as N, SAVE_FILTER_PANEL as y, RESET_FILTER_PANEL as O, CLOSE_FILTER_PANEL as V, OPEN_FILTER_PANEL as b, CLEAR_FILTER_OUTSIDE as w, SET_FILTER as x, FILTER_VISIBLE as h, CLEAR_FILTER as g, FILTER_CHANGE as D } from "../const.mjs";
function j(t, a, i, c) {
  const o = L(S), F = L(N, u(() => ({}))), f = {
    setFilter: {
      name: x,
      callback: A
    },
    clearFilterOutside: {
      name: w,
      callback: C
    },
    openFilterPanel: {
      name: b,
      callback: E
    },
    closeFilterPanel: {
      name: V,
      callback: v
    },
    resetFilterPanel: {
      name: O,
      callback: d
    },
    saveFilterPanel: {
      name: y,
      callback: k
    }
  };
  for (const e in f) {
    const { name: l, callback: n } = f[e];
    i.on(l, o, n);
  }
  const s = B(!1), I = u(() => {
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
  async function P(e) {
    var n;
    const { filterList: l } = e;
    await ((n = t.value) == null ? void 0 : n.setFilter(a.field, l)), i.emit(D, o, e);
  }
  async function R(e) {
    var l;
    t.value && (await ((l = t.value) == null ? void 0 : l.clearFilter(a.field)), i == null || i.emit(g, o, e));
  }
  function m(e) {
    i.emit(h, o, e);
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
    s.value = !0;
  }
  function v() {
    s.value = !1;
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
    filterPanelVisible: s,
    setFilter: P,
    clearFilter: R,
    filterVisible: m,
    onCloseFilterPanel: v,
    onOpenFilterPanel: E
  };
}
export {
  j as useFilter
};
