import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import i from "./dialog.vue.mjs";
/* empty css             */
import { createVNode as r } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { render as c } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
let e = null;
const l = (t) => {
  const n = r(i, null, null);
  n.appContext = t;
  const o = a();
  return c(n, o), document.body.appendChild(o.firstElementChild), n.component;
}, a = () => document.createElement("div");
function m(t, n) {
  e || (e = l(n ?? m._context));
  const o = e.exposed.showDialog;
  return o(t);
}
export {
  m as default
};
