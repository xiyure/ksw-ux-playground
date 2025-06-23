import { defineComponent as l, computed as s, ref as m, createElementBlock as a, openBlock as p, normalizeClass as c, createVNode as f, unref as u, withCtx as d, renderSlot as _ } from "vue";
import { getExposeProxy as h } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElTimeline as x } from "../../node_modules/element-plus/es/components/timeline/index.mjs";
const L = /* @__PURE__ */ l({
  name: "KTimeline",
  __name: "time_line",
  props: {
    showLine: { type: Boolean, default: !0 }
  },
  setup(n, { expose: t }) {
    const o = n, i = s(() => !o.showLine), e = m(null);
    return t(h({}, e)), (r, T) => (p(), a("div", {
      ref_key: "KTimelineRef",
      ref: e,
      class: c(["k-timeline", { "hidden-line": i.value }])
    }, [
      f(u(x), null, {
        default: d(() => [
          _(r.$slots, "default")
        ]),
        _: 3
      })
    ], 2));
  }
});
export {
  L as default
};
