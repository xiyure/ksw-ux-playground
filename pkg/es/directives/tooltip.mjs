import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KTooltip as C } from "../components/tooltip/index.mjs";
import m from "../node_modules/lodash-es/isObject.mjs";
import { createApp as b } from "../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
const r = /* @__PURE__ */ new WeakMap();
let l = null;
const f = "_tooltip_root";
let n = null;
const d = (t) => {
  const o = document.querySelector("#_tooltip_root");
  o && o.remove(), t._tipRoot = null, t._tipApp = null;
  const e = document.createElement("div");
  e.id = f, e.classList.add("_tipRoot");
  const i = r.get(t), { trigger: u, placement: _, content: T, showAfter: g, autoClose: v, visible: s, showByOverflow: A } = m(i) ? i : {}, h = ["string", "number"].includes(typeof i) ? i : T ?? t.textContent ?? "";
  let p = !0;
  s === !1 ? p = !1 : u === "click" ? p = void 0 : typeof s == "function" ? p = s(t) : A && (p = t.scrollWidth > t.clientWidth);
  const a = b(C, {
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
  t._tipRoot = e, t._tipApp = a, document.body.appendChild(e), !(!a || !e) && (l && c(), t._tipApp.mount(`#${f}`), l = t._tipApp);
}, c = () => {
  n && (clearTimeout(n), n = null), l && (l.unmount(), l = null);
}, w = (t) => {
  const o = r.get(t), { showAfter: e, trigger: i } = m(o) ? o : {};
  if (i === "click") {
    d(t);
    return;
  }
  t.addEventListener("mouseenter", () => {
    n && clearTimeout(n), n = setTimeout(() => {
      d(t);
    }, e ?? 500);
  }), t.addEventListener("mouseleave", c);
}, k = {
  mounted(t, o) {
    r.set(t, o.value), w(t);
  },
  updated(t, o) {
    r.set(t, o.value);
  },
  unmounted(t) {
    r.delete(t), c();
  }
};
export {
  k as tooltip
};
