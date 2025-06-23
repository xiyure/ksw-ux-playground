import { inject as g, computed as f } from "vue";
import { TABLE_ID as y, SORT_CONFIG_KEY as _ } from "../const.mjs";
function L(s, d, a) {
  const u = g(y), l = g(_, f(() => ({}))), v = f(() => {
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
  function B(t, o, e) {
    if (!S.value)
      return;
    const n = o.order;
    let r = null;
    t === "_asc-icon" && n !== "asc" ? r = "asc" : t === "_desc-icon" && n !== "desc" && (r = "desc"), !(l.value.allowClear === !1 && r === null) && i(o, r, e);
  }
  function i(t, o, e) {
    var r;
    (r = s.value) == null || r.setSort({ field: t.field ?? "", order: o }, !1);
    const n = c();
    a.emit("sort-change", u, { column: t, field: t.field, order: o, sortBy: t.sortBy, sortList: n, $event: e }), !o && a.emit("clear-sort", u, { sortList: c(), $event: e });
  }
  function p(t, o) {
    const { orders: e = ["asc", "desc", null], trigger: n } = l.value;
    if (n !== "cell" || !t.sortable)
      return;
    const r = /* @__PURE__ */ new Map([[e[0], e[1]], [e[1], e[2]], [e[2], e[0]]]), C = t.order, h = r.get(C);
    i(t, h, o);
  }
  function w(t, o) {
    var e;
    (e = s.value) == null || e.clearSort(t), a.emit("clear-sort", u, { sortList: c(), $event: o });
  }
  function c() {
    var t;
    return ((t = s.value) == null ? void 0 : t.getSortColumns()) ?? [];
  }
  return {
    sortConfig: l,
    showSortIcon: v,
    allowButtonSort: S,
    changeSortStatus: B,
    tableSort: i,
    tableSortByHeader: p,
    clearSort: w,
    getSortColumns: c
  };
}
export {
  L as useSort
};
