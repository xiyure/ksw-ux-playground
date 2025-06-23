import l from "../node_modules/lodash-es/isArray.mjs";
function d(t, e = document) {
  return e.querySelector(t);
}
function c(t, e = document) {
  return Array.from(e.querySelectorAll(t) ?? []);
}
const m = (t) => (t == null ? void 0 : t.$) !== void 0, u = (t, e) => !!(t && t.shapeFlag & 16), f = (t) => !!(t && t.shapeFlag & 1), a = (t, e) => !!(t && t.shapeFlag & 6), h = (t, e) => !!(t && t.shapeFlag & 32), i = (t) => {
  var e, o;
  if (t)
    for (const r of t) {
      if (f(r) || a(r))
        return r;
      if (u(r, r.children)) {
        const n = i(r.children);
        if (n) return n;
      } else if (h(r, r.children)) {
        const n = (o = (e = r.children).default) == null ? void 0 : o.call(e);
        if (n) {
          const s = i(n);
          if (s) return s;
        }
      } else if (l(r)) {
        const n = i(r);
        if (n) return n;
      }
    }
};
function g(t, e, o = "horizontal") {
  if (!(!t || !e))
    return o === "horizontal" ? t.left >= e.left && t.right <= e.right : t.top >= e.top && t.bottom <= e.bottom;
}
function C(t) {
  return t.tagName.toUpperCase() === "INPUT" || t.tagName.toUpperCase() === "TEXTAREA";
}
function y(t) {
  return !!(t && typeof t == "object" && (t.setup || t.render || t.template || t.__vccOpts));
}
export {
  d as getElement,
  c as getElementAll,
  i as getFirstComponent,
  u as isArrayChildren,
  a as isComponent,
  m as isComponentInstance,
  f as isElement,
  g as isElementInContainerView,
  C as isInputElement,
  h as isSlotsChildren,
  y as isVueComponent
};
