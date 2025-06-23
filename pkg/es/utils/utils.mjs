import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { STYLE_MODULES as m } from "../constant/common.mjs";
import g from "../node_modules/lodash-es/isObject.mjs";
import { isRef as h } from "../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
function w(t) {
  let n = "";
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = e.length;
  for (let r = 0; r < t; r++)
    n += e.charAt(Math.floor(Math.random() * o));
  return n;
}
function L(t) {
  return t != null && t !== "";
}
function b(t) {
  if (!t)
    return !1;
  const n = new Option().style;
  return n.color = t, !!n.color;
}
function C(t, n, e = "id") {
  const o = new Map(t.map((s, c) => [s[e], c])), r = new Map(t.map((s) => [s[e], s])), i = [], f = [];
  for (const s of n) {
    const c = o.get(s) ?? -1;
    c >= 0 && (i.push(c), f.push(s));
  }
  i.sort((s, c) => s - c);
  for (const s in i)
    o.set(f[s], i[s]);
  const l = [];
  for (const [s, c] of o)
    l[c] = s;
  const u = [];
  for (const s of l)
    u.push(r.get(s));
  return u;
}
function y(t, n) {
  if (!Array.isArray(t) || t.length === 0)
    return [];
  let e = [];
  for (const o of t)
    o[n] ? e = e.concat(y(o[n], n)) : e.push(o);
  return e;
}
function P(t, n = {}) {
  const e = {
    parentField: "pid",
    childrenField: "children",
    idField: "id",
    addPid: !1,
    deleteChildren: !1
  }, { parentField: o, childrenField: r, addPid: i, deleteChildren: f } = Object.assign(e, n ?? {}), l = (u, s) => {
    if (!Array.isArray(u) || u.length === 0)
      return [];
    let c = [];
    for (const a of u) {
      const d = i ? { ...a, pid: s } : { ...a };
      c.push(d), Array.isArray(a[r]) && (c = c.concat(l(a[r], a[o])), f && delete d[r]);
    }
    return c;
  };
  return l(t, null);
}
function A(t, n, e) {
  if (!Array.isArray(t) || t.length === 0)
    return [];
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (!e(r)) {
      t.splice(o, 1), o--;
      continue;
    }
    Array.isArray(r[n]) && A(r[n], n, e);
  }
  return t;
}
function M(t, n, e, o) {
  const r = new Map(n.map((i) => [i[o], i]));
  for (let i = 0; i < t.length; i++) {
    const f = t[i];
    if (r.has(f[o])) {
      t[i] = r.get(f[o]), r.delete(f[o]);
      continue;
    }
    Array.isArray(f[e]) && M(f[e], n, e, o);
  }
  return { data: t, rest: Array.from(r.values()) };
}
function $(t, n, e) {
  const o = /* @__PURE__ */ new Map();
  if (!e)
    return o;
  for (const r of t) {
    if (o.has(r[n]) ? o.get(r[n]).node = r : o.set(r[n], { node: r, children: [] }), !r[e])
      continue;
    const i = o.get(r[e]);
    i ? i.children.push(r) : o.set(r[e], { node: null, children: [r] });
  }
  return o;
}
function v(t, n) {
  return new Proxy(t, {
    get(o, r) {
      var i;
      return Object.hasOwnProperty.call(o, r) ? o[r] : (i = n.value) == null ? void 0 : i[r];
    },
    has(o, r) {
      const i = h(n) ? n.value : n;
      return Reflect.has(t, r) || Reflect.has(i ?? {}, r);
    }
  });
}
function E(t, n) {
  return n != null && n.length ? t.sort((e, o) => {
    for (let r = 0; r < n.length; r++) {
      const { field: i, order: f, sortBy: l, sortType: u } = n[r];
      let s = 0;
      const c = l ?? i;
      if ((u ?? typeof e[c]) === "number" ? s = Number(e[c]) - Number(o[c]) : s = String(e[c]).localeCompare(String(o[c])), f === "desc" && (s = -s), s !== 0)
        return s;
    }
    return 0;
  }) : t;
}
function N(t, n) {
  if (typeof n != "string")
    return t;
  const e = Array.isArray(t) ? t : [t], o = [];
  for (const r of e) {
    if (!(r instanceof Date)) {
      o.push(r);
      continue;
    }
    const i = r.getFullYear(), f = r.getMonth() + 1, l = r.getDate(), u = r.getHours(), s = r.getMinutes(), c = r.getSeconds(), a = n.replace("YYYY", p(i, 4)).replace("MM", p(f, 2)).replace("DD", p(l, 2)).replace("HH", p(u, 2)).replace("mm", p(s, 2)).replace("ss", p(c, 2));
    o.push(a);
  }
  return o.length === 1 ? o[0] : o;
}
function p(t, n) {
  let e = `${t}`;
  for (; e.length < n; )
    e = `0${e}`;
  return e;
}
function Y(t, n = null) {
  const e = n !== null ? n : document.querySelector("body");
  return getComputedStyle(e).getPropertyValue(t);
}
function j(t, n) {
  for (const e of n)
    if (t[e])
      return e;
  return n[0];
}
function B(t) {
  let n = [];
  for (const e of t) {
    if (n.length === 0) {
      n.push(...e);
      continue;
    }
    n = n.flatMap((o) => e.map((r) => `${o}${r}`));
  }
  return n;
}
function I(t, n, e) {
  const o = n.map((r) => r[e]);
  return t.sort((r, i) => o.indexOf(r[e]) < o.indexOf(i[e]) ? -1 : 1);
}
function V(t) {
  if (g(t))
    for (const n in t)
      document.documentElement.style.setProperty(`--${n}`, t[n]);
}
function H(t = "AOM") {
  let n = "AOM";
  if (typeof t == "string" && m.includes(t) ? n = t : t !== void 0 && console.warn(
    `'styleModule' expected to be ${m.map((e) => `'${e}'`).join(" | ")}, but got '${t}'.`
  ), typeof document < "u") {
    const e = document == null ? void 0 : document.getElementsByTagName("body")[0];
    e == null || e.classList.add(n);
  }
  return n;
}
function K(t, n, e, o) {
  if (!Array.isArray(t) || (n == null ? void 0 : n.length) === 0 || !e) return [];
  const r = [], i = new Set(n), f = (l, u, s, c) => {
    if (u.size !== 0)
      for (const a of l)
        u.has(a[s]) && (r.push(a), u.delete(a[s])), Array.isArray(a[c]) && f(a[c], u, s, c);
  };
  return f(t, i, e, o), r;
}
function q(t, n = []) {
  if (!t || Object.prototype.toString.call(t) !== "[object Object]")
    return {};
  for (const e of n)
    delete t[e];
  return t;
}
export {
  j as compatibleSlots,
  $ as convertToMap,
  N as formatterDate,
  w as genRandomStr,
  B as getAllCombinations,
  Y as getCSSVar,
  K as getDataByTree,
  v as getExposeProxy,
  q as getRestAttrs,
  A as getValidTreeData,
  L as isValid,
  b as isValidColor,
  V as mergeCssVar,
  E as multiFieldSort,
  p as padZero,
  M as resetTreeData,
  H as setStyleTheme,
  C as sortBySmallerList,
  I as sortFunc,
  P as transformTreeData,
  y as treeDataToArray
};
