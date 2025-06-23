import { defineComponent as Ue, ref as d, computed as c, watch as F, nextTick as Ye, createElementBlock as m, openBlock as i, normalizeClass as K, createCommentVNode as P, createElementVNode as u, createVNode as b, createBlock as I, unref as o, withKeys as oe, normalizeStyle as M, createSlots as le, withCtx as y, Fragment as N, renderList as re, normalizeProps as q, mergeProps as se, renderSlot as C, resolveDynamicComponent as ie, toDisplayString as w, createTextVNode as z, guardReactiveProps as Ge } from "vue";
import { KTable as ce, KTableColumn as ue } from "../table/index.mjs";
import { KInput as Q } from "../input/index.mjs";
import { sortFunc as Je, compatibleSlots as Oe, sortBySmallerList as We } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useCheckbox as Xe } from "./hooks/use_checkbox.mjs";
import { useData as fe } from "./hooks/use_data.mjs";
import { useConfig as Ze } from "./hooks/use_config.mjs";
import { useLocale as et } from "../../hooks/use_locale.mjs";
import ge from "./page.vue.mjs";
/* empty css           */
import de from "../../node_modules/ksw-vue-icon/es/icons/base/search.mjs";
import tt from "../../node_modules/ksw-vue-icon/es/icons/base/close.mjs";
const at = {
  key: 0,
  class: "k-transfer__filter !mb-3"
}, nt = {
  class: "flex justify-between items-center gap-2"
}, ot = {
  class: "k-transfer-content k-transfer-content__left"
}, lt = ["onClick"], rt = ["title"], st = {
  class: "k-transfer-content k-transfer-content__right"
}, it = {
  key: 0,
  class: "right-data-header"
}, ct = {
  class: "right-data-title"
}, ut = {
  key: 0,
  class: "column-body"
}, ft = {
  class: "column-content"
}, gt = ["title"], dt = {
  class: "column-operate"
}, Rt = /* @__PURE__ */ Ue({
  name: "KTreeTransfer",
  __name: "tree_transfer",
  props: {
    modelValue: {},
    rowKey: {
      default: "id"
    },
    data: {},
    defaultData: {
      default: () => []
    },
    titles: {},
    useTree: {
      type: Boolean,
      default: !1
    },
    expandIcon: {},
    expandIconColor: {},
    collapseIcon: {},
    collapseIconColor: {},
    icon: {},
    iconColor: {},
    treeConfig: {},
    label: {
      default: "label"
    },
    scrollY: {},
    showDrag: {
      type: Boolean,
      default: !1
    },
    showSearchInput: {
      type: [Boolean, String],
      default: "left"
    },
    searchConfig: {},
    rightSearchConfig: {},
    showPage: {
      type: [Boolean, String],
      default: !1
    },
    leftPaginationConfig: {},
    rightPaginationConfig: {},
    columns: {},
    tableHeight: {
      default: 300
    },
    checkMethod: {},
    checkboxAll: {
      type: Boolean
    },
    adaptive: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change", "drag", "remote-query", "server-paging", "page-current-change", "page-size-change", "page-change", "page-prev-click", "page-next-click", "update:modelValue"],
  setup(he, {
    expose: pe,
    emit: me
  }) {
    const {
      t: R
    } = et(), t = he, f = me, v = d([]), g = d(""), x = d(""), k = d(""), S = d(""), D = d(), L = d(), ye = d(), ve = d(), {
      treeConfig: V,
      scrollY: j
    } = Ze(t), h = c(() => {
      const e = Y.value.filter((a) => xe.value.has(a[t.rowKey]));
      return Je(e, v.value, t.rowKey);
    }), E = c(() => {
      var e;
      return Array.isArray(t.columns) ? t.columns : [{
        type: "checkbox",
        field: t.label,
        title: ((e = t.titles) == null ? void 0 : e[0]) ?? "",
        treeNode: t.useTree
      }];
    }), H = c(() => {
      var e;
      return A.value ? t.columns.filter((a) => a.type !== "checkbox") : [{
        field: t.label,
        title: ((e = t.titles) == null ? void 0 : e[1]) ?? "",
        dragSort: !0
      }];
    }), be = c(() => ({
      showPage: t.showPage === !0 || t.showPage === "left",
      paginationConfig: t.leftPaginationConfig,
      useTree: t.useTree,
      treeConfig: t.treeConfig,
      rowKey: t.rowKey,
      searchConfig: t.searchConfig
    })), Ce = c(() => ({
      showPage: t.showPage === !0 || t.showPage === "right",
      paginationConfig: t.rightPaginationConfig || t.leftPaginationConfig,
      useTree: !1,
      rowKey: t.rowKey,
      searchConfig: t.rightSearchConfig
    })), ke = c(() => ({
      showPage: t.showPage === !0 || t.showPage === "left",
      checkboxConfig: {
        checkAll: t.checkboxAll,
        checkRowKeys: t.defaultData,
        checkMethod: t.checkMethod
      },
      useTree: t.useTree,
      treeConfig: t.treeConfig,
      rowKey: t.rowKey
    })), U = c(() => {
      var e;
      return (e = D.value) == null ? void 0 : e.tableInstance;
    }), we = c(() => {
      var e;
      return (e = L.value) == null ? void 0 : e.tableInstance;
    }), {
      visibleData: Y,
      showTableData: G,
      dataLength: Te,
      isPaging: Ie,
      tableCacheData: De,
      paginationConfig: _e
    } = fe(U, be, f, E, v, g), {
      showTableData: J,
      dataLength: Ke,
      isPaging: Pe,
      paginationConfig: Re
    } = fe(we, Ce, f, H, h, k), {
      checkedLeafData: xe,
      _checkboxMethods: _,
      init: Se,
      resetCheckboxStatus: $,
      checkboxAllChange: Le,
      checkBoxChange: Ve
    } = Xe(U, ke, v, G, De), A = c(() => Array.isArray(t.columns)), O = c(() => function(e) {
      var s;
      const a = (s = D.value) == null ? void 0 : s.tableInstance.isTreeExpandByRow(e), r = !(e.children && e.children.length);
      if (r && e.nodeType === 1)
        return {
          icon: T(t.collapseIcon, e),
          color: t.collapseIconColor
        };
      if (t.icon && r)
        return {
          icon: T(t.icon, e),
          color: t.iconColor
        };
      if (t.expandIcon && a && !r)
        return {
          icon: T(t.expandIcon, e),
          color: t.expandIconColor
        };
      if (t.collapseIcon && !a && !r)
        return {
          icon: T(t.collapseIcon, e),
          color: t.collapseIconColor
        };
    }), $e = c(() => (e) => W(e)), Ae = c(() => function(e) {
      let a = e;
      for (; a.pid; ) {
        const n = v.value.find((l) => l.id === a.pid);
        if (n)
          a = n;
        else
          break;
      }
      const r = a.name;
      return {
        data: e[t.label],
        name: r
      };
    });
    F(() => t.data, (e) => {
      v.value = Array.isArray(e) ? [...e] : [];
    }, {
      immediate: !0
    }), F(() => h.value, (e, a = []) => {
      const r = e.map((n) => n[t.rowKey]), s = a.map((n) => n[t.rowKey]);
      r.join() !== s.join() && f("update:modelValue", r);
    }, {
      immediate: !0
    }), F(() => t.modelValue, async (e) => {
      if (!Array.isArray(e))
        return;
      await Ye(), $();
      const a = h.value.map((n) => n[t.rowKey]);
      if (e.join() === a.join())
        return;
      const r = new Set(e), s = Y.value.filter((n) => r.has(n[t.rowKey]));
      Se(s);
    }, {
      immediate: !0,
      deep: !0
    });
    function W(e) {
      if (!t.useTree)
        return 0;
      const {
        parentField: a,
        rowField: r
      } = Be();
      if (!e[a])
        return 0;
      const s = t.data.find((n) => n[r] === e[a]);
      return s ? 1 + W(s) : 0;
    }
    function Be() {
      var r, s;
      const e = ((r = V.value) == null ? void 0 : r.parentField) || "pid", a = ((s = V.value) == null ? void 0 : s.rowField) || "id";
      return {
        parentField: e,
        rowField: a
      };
    }
    function Fe(e, a) {
      t.useTree && !qe(e) && (a.stopPropagation(), D.value.tableInstance.toggleTreeExpand(e));
    }
    function Me() {
      const a = L.value.tableInstance.getTableData().fullData.map((r) => r[t.rowKey]);
      v.value = We(v.value, a), f("drag", h.value), f("change", h.value);
    }
    function T(e, a) {
      return typeof e == "function" ? e == null ? void 0 : e(a) : e;
    }
    function Ne(e) {
      var r;
      const {
        row: a
      } = e;
      return ((r = t.checkMethod) == null ? void 0 : r.call(t, e)) ?? !a.disabled ?? !0;
    }
    function qe(e) {
      return !e.children || e.children.length === 0;
    }
    function ze(e) {
      _.setCheckboxRow(e, !1), f("change", h.value);
    }
    function X() {
      g.value = x.value, $();
    }
    function Z() {
      k.value = S.value;
    }
    function Qe() {
      return t.showSearchInput === !0 ? [g.value, k.value] : t.showSearchInput === "left" ? g.value : k.value;
    }
    function je(e) {
      e === "left" ? g.value = "" : (e === "right" || (g.value = ""), k.value = "");
    }
    function Ee() {
      h.value.length !== 0 && (ee(), f("change", []));
    }
    function ee(e = !1) {
      if (!e) {
        _.setCheckboxRow(J.value, !1);
        return;
      }
      _.setAllCheckboxRow(!1);
    }
    const te = d(1);
    return pe({
      clearData: ee,
      clearQuery: je,
      getQuery: Qe,
      ..._
    }), (e, a) => {
      var r, s;
      return i(), m("div", {
        class: K(["k-tree-transfer", {
          "h-full": e.adaptive
        }])
      }, [e.showSearchInput === !0 || e.showSearchInput === "left" ? (i(), m("div", at, [u("div", nt, [b(o(Q), {
        ref_key: "KTransferInputLeftRef",
        ref: ye,
        modelValue: x.value,
        "onUpdate:modelValue": a[0] || (a[0] = (n) => x.value = n),
        class: "flex-1",
        placeholder: (r = o(R)) == null ? void 0 : r("treeTransfer.enterInputSearch"),
        "suffix-icon": o(de),
        onKeyup: oe(X, ["enter"]),
        onChange: X
      }, null, 8, ["modelValue", "placeholder", "suffix-icon"]), e.showSearchInput === !0 ? (i(), I(o(Q), {
        key: 0,
        ref_key: "KTransferInputRightRef",
        ref: ve,
        modelValue: S.value,
        "onUpdate:modelValue": a[1] || (a[1] = (n) => S.value = n),
        class: "flex-1 ml-[10px]",
        placeholder: (s = o(R)) == null ? void 0 : s("treeTransfer.enterInputSearch"),
        "suffix-icon": o(de),
        onKeyup: oe(Z, ["enter"]),
        onChange: Z
      }, null, 8, ["modelValue", "placeholder", "suffix-icon"])) : P("", !0)])])) : P("", !0), u("div", {
        class: K(["k-transfer__body", {
          "flex-1": e.adaptive
        }])
      }, [u("div", ot, [u("div", {
        class: K(["k-transfer__list", e.useTree ? "transfer-tree-table" : ""]),
        style: M({
          height: e.adaptive ? "100%" : e.tableHeight + "px"
        })
      }, [b(o(ce), {
        ref_key: "treeLeftRef",
        ref: D,
        size: "mini",
        border: !1,
        height: "100%",
        data: o(G),
        "tree-config": o(V),
        "row-config": {
          keyField: e.rowKey
        },
        "scroll-y": o(j),
        "checkbox-config": {
          checkRowKeys: e.defaultData,
          trigger: "cell",
          checkMethod: Ne
        },
        onCheckboxChange: a[2] || (a[2] = (n) => {
          o(Ve)(n), f("change", h.value);
        }),
        onCheckboxAll: a[3] || (a[3] = (n) => {
          o(Le)(n), f("change", h.value);
        })
      }, le({
        default: y(() => [(i(!0), m(N, null, re(E.value, (n) => (i(), I(o(ue), q(se({
          key: n.field
        }, n)), {
          default: y(({
            row: l,
            column: p
          }) => [C(e.$slots, "left-cell", {
            row: l,
            column: p
          }, () => {
            var B, ae, ne;
            return [u("span", {
              class: K(["tree-transfer__cell", {
                "list-item-disabled": l.disabled
              }]),
              style: M({
                marginLeft: `${$e.value(l) * (((B = t.treeConfig) == null ? void 0 : B.indent) ?? 12)}px`
              }),
              onClick: (He) => Fe(l, He)
            }, [(i(), I(ie((ae = O.value(l)) == null ? void 0 : ae.icon), {
              class: "column-icon",
              color: (ne = O.value(l)) == null ? void 0 : ne.color
            }, null, 8, ["color"])), n.field ? (i(), m("span", {
              key: 0,
              class: "tree-transfer__cell-label",
              title: l[n.field]
            }, w(l[n.field]), 9, rt)) : P("", !0)], 14, lt)];
          })]),
          _: 2
        }, 1040))), 128))]),
        _: 2
      }, [e.$slots.empty && g.value ? {
        name: "empty",
        fn: y(() => [C(e.$slots, "empty", {
          query: g.value
        })]),
        key: "0"
      } : void 0]), 1032, ["data", "tree-config", "row-config", "scroll-y", "checkbox-config"])], 6), b(ge, {
        visible: o(Ie),
        position: "left",
        emits: f,
        "data-length": o(Te),
        "page-config": o(_e),
        "reset-checkbox-status": o($)
      }, {
        default: y(({
          pageConfig: n
        }) => [b(o(Q), {
          modelValue: te.value,
          "onUpdate:modelValue": a[4] || (a[4] = (l) => te.value = l),
          onChange: (l) => n.currentPage = l
        }, null, 8, ["modelValue", "onChange"])]),
        _: 1
      }, 8, ["visible", "data-length", "page-config", "reset-checkbox-status"])]), u("div", st, [u("div", {
        class: "k-transfer__list",
        style: M({
          height: e.adaptive ? "100%" : e.tableHeight + "px"
        })
      }, [b(o(ce), {
        ref_key: "tableRightRef",
        ref: L,
        size: "mini",
        border: !1,
        height: "100%",
        data: o(J),
        "row-config": {
          useKey: !0,
          drag: e.showDrag
        },
        "scroll-y": o(j),
        onRowDragend: Me
      }, le({
        default: y(() => [(i(!0), m(N, null, re(H.value, (n) => (i(), I(o(ue), q(se({
          key: n.field
        }, n)), {
          header: y((l) => [C(e.$slots, o(Oe)(e.$slots, ["right-header", "rightHeader"]), q(Ge(l)), () => {
            var p;
            return [A.value ? (i(), m(N, {
              key: 1
            }, [z(w(n.title ?? ""), 1)], 64)) : (i(), m("div", it, [u("span", ct, w(n.title ?? ""), 1), u("span", {
              class: "clear-data",
              onClick: Ee
            }, w((p = o(R)) == null ? void 0 : p("treeTransfer.clearData")), 1)]))];
          })]),
          default: y(({
            row: l,
            column: p
          }) => [A.value ? C(e.$slots, "right-cell", {
            key: 1,
            row: l,
            column: p
          }, () => [z(w(l[n.field ?? ""]), 1)]) : (i(), m("div", ut, [u("span", ft, [C(e.$slots, "right-cell", {
            row: l,
            column: p
          }, () => [t.icon ? (i(), I(ie(T(t.icon, l)), {
            key: 0,
            class: "column-icon"
          })) : P("", !0), u("span", {
            class: "tree-transfer__cell-label",
            title: l[t.label]
          }, [C(e.$slots, "right-label", {
            row: l,
            column: p,
            parentData: Ae.value(l)
          }, () => [z(w(l[t.label]), 1)])], 8, gt)])]), u("div", dt, [b(o(tt), {
            class: "column-close",
            onClick: (B) => ze(l)
          }, null, 8, ["onClick"])])]))]),
          _: 2
        }, 1040))), 128))]),
        _: 2
      }, [e.$slots.empty && g.value ? {
        name: "empty",
        fn: y(() => [C(e.$slots, "empty", {
          query: g.value
        })]),
        key: "0"
      } : void 0]), 1032, ["data", "row-config", "scroll-y"])], 4), b(ge, {
        visible: o(Pe),
        position: "right",
        emits: f,
        "data-length": o(Ke),
        "page-config": o(Re)
      }, null, 8, ["visible", "data-length", "page-config"])])], 2)], 2);
    };
  }
});
export {
  Rt as default
};
