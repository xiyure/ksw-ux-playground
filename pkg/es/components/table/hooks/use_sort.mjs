import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { SORT_CONFIG_KEY as m, TABLE_ID as y } from "../const.mjs";
import { inject as g, computed as f } from "../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function O(s, d, a) {
  const i = g(y), l = g(m, f(() => ({}))), v = f(() => {
    var e;
    const { showIcon: t, iconVisibleMethod: o } = l.value;
    if (typeof o == "function") {
      const n = (e = s.value) == null ? void 0 : e.getColumnByField(d.field ?? null);
      return !!o({ $table: s.value, column: n });
    }
    return d.sortable && t !== !1;
  }), S = f(() => {
    const { allowBtn: t = !0, trigger: o = "default" } = l.value;
    return t && o === "default";
  });
  function p(t, o, e) {
    if (!S.value)
      return;
    const n = o.order;
    let r = null;
    t === "_asc-icon" && n !== "asc" ? r = "asc" : t === "_desc-icon" && n !== "desc" && (r = "desc"), !(l.value.allowClear === !1 && r === null) && u(o, r, e);
  }
  function u(t, o, e) {
    var r;
    (r = s.value) == null || r.setSort({ field: t.field ?? "", order: o }, !1);
    const n = c();
    a.emit("sort-change", i, { column: t, field: t.field, order: o, sortBy: t.sortBy, sortList: n, $event: e }), !o && a.emit("clear-sort", i, { sortList: c(), $event: e });
  }
  function B(t, o) {
    const { orders: e = ["asc", "desc", null], trigger: n } = l.value;
    if (n !== "cell" || !t.sortable)
      return;
    const r = /* @__PURE__ */ new Map([[e[0], e[1]], [e[1], e[2]], [e[2], e[0]]]), C = t.order, h = r.get(C);
    u(t, h, o);
  }
  function w(t, o) {
    var e;
    (e = s.value) == null || e.clearSort(t), a.emit("clear-sort", i, { sortList: c(), $event: o });
  }
  function c() {
    var t;
    return ((t = s.value) == null ? void 0 : t.getSortColumns()) ?? [];
  }
  return {
    sortConfig: l,
    showSortIcon: v,
    allowButtonSort: S,
    changeSortStatus: p,
    tableSort: u,
    tableSortByHeader: B,
    clearSort: w,
    getSortColumns: c
  };
}
export {
  O as useSort
};
