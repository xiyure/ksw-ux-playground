import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as c } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import s from "../../node_modules/ksw-vue-icon/es/icons/base/clear.mjs";
import { ElPopconfirm as f } from "../../node_modules/element-plus/es/components/popconfirm/index.mjs";
import { defineComponent as a, createBlock as l, openBlock as u, createSlots as P, renderList as d, withCtx as _, renderSlot as k, guardReactiveProps as g, mergeProps as x } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as y, unref as t } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as K } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const j = /* @__PURE__ */ a({
  name: "KPopconfirm",
  __name: "popconfirm",
  props: {
    icon: {}
  },
  setup(n, { expose: p }) {
    const i = n, r = y(null);
    return p(c({}, r)), (o, $) => (u(), l(t(f), x({
      ref_key: "KPopconfirmRef",
      ref: r,
      class: "k-popconfirm"
    }, o.$attrs, {
      icon: i.icon ?? t(s),
      "cancel-button-type": "default"
    }), P({ _: 2 }, [
      d(o.$slots, (h, e) => ({
        name: e,
        fn: _((m) => [
          k(o.$slots, e, K(g(m)))
        ])
      }))
    ]), 1040, ["icon"]));
  }
});
export {
  j as default
};
