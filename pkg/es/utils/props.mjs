import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { isValid as i } from "./utils.mjs";
import "../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../node_modules/culori/src/index.mjs";
import { Fragment as p, isVNode as a, Comment as u, Text as y } from "../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const f = (r) => {
  const s = /* @__PURE__ */ Object.create(null);
  return (o) => {
    const e = s[o];
    return e || (s[o] = r(o), s[o]);
  };
}, m = /-(\w)/g, C = f((r) => r.replace(m, (s, o) => o ? o.toUpperCase() : "")), A = Symbol("skipFlatten"), n = (r = [], s = !0) => {
  const o = Array.isArray(r) ? r : [r], e = [];
  return o.forEach((t) => {
    Array.isArray(t) ? e.push(...n(t, s)) : t && t.type === p ? t.key === A ? e.push(t) : e.push(...n(t.children, s)) : t && a(t) ? s && !g(t) ? e.push(t) : s || e.push(t) : i(t) && e.push(t);
  }), e;
};
function g(r) {
  return r && (r.type === u || r.type === p && r.children.length === 0 || r.type === y && r.children.trim() === "");
}
function x(r) {
  return Array.isArray(r) && r.length === 1 && (r = r[0]), r && r.__v_isVNode && typeof r.type != "symbol";
}
export {
  C as camelize,
  n as flattenChildren,
  g as isEmptyElement,
  x as isValidElement,
  A as skipFlattenKey
};
