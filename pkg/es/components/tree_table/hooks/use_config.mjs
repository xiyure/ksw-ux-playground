import { computed as i } from "vue";
import { DEFAULT_WIDGETS as L, DEFAULT_TREE_CONFIG as b, DEFAULT_SORT_CONFIG as f, DEFAULT_ROW_CONFIG as D, DEFAULT_EDIT_CONFIG as j, DEFAULT_SCROLL_Y as m, DEFAULT_COLUMN_CONFIG as A } from "../const.mjs";
import s from "../../../node_modules/lodash-es/cloneDeep.mjs";
function G(t, l) {
  const { isPaging: r, paginationConfig: c } = l, g = {
    seqMethod: ({ rowIndex: n }) => {
      var o;
      const e = ((o = t.seqConfig) == null ? void 0 : o.startIndex) ?? 1;
      if (r.value) {
        const { pageSize: w, currentPage: E } = c.value;
        return (E - 1) * w + n + e;
      }
      return n + e;
    }
  }, u = i(() => {
    const n = [];
    if (!Array.isArray(t.widgets))
      return t.showSearchInput && n.push({
        id: "search",
        slot: null
      }), t.showRefresh && n.push({
        id: "refresh",
        slot: null
      }), t.showFilter && n.push({
        id: "filter",
        slot: null
      }), t.showSizeControl && n.push({
        id: "sizeControl",
        slot: null
      }), t.showTransfer && n.push({
        id: "transfer",
        slot: null
      }), n;
    for (const e of t.widgets) {
      if (!e)
        continue;
      const o = typeof e;
      o === "string" ? L.get(e) ? n.push({ id: e, slot: null }) : n.push({ id: e, slot: e }) : (o === "object" || o === "function") && n.push(e);
    }
    return n;
  }), a = i(() => {
    if (t.useTree)
      return Object.assign(s(b), t.treeConfig || {});
  }), C = i(() => Object.assign(s(f), t.sortConfig || {})), d = i(() => Object.assign(s(f), t.filterConfig || {})), h = i(() => Object.assign(s(D), t.rowConfig)), O = i(() => Object.assign(s(j), t.editConfig || {})), F = i(() => {
    const n = Object.assign(s(m), t.scrollY || {});
    return t.adaptive && (n.enabled = !1), n;
  }), T = i(() => Object.assign(s(A), t.columnConfig || {})), _ = i(() => Object.assign(s(g), t.seqConfig || {}));
  return {
    widgets: u,
    treeConfig: a,
    sortConfig: C,
    rowConfig: h,
    editConfig: O,
    scrollY: F,
    columnConfig: T,
    seqConfig: _,
    filterConfig: d
  };
}
export {
  G as useConfig
};
