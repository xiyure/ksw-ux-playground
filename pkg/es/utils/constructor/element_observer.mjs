var c = Object.defineProperty;
var b = (s, e, t) => e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => b(s, typeof e != "symbol" ? e + "" : e, t);
import a from "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import { genRandomStr as v } from "../utils.mjs";
const o = "data-observer-key";
class u {
  constructor() {
    n(this, "resizeObserver");
    n(this, "actions");
    this.actions = {}, typeof a < "u" ? this.resizeObserver = new a((e) => {
      e.forEach((t) => {
        const i = t.target.getAttribute(o);
        i && this.actions[i] && this.actions[i](t);
      });
    }) : this.resizeObserver = null;
  }
  observe(e, t) {
    var i;
    if (!(e instanceof HTMLElement) && !(e instanceof Element))
      return;
    const r = `_observer_${v(10)}`;
    e.setAttribute(o, r), this.actions[r] = t, (i = this.resizeObserver) == null || i.observe(e);
  }
  unobserve(e) {
    var r;
    if (!(e instanceof HTMLElement) && !(e instanceof Element))
      return;
    const t = e.getAttribute(o) ?? "";
    delete this.actions[t], (r = this.resizeObserver) == null || r.unobserve(e);
  }
}
export {
  u as ElementObserver
};
