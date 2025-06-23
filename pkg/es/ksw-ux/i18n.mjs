import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { createI18n as m } from "../node_modules/vue-i18n/dist/vue-i18n.mjs";
import { localeContextKey as l } from "../hooks/use_locale.mjs";
import p from "../locale/zh.mjs";
import s from "../locale/en.mjs";
import { computed as a } from "../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function v(r, e = {}) {
  const o = { zh: p, en: s }, t = m({
    locale: (e == null ? void 0 : e.locale) === "en" ? "en" : "zh",
    messages: o
  });
  r.provide("$i18n", t), r.provide(l, a(() => (e == null ? void 0 : e.locale) === "en" ? "en" : "zh"));
}
export {
  v as useI18n
};
