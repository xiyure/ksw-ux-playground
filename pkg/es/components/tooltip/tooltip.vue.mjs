import { defineComponent as m, ref as p, computed as d, watch as u, createBlock as y, openBlock as v, unref as n, mergeProps as C, createSlots as _, withCtx as s, renderSlot as i, createElementVNode as h, createVNode as k, normalizeStyle as S } from "vue";
import { isValidColor as g, getExposeProxy as x } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElTooltip as E } from "../../node_modules/element-plus/es/components/tooltip/index.mjs";
import w from "../../node_modules/ksw-vue-icon/es/icons/base/tips.mjs";
const N = { class: "k-tooltip-icon" }, z = /* @__PURE__ */ m({
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
    }, o = a, l = p(), e = p(void 0), f = d(() => {
      const t = o.popperStyle || {};
      return {
        color: o.textColor,
        backgroundColor: e.value,
        borderColor: e.value,
        ...t
      };
    });
    return u(
      () => [o.type, o.color],
      () => {
        o.color && g(o.color) ? e.value = o.color : !o.color && o.type && r[o.type] ? e.value = r[o.type] : e.value = void 0;
      },
      { immediate: !0 }
    ), c(x({}, l)), (t, $) => (v(), y(n(E), C({
      ref_key: "tooltipRef",
      ref: l,
      class: "k-tooltip"
    }, t.$attrs, { "popper-style": f.value }), _({
      default: s(() => [
        i(t.$slots, "default", {}, () => [
          h("i", N, [
            k(n(w), {
              style: S({
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
        fn: s(() => [
          i(t.$slots, "content")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["popper-style"]));
  }
});
export {
  z as default
};
