import * as o from "../node_modules/element-plus/es/index.mjs";
import r from "./resources/component.mjs";
import f from "./resources/template.mjs";
const p = (n) => {
  [...r, ...f].forEach((t) => {
    !t || !t.install || !(t != null && t.name) || n.use(t);
  });
  const e = l();
  for (const t in e)
    n.component(t, e[t]);
};
function l() {
  const n = "K", s = {};
  for (const e in o)
    if (/^El[A-Z]/.test(e)) {
      const t = e.replace(/^El/, n);
      r.find((i) => i.name === t) || (s[t] = o[e]);
    }
  return s;
}
export {
  p as makeRegister
};
