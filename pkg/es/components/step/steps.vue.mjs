import { defineComponent as k, watch as v, nextTick as B, provide as o, ref as P, createElementBlock as f, openBlock as i, createBlock as _, unref as d, mergeProps as $, createSlots as w, renderList as E, withCtx as R, renderSlot as l, normalizeProps as K, guardReactiveProps as x } from "vue";
import { genRandomStr as A, getExposeProxy as C } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { ElSteps as b } from "../../node_modules/element-plus/es/components/steps/index.mjs";
const z = { class: "k-steps" }, H = ["id"], D = /* @__PURE__ */ k({
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
  setup(h, { expose: m }) {
    const n = h, t = [], p = A(8);
    v(
      () => n.height,
      (e) => {
        e && typeof window < "u" && B(() => {
          const r = typeof e == "number" ? `${e}px` : e, s = document.getElementById(p);
          s == null || s.style.setProperty("--height", r);
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
      t.push(e);
    }
    function y(e, r) {
      const s = t.indexOf(r);
      s !== -1 && t.splice(s, 1, e);
    }
    o("stepProps", n), o("steps", t), o("stepMethods", {
      registerStep: S,
      updateStep: y
    });
    const c = P();
    return m(C({}, c)), (e, r) => (i(), f("div", z, [
      e.capsule ? (i(), f("div", {
        key: 1,
        id: d(p),
        class: "k-step__capsule"
      }, [
        l(e.$slots, "default")
      ], 8, H)) : (i(), _(d(b), $({
        key: 0,
        ref_key: "KStepsRef",
        ref: c
      }, e.$attrs, {
        "process-status": a(e.processStatus),
        "finish-status": a(e.finishStatus),
        active: e.active,
        class: [{ "k-steps--ant": e.useAntStyle }]
      }), w({ _: 2 }, [
        E(e.$slots, (s, u) => ({
          name: u,
          fn: R((g) => [
            l(e.$slots, u, K(x(g)))
          ])
        }))
      ]), 1040, ["process-status", "finish-status", "active", "class"]))
    ]));
  }
});
export {
  D as default
};
