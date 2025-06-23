var D = Object.defineProperty;
var g = (n, t, e) => t in n ? D(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var l = (n, t, e) => g(n, typeof t != "symbol" ? t + "" : t, e);
import { convertToMap as M, sortFunc as c } from "../../../utils/utils.mjs";
import "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import "../../../node_modules/culori/src/index.mjs";
class y {
  constructor(t) {
    l(this, "tableData");
    l(this, "treeDataMap");
    l(this, "tableDataMap");
    this.props = t, this.tableData = [], this.props = t, this.treeDataMap = /* @__PURE__ */ new Map(), this.tableDataMap = /* @__PURE__ */ new Map();
  }
  initTableData(t) {
    this.tableData = t;
  }
  initTableMap() {
    this.tableDataMap.clear(), this.tableDataMap = M(
      this.tableData,
      this.getRowField(),
      this.getParentField()
    );
  }
  handleTreeData(t, e = !1) {
    var o, d;
    if (this.treeDataMap.clear(), !Array.isArray(t) || t.length === 0)
      return [];
    const { keyField: i = "id" } = this.props.rowConfig ?? {}, r = e ? new Set(t.map((p) => p[i])) : void 0, a = ((o = this.props.treeConfig) == null ? void 0 : o.rowField) ?? "id", s = ((d = this.props.treeConfig) == null ? void 0 : d.parentField) ?? "pid";
    for (let p = 0; p < t.length; p++) {
      const h = t[p];
      this.treeDataMap.get(h[a]) || (this.treeDataMap.set(h[a], h), this.getParentNode(h, s, a));
    }
    return this.addChildNodes(t, r), c([...this.treeDataMap.values()], this.tableData, this.getRowField());
  }
  // 添加子节点
  addChildNodes(t, e) {
    var r;
    if (!t || !t.length)
      return;
    const i = ((r = this.props.rowConfig) == null ? void 0 : r.keyField) ?? "id";
    for (const a of t) {
      const s = this.tableDataMap.get(a[i]);
      s && (s.children.forEach((o) => {
        !this.treeDataMap.get(o[i]) && (!e || e.has(o[i])) && this.treeDataMap.set(o[i], o);
      }), this.addChildNodes(s.children, e));
    }
  }
  // 根据叶子节点递归遍历获取祖先节点
  getParentNode(t, e, i) {
    var s;
    const r = t[e], a = (s = this.tableDataMap.get(r)) == null ? void 0 : s.node;
    a && (this.treeDataMap.get(r) || this.treeDataMap.set(r, a), a[e] !== null && this.getParentNode(a, e, i));
  }
  getRowField() {
    const { rowConfig: t, treeConfig: e } = this.props;
    return (e == null ? void 0 : e.rowField) ?? (t == null ? void 0 : t.keyField) ?? "id";
  }
  getParentField() {
    var t;
    return ((t = this.props.treeConfig) == null ? void 0 : t.parentField) ?? "pid";
  }
}
export {
  y as default
};
