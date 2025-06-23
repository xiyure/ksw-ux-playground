import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { getExposeProxy as m } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as d, SIZE_KEY as l } from "../../hooks/use_size.mjs";
import { ElDropdownMenu as f, ElDropdown as c } from "../../node_modules/element-plus/es/components/dropdown/index.mjs";
import { defineComponent as u, provide as w, createBlock as _, openBlock as k, withCtx as e, renderSlot as p, createElementVNode as D, createVNode as z, mergeProps as E } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as S, unref as r } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as g } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const h = { class: "k-dropdown-link" }, M = /* @__PURE__ */ u({
  name: "KDropdown",
  __name: "dropdown",
  props: {
    title: {},
    size: {}
  },
  setup(i, { expose: a }) {
    const t = i, n = d(t), s = S();
    return w(l, n), a(m({}, s)), (o, y) => (k(), _(r(c), E({
      ref_key: "kDropDownRef",
      ref: s,
      class: "k-dropdown"
    }, o.$attrs, {
      size: r(n).elSize
    }), {
      dropdown: e(() => [
        z(r(f), null, {
          default: e(() => [
            p(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      default: e(() => [
        p(o.$slots, "title", {}, () => [
          D("span", h, g(t.title), 1)
        ])
      ]),
      _: 3
    }, 16, ["size"]));
  }
});
export {
  M as default
};
