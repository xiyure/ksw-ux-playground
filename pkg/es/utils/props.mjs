import { Fragment as p, isVNode as a, Comment as i, Text as u } from "vue";
import { isValid as y } from "./utils.mjs";
import "../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../node_modules/culori/src/index.mjs";
const f = (r) => {
  const s = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const e = s[n];
    return e || (s[n] = r(n), s[n]);
  };
}, m = /-(\w)/g, k = f((r) => r.replace(m, (s, n) => n ? n.toUpperCase() : "")), A = Symbol("skipFlatten"), o = (r = [], s = !0) => {
  const n = Array.isArray(r) ? r : [r], e = [];
  return n.forEach((t) => {
    Array.isArray(t) ? e.push(...o(t, s)) : t && t.type === p ? t.key === A ? e.push(t) : e.push(...o(t.children, s)) : t && a(t) ? s && !g(t) ? e.push(t) : s || e.push(t) : y(t) && e.push(t);
  }), e;
};
function g(r) {
  return r && (r.type === i || r.type === p && r.children.length === 0 || r.type === u && r.children.trim() === "");
}
function C(r) {
  return Array.isArray(r) && r.length === 1 && (r = r[0]), r && r.__v_isVNode && typeof r.type != "symbol";
}
export {
  k as camelize,
  o as flattenChildren,
  g as isEmptyElement,
  C as isValidElement,
  A as skipFlattenKey
};
