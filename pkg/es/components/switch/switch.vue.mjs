import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as m } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as p } from "../../hooks/use_size.mjs";
import { ElSwitch as a } from "../../node_modules/element-plus/es/components/switch/index.mjs";
import { defineComponent as f, computed as u, createBlock as h, openBlock as w, mergeProps as S } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as y, unref as o } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const P = /* @__PURE__ */ f({
  name: "KSwitch",
  __name: "switch",
  props: {
    activeColor: { default: "" },
    inactiveColor: { default: "" },
    size: {},
    style: {}
  },
  setup(r, { expose: i }) {
    const e = r, s = {
      "--el-switch-on-color": e.activeColor,
      "--el-switch-off-color": e.inactiveColor
    }, c = u(() => Object.assign(s, e.style ?? {})), n = p(e), t = y();
    return i(m({}, t)), (l, k) => (w(), h(o(a), S({
      ref_key: "kSwitchRef",
      ref: t,
      class: "k-switch"
    }, l.$attrs, {
      size: o(n).elSize,
      style: c.value
    }), null, 16, ["size", "style"]));
  }
});
export {
  P as default
};
