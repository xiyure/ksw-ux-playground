import { defineComponent as z, ref as r, nextTick as h, watch as w, computed as B, createBlock as L, openBlock as N, unref as x, mergeProps as P, withCtx as S, renderSlot as R, createElementVNode as D, toDisplayString as G } from "vue";
import { genRandomStr as I, getExposeProxy as K } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { GetColorLevelNew as T } from "../../utils/color.mjs";
import { useSize as j } from "../../hooks/use_size.mjs";
import { colors as q } from "./const.mjs";
import { ElCheckbox as A } from "../../node_modules/element-plus/es/components/checkbox/index.mjs";
const F = { class: "checkbox__label" }, Y = /* @__PURE__ */ z({
  name: "KCheckbox",
  __name: "checkbox",
  props: {
    size: {},
    label: {},
    color: { default: "" },
    strict: { type: Boolean, default: !1 }
  },
  setup(v, { expose: y }) {
    const t = v, a = r(), s = I(8), _ = j(t), C = r(t.color), l = r(), n = r();
    typeof window < "u" && h(() => {
      l.value = document == null ? void 0 : document.getElementById(s);
    }), w(
      () => t.color,
      (e) => {
        var c, i;
        if (!e)
          return;
        C.value = e;
        const o = (i = (c = T) == null ? void 0 : c(e)) == null ? void 0 : i.colorLevel;
        h(() => {
          var f, u, p, m, k;
          if ((f = l.value) != null && f.style) {
            n.value = (p = (u = l.value) == null ? void 0 : u.parentNode) == null ? void 0 : p.parentNode;
            const $ = (m = o == null ? void 0 : o["--k-oklch-500"].match(/\(([^)]+)\)/)) == null ? void 0 : m[1];
            (k = n.value) == null || k.style.setProperty("--checkbox-color--focus", `rgba(${$}, 0.2)`), q.forEach((d) => {
              var b;
              (b = n.value) == null || b.style.setProperty(
                `--checkbox${d.name}`,
                o == null ? void 0 : o[`--k-oklch-${d.value}`]
              );
            });
          }
        });
      },
      { immediate: !0 }
    );
    function g(e) {
      var c;
      if (!t.strict || !e.target || !(e.target instanceof Element))
        return;
      ((c = e.target) == null ? void 0 : c.classList.contains("el-checkbox__inner")) || e.preventDefault();
    }
    const E = B(() => {
      const { ownSize: e } = _.value;
      return e ? `k-checkbox--${e}` : "";
    });
    return y(K({}, a)), (e, o) => (N(), L(x(A), P({
      id: x(s),
      ref_key: "kCheckboxRef",
      ref: a,
      class: ["k-checkbox", E.value]
    }, e.$attrs, {
      label: e.label,
      onClick: g
    }), {
      default: S(() => [
        R(e.$slots, "default", {}, () => [
          D("span", F, G(t.label), 1)
        ])
      ]),
      _: 3
    }, 16, ["id", "class", "label"]));
  }
});
export {
  Y as default
};
