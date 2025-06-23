import { createVNode as i, render as r } from "vue";
import c from "./dialog.vue.mjs";
/* empty css             */
let e = null;
const l = (t) => {
  const n = i(c, null, null);
  n.appContext = t;
  const o = a();
  return r(n, o), document.body.appendChild(o.firstElementChild), n.component;
}, a = () => document.createElement("div");
function s(t, n) {
  e || (e = l(n ?? s._context));
  const o = e.exposed.showDialog;
  return o(t);
}
export {
  s as default
};
