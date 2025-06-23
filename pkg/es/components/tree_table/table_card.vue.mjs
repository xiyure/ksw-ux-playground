import { defineComponent as l, createElementBlock as n, openBlock as a, createElementVNode as c, Fragment as f, renderList as i, createBlock as m, unref as k, mergeProps as p, createSlots as u, withCtx as o, renderSlot as d } from "vue";
import { ElCard as y } from "../../node_modules/element-plus/es/components/card/index.mjs";
const _ = { class: "k-tree-table__card" }, h = { class: "k-tree-table__card-wrapper" }, w = /* @__PURE__ */ l({
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
    const s = t;
    return (e, b) => (a(), n("div", _, [
      c("div", h, [
        (a(!0), n(f, null, i(s.data, (r) => (a(), m(k(y), p({
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
  w as default
};
