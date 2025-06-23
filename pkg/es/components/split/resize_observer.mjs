import { defineComponent as m, ref as p, computed as a, watch as d, onMounted as l, onUnmounted as v, cloneVNode as z } from "vue";
import b from "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import { isComponentInstance as O, getFirstComponent as R } from "../../utils/dom.mjs";
const y = /* @__PURE__ */ m({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(C, {
    emit: f,
    slots: o
  }) {
    let r;
    const n = p(), i = a(() => O(n.value) ? n.value.$el : n.value), s = (e) => {
      e && (r = new b((t) => {
        const c = t[0];
        f("resize", c);
      }), r.observe(e));
    }, u = () => {
      r && (r.disconnect(), r = null);
    };
    return d(i, (e) => {
      r && u(), e && s(e);
    }), l(() => {
      i.value && s(i.value);
    }), v(() => {
      u();
    }), () => {
      var t;
      const e = R(((t = o.default) == null ? void 0 : t.call(o)) ?? []);
      return e ? z(e, {
        ref: n
      }, !0) : null;
    };
  }
});
export {
  y as default
};
