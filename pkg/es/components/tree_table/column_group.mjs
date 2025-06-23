import { defineComponent as $, createVNode as m, mergeProps as S } from "vue";
import { KColumnGroup as h, KTableColumn as b } from "../table/index.mjs";
import A from "./table_column_content.vue.mjs";
import { SLOT_NAMES as G } from "./const.mjs";
const k = /* @__PURE__ */ $({
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
      return m(h, S(e, {
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
          }), m(A, {
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
      }), m(b, S({
        key: r.field
      }, r), i);
    }
    function g(e, r) {
      if (!r)
        return {};
      const n = {};
      for (const i of G) {
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
  k as default
};
