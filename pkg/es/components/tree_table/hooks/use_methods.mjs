import { ref as de, computed as ve, onMounted as me } from "vue";
import { isObject as U } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import he from "../model/tree_store.mjs";
import { multiFieldSort as pe, transformTreeData as ge, sortBySmallerList as ye } from "../../../utils/utils.mjs";
import "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../../node_modules/culori/src/index.mjs";
import { logicOptions as Te } from "../../../constant/filter_data.mjs";
function Ee(f, u) {
  const A = {
    data: []
  }, k = new he(f), l = de([]), y = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), C = [], d = ve(() => {
    var e;
    return ((e = f.rowConfig) == null ? void 0 : e.keyField) ?? "id";
  });
  me(() => {
    setTimeout(() => {
      var t;
      let e = ((t = f.sortConfig) == null ? void 0 : t.defaultSort) ?? [];
      e = Array.isArray(e) ? e : [e], B(e);
    });
  });
  const q = (e, t = null, n = !1) => {
    if (U(t)) {
      const a = l.value.findIndex((s) => s[d.value] === t[d.value]), i = n ? a + 1 : a;
      l.value.splice(i, 0, ...e);
      return;
    }
    const { parentField: r } = b(), o = ae(e, r);
    for (const { node: a, children: i } of o.values()) {
      const s = l.value.findIndex((c) => c[d.value] === a[r]);
      if (s === -1) {
        t === -1 ? l.value.push(a, ...i) : l.value.unshift(a, ...i);
        continue;
      }
      if (t === -1) {
        let c = s + 1;
        for (; l.value[c][r] === a[r]; )
          c++;
        l.value.splice(c, 0, a, ...i);
      } else
        l.value.splice(s + 1, 0, a, ...i);
    }
  }, V = (e) => new Promise((t) => {
    const n = Array.isArray(e) ? e : [e];
    f.useTree ? (F(), q(n), x()) : l.value.unshift(...n), j(n, y), t(e);
  }), N = (e, t, n = !1) => new Promise((r) => {
    const o = Array.isArray(e) ? e : [e];
    if (f.useTree) {
      F();
      const { parentField: a } = b();
      let i = -1;
      if (typeof t != "object" && t !== void 0 && t !== -1)
        console.warn("Unable to insert into the specified position, please check if the parameters are correct"), i = -1;
      else if (t == null)
        i = null;
      else if (t === -1)
        i = -1;
      else if (!l.value.find((c) => c[d.value] === (t == null ? void 0 : t[d.value])))
        console.warn("Unable to insert into the specified position, please check if the parameters are correct"), i = -1;
      else {
        const c = t && typeof t == "object" ? t[a] ?? null : null;
        for (const v of o)
          c && (v == null ? void 0 : v[a]) !== c && (console.error(`cannot support parentId=${v[a]}, maybe parentId=${c}`), v[a] = c);
        i = t;
      }
      q(o, i, n), x();
    } else {
      let a;
      const i = l.value.length;
      typeof t == "number" ? a = t === -1 ? t : (Number.isNaN(Math.floor(t)) ? 0 : Math.floor(t)) % i : typeof t == "object" ? (a = l.value.findIndex((s) => s[d.value] === (t == null ? void 0 : t[d.value])), a === -1 && console.warn("Unable to insert into the specified position, please check if the parameters are correct")) : a = -1, a === -1 ? l.value.push(...o) : (a = n ? a + 1 : a, l.value.splice(a, 0, ...o));
    }
    j(o, y), r(e);
  }), G = (e, t) => N(e, t), H = (e, t) => N(e, t, !0), J = () => new Promise((e) => {
    F();
    const t = Array.from(y.values());
    for (let n = 0; n < l.value.length - 1 && y.size !== 0; n++) {
      const r = l.value[n][d.value];
      y.has(r) && (l.value.splice(n, 1), y.delete(r), n--);
    }
    x(), e({ rows: t, row: t });
  }), K = () => Array.from(y.values()), Q = (e) => y.has(e[d.value]), W = (e) => new Promise((t) => {
    var i;
    e === void 0 && (l.value.length = 0, t({ rows: [], row: null })), F();
    let n = e;
    Array.isArray(e) || (n = [e]);
    const r = new Map(n.filter((s) => U(s)).map((s) => [s[d.value], s])), o = [], { parentField: a } = b();
    for (let s = 0; s < l.value.length; s++) {
      const c = l.value[s][d.value];
      if (r.has(c)) {
        const v = /* @__PURE__ */ new Set();
        v.add(c);
        let p = s + 1;
        const m = l.value.length;
        for (; m > p && v.has((i = l.value[p]) == null ? void 0 : i[a]); )
          v.add(l.value[p][d.value]), p++;
        o.push(...l.value.splice(s, p - s)), r.delete(c), s--;
      }
    }
    x(), j(o, E), t({ rows: e, row: e });
  }), X = () => Array.from(E.values()), Y = () => ({
    insertRecords: Array.from(y.values()),
    removeRecords: Array.from(E.values()),
    updateRecords: Array.from(P.values()),
    pendingRecords: []
  }), Z = (e, t) => new Promise((n) => {
    (!e || !t) && n(e);
    let r = e;
    Array.isArray(e) || (r = [e]), r.forEach((o) => {
      Object.assign(o, t), P.set(o[d.value], o);
    }), n(e);
  }), $ = (e, t) => B({ field: e, order: t }, !0), B = (e, t = !0) => {
    var r;
    const n = (r = u.value) == null ? void 0 : r.setSort(e, !1);
    return t && D(), n;
  }, ee = (e) => {
    var n;
    const t = (n = u.value) == null ? void 0 : n.clearSort(e);
    return D(), t;
  }, te = (e, t, n = !1) => new Promise(async (r) => {
    var o;
    await ((o = u.value) == null ? void 0 : o.setFilter(e, t)), n && D(), r(!0);
  }), ne = (e) => new Promise(async (t) => {
    var n;
    await ((n = u.value) == null ? void 0 : n.clearFilter(e)), D(), t(!0);
  }), D = () => {
    var c, v, p;
    F();
    const e = [...A.data], t = (c = u.value) == null ? void 0 : c.getSortColumns(), { sortMethod: n, remote: r } = f.sortConfig ?? {};
    if (r !== !1 && (t == null ? void 0 : t.length) > 0)
      if (t.forEach((m) => {
        const { dataType: g, sortBy: h, sortType: w } = f.column.find((T) => T.field === m.field) ?? {};
        m.sortBy = typeof h == "function" ? h({ column: m.column, row: null }).toString() : h, m.sortType = w ?? (g === "number" ? "number" : "string");
      }), typeof n == "function") {
        const m = t != null && t.length ? n({ $table: u.value, data: [...A.data], sortList: t }) : [...A.data];
        e.push(...m);
      } else
        pe(e, t);
    const { remote: o, filterMethod: a, isEvery: i = !1 } = f.filterConfig ?? {}, s = O();
    if (o !== !1) {
      k.initTableData([...A.data]), k.initTableMap();
      const m = [];
      for (const g of s) {
        const { filters: h = [], field: w = "" } = g, { dataType: T = "string" } = f.column.find((R) => R.field === w) ?? {}, S = ((v = Te.find((R) => R.type === T)) == null ? void 0 : v.logicList) ?? [], z = h.filter((R) => !!R.checked);
        for (const R of z) {
          const { label: I, value: L, logic: M = "equal", ignoreCase: ce = !1 } = R, ue = ((p = S.find((_) => _.logic === M)) == null ? void 0 : p.handler) ?? ((_, fe, Re = !1) => _ === fe);
          m.push({
            label: I,
            value: L,
            field: w,
            logic: M,
            ignoreCase: ce,
            _handler: ue,
            column: g.column,
            filterItem: g
          });
        }
      }
      if (m.length > 0) {
        let g = e.filter((h) => m.some((w) => {
          const { field: T, value: S, _handler: z, ignoreCase: R = !1, column: I, filterItem: L } = w, M = I.filterMethod;
          return typeof M == "function" ? M({ $table: u.value, cellValue: h[T], row: h, value: S, column: I, option: L }) : typeof a == "function" ? a({ $table: u.value, cellValue: h[T], row: h, value: S, column: I, options: s }) : z(h[T], S, R);
        }));
        f.useTree && (g = k.handleTreeData(g, i)), e.length = 0, e.push(...g);
      }
    }
    l.value.length = 0, l.value.push(...e), x();
  };
  function O() {
    var t;
    return (((t = u.value) == null ? void 0 : t.getCheckedFilters()) ?? []).map((n) => {
      const { field: r = "", column: { filters: o = [] } } = n, { filters: a = [], dataType: i = "string" } = f.column.find((c) => c.field === r) ?? {}, s = o.map((c) => {
        const { logic: v = "equal", ignoreCase: p = !1 } = a.find((m) => m.value === c.value) ?? {};
        return {
          ...c,
          logic: v,
          ignoreCase: p
        };
      });
      return {
        ...n,
        filters: s,
        dataType: i
      };
    });
  }
  function ae(e, t) {
    var r;
    const n = new Map(e.map((o) => [o[d.value], { node: o, children: [] }]));
    for (const o of e)
      o[t] && n.has(o[t]) && ((r = n.get(o[t])) == null || r.children.push(o), n.delete(o[d.value]));
    return n;
  }
  function j(e, t) {
    e.forEach((n) => {
      t.set(n[d.value], n);
    });
  }
  function F() {
    const e = u.value;
    !e || !f.useTree || (C.length = 0, C.push(...e.getTreeExpandRecords() ?? []));
  }
  async function x() {
    const e = u.value;
    !e || !f.useTree || setTimeout(async () => {
      await e.setTreeExpand(C, !0), C.length = 0;
    });
  }
  function re() {
    var i, s;
    if (f.useTree && ((i = f.treeConfig) != null && i.lazy))
      return;
    F();
    const { rowField: e, parentField: t } = b(), { fullData: n = [] } = ((s = u.value) == null ? void 0 : s.getTableData()) ?? {}, o = (f.useTree ? ge(n, { idField: e, parentField: t }) : n).map((c) => c[e]), a = ye(l.value, o, e);
    l.value.length = 0, l.value.push(...a), setTimeout(() => {
      x();
    });
  }
  async function oe(e, t, n = 100) {
    return new Promise(async (r, o) => {
      var s, c, v, p, m;
      u.value || o("table instance is not exist");
      const a = Array.isArray(e) ? e : [e];
      if (!(((s = f.treeConfig) == null ? void 0 : s.lazy) ?? !1))
        await ((c = u.value) == null ? void 0 : c.setTreeExpand(e, t)), r(null);
      else {
        try {
          const g = new Event("click", { bubbles: !0 });
          for (const h of a) {
            if (await ((v = u.value) == null ? void 0 : v.clearTreeExpandLoaded(h)), ((p = u.value) == null ? void 0 : p.isTreeExpandByRow(h)) === t)
              continue;
            const T = (m = u.value) == null ? void 0 : m.$el.querySelector(`[rowid='${h.id}'] .vxe-tree--btn-wrapper`);
            T && T.dispatchEvent(g);
          }
        } catch (g) {
          console.error(g);
        }
        setTimeout(() => {
          r(null);
        }, n);
      }
    });
  }
  function le(e) {
    y.clear(), E.clear(), P.clear();
    const t = Array.isArray(e) ? e : [];
    return l.value = Array.from(t), A.data = [...l.value], l.value;
  }
  function se(e) {
    var a;
    if (!u.value)
      return console.error("table instance is not exist"), null;
    const t = (a = u.value) == null ? void 0 : a.getRowById(e);
    if (t)
      return t;
    const n = l.value.find(
      (i) => i[d.value] === e
    );
    return n || (u.value.getInsertRecords().find((i) => i[d.value] === e) ?? null);
  }
  function b() {
    var n, r;
    const e = ((n = f.treeConfig) == null ? void 0 : n.rowField) ?? "id", t = ((r = f.treeConfig) == null ? void 0 : r.parentField) ?? "pid";
    return { rowField: e, parentField: t };
  }
  function ie() {
    const e = document.querySelector(".vxe-table--tooltip-wrapper");
    e && (e == null || e.remove());
  }
  return {
    _methods: {
      insert: V,
      insertAt: G,
      insertNextAt: H,
      removeInsertRow: J,
      getInsertRecords: K,
      isInsertByRow: Q,
      remove: W,
      getRemoveRecords: X,
      getRecordset: Y,
      setRow: Z,
      setTreeExpand: oe,
      getRowById: se,
      sort: $,
      setSort: B,
      clearSort: ee,
      setFilter: te,
      clearFilter: ne,
      getCheckedFilters: O,
      disposeRowTooltip: ie
    },
    setTableData: le,
    handleSortAndFilter: D,
    dragSort: re
  };
}
export {
  Ee as useMethods
};
