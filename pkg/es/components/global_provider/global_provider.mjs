import { defineComponent as m, computed as r, provide as l, createVNode as n } from "vue";
import f from "../../node_modules/element-plus/es/locale/lang/zh-cn.mjs";
import d from "../../node_modules/element-plus/es/locale/lang/en.mjs";
import { localeContextKey as u } from "../../hooks/use_locale.mjs";
import { SIZE_KEY as c } from "../../hooks/use_size.mjs";
import { setStyleTheme as p, mergeCssVar as s } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElConfigProvider as y } from "../../node_modules/element-plus/es/components/config-provider/index.mjs";
const M = /* @__PURE__ */ m({
  name: "KGlobalProvider",
  props: {
    locale: {
      type: String,
      default: "zh"
    },
    styleModule: {
      type: String,
      default: "AOM"
    },
    size: {
      type: String,
      default: "base"
    },
    cssVariables: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, {
    slots: t
  }) {
    const a = r(() => e.locale === "en" ? d : f), i = {
      default: () => {
        var o;
        return (o = t.default) == null ? void 0 : o.call(t);
      }
    };
    return p(e.styleModule), s(e.cssVariables), l(c, r(() => e.size)), l(u, r(() => e.locale)), () => n(y, {
      locale: a.value
    }, i);
  }
});
export {
  M as default
};
