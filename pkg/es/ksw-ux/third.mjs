import m from "../node_modules/element-plus/es/locale/lang/zh-cn.mjs";
import r from "../node_modules/element-plus/es/locale/lang/en.mjs";
import s from "../node_modules/vxe-table/es/locale/lang/zh-CN.mjs";
import n from "../node_modules/vxe-table/es/locale/lang/en-US.mjs";
import * as l from "../node_modules/vxe-table/es/components.mjs";
import * as o from "../node_modules/vxe-pc-ui/es/components.mjs";
import p from "../node_modules/element-plus/es/defaults.mjs";
function z(t, e = {}) {
  t.use(p, {
    ...e == null ? void 0 : e.ElementPlusOptions,
    locale: e.locale === "en" ? r : m
  }), t.use(l).use(o), o.setConfig(e.vxeGlobalConfig ?? {}), o.setI18n("zh-CN", s), o.setI18n("en-US", n), o.setLanguage(e.locale === "en" ? "en-US" : "zh-CN");
}
export {
  z as importThirdLib
};
