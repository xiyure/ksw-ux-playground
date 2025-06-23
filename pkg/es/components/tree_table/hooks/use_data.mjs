import { ref as K, computed as w, watch as x } from "vue";
import Y from "../model/tree_store.mjs";
import { TONE_MARKS as M, CN_DICT as k } from "../../../constant/CN_dict.mjs";
import { DEFAULT_PAGE_CONFIG as B } from "../const.mjs";
import { getAllCombinations as $ } from "../../../utils/utils.mjs";
import "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../../node_modules/culori/src/index.mjs";
function ne(N, n, y, E, O, A, T, q, R) {
  const d = new Y(n), r = K(B), D = w(() => z() ? A.value : _()), I = w(() => !L.value || C() ? D.value : j(D.value)), L = w(() => n.showPage && !n.useTree && !n.simple), Q = w(() => {
    const { total: e } = r.value;
    return C() ? e : D.value.length;
  });
  x(
    () => n.paginationConfig,
    () => {
      r.value = {
        ...r.value,
        size: n.useAntStyle ? "sm" : void 0,
        layout: n.useAntStyle ? "total, ->, prev, pager, next, sizes" : void 0,
        ...n.paginationConfig || {}
      };
    },
    { immediate: !0, deep: !0 }
  ), x([
    () => T.value
  ], async () => {
    const { searchMethod: e } = n.searchConfig ?? {}, t = P();
    if (z()) {
      if (typeof n.requestMethod == "function")
        await b();
      else if (typeof e == "function") {
        const a = await e(t);
        R(Array.isArray(a) ? a : []);
      }
      y("remote-query", t);
    }
  });
  function _() {
    const e = A.value;
    d.initTableData([...O.value]), d.initTableMap();
    const { strict: t, ignoreCase: a = !1, searchColumns: u } = n.searchConfig ?? {}, l = T.value.trim();
    if (!l)
      return e;
    const o = E.value.filter((i) => i.visible !== !1), g = Array.isArray(u) ? u : o.map((i) => i.field && !i.type ? i.field : null).filter((i) => i !== null);
    let v = e.filter((i) => g.some((h) => {
      var f, S;
      const m = ((S = (f = N.value) == null ? void 0 : f.getCellLabel) == null ? void 0 : S.call(f, i, h)) ?? i[h];
      if (t === !0)
        return m.toString() === l;
      const s = a ? String(m).toLowerCase() : String(m), c = a ? l.toLowerCase() : l;
      return s.indexOf(c) !== -1 || p(h, s, c, a);
    }));
    if (n.useTree) {
      const { isEvery: i = !1 } = n.searchConfig ?? {};
      v = d.handleTreeData(v, i);
    } else
      G(v.length);
    return v;
  }
  function p(e, t, a, u = !1) {
    var h, m;
    const l = ((h = n.searchConfig) == null ? void 0 : h.supportPinYin) ?? !1;
    if (l !== !0 && !(Array.isArray(l) && l.includes(e)))
      return !1;
    let o = "";
    const g = [], v = new RegExp(`${Object.keys(M).join("|")}`, "g");
    for (let s = 0; s < t.length; s++) {
      const c = (m = k[t[s]]) == null ? void 0 : m.replace(
        v,
        (S) => M[S]
      );
      if (!c) {
        o += t[s];
        continue;
      }
      const f = c.split(",");
      f.length > 1 ? (o != null && o.length && g.push([o]), g.push(f), o = "") : o += c;
    }
    o.length && g.push([o]);
    const i = $(g);
    for (const s of i)
      if ((u ? s.toLowerCase() : s).indexOf(a) !== -1)
        return !0;
    return !1;
  }
  function F(e) {
    r.value.pageSize = e, C() && (b(), y("server-paging", P())), y("page-size-change", e);
  }
  function U(e) {
    r.value.currentPage = e, C() && (b(), y("server-paging", P())), y("page-current-change", e);
  }
  function j(e) {
    const { currentPage: t, pageSize: a } = r.value;
    if (!a || !t)
      return [];
    const u = (t - 1) * a, l = u + a;
    return e.slice(u, l);
  }
  function G(e) {
    let { currentPage: t, pageSize: a } = r.value;
    if (!(!t || !a)) {
      for (; (t - 1) * a + 1 > e && t > 1; )
        t--;
      r.value.currentPage = t;
    }
  }
  function C() {
    const { isRemotePaging: e } = r.value, { isRemoteQuery: t } = n.searchConfig ?? {}, { remote: a } = n.advancedFilterConfig ?? {};
    return e || n.isServerPaging || t || n.isRemoteQuery || a;
  }
  function z() {
    var e;
    return n.isRemoteQuery || ((e = n.searchConfig) == null ? void 0 : e.isRemoteQuery);
  }
  async function b() {
    const { total: e = 0 } = r.value, t = P();
    if (typeof n.requestMethod == "function") {
      const { data: a = [], total: u } = await n.requestMethod(t) ?? {};
      R(a), r.value.total = isNaN(Number(u)) ? e : Number(u);
    }
  }
  function P() {
    const { currentPage: e, pageSize: t, pageSizes: a } = r.value;
    return {
      currentPage: e,
      pageSize: t,
      pageSizes: a,
      searchKeyword: T.value.trim(),
      conditionInfo: q.value ?? {},
      currentData: A.value
    };
  }
  return {
    showTableData: I,
    dataLength: Q,
    isPaging: L,
    paginationConfig: r,
    treeStore: d,
    changePageSize: F,
    changeCurrentPage: U,
    handleRemoteData: b
  };
}
export {
  ne as useData
};
