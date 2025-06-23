import { inject as l, computed as a } from "vue";
const s = Symbol("localeContextKey");
function m() {
  var c;
  const e = l(s, a(() => "zh")), o = l("$i18n"), t = (c = o == null ? void 0 : o.global) == null ? void 0 : c.t;
  return {
    locale: e,
    t: (n) => t == null ? void 0 : t(n, e.value)
  };
}
export {
  s as localeContextKey,
  m as useLocale
};
