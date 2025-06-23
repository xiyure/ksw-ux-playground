import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { useState as m } from "./use_state.mjs";
import o from "../node_modules/lodash-es/isUndefined.mjs";
import { toRefs as i } from "../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { watch as c, computed as n } from "../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function g(r, u) {
  const { value: e } = i(u), [t, a] = m(
    o(e.value) ? r : e.value
  );
  return c(e, (l) => {
    o(l) && a(void 0);
  }), [n(() => o(e.value) ? t.value : e.value), a, t];
}
export {
  g as useMergeState
};
