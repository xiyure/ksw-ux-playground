import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import K from "../model/tree_store.mjs";
import { TONE_MARKS as x, CN_DICT as Y } from "../../../constant/CN_dict.mjs";
import { DEFAULT_PAGE_CONFIG as k } from "../const.mjs";
import { getAllCombinations as B } from "../../../utils/utils.mjs";
import "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../../node_modules/culori/src/index.mjs";
import { ref as $ } from "../../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { computed as w, watch as M } from "../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function ie(N, n, y, p, E, A, T, O, R) {
  const d = new K(n), r = $(k), D = w(() => z() ? A.value : Q()), q = w(() => !L.value || C() ? D.value : j(D.value)), L = w(() => n.showPage && !n.useTree && !n.simple), I = w(() => {
    const { total: e } = r.value;
    return C() ? e : D.value.length;
  });
  M(
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
  ), M([
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
  function Q() {
    const e = A.value;
    d.initTableData([...E.value]), d.initTableMap();
    const { strict: t, ignoreCase: a = !1, searchColumns: u } = n.searchConfig ?? {}, l = T.value.trim();
    if (!l)
      return e;
    const o = p.value.filter((i) => i.visible !== !1), g = Array.isArray(u) ? u : o.map((i) => i.field && !i.type ? i.field : null).filter((i) => i !== null);
    let m = e.filter((i) => g.some((v) => {
      var f, S;
      const h = ((S = (f = N.value) == null ? void 0 : f.getCellLabel) == null ? void 0 : S.call(f, i, v)) ?? i[v];
      if (t === !0)
        return h.toString() === l;
      const s = a ? String(h).toLowerCase() : String(h), c = a ? l.toLowerCase() : l;
      return s.indexOf(c) !== -1 || _(v, s, c, a);
    }));
    if (n.useTree) {
      const { isEvery: i = !1 } = n.searchConfig ?? {};
      m = d.handleTreeData(m, i);
    } else
      G(m.length);
    return m;
  }
  function _(e, t, a, u = !1) {
    var v, h;
    const l = ((v = n.searchConfig) == null ? void 0 : v.supportPinYin) ?? !1;
    if (l !== !0 && !(Array.isArray(l) && l.includes(e)))
      return !1;
    let o = "";
    const g = [], m = new RegExp(`${Object.keys(x).join("|")}`, "g");
    for (let s = 0; s < t.length; s++) {
      const c = (h = Y[t[s]]) == null ? void 0 : h.replace(
        m,
        (S) => x[S]
      );
      if (!c) {
        o += t[s];
        continue;
      }
      const f = c.split(",");
      f.length > 1 ? (o != null && o.length && g.push([o]), g.push(f), o = "") : o += c;
    }
    o.length && g.push([o]);
    const i = B(g);
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
      conditionInfo: O.value ?? {},
      currentData: A.value
    };
  }
  return {
    showTableData: q,
    dataLength: I,
    isPaging: L,
    paginationConfig: r,
    treeStore: d,
    changePageSize: F,
    changeCurrentPage: U,
    handleRemoteData: b
  };
}
export {
  ie as useData
};
