import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { genRandomStr as z, getExposeProxy as B } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { GetColorLevelNew as N } from "../../utils/color.mjs";
import { useSize as w } from "../../hooks/use_size.mjs";
import { colors as L } from "./const.mjs";
import { ElCheckbox as P } from "../../node_modules/element-plus/es/components/checkbox/index.mjs";
import { defineComponent as S, nextTick as h, watch as R, computed as D, createBlock as G, openBlock as I, withCtx as K, renderSlot as T, createElementVNode as V, mergeProps as j } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as c, unref as x } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as q } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const A = { class: "checkbox__label" }, oe = /* @__PURE__ */ S({
  name: "KCheckbox",
  __name: "checkbox",
  props: {
    size: {},
    label: {},
    color: { default: "" },
    strict: { type: Boolean, default: !1 }
  },
  setup(v, { expose: y }) {
    const t = v, n = c(), s = z(8), _ = w(t), C = c(t.color), a = c(), l = c();
    typeof window < "u" && h(() => {
      a.value = document == null ? void 0 : document.getElementById(s);
    }), R(
      () => t.color,
      (e) => {
        var r, i;
        if (!e)
          return;
        C.value = e;
        const o = (i = (r = N) == null ? void 0 : r(e)) == null ? void 0 : i.colorLevel;
        h(() => {
          var f, m, p, u, k;
          if ((f = a.value) != null && f.style) {
            l.value = (p = (m = a.value) == null ? void 0 : m.parentNode) == null ? void 0 : p.parentNode;
            const $ = (u = o == null ? void 0 : o["--k-oklch-500"].match(/\(([^)]+)\)/)) == null ? void 0 : u[1];
            (k = l.value) == null || k.style.setProperty("--checkbox-color--focus", `rgba(${$}, 0.2)`), L.forEach((d) => {
              var b;
              (b = l.value) == null || b.style.setProperty(
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
      var r;
      if (!t.strict || !e.target || !(e.target instanceof Element))
        return;
      ((r = e.target) == null ? void 0 : r.classList.contains("el-checkbox__inner")) || e.preventDefault();
    }
    const E = D(() => {
      const { ownSize: e } = _.value;
      return e ? `k-checkbox--${e}` : "";
    });
    return y(B({}, n)), (e, o) => (I(), G(x(P), j({
      id: x(s),
      ref_key: "kCheckboxRef",
      ref: n,
      class: ["k-checkbox", E.value]
    }, e.$attrs, {
      label: e.label,
      onClick: g
    }), {
      default: K(() => [
        T(e.$slots, "default", {}, () => [
          V("span", A, q(t.label), 1)
        ])
      ]),
      _: 3
    }, 16, ["id", "class", "label"]));
  }
});
export {
  oe as default
};
