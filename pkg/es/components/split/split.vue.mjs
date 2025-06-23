import { defineComponent as W, onMounted as j, toRefs as q, reactive as A, ref as E, computed as g, nextTick as G, createBlock as $, openBlock as S, resolveDynamicComponent as M, normalizeClass as m, withCtx as V, createElementVNode as f, createVNode as J, normalizeStyle as L, renderSlot as v, unref as Q, createElementBlock as U } from "vue";
import Z from "./resize_observer.mjs";
import { useMergeState as ee } from "../../hooks/use_merge_state.mjs";
import te from "../../node_modules/ksw-vue-icon/es/icons/base/grip-vertical.mjs";
import ie from "../../node_modules/ksw-vue-icon/es/icons/base/grip-horizontal.mjs";
import ne from "../../node_modules/lodash-es/isString.mjs";
import se from "../../node_modules/lodash-es/isNumber.mjs";
const ae = { class: "k-split-trigger-icon-wrapper" }, oe = {
  key: 1,
  class: "k-split-trigger-line"
}, me = /* @__PURE__ */ W({
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
    j(async () => {
      const e = await P(), t = y(u.value, e);
      k(t, e);
    });
    const n = {
      startPageX: 0,
      startPageY: 0,
      startContainerSize: 0,
      startSize: 0
    }, { direction: T, modelValue: X, defaultSize: Y, min: I, max: N } = q(r), [u, F] = ee(
      Y.value,
      A({
        value: X
      })
    ), w = E(0), c = E(), x = g(() => C(u.value)), s = g(() => T.value !== "vertical"), D = g(() => {
      const { size: e, unit: t, isPx: i } = x.value;
      return {
        flex: `0 0 calc(${i ? e : e * 100}${t} - ${w.value / 2}px)`
      };
    }), H = g(() => r.triggerIcon ? r.triggerIcon : s.value ? te : ie);
    async function P() {
      const e = () => {
        var t, i;
        return s.value ? (t = c.value) == null ? void 0 : t.clientWidth : ((i = c.value) == null ? void 0 : i.clientHeight) || 0;
      };
      return (!c.value || e()) && await G(), e();
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
        size: I.value,
        defaultSize: "0px",
        containerSize: t
      }), z = d({
        size: N.value,
        defaultSize: `${t}px`,
        containerSize: t
      });
      let o = i;
      return o = Math.max(o, a), o = Math.min(o, z), o;
    }
    function _(e, t) {
      return parseFloat(e) / parseFloat(t);
    }
    function C(e) {
      const t = ne(e) ? parseFloat(e) : e;
      let i = "";
      return se(e) || String(t) === e ? i = t > 1 ? "px" : "%" : i = "px", {
        size: t,
        unit: i,
        isPx: i === "px"
      };
    }
    async function K(e) {
      r.disabled || (l("moveStart", e), n.startPageX = e.pageX, n.startPageY = e.pageY, n.startContainerSize = await P(), n.startSize = u.value, window.addEventListener("mousemove", h), window.addEventListener("mouseup", p), window.addEventListener("contextmenu", p), document.body.style.cursor = s.value ? "col-resize" : "row-resize", e.preventDefault());
    }
    function h(e) {
      l("moving", e);
      const t = s.value ? b({
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
      w.value = s.value ? t : i;
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
    return (e, t) => (S(), $(M(e.component), {
      ref_key: "splitRef",
      ref: c,
      class: m([
        "k-split",
        {
          "k-split-horizontal": s.value,
          "k-split-vertical": !s.value
        }
      ])
    }, {
      default: V(() => [
        f("div", {
          class: m(["k-split-pane", "k-split-pane-first", e.pane1Class]),
          style: L({
            ...D.value,
            ...e.pane1Style
          })
        }, [
          v(e.$slots, "first")
        ], 6),
        J(Q(Z), {
          onMousedown: K,
          onResize: O
        }, {
          default: V(() => [
            f("div", {
              class: m([
                "k-split-trigger",
                {
                  "k-split-trigger-horizontal": s.value,
                  "k-split-trigger-vertical": !s.value,
                  "k-split-trigger-disabled": e.disabled
                }
              ])
            }, [
              e.showTrigger ? v(e.$slots, "trigger", { key: 0 }, () => [
                f("div", ae, [
                  v(e.$slots, "trigger-icon", {}, () => [
                    (S(), $(M(H.value), { class: "k-split-trigger-icon" }))
                  ])
                ])
              ]) : (S(), U("div", oe))
            ], 2)
          ]),
          _: 3
        }),
        f("div", {
          class: m(["k-split-pane", "k-split-pane-second", e.pane2Class]),
          style: L(e.pane2Style)
        }, [
          v(e.$slots, "second")
        ], 6)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  me as default
};
