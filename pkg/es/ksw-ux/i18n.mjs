import { computed as m } from "vue";
import { createI18n as l } from "../node_modules/vue-i18n/dist/vue-i18n.mjs";
import { localeContextKey as p } from "../hooks/use_locale.mjs";
import s from "../locale/zh.mjs";
import a from "../locale/en.mjs";
function v(r, e = {}) {
  const o = { zh: s, en: a }, t = l({
    locale: (e == null ? void 0 : e.locale) === "en" ? "en" : "zh",
    messages: o
  });
  r.provide("$i18n", t), r.provide(p, m(() => (e == null ? void 0 : e.locale) === "en" ? "en" : "zh"));
}
export {
  v as useI18n
};
