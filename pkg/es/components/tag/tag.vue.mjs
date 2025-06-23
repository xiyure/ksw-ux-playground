import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as z } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { GetColorLevelNew as T } from "../../utils/color.mjs";
import { useSize as _ } from "../../hooks/use_size.mjs";
import { useDeprecated as B } from "../../hooks/use_deprecated.mjs";
import { colors as N } from "./const.mjs";
import { ElTag as E } from "../../node_modules/element-plus/es/components/tag/index.mjs";
import { defineComponent as S, computed as D, watch as h, nextTick as k, resolveDirective as K, withDirectives as O, createElementBlock as P, openBlock as W, createVNode as C, withCtx as R, createElementVNode as V, renderSlot as L, createTextVNode as G, mergeProps as j } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as i, unref as w } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeStyle as q, normalizeClass as A, toDisplayString as F } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const H = { class: "k-tag" }, ie = /* @__PURE__ */ S({
  name: "KTag",
  __name: "tag",
  props: {
    type: { default: void 0 },
    color: {},
    size: {},
    point: { type: Boolean, default: !1 },
    text: { default: void 0 },
    textColor: {},
    border: { type: Boolean },
    showOverflow: { type: Boolean, default: !1 },
    effect: { default: "dark" }
  },
  setup(y, { expose: g }) {
    const o = y;
    B({
      scope: "k-tag",
      from: "border",
      replacement: 'effect: "light"',
      version: "2.0.0"
    }, D(() => !!o.border));
    const $ = _(o), r = i(), l = i(o.color), a = i(!1);
    function b(e) {
      const t = e == null ? void 0 : e.scrollWidth, s = e == null ? void 0 : e.clientWidth;
      return t > s;
    }
    return h(
      () => o.text,
      () => {
        k(() => {
          a.value = b(r.value.$el.childNodes[0].children[0]);
        });
      },
      { immediate: !0 }
    ), h(
      () => o.color,
      (e) => {
        var s, n;
        if (!e)
          return;
        l.value = e;
        const t = (n = (s = T) == null ? void 0 : s(e)) == null ? void 0 : n.colorLevel;
        k(() => {
          var c, f, p, m, d;
          if ((f = (c = r.value) == null ? void 0 : c.$el) != null && f.style) {
            const x = (m = (p = t == null ? void 0 : t["--k-oklch-500"]) == null ? void 0 : p.match(/\(([^)]+)\)/)) == null ? void 0 : m[1];
            (d = r.value.$el) == null || d.style.setProperty("--tag-color--focus", `rgba(${x}, 0.2)`), N.forEach((u) => {
              var v;
              (v = r.value.$el) == null || v.style.setProperty(
                `--tag${u.name}`,
                t == null ? void 0 : t[`--k-oklch-${u.value}`]
              );
            });
          }
        });
      },
      { immediate: !0 }
    ), g(z({}, r)), (e, t) => {
      const s = K("ksw_tooltip");
      return O((W(), P("div", H, [
        C(w(E), j({
          ref_key: "KTagRef",
          ref: r,
          class: [
            {
              "is-light": e.border,
              "is-point": e.point,
              [`k-tag__${e.type}`]: e.type,
              "is-custom": l.value,
              "pr-0": a.value
            },
            [`is-${e.effect}`]
          ]
        }, e.$attrs, {
          size: w($).elSize
        }), {
          default: R(() => [
            V("span", {
              ref: "KTagSpanRef",
              class: A({
                " inline-block  max-w-24  overflow-hidden text-ellipsis text-nowrap  break-words pr-0": e.showOverflow
              }),
              style: q({
                color: e.textColor
              })
            }, [
              L(e.$slots, "default", {}, () => [
                G(F(o.text), 1)
              ])
            ], 6)
          ]),
          _: 3
        }, 16, ["class", "size"])
      ])), [
        [s, { content: o.text, visible: o.showOverflow }]
      ]);
    };
  }
});
export {
  ie as default
};
