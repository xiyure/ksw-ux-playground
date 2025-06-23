import { ref as q, computed as b, onMounted as E, watch as G, nextTick as H } from "vue";
import { isObject as J } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import N from "../../../node_modules/lodash-es/cloneDeep.mjs";
function W(c, r, C, m, R) {
  const O = {}, d = q(/* @__PURE__ */ new Set()), k = /* @__PURE__ */ new Set(), P = b(() => d.value.size);
  let M = !1;
  const g = b(() => Object.assign(O, r.checkboxConfig || {})), F = b(() => {
    const e = () => z(!0);
    if (J(r.batchOperateConfig)) {
      const {
        showTotal: t = !0,
        total: n = d.value.size,
        data: i = [],
        checkMethod: s = e
      } = r.batchOperateConfig;
      return { showTotal: t, total: n, data: i, checkMethod: s };
    }
    return { showTotal: !0, total: d.value.size, data: r.batchOperations ?? [], checkMethod: e };
  }), l = b(() => {
    var e;
    return ((e = r.rowConfig) == null ? void 0 : e.keyField) ?? "id";
  });
  E(() => {
    D();
  }), G(() => C.value.length, () => {
    _();
  });
  async function D() {
    var s;
    if (!((s = C.value) != null && s.length) || M)
      return;
    await H(), M = !0;
    const { checkRowKeys: e, checkAll: t } = g.value, n = Array.isArray(e) ? e : [], i = t ? C.value.filter((a) => a == null ? void 0 : a[l.value]) : n.map((a) => {
      var o;
      return (o = R.tableDataMap.get(a)) == null ? void 0 : o.node;
    }).filter((a) => a);
    x(i, !0);
  }
  const I = (e, t) => new Promise((n, i) => {
    var o, u;
    c.value || (console.error("table instance not exists"), i(null));
    const s = Array.isArray(e) ? e : [e], a = [];
    for (const f of s) {
      if (y(f) || !(f != null && f[l.value]))
        continue;
      const h = (o = c.value) == null ? void 0 : o.getRowById(f[l.value]);
      a.push(h ?? f);
    }
    x(a, t), (u = c.value) == null || u.setCheckboxRow(a, t), n({ rows: e, checked: t });
  }), B = (e) => new Promise((t, n) => {
    var s, a, o;
    c.value || (console.error("table instance not exists"), n(null));
    const i = [];
    if (e) {
      for (const u of C.value) {
        if (y(u) || !(u != null && u[l.value]))
          continue;
        const f = (s = c.value) == null ? void 0 : s.getRowById(u[l.value]);
        i.push(f ?? u);
      }
      x(i, e), (a = c.value) == null || a.setCheckboxRow(i, e);
    } else
      w(), (o = c.value) == null || o.setAllCheckboxRow(e);
    t({ checked: e });
  }), x = (e, t) => {
    const n = Array.isArray(e) ? e : [e];
    for (const i of n)
      p(i, t);
  }, p = (e, t) => {
    if (!e || !(e != null && e[l.value]))
      return;
    y(e) || (t ? d.value.add(e[l.value]) : d.value.delete(e[l.value]));
    const n = R.tableDataMap.get(e[l.value]);
    if (!n || !n.children || n.children.length === 0) {
      if (y(e)) return;
      t ? k.add(e[l.value]) : k.delete(e[l.value]);
      return;
    }
    if (g.value.checkStrictly !== !0)
      for (const i of n.children)
        p(i, t);
  };
  async function S() {
    var t, n, i, s;
    if (!c.value || g.value.reserve === !1) {
      w();
      return;
    }
    if (await ((t = c.value) == null ? void 0 : t.clearCheckboxRow()), await ((n = c.value) == null ? void 0 : n.clearCheckboxReserve()), k.size === 0)
      return;
    const e = [];
    for (const a of k.values()) {
      const o = (i = c.value) == null ? void 0 : i.getRowById(a);
      o && e.push(o);
    }
    (s = c.value) == null || s.setCheckboxRow(e, !0);
  }
  const A = () => new Promise((e, t) => {
    var n;
    c.value || (console.error("table instance not exists"), t(null)), r.showPage && !r.useTree ? x(m.value, !1) : w(), (n = c.value) == null || n.clearCheckboxRow(), e(void 0);
  }), j = async () => {
    var e;
    if (!c.value)
      return console.error("table instance not exists"), Promise.reject(null);
    await ((e = c.value) == null ? void 0 : e.clearCheckboxReserve()), new Promise((t) => {
      var n, i;
      if (r.showPage && !r.useTree) {
        const s = (n = c.value) == null ? void 0 : n.getCheckboxRecords(!0);
        d.value = new Set(s.map((a) => a == null ? void 0 : a[l.value])), (i = c.value) == null || i.setCheckboxRow(s, !0);
      }
      t(void 0);
    });
  };
  function T({ row: e, checked: t }) {
    x(e, t);
  }
  function K({ checked: e }) {
    const t = m.value.filter((n) => !n.children || !n.children.length);
    x(t, e);
  }
  function L() {
    var e, t;
    A(), w(), (t = (e = c.value) == null ? void 0 : e.clearCheckboxReserve) == null || t.call(e);
  }
  function y(e) {
    if (!c.value)
      return !1;
    const { visibleMethod: t, checkMethod: n } = g.value;
    return typeof t == "function" && !t({ $table: c.value, row: e }) || typeof n == "function" && !n({ $table: c.value, row: e });
  }
  function w() {
    d.value.clear(), k.clear();
  }
  function _() {
    R.initTableMap();
    for (const e of k.keys())
      R.tableDataMap.has(e) || k.delete(e);
    for (const e of d.value.keys())
      R.tableDataMap.has(e) || d.value.delete(e);
  }
  function z(e = !1, t = !1) {
    var i, s, a;
    if (!c.value)
      return console.error("table instance not exists"), [];
    if (!e)
      return (i = c.value) == null ? void 0 : i.getCheckboxRecords(!t);
    const n = N(k);
    if (r.useTree) {
      const o = /* @__PURE__ */ new Map(), u = ((s = r.treeConfig) == null ? void 0 : s.rowField) ?? "id", f = ((a = r.treeConfig) == null ? void 0 : a.parentField) ?? "pid";
      for (const h of C.value)
        h[u] && (o.has(h[u]) || o.set(h[u], {
          id: h[u],
          pid: h[f],
          childrenSize: 0,
          current: 0
        }), o.has(h[f]) && o.get(h[f]).childrenSize++);
      for (const h of k.values()) {
        let v = o.get(o.get(h).pid);
        for (v && v.current++; v && v.current === v.childrenSize; )
          n.add(v.id), v = o.get(v.pid), v && v.current++;
      }
    }
    return C.value.filter((o) => (o == null ? void 0 : o[l.value]) && n.has(o[l.value]));
  }
  return {
    _checkboxMethods: {
      setAllCheckboxRow: B,
      setCheckboxRow: I,
      clearCheckboxRow: A,
      clearCheckboxReserve: j,
      getCheckboxRecords: z
    },
    checkBoxChange: T,
    checkboxAllChange: K,
    closeBatchOperation: L,
    isCheckboxDisabled: y,
    clearCheckedData: w,
    initCheckedData: D,
    resetCheckboxStatus: S,
    checkedDataSize: P,
    checkboxConfig: g,
    batchOpConfig: F
  };
}
export {
  W as useCheckbox
};
