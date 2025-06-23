import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KColumnGroup as $, KTableColumn as h } from "../table/index.mjs";
import b from "./table_column_content.vue.mjs";
import { SLOT_NAMES as A } from "./const.mjs";
import { defineComponent as G, createVNode as m, mergeProps as S } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const L = /* @__PURE__ */ G({
  name: "ColumnGroup",
  props: {
    data: Array,
    column: {
      type: Object,
      default: () => ({})
    },
    size: {
      type: String,
      default: "default"
    },
    align: {
      type: String,
      default: () => "left"
    }
  },
  setup(f, {
    slots: a
  }) {
    return () => Array.isArray(f.column.group) && f.column.group.length ? p(f.column) : l(a, f.column);
    function p(e) {
      const r = e.group || [], n = g(a, e.field);
      return m($, S(e, {
        key: e.field,
        resizable: !0
      }), {
        default: () => [r.map((i) => Array.isArray(i.group) && i.group.length ? p(i) : l(a, i))],
        ...n
      });
    }
    function l(e, r) {
      const n = r.field ?? "", i = g(e, n);
      return (r.render || (e[`${n}-field`] || e[n] || r.showIcon) && !r.type) && (i.default = (u) => {
        var d;
        const {
          row: t
        } = u;
        if (typeof r.render == "function")
          return r.render(u);
        if (e[`${n}-field`] || e[n])
          return (d = e[`${n}-field`] ?? e[n]) == null ? void 0 : d(u);
        if (r.showIcon) {
          const c = {}, o = `${n}-label`;
          return e[o] && (c[o] = (C) => {
            var y;
            return (y = e[o]) == null ? void 0 : y.call(e, C);
          }), m(b, {
            key: r.field,
            col: r,
            row: t,
            size: f.size,
            align: f.align
          }, c);
        }
      }), (r.renderEdit || e[`${n}-edit`]) && (i.edit = (u) => {
        var t;
        return typeof r.renderEdit == "function" ? r.renderEdit(u) : (t = e[`${n}-edit`]) == null ? void 0 : t.call(e, u);
      }), m(h, S({
        key: r.field
      }, r), i);
    }
    function g(e, r) {
      if (!r)
        return {};
      const n = {};
      for (const i of A) {
        const u = `${r}-${i}`;
        e[u] && (n[i] = (t) => {
          var d;
          return (d = e[u]) == null ? void 0 : d.call(e, t);
        });
      }
      return n;
    }
  }
});
export {
  L as default
};
