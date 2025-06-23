import { defineComponent as f, onMounted as h, watch as w, nextTick as g, computed as y, ref as T, createBlock as _, openBlock as k, unref as s, mergeProps as I, createSlots as R, renderList as B, withCtx as P, renderSlot as S, normalizeProps as v, guardReactiveProps as C } from "vue";
import { genRandomStr as E, getExposeProxy as K } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElTimelineItem as $ } from "../../node_modules/element-plus/es/components/timeline/index.mjs";
const F = /* @__PURE__ */ f({
  name: "KTimelineItem",
  __name: "timeline_item",
  props: {
    placement: { default: "top" },
    type: { default: "wait" },
    color: {},
    hollow: { type: Boolean }
  },
  setup(a, { expose: c }) {
    const o = a, n = E(8);
    let t, r;
    h(() => {
      t = document.getElementById(n), r = (t == null ? void 0 : t.querySelector(".el-timeline-item__node")) || null;
    }), w(() => o.color, (e) => {
      g(() => {
        !r || !e || !o.hollow || (r.style.borderColor = o.color || "");
      });
    }, { immediate: !0 });
    const p = y(() => o.placement === "right");
    function u(e) {
      const i = ["primary", "success", "warning"];
      if (e === "wait")
        return "info";
      if (e === "error")
        return "danger";
      if (i.includes(e))
        return e;
    }
    const l = T(null);
    return c(K({}, l)), (e, i) => (k(), _(s($), I(e.$attrs, {
      id: s(n),
      ref_key: "KTimelineItemRef",
      ref: l,
      type: u(e.type),
      placement: e.placement === "right" ? "top" : e.placement,
      hollow: e.hollow,
      color: e.color,
      class: [
        "k-timeline__item",
        {
          "is-show-right": p.value,
          "is-hollow": o.hollow
        }
      ]
    }), R({ _: 2 }, [
      B(e.$slots, (q, m) => ({
        name: m,
        fn: P((d) => [
          S(e.$slots, m, v(C(d)))
        ])
      }))
    ]), 1040, ["id", "type", "placement", "hollow", "color", "class"]));
  }
});
export {
  F as default
};
