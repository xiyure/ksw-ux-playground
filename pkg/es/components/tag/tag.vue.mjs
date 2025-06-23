import { defineComponent as z, computed as T, ref as l, watch as h, nextTick as k, resolveDirective as _, withDirectives as B, createElementBlock as E, openBlock as N, createVNode as S, unref as w, mergeProps as D, withCtx as K, createElementVNode as O, normalizeStyle as P, normalizeClass as W, renderSlot as C, createTextVNode as R, toDisplayString as L } from "vue";
import { getExposeProxy as V } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { GetColorLevelNew as G } from "../../utils/color.mjs";
import { useSize as j } from "../../hooks/use_size.mjs";
import { useDeprecated as q } from "../../hooks/use_deprecated.mjs";
import { colors as A } from "./const.mjs";
import { ElTag as F } from "../../node_modules/element-plus/es/components/tag/index.mjs";
const H = { class: "k-tag" }, oe = /* @__PURE__ */ z({
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
    q({
      scope: "k-tag",
      from: "border",
      replacement: 'effect: "light"',
      version: "2.0.0"
    }, T(() => !!o.border));
    const $ = j(o), r = l(), i = l(o.color), a = l(!1);
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
        i.value = e;
        const t = (n = (s = G) == null ? void 0 : s(e)) == null ? void 0 : n.colorLevel;
        k(() => {
          var c, f, p, d, m;
          if ((f = (c = r.value) == null ? void 0 : c.$el) != null && f.style) {
            const x = (d = (p = t == null ? void 0 : t["--k-oklch-500"]) == null ? void 0 : p.match(/\(([^)]+)\)/)) == null ? void 0 : d[1];
            (m = r.value.$el) == null || m.style.setProperty("--tag-color--focus", `rgba(${x}, 0.2)`), A.forEach((u) => {
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
    ), g(V({}, r)), (e, t) => {
      const s = _("ksw_tooltip");
      return B((N(), E("div", H, [
        S(w(F), D({
          ref_key: "KTagRef",
          ref: r,
          class: [
            {
              "is-light": e.border,
              "is-point": e.point,
              [`k-tag__${e.type}`]: e.type,
              "is-custom": i.value,
              "pr-0": a.value
            },
            [`is-${e.effect}`]
          ]
        }, e.$attrs, {
          size: w($).elSize
        }), {
          default: K(() => [
            O("span", {
              ref: "KTagSpanRef",
              class: W({
                " inline-block  max-w-24  overflow-hidden text-ellipsis text-nowrap  break-words pr-0": e.showOverflow
              }),
              style: P({
                color: e.textColor
              })
            }, [
              C(e.$slots, "default", {}, () => [
                R(L(o.text), 1)
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
  oe as default
};
