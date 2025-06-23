import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { ref as r } from "../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
function s(t) {
  const e = r(t);
  return [e, (o) => {
    e.value = o;
  }];
}
export {
  s as useState
};
