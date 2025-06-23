import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { genRandomStr as d, getExposeProxy as h } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElTimelineItem as w } from "../../node_modules/element-plus/es/components/timeline/index.mjs";
import { defineComponent as g, onMounted as y, watch as T, nextTick as _, computed as k, createBlock as I, openBlock as R, createSlots as B, renderList as P, withCtx as S, renderSlot as v, guardReactiveProps as C, mergeProps as E } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as K, unref as s } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as $ } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const J = /* @__PURE__ */ g({
  name: "KTimelineItem",
  __name: "timeline_item",
  props: {
    placement: { default: "top" },
    type: { default: "wait" },
    color: {},
    hollow: { type: Boolean }
  },
  setup(p, { expose: a }) {
    const o = p, n = d(8);
    let t, r;
    y(() => {
      t = document.getElementById(n), r = (t == null ? void 0 : t.querySelector(".el-timeline-item__node")) || null;
    }), T(() => o.color, (e) => {
      _(() => {
        !r || !e || !o.hollow || (r.style.borderColor = o.color || "");
      });
    }, { immediate: !0 });
    const c = k(() => o.placement === "right");
    function u(e) {
      const l = ["primary", "success", "warning"];
      if (e === "wait")
        return "info";
      if (e === "error")
        return "danger";
      if (l.includes(e))
        return e;
    }
    const i = K(null);
    return a(h({}, i)), (e, l) => (R(), I(s(w), E(e.$attrs, {
      id: s(n),
      ref_key: "KTimelineItemRef",
      ref: i,
      type: u(e.type),
      placement: e.placement === "right" ? "top" : e.placement,
      hollow: e.hollow,
      color: e.color,
      class: [
        "k-timeline__item",
        {
          "is-show-right": c.value,
          "is-hollow": o.hollow
        }
      ]
    }), B({ _: 2 }, [
      P(e.$slots, (q, m) => ({
        name: m,
        fn: S((f) => [
          v(e.$slots, m, $(C(f)))
        ])
      }))
    ]), 1040, ["id", "type", "placement", "hollow", "color", "class"]));
  }
});
export {
  J as default
};
