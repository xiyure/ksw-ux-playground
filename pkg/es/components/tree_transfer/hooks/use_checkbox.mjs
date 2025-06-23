import { ref as A, computed as y, nextTick as L } from "vue";
import O from "../../../node_modules/lodash-es/cloneDeep.mjs";
function E(l, v, R, w, b) {
  const S = {}, k = A(/* @__PURE__ */ new Set()), f = A(/* @__PURE__ */ new Set()), D = y(() => k.value.size);
  L(() => {
    const { checkRowKeys: e, checkAll: t } = C.value, c = Array.isArray(e) ? e : [], n = t ? R.value.filter((a) => a == null ? void 0 : a[s.value]) : c.map((a) => {
      var o;
      return (o = b.tableDataMap.get(a)) == null ? void 0 : o.node;
    }).filter((a) => a);
    g(n);
  });
  const C = y(() => Object.assign(S, v.value.checkboxConfig || {})), s = y(() => v.value.rowKey ?? "id");
  function g(e) {
    x(), d(e, !0);
  }
  const z = (e, t) => new Promise((c) => {
    var o, u;
    const n = Array.isArray(e) ? e : [e], a = [];
    for (const i of n) {
      if (p(i) || !(i != null && i[s.value]))
        continue;
      const r = (o = l.value) == null ? void 0 : o.getRowById(i[s.value]);
      a.push(r ?? i);
    }
    d(a, t), (u = l.value) == null || u.setCheckboxRow(a, t), c({ rows: e, checked: t });
  }), M = (e) => new Promise((t) => {
    var n, a, o;
    const c = [];
    if (e) {
      for (const u of R.value) {
        if (p(u) || !(u != null && u[s.value]))
          continue;
        const i = (n = l.value) == null ? void 0 : n.getRowById(u[s.value]);
        c.push(i ?? u);
      }
      d(c, e), (a = l.value) == null || a.setCheckboxRow(c, e);
    } else
      x(), (o = l.value) == null || o.setAllCheckboxRow(e);
    t({ checked: e });
  }), d = (e, t) => {
    if (C.value.reserve === !1)
      return;
    const c = Array.isArray(e) ? e : [e];
    for (const n of c)
      m(n, t);
  }, m = (e, t) => {
    if (!e || !(e != null && e[s.value]))
      return;
    t ? k.value.add(e[s.value]) : k.value.delete(e[s.value]);
    const c = b.tableDataMap.get(e[s.value]);
    if (!c || !c.children || c.children.length === 0) {
      t ? f.value.add(e[s.value]) : f.value.delete(e[s.value]);
      return;
    }
    if (C.value.checkStrictly !== !0)
      for (const n of c.children)
        m(n, t);
  };
  async function P() {
    var t, c, n, a;
    if (await ((t = l.value) == null ? void 0 : t.clearCheckboxRow()), await ((c = l.value) == null ? void 0 : c.clearCheckboxReserve()), f.value.size === 0)
      return;
    const e = [];
    for (const o of f.value.values()) {
      const u = (n = l.value) == null ? void 0 : n.getRowById(o);
      u && e.push(u);
    }
    (a = l.value) == null || a.setCheckboxRow(e, !0);
  }
  const F = () => new Promise((e) => {
    var t;
    v.value.showPage && !v.value.useTree ? d(w.value, !1) : x(), (t = l.value) == null || t.clearCheckboxRow(), e(void 0);
  }), I = async () => {
    var e;
    await ((e = l.value) == null ? void 0 : e.clearCheckboxReserve()), new Promise((t) => {
      var c, n;
      if (v.value.showPage && !v.value.useTree) {
        const a = (c = l.value) == null ? void 0 : c.getCheckboxRecords();
        k.value = new Set(a.map((o) => o == null ? void 0 : o[s.value])), (n = l.value) == null || n.setCheckboxRow(a, !0);
      }
      t(void 0);
    });
  };
  function B({ row: e, checked: t }) {
    d(e, t);
  }
  function K({ checked: e }) {
    const t = w.value.filter((c) => !c.children || !c.children.length);
    d(t, e);
  }
  function p(e) {
    const { visibleMethod: t, checkMethod: c } = C.value;
    return typeof t == "function" && !t({ $table: l.value, row: e }) || typeof c == "function" && !c({ $table: l.value, row: e });
  }
  function x() {
    k.value.clear(), f.value.clear();
  }
  function j(e = !1) {
    var c, n, a;
    if (!e)
      return (c = l.value) == null ? void 0 : c.getCheckboxRecords();
    const t = O(f.value);
    if (v.value.useTree) {
      const o = /* @__PURE__ */ new Map(), u = ((n = v.value.treeConfig) == null ? void 0 : n.rowField) ?? "id", i = ((a = v.value.treeConfig) == null ? void 0 : a.parentField) ?? "pid";
      for (const r of R.value)
        r[u] && (o.has(r[u]) || o.set(r[u], {
          id: r[u],
          pid: r[i],
          childrenSize: 0,
          current: 0
        }), o.has(r[i]) && o.get(r[i]).childrenSize++);
      for (const r of f.value.values()) {
        let h = o.get(o.get(r).pid);
        for (h && h.current++; h && h.current === h.childrenSize; )
          t.add(h.id), h = o.get(h.pid), h && h.current++;
      }
    }
    return R.value.filter((o) => (o == null ? void 0 : o[s.value]) && t.has(o[s.value]));
  }
  function T(e) {
    const t = typeof e == "object" ? e[v.value.rowKey] : e;
    return f.value.has(t);
  }
  return {
    _checkboxMethods: {
      setAllCheckboxRow: M,
      setCheckboxRow: z,
      clearCheckboxRow: F,
      clearCheckboxReserve: I,
      getCheckboxRecords: j,
      isCheckedRow: T
    },
    init: g,
    checkBoxChange: B,
    checkboxAllChange: K,
    isCheckboxDisabled: p,
    clearCheckedData: x,
    resetCheckboxStatus: P,
    checkedDataSize: D,
    checkboxConfig: C,
    checkedLeafData: f
  };
}
export {
  E as useCheckbox
};
