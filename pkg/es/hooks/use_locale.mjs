import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { inject as l, computed as a } from "../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const r = Symbol("localeContextKey");
function i() {
  var c;
  const e = l(r, a(() => "zh")), o = l("$i18n"), t = (c = o == null ? void 0 : o.global) == null ? void 0 : c.t;
  return {
    locale: e,
    t: (n) => t == null ? void 0 : t(n, e.value)
  };
}
export {
  r as localeContextKey,
  i as useLocale
};
