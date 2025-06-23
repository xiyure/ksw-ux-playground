import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { sortBySmallerList as J, treeDataToArray as _, genRandomStr as N } from "../../../utils/utils.mjs";
import "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../../node_modules/culori/src/index.mjs";
import O from "../../../node_modules/lodash-es/cloneDeep.mjs";
import { ref as p } from "../../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { onMounted as V, computed as W } from "../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function K(m, M, l, v) {
  const o = p([]), y = p([]), h = p([]), k = p([]);
  let T = "";
  V(() => {
    H();
  });
  const u = W(() => {
    const { excludes: e = [] } = l.transferConfig ?? {};
    return new Set(e);
  });
  async function H() {
    var r;
    let e = l.defaultTransferData ?? [];
    typeof l.defaultTransferData == "function" && (e = await ((r = l.defaultTransferData) == null ? void 0 : r.call(l))), e = Array.isArray(e) ? e : [];
    const n = new Map(
      e.map((t) => [t.key, t])
    ), i = e.map((t) => t.key), a = l.column.map((t) => {
      var f, w;
      const d = t.field ?? `_table_column_${t.type ?? ""}`, s = ((f = n.get(d)) == null ? void 0 : f.visible) ?? t.visible !== !1, c = (w = n.get(d)) == null ? void 0 : w.width, b = t.editRender ?? (typeof t.renderEdit == "function" ? {} : void 0);
      return { ...O(t), visible: s, field: d, __width__: c, editRender: b };
    });
    v.value = J(a, i, "field"), C(), D(e), setTimeout(() => {
      T = JSON.stringify(g());
    });
  }
  function C() {
    o.value = _(v.value, "group"), h.value = o.value.map((e) => e.field && !u.value.has(e.field) && !u.value.has(e.type ?? "") ? {
      label: e.title || e.type || "undefined",
      key: e.field,
      disabled: e.allowChangeVisible === !1
    } : null).filter((e) => e !== null), y.value = o.value.filter((e) => e.visible !== !1 && !u.value.has(e.field) && !u.value.has(e.type ?? "")).map((e) => e.field).filter((e) => e !== void 0), k.value = [...y.value];
  }
  function S(e) {
    if (!Array.isArray(e))
      return;
    let n = 0;
    const i = new Map(o.value.map((r) => [r.field, r])), a = (r) => {
      var t;
      for (const [d, s] of r.entries())
        if (Array.isArray(s.group) && s.group.length > 0)
          a(s.group);
        else {
          if (u.value.has(s.field) || u.value.has(s.type ?? ""))
            continue;
          const c = (t = e[n++]) == null ? void 0 : t.key;
          r[d] = i.get(c) ?? {};
        }
    };
    a(v.value), o.value = _(v.value, "group");
  }
  function A() {
    typeof l.onTransferShow == "function" && l.onTransferShow();
  }
  function x() {
    if (typeof l.onTransferChange == "function") {
      const e = g();
      JSON.stringify(e) !== T && (l.onTransferChange(e), T = JSON.stringify(e));
    }
  }
  function R() {
    if (typeof l.onTransferHide == "function") {
      const e = g();
      l.onTransferHide(e);
    }
  }
  function g() {
    var d, s, c, b;
    const e = /* @__PURE__ */ new Map(), n = (d = m.value) == null ? void 0 : d.getColumns();
    if (!n)
      return [];
    for (const f of n) {
      const w = (s = m.value) == null ? void 0 : s.getColumnWidth(f);
      e.set(f.field, String(w));
    }
    const i = new Set(y.value), a = (b = (c = M.value) == null ? void 0 : c.transferRef) == null ? void 0 : b[0];
    return (a ? a.getTransferData().sourceData : h.value).map((f) => ({
      label: f.label,
      key: f.key,
      width: e.get(f.key) ?? "",
      visible: i.has(f.key),
      disabled: f.disabled ?? !1
    }));
  }
  function E(e) {
    var n, i;
    (n = e.forEach) == null || n.call(e, (a) => {
      const r = o.value.find((t) => t.field === a.key);
      r && (a.visible ? r.visible = !0 : r.visible = !1);
    }), h.value = ((i = e.map) == null ? void 0 : i.call(e, (a) => ({
      label: a.label ?? "",
      key: a.key ?? `_${N(8)}`,
      disabled: a.disabled ?? !1,
      visible: a.visible !== !1
    }))) ?? [], y.value = h.value.filter((a) => a.visible !== !1).map((a) => a.key), S(e), D(e);
  }
  function D(e) {
    const n = new Map(
      e.map((i) => [i.key, i])
    );
    for (const i of v.value) {
      const a = n.get(i.field);
      !a || !a.width || (i.width = a.width);
    }
  }
  function I(e) {
    o.value.forEach((n) => {
      e.includes(n.field) || u.value.has(n.field) || u.value.has(n.type ?? "") ? n.visible = !0 : n.visible = !1;
    });
  }
  return {
    flatColumns: o,
    selectData: y,
    originData: h,
    defaultHeader: k,
    updateTransfer: C,
    transferChange: x,
    transferHide: R,
    transferShow: A,
    sortTableHeader: S,
    updateColVisible: I,
    _transferMethods: {
      getHeaderControllerData: g,
      setHeaderControllerData: E
    }
  };
}
export {
  K as useHeaderControl
};
