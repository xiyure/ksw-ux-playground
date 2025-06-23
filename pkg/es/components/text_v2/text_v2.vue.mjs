import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { useLocale as H } from "../../hooks/use_locale.mjs";
import { defineComponent as T, onMounted as B, onUpdated as R, computed as v, nextTick as V, createElementBlock as u, openBlock as p, createElementVNode as N, createCommentVNode as m, createVNode as S, withCtx as z, renderSlot as E, createTextVNode as $ } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as l, unref as b } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeClass as x, toDisplayString as g, normalizeStyle as A } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const F = /* @__PURE__ */ T({
  name: "KTextV2",
  __name: "text_v2",
  props: {
    content: {},
    type: {},
    size: { default: "base" },
    lineHeight: { default: 1.5 },
    lineClamp: { default: 1 },
    truncated: { type: Boolean, default: !1 },
    color: {},
    tag: { default: "span" },
    expandText: {},
    collapseText: {},
    showHandler: { type: [Boolean, String], default: !1 }
  },
  setup(h, { expose: k }) {
    const y = {
      primary: "var(--k-status-primary)",
      success: "var(--k-status-success)",
      warning: "var(--k-status-warning)",
      danger: "var(--k-status-danger)",
      info: "var(--k-status-info)"
    }, { t: d } = H(), t = h, o = l(), s = l(), a = l(!1), n = l(!1);
    B(() => {
      r();
    }), R(() => {
      setTimeout(() => {
        r();
      }, 50);
    });
    const C = v(() => ({
      "--line-height": t.lineHeight + "rem",
      "--text-color": _.value,
      "--expand-text": `'${t.expandText || d("text.expand")}''`,
      "max-height": n.value ? "none" : `${t.lineHeight * t.lineClamp}rem`
    })), _ = v(() => t.color ?? (t.type && y[t.type]));
    function r() {
      if (n.value) {
        a.value = !1;
        return;
      }
      V(() => {
        if (s.value && o.value) {
          const { height: e } = o.value.getBoundingClientRect(), { height: f } = s.value.getBoundingClientRect();
          a.value = f >= e;
        } else
          a.value = !1;
      });
    }
    function i() {
      n.value = !0, r();
    }
    function c() {
      n.value = !1;
    }
    function w() {
      if (n.value) {
        c();
        return;
      }
      i();
    }
    return k({
      expand: i,
      collapse: c,
      toggle: w
    }), (e, f) => (p(), u("div", {
      class: x(
        [
          "k-text-v2",
          { "is-ellipsis": e.truncated },
          `k-text-v2__${e.size}`
        ]
      )
    }, [
      N("div", {
        ref_key: "containerRef",
        ref: o,
        class: "k-text-v2-container",
        style: A(C.value)
      }, [
        a.value ? (p(), u("label", {
          key: 0,
          class: x([
            "k-text-v2__expand",
            { "allow-expand": e.showHandler === !0 || e.showHandler === "expand" }
          ]),
          onClick: i
        }, null, 2)) : m("", !0),
        S(t.tag, {
          ref_key: "contentRef",
          ref: s,
          class: "k-text-v2__content"
        }, {
          default: z(() => [
            E(e.$slots, "default", {}, () => [
              $(g(e.content), 1)
            ])
          ]),
          _: 3
        }, 512),
        (e.showHandler === !0 || e.showHandler === "collapse") && n.value ? (p(), u("span", {
          key: 1,
          class: "k-text-v2__collapse",
          onClick: c
        }, g(t.collapseText || b(d)("text.collapse")), 1)) : m("", !0)
      ], 4)
    ], 2));
  }
});
export {
  F as default
};
