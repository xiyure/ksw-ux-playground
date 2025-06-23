import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import a from "./options.mjs";
import { getExposeProxy as c } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useSize as u, SIZE_KEY as d } from "../../hooks/use_size.mjs";
import { useInheritSlot as S } from "../../hooks/use_inherit_slot.mjs";
import { ElSelect as z } from "../../node_modules/element-plus/es/components/select/index.mjs";
import { defineComponent as _, provide as h, createBlock as k, openBlock as E, createSlots as P, renderList as $, withCtx as o, renderSlot as p, guardReactiveProps as g, createVNode as K, mergeProps as R } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as v, unref as t } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as x } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const F = /* @__PURE__ */ _({
  name: "KSelect",
  __name: "select",
  props: {
    size: {}
  },
  setup(n, { expose: m }) {
    const r = u(n), s = v(), l = S(["default"]);
    return h(d, r), m(c({}, s)), (e, C) => (E(), k(t(z), R({
      ref_key: "inputRef",
      ref: s,
      class: "k-select"
    }, e.$attrs, {
      size: t(r).elSize
    }), P({
      default: o(() => [
        K(t(a), null, {
          default: o(() => [
            p(e.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 2
    }, [
      $(t(l)(e.$slots), (I, i) => ({
        name: i,
        fn: o((f) => [
          p(e.$slots, i, x(g(f)))
        ])
      }))
    ]), 1040, ["size"]));
  }
});
export {
  F as default
};
