import { defineComponent as k, inject as z, computed as u, createElementBlock as c, createCommentVNode as m, openBlock as o, createBlock as b, createElementVNode as B, resolveDynamicComponent as I, normalizeStyle as v, renderSlot as E, Fragment as y, createTextVNode as w, toDisplayString as s } from "vue";
import { TABLE_KEY as $ } from "../table/const.mjs";
const h = {
  key: 0,
  class: "column-default__content"
}, F = /* @__PURE__ */ k({
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
    const S = z($), n = e, a = u(
      () => (l) => {
        var t;
        return ((t = l.iconStyle) == null ? void 0 : t.size) ?? (n.size === "mini" ? 16 : 20);
      }
    ), g = u(() => (l) => {
      var t;
      return l.__folder ? (t = S.value) != null && t.isTreeExpandByRow(l) ? "IconFolderOpen" : "IconFlowNested" : l.icon;
    });
    return (l, t) => {
      var i, r, d, f;
      return e.col.type ? m("", !0) : (o(), c("span", h, [
        n.col.showIcon && (e.row.icon || e.row.__folder) ? (o(), b(I(g.value(e.row)), {
          key: 0,
          color: e.row.__folder ? "#FAC814" : (i = e.row.iconStyle) != null && i.empty ? "#cdcacf" : (r = e.row.iconStyle) == null ? void 0 : r.color,
          size: a.value(e.row),
          grayscale: !!((d = e.row.iconStyle) != null && d.grayscale)
        }, null, 8, ["color", "size", "grayscale"])) : m("", !0),
        B("span", {
          class: "column-default__content__text",
          style: v({
            marginLeft: (e.row.icon || e.row.__folder) && e.col.showIcon ? `${a.value(e.row) + (((f = e.row.iconStyle) == null ? void 0 : f.indent) ?? 3)}px` : 0
          })
        }, [
          l.$slots[`${e.col.field ?? ""}-label`] ? E(l.$slots, `${e.col.field ?? ""}-label`, {
            key: 0,
            row: e.row,
            column: e.col
          }) : typeof e.col.formatter == "function" ? (o(), c(y, { key: 1 }, [
            w(s(e.col.formatter({ cellValue: e.row[e.col.field], row: e.row, column: e.col })), 1)
          ], 64)) : (o(), c(y, { key: 2 }, [
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
