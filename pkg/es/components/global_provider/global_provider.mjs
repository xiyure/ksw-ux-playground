import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import m from "../../node_modules/element-plus/es/locale/lang/zh-cn.mjs";
import n from "../../node_modules/element-plus/es/locale/lang/en.mjs";
import { localeContextKey as f } from "../../hooks/use_locale.mjs";
import { SIZE_KEY as d } from "../../hooks/use_size.mjs";
import { setStyleTheme as u, mergeCssVar as c } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElConfigProvider as p } from "../../node_modules/element-plus/es/components/config-provider/index.mjs";
import { defineComponent as s, computed as r, provide as l, createVNode as y } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const P = /* @__PURE__ */ s({
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
    const i = r(() => e.locale === "en" ? n : m), a = {
      default: () => {
        var o;
        return (o = t.default) == null ? void 0 : o.call(t);
      }
    };
    return u(e.styleModule), c(e.cssVariables), l(d, r(() => e.size)), l(f, r(() => e.locale)), () => y(p, {
      locale: i.value
    }, a);
  }
});
export {
  P as default
};
