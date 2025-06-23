import { defineComponent as H, ref as l, onMounted as T, onUpdated as B, computed as v, nextTick as R, createElementBlock as c, openBlock as d, normalizeClass as x, createElementVNode as V, normalizeStyle as S, createCommentVNode as g, createVNode as z, withCtx as E, renderSlot as N, createTextVNode as $, toDisplayString as m, unref as b } from "vue";
import { useLocale as A } from "../../hooks/use_locale.mjs";
const M = /* @__PURE__ */ H({
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
    }, { t: p } = A(), t = h, o = l(), s = l(), a = l(!1), n = l(!1);
    T(() => {
      r();
    }), B(() => {
      setTimeout(() => {
        r();
      }, 50);
    });
    const C = v(() => ({
      "--line-height": t.lineHeight + "rem",
      "--text-color": _.value,
      "--expand-text": `'${t.expandText || p("text.expand")}''`,
      "max-height": n.value ? "none" : `${t.lineHeight * t.lineClamp}rem`
    })), _ = v(() => t.color ?? (t.type && y[t.type]));
    function r() {
      if (n.value) {
        a.value = !1;
        return;
      }
      R(() => {
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
    function u() {
      n.value = !1;
    }
    function w() {
      if (n.value) {
        u();
        return;
      }
      i();
    }
    return k({
      expand: i,
      collapse: u,
      toggle: w
    }), (e, f) => (d(), c("div", {
      class: x(
        [
          "k-text-v2",
          { "is-ellipsis": e.truncated },
          `k-text-v2__${e.size}`
        ]
      )
    }, [
      V("div", {
        ref_key: "containerRef",
        ref: o,
        class: "k-text-v2-container",
        style: S(C.value)
      }, [
        a.value ? (d(), c("label", {
          key: 0,
          class: x([
            "k-text-v2__expand",
            { "allow-expand": e.showHandler === !0 || e.showHandler === "expand" }
          ]),
          onClick: i
        }, null, 2)) : g("", !0),
        z(t.tag, {
          ref_key: "contentRef",
          ref: s,
          class: "k-text-v2__content"
        }, {
          default: E(() => [
            N(e.$slots, "default", {}, () => [
              $(m(e.content), 1)
            ])
          ]),
          _: 3
        }, 512),
        (e.showHandler === !0 || e.showHandler === "collapse") && n.value ? (d(), c("span", {
          key: 1,
          class: "k-text-v2__collapse",
          onClick: u
        }, m(t.collapseText || b(p)("text.collapse")), 1)) : g("", !0)
      ], 4)
    ], 2));
  }
});
export {
  M as default
};
