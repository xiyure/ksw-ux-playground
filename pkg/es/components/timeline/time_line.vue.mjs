import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as m } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElTimeline as l } from "../../node_modules/element-plus/es/components/timeline/index.mjs";
import { defineComponent as s, computed as p, createElementBlock as a, openBlock as f, createVNode as c, withCtx as u, renderSlot as d } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as _, unref as h } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeClass as x } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const g = /* @__PURE__ */ s({
  name: "KTimeline",
  __name: "time_line",
  props: {
    showLine: { type: Boolean, default: !0 }
  },
  setup(o, { expose: t }) {
    const n = o, i = p(() => !n.showLine), e = _(null);
    return t(m({}, e)), (r, T) => (f(), a("div", {
      ref_key: "KTimelineRef",
      ref: e,
      class: x(["k-timeline", { "hidden-line": i.value }])
    }, [
      c(h(l), null, {
        default: u(() => [
          d(r.$slots, "default")
        ]),
        _: 3
      })
    ], 2));
  }
});
export {
  g as default
};
