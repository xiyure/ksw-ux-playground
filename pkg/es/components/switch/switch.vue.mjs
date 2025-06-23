import { defineComponent as a, computed as p, ref as f, createBlock as m, openBlock as u, unref as o, mergeProps as h } from "vue";
import { getExposeProxy as w } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as S } from "../../hooks/use_size.mjs";
import { ElSwitch as y } from "../../node_modules/element-plus/es/components/switch/index.mjs";
const B = /* @__PURE__ */ a({
  name: "KSwitch",
  __name: "switch",
  props: {
    activeColor: { default: "" },
    inactiveColor: { default: "" },
    size: {},
    style: {}
  },
  setup(s, { expose: r }) {
    const e = s, c = {
      "--el-switch-on-color": e.activeColor,
      "--el-switch-off-color": e.inactiveColor
    }, i = p(() => Object.assign(c, e.style ?? {})), n = S(e), t = f();
    return r(w({}, t)), (l, k) => (u(), m(o(y), h({
      ref_key: "kSwitchRef",
      ref: t,
      class: "k-switch"
    }, l.$attrs, {
      size: o(n).elSize,
      style: i.value
    }), null, 16, ["size", "style"]));
  }
});
export {
  B as default
};
