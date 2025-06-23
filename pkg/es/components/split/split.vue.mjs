import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import W from "./resize_observer.mjs";
import { useMergeState as j } from "../../hooks/use_merge_state.mjs";
import q from "../../node_modules/ksw-vue-icon/es/icons/base/grip-vertical.mjs";
import A from "../../node_modules/ksw-vue-icon/es/icons/base/grip-horizontal.mjs";
import G from "../../node_modules/lodash-es/isString.mjs";
import J from "../../node_modules/lodash-es/isNumber.mjs";
import { defineComponent as Q, onMounted as U, computed as m, nextTick as Z, createBlock as E, openBlock as S, withCtx as $, createElementVNode as g, createVNode as ee, renderSlot as f, createElementBlock as te, resolveDynamicComponent as V } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { toRefs as ie, reactive as ne, ref as M, unref as oe } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeStyle as L, normalizeClass as v } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const ae = { class: "k-split-trigger-icon-wrapper" }, se = {
  key: 1,
  class: "k-split-trigger-line"
}, ze = /* @__PURE__ */ Q({
  name: "KSplit",
  __name: "split",
  props: {
    modelValue: {},
    defaultSize: { default: 0.5 },
    component: { default: "div" },
    direction: { default: "horizontal" },
    min: {},
    max: {},
    disabled: { type: Boolean, default: !1 },
    pane1Class: { default: "" },
    pane1Style: {},
    pane2Class: { default: "" },
    pane2Style: {},
    triggerIcon: {},
    showTrigger: { type: Boolean, default: !0 }
  },
  emits: ["moveStart", "moving", "moveEnd", "update:modelValue"],
  setup(R, { emit: B }) {
    const r = R, l = B;
    U(async () => {
      const e = await P(), t = y(u.value, e);
      k(t, e);
    });
    const n = {
      startPageX: 0,
      startPageY: 0,
      startContainerSize: 0,
      startSize: 0
    }, { direction: N, modelValue: T, defaultSize: X, min: Y, max: I } = ie(r), [u, F] = j(
      X.value,
      ne({
        value: T
      })
    ), w = M(0), c = M(), x = m(() => C(u.value)), o = m(() => N.value !== "vertical"), D = m(() => {
      const { size: e, unit: t, isPx: i } = x.value;
      return {
        flex: `0 0 calc(${i ? e : e * 100}${t} - ${w.value / 2}px)`
      };
    }), H = m(() => r.triggerIcon ? r.triggerIcon : o.value ? q : A);
    async function P() {
      const e = () => {
        var t, i;
        return o.value ? (t = c.value) == null ? void 0 : t.clientWidth : ((i = c.value) == null ? void 0 : i.clientHeight) || 0;
      };
      return (!c.value || e()) && await Z(), e();
    }
    function k(e, t) {
      if (!t)
        return;
      const i = x.value.isPx ? `${e}px` : _(e, t);
      i !== u.value && (F(i), l("update:modelValue", i));
    }
    function y(e, t) {
      const i = d({
        size: e,
        containerSize: t
      }), a = d({
        size: Y.value,
        defaultSize: "0px",
        containerSize: t
      }), z = d({
        size: I.value,
        defaultSize: `${t}px`,
        containerSize: t
      });
      let s = i;
      return s = Math.max(s, a), s = Math.min(s, z), s;
    }
    function _(e, t) {
      return parseFloat(e) / parseFloat(t);
    }
    function C(e) {
      const t = G(e) ? parseFloat(e) : e;
      let i = "";
      return J(e) || String(t) === e ? i = t > 1 ? "px" : "%" : i = "px", {
        size: t,
        unit: i,
        isPx: i === "px"
      };
    }
    async function K(e) {
      r.disabled || (l("moveStart", e), n.startPageX = e.pageX, n.startPageY = e.pageY, n.startContainerSize = await P(), n.startSize = u.value, window.addEventListener("mousemove", h), window.addEventListener("mouseup", p), window.addEventListener("contextmenu", p), document.body.style.cursor = o.value ? "col-resize" : "row-resize", e.preventDefault());
    }
    function h(e) {
      l("moving", e);
      const t = o.value ? b({
        startContainerSize: n.startContainerSize,
        startSize: n.startSize,
        startPosition: n.startPageX,
        endPosition: e.pageX
      }) : b({
        startContainerSize: n.startContainerSize,
        startSize: n.startSize,
        startPosition: n.startPageY,
        endPosition: e.pageY
      });
      k(t, n.startContainerSize);
    }
    function p(e) {
      window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", p), window.removeEventListener("contextmenu", p), document.body.style.cursor = "default", l("moveEnd", e);
    }
    function O(e) {
      const { width: t, height: i } = e.contentRect;
      w.value = o.value ? t : i;
    }
    function b({
      startContainerSize: e,
      startSize: t,
      startPosition: i,
      endPosition: a
    }) {
      const z = d({
        size: t,
        containerSize: e
      });
      return y(`${z + (a - i)}px`, e);
    }
    function d({
      size: e,
      defaultSize: t,
      containerSize: i
    }) {
      const a = C(e ?? t ?? 0.5);
      return a.isPx ? a.size : a.size * i;
    }
    return (e, t) => (S(), E(V(e.component), {
      ref_key: "splitRef",
      ref: c,
      class: v([
        "k-split",
        {
          "k-split-horizontal": o.value,
          "k-split-vertical": !o.value
        }
      ])
    }, {
      default: $(() => [
        g("div", {
          class: v(["k-split-pane", "k-split-pane-first", e.pane1Class]),
          style: L({
            ...D.value,
            ...e.pane1Style
          })
        }, [
          f(e.$slots, "first")
        ], 6),
        ee(oe(W), {
          onMousedown: K,
          onResize: O
        }, {
          default: $(() => [
            g("div", {
              class: v([
                "k-split-trigger",
                {
                  "k-split-trigger-horizontal": o.value,
                  "k-split-trigger-vertical": !o.value,
                  "k-split-trigger-disabled": e.disabled
                }
              ])
            }, [
              e.showTrigger ? f(e.$slots, "trigger", { key: 0 }, () => [
                g("div", ae, [
                  f(e.$slots, "trigger-icon", {}, () => [
                    (S(), E(V(H.value), { class: "k-split-trigger-icon" }))
                  ])
                ])
              ]) : (S(), te("div", se))
            ], 2)
          ]),
          _: 3
        }),
        g("div", {
          class: v(["k-split-pane", "k-split-pane-second", e.pane2Class]),
          style: L(e.pane2Style)
        }, [
          f(e.$slots, "second")
        ], 6)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  ze as default
};
