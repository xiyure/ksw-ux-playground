import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import f from "./DetailsItem.vue.mjs";
import { defineComponent as p, onMounted as g, onUnmounted as _, provide as a, createElementBlock as u, openBlock as n, Fragment as v, renderList as w, createBlock as x, mergeProps as h } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as d } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const B = /* @__PURE__ */ p({
  name: "KDetails",
  __name: "Details",
  props: {
    abstract: {},
    direction: { default: "vertical" },
    showLine: { type: Boolean, default: !1 },
    useflex: { type: Boolean, default: !1 }
  },
  setup(c) {
    const m = c, l = d(), r = d();
    g(() => {
      s();
    }), window.addEventListener("resize", s), _(() => {
      window.removeEventListener("resize", s);
    });
    function s() {
      if (!l.value) return;
      let e = 1;
      const o = getComputedStyle(l.value).gridTemplateColumns.split(" ");
      for (let t = 1; t < o.length; t++) {
        if (Math.abs(parseInt(o[t]) - parseInt(o[t - 1])) > 2) {
          r.value = e;
          break;
        }
        e++;
      }
      r.value = e;
    }
    return a("__maxColumn__", r), a("__parentProps__", m), (e, o) => (n(), u("div", {
      ref_key: "RefKDetails",
      ref: l,
      class: "k-details w-full h-fit grid grid-cols-1 2xs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 base:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
    }, [
      (n(!0), u(v, null, w(e.abstract, (t, i) => (n(), x(f, h({ key: i }, t, {
        "show-line": e.showLine,
        useflex: e.useflex,
        direction: e.direction
      }), null, 16, ["show-line", "useflex", "direction"]))), 128))
    ], 512));
  }
});
export {
  B as default
};
