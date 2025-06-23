import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { TABLE_KEY as k } from "../table/const.mjs";
import { defineComponent as z, inject as B, computed as m, createElementBlock as c, createCommentVNode as u, openBlock as l, createBlock as b, createElementVNode as I, resolveDynamicComponent as v, renderSlot as E, Fragment as y, createTextVNode as w } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { toDisplayString as s, normalizeStyle as N } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const V = {
  key: 0,
  class: "column-default__content"
}, F = /* @__PURE__ */ z({
  __name: "table_column_content",
  props: {
    row: {
      type: Object,
      default: () => {
      }
    },
    col: {
      type: Object,
      default: () => {
      }
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
  setup(e) {
    const S = B(k), n = e, a = m(
      () => (t) => {
        var o;
        return ((o = t.iconStyle) == null ? void 0 : o.size) ?? (n.size === "mini" ? 16 : 20);
      }
    ), g = m(() => (t) => {
      var o;
      return t.__folder ? (o = S.value) != null && o.isTreeExpandByRow(t) ? "IconFolderOpen" : "IconFlowNested" : t.icon;
    });
    return (t, o) => {
      var i, r, d, f;
      return e.col.type ? u("", !0) : (l(), c("span", V, [
        n.col.showIcon && (e.row.icon || e.row.__folder) ? (l(), b(v(g.value(e.row)), {
          key: 0,
          color: e.row.__folder ? "#FAC814" : (i = e.row.iconStyle) != null && i.empty ? "#cdcacf" : (r = e.row.iconStyle) == null ? void 0 : r.color,
          size: a.value(e.row),
          grayscale: !!((d = e.row.iconStyle) != null && d.grayscale)
        }, null, 8, ["color", "size", "grayscale"])) : u("", !0),
        I("span", {
          class: "column-default__content__text",
          style: N({
            marginLeft: (e.row.icon || e.row.__folder) && e.col.showIcon ? `${a.value(e.row) + (((f = e.row.iconStyle) == null ? void 0 : f.indent) ?? 3)}px` : 0
          })
        }, [
          t.$slots[`${e.col.field ?? ""}-label`] ? E(t.$slots, `${e.col.field ?? ""}-label`, {
            key: 0,
            row: e.row,
            column: e.col
          }) : typeof e.col.formatter == "function" ? (l(), c(y, { key: 1 }, [
            w(s(e.col.formatter({ cellValue: e.row[e.col.field], row: e.row, column: e.col })), 1)
          ], 64)) : (l(), c(y, { key: 2 }, [
            w(s(e.row[e.col.field] === "" ? "-" : e.row[e.col.field] ?? "-"), 1)
          ], 64))
        ], 4)
      ]));
    };
  }
});
export {
  F as default
};
