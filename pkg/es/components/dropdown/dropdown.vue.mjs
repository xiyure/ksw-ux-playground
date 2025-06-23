import { defineComponent as d, ref as a, provide as m, createBlock as f, openBlock as c, unref as o, mergeProps as u, withCtx as t, renderSlot as p, createElementVNode as w, toDisplayString as _, createVNode as k } from "vue";
import { getExposeProxy as D } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as z, SIZE_KEY as E } from "../../hooks/use_size.mjs";
import { ElDropdown as S, ElDropdownMenu as g } from "../../node_modules/element-plus/es/components/dropdown/index.mjs";
const h = { class: "k-dropdown-link" }, V = /* @__PURE__ */ d({
  name: "KDropdown",
  __name: "dropdown",
  props: {
    title: {},
    size: {}
  },
  setup(i, { expose: l }) {
    const r = i, n = z(r), s = a();
    return m(E, n), l(D({}, s)), (e, y) => (c(), f(o(S), u({
      ref_key: "kDropDownRef",
      ref: s,
      class: "k-dropdown"
    }, e.$attrs, {
      size: o(n).elSize
    }), {
      dropdown: t(() => [
        k(o(g), null, {
          default: t(() => [
            p(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      default: t(() => [
        p(e.$slots, "title", {}, () => [
          w("span", h, _(r.title), 1)
        ])
      ]),
      _: 3
    }, 16, ["size"]));
  }
});
export {
  V as default
};
