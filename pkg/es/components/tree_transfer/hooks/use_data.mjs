import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { TONE_MARKS as A, CN_DICT as Y } from "../../../constant/CN_dict.mjs";
import { convertToMap as k, sortFunc as q, getAllCombinations as B } from "../../../utils/utils.mjs";
import "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../../node_modules/culori/src/index.mjs";
import { DEFAULT_PAGE_CONFIG as Q } from "../const.mjs";
import U from "../../../node_modules/lodash-es/cloneDeep.mjs";
import { ref as $ } from "../../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { watch as H, computed as C } from "../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function oe(x, l, N, K, b, O) {
  const u = {
    treeDataMap: /* @__PURE__ */ new Map(),
    // 缓存搜索过程中遍历到的节点数据
    tableDataMap: /* @__PURE__ */ new Map()
    // 缓存每个节点的子节点数据
  }, p = $(U(Q));
  H(
    () => l.value.paginationConfig,
    () => {
      p.value = Object.assign(p.value, l.value.paginationConfig || {});
    },
    { immediate: !0, deep: !0 }
  );
  const m = C(() => R()), S = C(() => {
    const { isRemotePaging: t } = p.value;
    return !D.value || t ? m.value : z(m.value);
  }), D = C(() => l.value.showPage && !l.value.useTree), E = C(() => {
    const { isRemotePaging: t, total: e } = p.value;
    return D.value && t ? e : m.value.length;
  });
  function R() {
    var v, c, g;
    const t = b.value, e = l.value.useTree ? ((v = l.value.treeConfig) == null ? void 0 : v.parentField) ?? "pid" : void 0;
    u.tableDataMap = k(
      b.value,
      l.value.rowKey ?? "id",
      e
    );
    const { strict: i, searchMethod: n, ignoreCase: a = !1, searchColumns: r } = l.value.searchConfig ?? {}, o = O.value.trim();
    if ((c = l.value.searchConfig) != null && c.isRemoteQuery)
      return N("remote-query", o), t;
    if (!o)
      return t;
    if (typeof n == "function")
      return [n(o, t)];
    const M = K.value.filter((s) => s.visible !== !1).map((s) => s.field ? s.field : null).filter((s) => s !== null);
    let f = t.filter((s) => M.some((d) => {
      var h, L;
      if (Array.isArray(r) && !r.includes(d))
        return !1;
      const y = ((L = (h = x.value) == null ? void 0 : h.getCellLabel) == null ? void 0 : L.call(h, s, d)) ?? "";
      if (i === !0)
        return y.toString() === o;
      const T = a ? String(y).toLowerCase() : String(y), I = a ? o.toLowerCase() : o;
      return T.indexOf(I) !== -1 || _(d, T, I, a);
    }));
    if (l.value.useTree) {
      const s = ((g = l.value.treeConfig) == null ? void 0 : g.rowField) ?? "id";
      j(f), f = q([...u.treeDataMap.values()], b.value, s);
    } else
      G(f.length);
    return f;
  }
  function _(t, e, i, n = !1) {
    var f, v;
    const a = ((f = l.value.searchConfig) == null ? void 0 : f.supportPinYin) ?? !1;
    if (a !== !0 && !(Array.isArray(a) && a.includes(t)))
      return !1;
    let r = "";
    const o = [], w = new RegExp(`${Object.keys(A).join("|")}`, "g");
    for (let c = 0; c < e.length; c++) {
      const g = (v = Y[e[c]]) == null ? void 0 : v.replace(w, (d) => A[d]);
      if (!g) {
        r += e[c];
        continue;
      }
      const s = g.split(",");
      s.length > 1 ? (r != null && r.length && o.push([r]), o.push(s), r = "") : r += g;
    }
    r.length && o.push([r]);
    const M = B(o);
    for (const c of M)
      if ((n ? c.toLowerCase() : c).indexOf(i) !== -1)
        return !0;
    return !1;
  }
  function j(t) {
    var n, a;
    const e = ((n = l.value.treeConfig) == null ? void 0 : n.rowField) ?? "id", i = ((a = l.value.treeConfig) == null ? void 0 : a.parentField) ?? "pid";
    u.treeDataMap.clear();
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      u.treeDataMap.get(o[e]) || (u.treeDataMap.set(o[e], o), F(o, i));
    }
    P(t);
  }
  function P(t) {
    if (!t || !t.length)
      return;
    const e = l.value.rowKey ?? "id";
    for (const i of t) {
      const n = u.tableDataMap.get(i[e]);
      n && (n.children.forEach((a) => {
        u.treeDataMap.get(a[e]) || u.treeDataMap.set(a[e], a);
      }), P(n.children));
    }
  }
  function F(t, e, i) {
    var r;
    const n = t[e], a = (r = u.tableDataMap.get(n)) == null ? void 0 : r.node;
    a && (u.treeDataMap.get(n) || u.treeDataMap.set(n, a), a[e] !== null && F(a, e));
  }
  function z(t) {
    const { currentPage: e, pageSize: i } = p.value, n = (e - 1) * i, a = n + i;
    return t.slice(n, a);
  }
  function G(t) {
    let { currentPage: e } = p.value;
    const i = p.value.pageSize;
    for (; (e - 1) * i + 1 > t && e > 1; )
      e--;
    p.value.currentPage = e;
  }
  return {
    showTableData: S,
    visibleData: m,
    dataLength: E,
    isPaging: D,
    tableCacheData: u,
    paginationConfig: p
  };
}
export {
  oe as useData
};
