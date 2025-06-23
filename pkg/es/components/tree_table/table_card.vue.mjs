import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { ElCard as l } from "../../node_modules/element-plus/es/components/card/index.mjs";
import { defineComponent as c, createElementBlock as s, openBlock as a, createElementVNode as i, Fragment as f, renderList as m, createBlock as p, mergeProps as k, createSlots as u, withCtx as o, renderSlot as d } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { unref as y } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const _ = { class: "k-tree-table__card" }, h = { class: "k-tree-table__card-wrapper" }, C = /* @__PURE__ */ c({
  name: "TableCard",
  __name: "table_card",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    keyField: {
      type: String,
      default: "id"
    },
    cardAttrs: {
      type: Object
    }
  },
  setup(t) {
    const n = t;
    return (e, b) => (a(), s("div", _, [
      i("div", h, [
        (a(!0), s(f, null, m(n.data, (r) => (a(), p(y(l), k({
          key: r[t.keyField],
          class: "k-tree-table__card-item"
        }, t.cardAttrs), u({ _: 2 }, [
          e.$slots["card-content"] ? {
            name: "default",
            fn: o(() => [
              d(e.$slots, "card-content", { row: r })
            ]),
            key: "0"
          } : void 0,
          e.$slots["card-header"] ? {
            name: "header",
            fn: o(() => [
              d(e.$slots, "card-header", { row: r })
            ]),
            key: "1"
          } : void 0,
          e.$slots["card-footer"] ? {
            name: "footer",
            fn: o(() => [
              d(e.$slots, "card-footer", { row: r })
            ]),
            key: "2"
          } : void 0
        ]), 1040))), 128))
      ])
    ]));
  }
});
export {
  C as default
};
