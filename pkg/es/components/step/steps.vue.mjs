import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { genRandomStr as k, getExposeProxy as v } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElSteps as B } from "../../node_modules/element-plus/es/components/steps/index.mjs";
import { defineComponent as P, watch as _, nextTick as $, provide as o, createElementBlock as f, openBlock as i, createBlock as w, createSlots as E, renderList as R, withCtx as K, renderSlot as d, guardReactiveProps as x, mergeProps as A } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as C, unref as l } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as b } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const z = { class: "k-steps" }, H = ["id"], J = /* @__PURE__ */ P({
  name: "KSteps",
  __name: "steps",
  props: {
    processStatus: { default: "finish" },
    finishStatus: { default: "success" },
    capsule: { type: Boolean },
    height: {},
    active: {},
    useAntStyle: { type: Boolean, default: !1 }
  },
  setup(m, { expose: h }) {
    const n = m, s = [], p = k(8);
    _(
      () => n.height,
      (e) => {
        e && typeof window < "u" && $(() => {
          const r = typeof e == "number" ? `${e}px` : e, t = document.getElementById(p);
          t == null || t.style.setProperty("--height", r);
        });
      },
      { immediate: !0 }
    );
    function a(e) {
      switch (e) {
        case "primary":
          return "finish";
        case "wait":
          return "wait";
        case "success":
          return "success";
        case "error":
          return "error";
        default:
          return "finish";
      }
    }
    function S(e) {
      s.push(e);
    }
    function y(e, r) {
      const t = s.indexOf(r);
      t !== -1 && s.splice(t, 1, e);
    }
    o("stepProps", n), o("steps", s), o("stepMethods", {
      registerStep: S,
      updateStep: y
    });
    const c = C();
    return h(v({}, c)), (e, r) => (i(), f("div", z, [
      e.capsule ? (i(), f("div", {
        key: 1,
        id: l(p),
        class: "k-step__capsule"
      }, [
        d(e.$slots, "default")
      ], 8, H)) : (i(), w(l(B), A({
        key: 0,
        ref_key: "KStepsRef",
        ref: c
      }, e.$attrs, {
        "process-status": a(e.processStatus),
        "finish-status": a(e.finishStatus),
        active: e.active,
        class: [{ "k-steps--ant": e.useAntStyle }]
      }), E({ _: 2 }, [
        R(e.$slots, (t, u) => ({
          name: u,
          fn: K((g) => [
            d(e.$slots, u, b(x(g)))
          ])
        }))
      ]), 1040, ["process-status", "finish-status", "active", "class"]))
    ]));
  }
});
export {
  J as default
};
