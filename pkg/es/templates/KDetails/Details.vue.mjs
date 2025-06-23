import { defineComponent as f, ref as a, onMounted as p, onUnmounted as g, provide as u, createElementBlock as d, openBlock as n, Fragment as _, renderList as v, createBlock as w, mergeProps as x } from "vue";
import h from "./DetailsItem.vue.mjs";
const C = /* @__PURE__ */ f({
  name: "KDetails",
  __name: "Details",
  props: {
    abstract: {},
    direction: { default: "vertical" },
    showLine: { type: Boolean, default: !1 },
    useflex: { type: Boolean, default: !1 }
  },
  setup(c) {
    const m = c, o = a(), s = a();
    p(() => {
      r();
    }), window.addEventListener("resize", r), g(() => {
      window.removeEventListener("resize", r);
    });
    function r() {
      if (!o.value) return;
      let e = 1;
      const l = getComputedStyle(o.value).gridTemplateColumns.split(" ");
      for (let t = 1; t < l.length; t++) {
        if (Math.abs(parseInt(l[t]) - parseInt(l[t - 1])) > 2) {
          s.value = e;
          break;
        }
        e++;
      }
      s.value = e;
    }
    return u("__maxColumn__", s), u("__parentProps__", m), (e, l) => (n(), d("div", {
      ref_key: "RefKDetails",
      ref: o,
      class: "k-details w-full h-fit grid grid-cols-1 2xs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 base:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
    }, [
      (n(!0), d(_, null, v(e.abstract, (t, i) => (n(), w(h, x({ key: i }, t, {
        "show-line": e.showLine,
        useflex: e.useflex,
        direction: e.direction
      }), null, 16, ["show-line", "useflex", "direction"]))), 128))
    ], 512));
  }
});
export {
  C as default
};
