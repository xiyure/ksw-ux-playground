import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import "../../node_modules/vxe-table/es/components.mjs";
import { VxeColgroup as p } from "../../node_modules/vxe-table/es/colgroup/index.mjs";
import { defineComponent as l, createBlock as m, openBlock as n, createSlots as i, withCtx as r, renderSlot as o, guardReactiveProps as u, mergeProps as f } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { normalizeProps as d } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { unref as c } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const k = /* @__PURE__ */ l({
  name: "KColumnGroup",
  __name: "column_group",
  props: {
    resizable: { type: Boolean }
  },
  setup(t) {
    const a = t;
    return (e, h) => (n(), m(c(p), f({
      resizable: a.resizable
    }, e.$attrs), i({
      default: r(() => [
        o(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.header ? {
        name: "header",
        fn: r((s) => [
          o(e.$slots, "header", d(u(s)))
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["resizable"]));
  }
});
export {
  k as default
};
