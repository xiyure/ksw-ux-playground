import { defineComponent as l, createBlock as n, openBlock as p, unref as m, mergeProps as i, createSlots as u, withCtx as r, renderSlot as o, normalizeProps as d, guardReactiveProps as f } from "vue";
import "../../node_modules/vxe-table/es/components.mjs";
import { VxeColgroup as c } from "../../node_modules/vxe-table/es/colgroup/index.mjs";
const C = /* @__PURE__ */ l({
  name: "KColumnGroup",
  __name: "column_group",
  props: {
    resizable: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, h) => (p(), n(m(c), i({
      resizable: t.resizable
    }, e.$attrs), u({
      default: r(() => [
        o(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots.header ? {
        name: "header",
        fn: r((s) => [
          o(e.$slots, "header", d(f(s)))
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["resizable"]));
  }
});
export {
  C as default
};
