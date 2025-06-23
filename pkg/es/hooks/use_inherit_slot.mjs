import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { computed as i } from "../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function S(o) {
  const r = new Set(o);
  return i(() => (e) => {
    const n = {};
    for (const t in e)
      r.has(t) || (n[t] = e[t]);
    return n;
  });
}
export {
  S as useInheritSlot
};
