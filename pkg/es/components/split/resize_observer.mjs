import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import c from "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import { isComponentInstance as p, getFirstComponent as a } from "../../utils/dom.mjs";
import { defineComponent as d, computed as l, watch as v, onMounted as z, onUnmounted as b, cloneVNode as O } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as R } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const I = /* @__PURE__ */ d({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(C, {
    emit: f,
    slots: o
  }) {
    let r;
    const n = R(), i = l(() => p(n.value) ? n.value.$el : n.value), s = (e) => {
      e && (r = new c((t) => {
        const m = t[0];
        f("resize", m);
      }), r.observe(e));
    }, u = () => {
      r && (r.disconnect(), r = null);
    };
    return v(i, (e) => {
      r && u(), e && s(e);
    }), z(() => {
      i.value && s(i.value);
    }), b(() => {
      u();
    }), () => {
      var t;
      const e = a(((t = o.default) == null ? void 0 : t.call(o)) ?? []);
      return e ? O(e, {
        ref: n
      }, !0) : null;
    };
  }
});
export {
  I as default
};
