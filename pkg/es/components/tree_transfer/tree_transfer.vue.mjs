import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KTableColumn as ne, KTable as le } from "../table/index.mjs";
import { KInput as F } from "../input/index.mjs";
import { sortFunc as Ue, compatibleSlots as Ye, sortBySmallerList as Ge } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useCheckbox as Je } from "./hooks/use_checkbox.mjs";
import { useData as re } from "./hooks/use_data.mjs";
import { useConfig as Oe } from "./hooks/use_config.mjs";
import { useLocale as We } from "../../hooks/use_locale.mjs";
import se from "./page.vue.mjs";
/* empty css           */
import { defineComponent as Xe, computed as c, watch as N, nextTick as Ze, createElementBlock as m, openBlock as i, createCommentVNode as K, createElementVNode as u, createVNode as b, createBlock as I, createSlots as ie, withCtx as y, renderSlot as C, Fragment as M, renderList as ce, mergeProps as ue, resolveDynamicComponent as fe, createTextVNode as q, guardReactiveProps as et } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as g, unref as n } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { withKeys as de } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
import ge from "../../node_modules/ksw-vue-icon/es/icons/base/search.mjs";
import { normalizeStyle as z, normalizeClass as P, normalizeProps as Q, toDisplayString as w } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import tt from "../../node_modules/ksw-vue-icon/es/icons/base/close.mjs";
const at = {
  key: 0,
  class: "k-transfer__filter !mb-3"
}, ot = {
  class: "flex justify-between items-center gap-2"
}, nt = {
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
}, dt = ["title"], gt = {
  class: "column-operate"
}, Vt = /* @__PURE__ */ Xe({
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
    } = We(), t = he, f = me, v = g([]), d = g(""), x = g(""), k = g(""), S = g(""), D = g(), L = g(), ye = g(), ve = g(), {
      treeConfig: V,
      scrollY: j
    } = Oe(t), h = c(() => {
      const e = Y.value.filter((a) => xe.value.has(a[t.rowKey]));
      return Ue(e, v.value, t.rowKey);
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
    } = re(U, be, f, E, v, d), {
      showTableData: J,
      dataLength: Ke,
      isPaging: Pe,
      paginationConfig: Re
    } = re(we, Ce, f, H, h, k), {
      checkedLeafData: xe,
      _checkboxMethods: _,
      init: Se,
      resetCheckboxStatus: $,
      checkboxAllChange: Le,
      checkBoxChange: Ve
    } = Je(U, ke, v, G, De), A = c(() => Array.isArray(t.columns)), O = c(() => function(e) {
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
        const o = v.value.find((l) => l.id === a.pid);
        if (o)
          a = o;
        else
          break;
      }
      const r = a.name;
      return {
        data: e[t.label],
        name: r
      };
    });
    N(() => t.data, (e) => {
      v.value = Array.isArray(e) ? [...e] : [];
    }, {
      immediate: !0
    }), N(() => h.value, (e, a = []) => {
      const r = e.map((o) => o[t.rowKey]), s = a.map((o) => o[t.rowKey]);
      r.join() !== s.join() && f("update:modelValue", r);
    }, {
      immediate: !0
    }), N(() => t.modelValue, async (e) => {
      if (!Array.isArray(e))
        return;
      await Ze(), $();
      const a = h.value.map((o) => o[t.rowKey]);
      if (e.join() === a.join())
        return;
      const r = new Set(e), s = Y.value.filter((o) => r.has(o[t.rowKey]));
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
      const s = t.data.find((o) => o[r] === e[a]);
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
    function Ne() {
      const a = L.value.tableInstance.getTableData().fullData.map((r) => r[t.rowKey]);
      v.value = Ge(v.value, a), f("drag", h.value), f("change", h.value);
    }
    function T(e, a) {
      return typeof e == "function" ? e == null ? void 0 : e(a) : e;
    }
    function Me(e) {
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
      d.value = x.value, $();
    }
    function Z() {
      k.value = S.value;
    }
    function Qe() {
      return t.showSearchInput === !0 ? [d.value, k.value] : t.showSearchInput === "left" ? d.value : k.value;
    }
    function je(e) {
      e === "left" ? d.value = "" : (e === "right" || (d.value = ""), k.value = "");
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
    const te = g(1);
    return pe({
      clearData: ee,
      clearQuery: je,
      getQuery: Qe,
      ..._
    }), (e, a) => {
      var r, s;
      return i(), m("div", {
        class: P(["k-tree-transfer", {
          "h-full": e.adaptive
        }])
      }, [e.showSearchInput === !0 || e.showSearchInput === "left" ? (i(), m("div", at, [u("div", ot, [b(n(F), {
        ref_key: "KTransferInputLeftRef",
        ref: ye,
        modelValue: x.value,
        "onUpdate:modelValue": a[0] || (a[0] = (o) => x.value = o),
        class: "flex-1",
        placeholder: (r = n(R)) == null ? void 0 : r("treeTransfer.enterInputSearch"),
        "suffix-icon": n(ge),
        onKeyup: de(X, ["enter"]),
        onChange: X
      }, null, 8, ["modelValue", "placeholder", "suffix-icon"]), e.showSearchInput === !0 ? (i(), I(n(F), {
        key: 0,
        ref_key: "KTransferInputRightRef",
        ref: ve,
        modelValue: S.value,
        "onUpdate:modelValue": a[1] || (a[1] = (o) => S.value = o),
        class: "flex-1 ml-[10px]",
        placeholder: (s = n(R)) == null ? void 0 : s("treeTransfer.enterInputSearch"),
        "suffix-icon": n(ge),
        onKeyup: de(Z, ["enter"]),
        onChange: Z
      }, null, 8, ["modelValue", "placeholder", "suffix-icon"])) : K("", !0)])])) : K("", !0), u("div", {
        class: P(["k-transfer__body", {
          "flex-1": e.adaptive
        }])
      }, [u("div", nt, [u("div", {
        class: P(["k-transfer__list", e.useTree ? "transfer-tree-table" : ""]),
        style: z({
          height: e.adaptive ? "100%" : e.tableHeight + "px"
        })
      }, [b(n(le), {
        ref_key: "treeLeftRef",
        ref: D,
        size: "mini",
        border: !1,
        height: "100%",
        data: n(G),
        "tree-config": n(V),
        "row-config": {
          keyField: e.rowKey
        },
        "scroll-y": n(j),
        "checkbox-config": {
          checkRowKeys: e.defaultData,
          trigger: "cell",
          checkMethod: Me
        },
        onCheckboxChange: a[2] || (a[2] = (o) => {
          n(Ve)(o), f("change", h.value);
        }),
        onCheckboxAll: a[3] || (a[3] = (o) => {
          n(Le)(o), f("change", h.value);
        })
      }, ie({
        default: y(() => [(i(!0), m(M, null, ce(E.value, (o) => (i(), I(n(ne), Q(ue({
          key: o.field
        }, o)), {
          default: y(({
            row: l,
            column: p
          }) => [C(e.$slots, "left-cell", {
            row: l,
            column: p
          }, () => {
            var B, ae, oe;
            return [u("span", {
              class: P(["tree-transfer__cell", {
                "list-item-disabled": l.disabled
              }]),
              style: z({
                marginLeft: `${$e.value(l) * (((B = t.treeConfig) == null ? void 0 : B.indent) ?? 12)}px`
              }),
              onClick: (He) => Fe(l, He)
            }, [(i(), I(fe((ae = O.value(l)) == null ? void 0 : ae.icon), {
              class: "column-icon",
              color: (oe = O.value(l)) == null ? void 0 : oe.color
            }, null, 8, ["color"])), o.field ? (i(), m("span", {
              key: 0,
              class: "tree-transfer__cell-label",
              title: l[o.field]
            }, w(l[o.field]), 9, rt)) : K("", !0)], 14, lt)];
          })]),
          _: 2
        }, 1040))), 128))]),
        _: 2
      }, [e.$slots.empty && d.value ? {
        name: "empty",
        fn: y(() => [C(e.$slots, "empty", {
          query: d.value
        })]),
        key: "0"
      } : void 0]), 1032, ["data", "tree-config", "row-config", "scroll-y", "checkbox-config"])], 6), b(se, {
        visible: n(Ie),
        position: "left",
        emits: f,
        "data-length": n(Te),
        "page-config": n(_e),
        "reset-checkbox-status": n($)
      }, {
        default: y(({
          pageConfig: o
        }) => [b(n(F), {
          modelValue: te.value,
          "onUpdate:modelValue": a[4] || (a[4] = (l) => te.value = l),
          onChange: (l) => o.currentPage = l
        }, null, 8, ["modelValue", "onChange"])]),
        _: 1
      }, 8, ["visible", "data-length", "page-config", "reset-checkbox-status"])]), u("div", st, [u("div", {
        class: "k-transfer__list",
        style: z({
          height: e.adaptive ? "100%" : e.tableHeight + "px"
        })
      }, [b(n(le), {
        ref_key: "tableRightRef",
        ref: L,
        size: "mini",
        border: !1,
        height: "100%",
        data: n(J),
        "row-config": {
          useKey: !0,
          drag: e.showDrag
        },
        "scroll-y": n(j),
        onRowDragend: Ne
      }, ie({
        default: y(() => [(i(!0), m(M, null, ce(H.value, (o) => (i(), I(n(ne), Q(ue({
          key: o.field
        }, o)), {
          header: y((l) => [C(e.$slots, n(Ye)(e.$slots, ["right-header", "rightHeader"]), Q(et(l)), () => {
            var p;
            return [A.value ? (i(), m(M, {
              key: 1
            }, [q(w(o.title ?? ""), 1)], 64)) : (i(), m("div", it, [u("span", ct, w(o.title ?? ""), 1), u("span", {
              class: "clear-data",
              onClick: Ee
            }, w((p = n(R)) == null ? void 0 : p("treeTransfer.clearData")), 1)]))];
          })]),
          default: y(({
            row: l,
            column: p
          }) => [A.value ? C(e.$slots, "right-cell", {
            key: 1,
            row: l,
            column: p
          }, () => [q(w(l[o.field ?? ""]), 1)]) : (i(), m("div", ut, [u("span", ft, [C(e.$slots, "right-cell", {
            row: l,
            column: p
          }, () => [t.icon ? (i(), I(fe(T(t.icon, l)), {
            key: 0,
            class: "column-icon"
          })) : K("", !0), u("span", {
            class: "tree-transfer__cell-label",
            title: l[t.label]
          }, [C(e.$slots, "right-label", {
            row: l,
            column: p,
            parentData: Ae.value(l)
          }, () => [q(w(l[t.label]), 1)])], 8, dt)])]), u("div", gt, [b(n(tt), {
            class: "column-close",
            onClick: (B) => ze(l)
          }, null, 8, ["onClick"])])]))]),
          _: 2
        }, 1040))), 128))]),
        _: 2
      }, [e.$slots.empty && d.value ? {
        name: "empty",
        fn: y(() => [C(e.$slots, "empty", {
          query: d.value
        })]),
        key: "0"
      } : void 0]), 1032, ["data", "row-config", "scroll-y"])], 4), b(se, {
        visible: n(Pe),
        position: "right",
        emits: f,
        "data-length": n(Ke),
        "page-config": n(Re)
      }, null, 8, ["visible", "data-length", "page-config"])])], 2)], 2);
    };
  }
});
export {
  Vt as default
};
