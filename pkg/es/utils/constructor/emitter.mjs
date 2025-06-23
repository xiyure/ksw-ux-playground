var f = Object.defineProperty;
var v = (i, t, e) => t in i ? f(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var h = (i, t, e) => v(i, typeof t != "symbol" ? t + "" : t, e);
class u {
  constructor() {
    h(this, "events");
    this.events = /* @__PURE__ */ new Map();
  }
  on(t, e, s) {
    const n = this.events.get(e);
    if (!n) {
      this.events.set(e, { [t]: [s] });
      return;
    }
    n[t] ? n[t].push(s) : n[t] = [s];
  }
  emit(t, e, ...s) {
    var r;
    const n = (r = this.events.get(e)) == null ? void 0 : r[t];
    n == null || n.forEach((o) => {
      typeof o == "function" && o.call(null, ...s);
    });
  }
  remove(t, e) {
    const s = this.events.get(e);
    s && (s[t] && delete s[t], Object.keys(s).length === 0 && this.events.delete(e));
  }
}
export {
  u as Emitter
};
