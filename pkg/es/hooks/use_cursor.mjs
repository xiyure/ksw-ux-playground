function d(s) {
  let i;
  function a() {
    const t = c();
    if (!t) return;
    const { selectionStart: e, selectionEnd: n, value: r } = t;
    if (e == null || n == null) return;
    const l = r.slice(0, Math.max(0, e)), o = r.slice(Math.max(0, n));
    i = {
      selectionStart: e,
      selectionEnd: n,
      value: r,
      beforeTxt: l,
      afterTxt: o
    };
  }
  function f() {
    const t = c();
    if (i === void 0 || !t) return;
    const { value: e } = t, { beforeTxt: n, afterTxt: r, selectionStart: l } = i;
    if (n === void 0 || r === void 0 || l === void 0) return;
    let o = e.length;
    if (e.endsWith(r))
      o = e.length - r.length;
    else if (e.startsWith(n))
      o = n.length;
    else {
      const v = n[l - 1], u = e.indexOf(v, l - 1);
      u !== -1 && (o = u + 1);
    }
    t.setSelectionRange(o, o);
  }
  function c() {
    var e;
    if (!s.value) return;
    const t = (e = s.value) != null && e.$el ? s.value.$el : s.value;
    return t == null ? void 0 : t.querySelector("input");
  }
  return { recordCursor: a, setCursor: f };
}
export {
  d as useCursor
};
