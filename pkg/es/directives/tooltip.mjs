import { createApp as C } from "vue";
import { KTooltip as b } from "../components/tooltip/index.mjs";
import m from "../node_modules/lodash-es/isObject.mjs";
const l = /* @__PURE__ */ new WeakMap();
let r = null;
const f = "_tooltip_root";
let n = null;
const d = (t) => {
  const o = document.querySelector("#_tooltip_root");
  o && o.remove(), t._tipRoot = null, t._tipApp = null;
  const e = document.createElement("div");
  e.id = f, e.classList.add("_tipRoot");
  const i = l.get(t), { trigger: u, placement: _, content: T, showAfter: g, autoClose: v, visible: s, showByOverflow: A } = m(i) ? i : {}, h = ["string", "number"].includes(typeof i) ? i : T ?? t.textContent ?? "";
  let p = !0;
  s === !1 ? p = !1 : u === "click" ? p = void 0 : typeof s == "function" ? p = s(t) : A && (p = t.scrollWidth > t.clientWidth);
  const a = C(b, {
    virtualRef: t,
    rawContent: !0,
    virtualTriggering: !0,
    trigger: u,
    placement: _,
    content: h,
    showAfter: g,
    autoClose: v,
    visible: p
  });
  t._tipRoot = e, t._tipApp = a, document.body.appendChild(e), !(!a || !e) && (r && c(), t._tipApp.mount(`#${f}`), r = t._tipApp);
}, c = () => {
  n && (clearTimeout(n), n = null), r && (r.unmount(), r = null);
}, w = (t) => {
  const o = l.get(t), { showAfter: e, trigger: i } = m(o) ? o : {};
  if (i === "click") {
    d(t);
    return;
  }
  t.addEventListener("mouseenter", () => {
    n && clearTimeout(n), n = setTimeout(() => {
      d(t);
    }, e ?? 500);
  }), t.addEventListener("mouseleave", c);
}, y = {
  mounted(t, o) {
    l.set(t, o.value), w(t);
  },
  updated(t, o) {
    l.set(t, o.value);
  },
  unmounted(t) {
    l.delete(t), c();
  }
};
export {
  y as tooltip
};
