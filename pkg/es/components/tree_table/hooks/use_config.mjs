import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { DEFAULT_WIDGETS as L, DEFAULT_TREE_CONFIG as b, DEFAULT_SORT_CONFIG as f, DEFAULT_ROW_CONFIG as m, DEFAULT_EDIT_CONFIG as D, DEFAULT_SCROLL_Y as j, DEFAULT_COLUMN_CONFIG as A } from "../const.mjs";
import s from "../../../node_modules/lodash-es/cloneDeep.mjs";
import { computed as e } from "../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function N(t, l) {
  const { isPaging: r, paginationConfig: c } = l, g = {
    seqMethod: ({ rowIndex: n }) => {
      var o;
      const i = ((o = t.seqConfig) == null ? void 0 : o.startIndex) ?? 1;
      if (r.value) {
        const { pageSize: w, currentPage: E } = c.value;
        return (E - 1) * w + n + i;
      }
      return n + i;
    }
  }, u = e(() => {
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
    for (const i of t.widgets) {
      if (!i)
        continue;
      const o = typeof i;
      o === "string" ? L.get(i) ? n.push({ id: i, slot: null }) : n.push({ id: i, slot: i }) : (o === "object" || o === "function") && n.push(i);
    }
    return n;
  }), a = e(() => {
    if (t.useTree)
      return Object.assign(s(b), t.treeConfig || {});
  }), C = e(() => Object.assign(s(f), t.sortConfig || {})), d = e(() => Object.assign(s(f), t.filterConfig || {})), h = e(() => Object.assign(s(m), t.rowConfig)), O = e(() => Object.assign(s(D), t.editConfig || {})), F = e(() => {
    const n = Object.assign(s(j), t.scrollY || {});
    return t.adaptive && (n.enabled = !1), n;
  }), T = e(() => Object.assign(s(A), t.columnConfig || {})), _ = e(() => Object.assign(s(g), t.seqConfig || {}));
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
  N as useConfig
};
