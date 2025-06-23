import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { isValidColor as f, getExposeProxy as d } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import u from "../../node_modules/ksw-vue-icon/es/icons/base/tips.mjs";
import { ElTooltip as y } from "../../node_modules/element-plus/es/components/tooltip/index.mjs";
import { defineComponent as v, computed as C, watch as _, createBlock as h, openBlock as k, createSlots as S, withCtx as p, renderSlot as n, createElementVNode as g, createVNode as x, mergeProps as E } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as i, unref as s } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeStyle as N } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const w = { class: "k-tooltip-icon" }, L = /* @__PURE__ */ v({
  name: "KTooltip",
  __name: "tooltip",
  props: {
    type: { default: void 0 },
    color: { default: "" },
    textColor: { default: "#FFF" },
    popperStyle: {}
  },
  setup(a, { expose: c }) {
    const r = {
      normal: "#000",
      danger: "#ef4444",
      warning: "#f97316",
      primary: "#2882ff"
    }, o = a, l = i(), e = i(void 0), m = C(() => {
      const t = o.popperStyle || {};
      return {
        color: o.textColor,
        backgroundColor: e.value,
        borderColor: e.value,
        ...t
      };
    });
    return _(
      () => [o.type, o.color],
      () => {
        o.color && f(o.color) ? e.value = o.color : !o.color && o.type && r[o.type] ? e.value = r[o.type] : e.value = void 0;
      },
      { immediate: !0 }
    ), c(d({}, l)), (t, V) => (k(), h(s(y), E({
      ref_key: "tooltipRef",
      ref: l,
      class: "k-tooltip"
    }, t.$attrs, { "popper-style": m.value }), S({
      default: p(() => [
        n(t.$slots, "default", {}, () => [
          g("i", w, [
            x(s(u), {
              style: N({
                color: e.value,
                width: "15px",
                height: "15px"
              })
            }, null, 8, ["style"])
          ])
        ])
      ]),
      _: 2
    }, [
      t.$slots.content ? {
        name: "content",
        fn: p(() => [
          n(t.$slots, "content")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["popper-style"]));
  }
});
export {
  L as default
};
