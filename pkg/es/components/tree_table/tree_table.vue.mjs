import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import gt from "./column_group.mjs";
import { KOperate as ht } from "../operate/index.mjs";
import { KTable as mt } from "../table/index.mjs";
import { KPagination as pt } from "../pagination/index.mjs";
import vt from "./table_header.vue.mjs";
import Ct from "./table_card.vue.mjs";
import { useMethods as wt } from "./hooks/use_methods.mjs";
import { useCheckbox as yt } from "./hooks/use_checkbox.mjs";
import { useData as bt } from "./hooks/use_data.mjs";
import { useConfig as St } from "./hooks/use_config.mjs";
import { useHeaderControl as kt } from "./hooks/use_header_control.mjs";
import { useAdvancedFilter as Tt } from "./hooks/use_advanced_filter.mjs";
import { SIZE_KEY as Ft } from "../../hooks/use_size.mjs";
import { useLocale as Dt } from "../../hooks/use_locale.mjs";
import { useDeprecated as ge } from "../../hooks/use_deprecated.mjs";
import { useInheritSlot as Bt } from "../../hooks/use_inherit_slot.mjs";
import { getExposeProxy as Rt } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { TABLE_SIZE_KEY as zt } from "./const.mjs";
import Ht from "../../node_modules/lodash-es/cloneDeep.mjs";
import { defineComponent as Pt, computed as f, onBeforeMount as At, watch as Y, nextTick as H, provide as P, resolveDirective as Ot, createElementBlock as b, openBlock as h, createVNode as A, createBlock as he, createCommentVNode as me, createSlots as O, renderList as S, withCtx as k, renderSlot as M, guardReactiveProps as E, withDirectives as Mt, Fragment as Et, mergeProps as j } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as m, unref as n } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as x, normalizeStyle as xt, normalizeClass as It } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const Kt = {
  key: 0,
  ref: "RefTableBox",
  class: "table-box flex-1 overflow-hidden"
}, Lt = {
  key: 0,
  class: "batch-operate"
}, qt = {
  key: 2,
  ref: "RefTablePagination",
  class: "pagination-box"
}, ho = /* @__PURE__ */ Pt({
  name: "KTreeTable",
  __name: "tree_table",
  props: {
    data: {},
    size: {},
    sortConfig: {},
    filterConfig: {},
    seqConfig: {},
    rowConfig: {},
    editConfig: {},
    scrollY: {},
    columnConfig: {},
    checkboxConfig: {},
    treeConfig: {},
    showOverflow: { type: [String, Boolean], default: !0 },
    autoResize: { type: Boolean, default: !0 },
    height: { default: "100%" },
    align: {},
    border: { type: [Boolean, String], default: "default" },
    emptyText: {},
    rowStyle: {},
    column: {},
    showPage: { type: Boolean, default: !0 },
    useTree: { type: Boolean },
    isRemoteQuery: { type: Boolean },
    isServerPaging: { type: Boolean },
    paginationConfig: {},
    showDescription: { type: Boolean, default: !0 },
    showHeaderTools: { type: Boolean, default: !0 },
    batchOperations: {},
    showBatchOperation: { type: Boolean },
    batchOperateConfig: {},
    showColumnMenu: { type: Boolean, default: !1 },
    showDragColumn: { type: Boolean },
    cellClickToggleHighlight: { type: Boolean, default: !0 },
    widgets: {},
    showSearchInput: { type: Boolean, default: !0 },
    showFilter: { type: Boolean, default: !0 },
    showRefresh: { type: Boolean, default: !0 },
    showTransfer: { type: Boolean, default: !1 },
    showSizeControl: { type: Boolean },
    advancedFilterConfig: {},
    searchConfig: {},
    style: {},
    class: {},
    simple: { type: Boolean },
    defaultTransferData: {},
    onTransferShow: {},
    onTransferHide: {},
    onTransferChange: {},
    onAdvancedFilterShow: {},
    onAdvancedFilterHide: {},
    useAntStyle: { type: Boolean },
    round: { type: Boolean, default: !1 },
    adaptive: { type: Boolean },
    hasSpace: { type: Boolean, default: !1 },
    requestMethod: {},
    cardOptions: {},
    defaultMode: { default: "list" },
    transferConfig: {}
  },
  emits: [
    "remote-query",
    "server-paging",
    "refresh",
    "highlight-clear",
    "highlight-change",
    "cell-click",
    "resizable-change",
    "hide-column",
    "checkbox-change",
    "checkbox-all",
    "row-dragend",
    "sort-change",
    "filter-change",
    "clear-filter",
    "advanced-filter-confirm",
    "advanced-filter-clear",
    "page-current-change",
    "page-size-change",
    "page-change",
    "prev-click",
    "next-click"
  ],
  setup(pe, { expose: ve, emit: Ce }) {
    const r = pe;
    ge(
      {
        scope: "k-tree-table",
        from: "isRemoteQuery",
        replacement: "searchConfig.isRemoteQuery",
        version: "2.0.0"
      },
      f(() => !!r.isRemoteQuery)
    ), ge(
      {
        scope: "k-tree-table",
        from: "isServerPaging",
        replacement: "paginationConfig.isRemotePaging",
        version: "2.0.0"
      },
      f(() => !!r.isServerPaging)
    );
    const { t: T } = Dt(), we = Bt(["default"]), s = Ce, U = m(), v = m(r.size), I = m(r.defaultMode === "card" ? "card" : "list"), C = m(), F = m([]), g = m([]), D = m(""), ye = f(() => {
      var a, i, o;
      const e = !!((i = (a = B.value) == null ? void 0 : a.conditionList) != null && i.length), t = ((o = r.advancedFilterConfig) == null ? void 0 : o.remote) === !0;
      return e && !t ? w.value : g.value;
    }), c = f(() => U.value), be = f(() => v.value ?? void 0), Z = f(() => {
      const e = ne.value.map((t) => t.id);
      return !!(r.showHeaderTools && e.includes("transfer"));
    }), Se = f(() => {
      const { placeholder: e = T == null ? void 0 : T("table.searchTable") } = r.searchConfig ?? {};
      return { placeholder: e };
    }), ke = f(() => {
      const { remote: e, ignoreCase: t, dateFormat: a, timeFormat: i, defaultCondition: o } = r.advancedFilterConfig ?? {};
      return {
        conditionInfo: B.value,
        data: g.value,
        columns: xe.value,
        text: Ie.value,
        remote: e,
        ignoreCase: t,
        dateFormat: a,
        timeFormat: i,
        defaultCondition: o
      };
    }), Te = f(() => {
      const { drag: e = !0, showSearch: t = !0 } = r.transferConfig ?? {};
      return {
        drag: e,
        showSearch: t,
        selectData: W.value,
        originData: Re.value,
        defaultHeader: ze.value
      };
    }), G = f(() => I.value === "list"), { setTableData: Fe, handleSortAndFilter: J, dragSort: De, _methods: Be } = wt(r, c), {
      flatColumns: K,
      selectData: W,
      originData: Re,
      defaultHeader: ze,
      updateTransfer: He,
      transferChange: X,
      transferHide: Pe,
      transferShow: Ae,
      sortTableHeader: Oe,
      updateColVisible: Me,
      _transferMethods: Ee
    } = kt(c, C, r, F), {
      newFilterData: w,
      filterColumns: xe,
      filterConditionInfo: B,
      headerText: Ie,
      advancedFilterShow: Ke,
      advancedFilterHide: Le,
      getAdvancedCondition: qe
    } = Tt(C, r, F), {
      showTableData: d,
      isPaging: L,
      dataLength: _,
      paginationConfig: ee,
      treeStore: te,
      changePageSize: Qe,
      changeCurrentPage: $e,
      handleRemoteData: oe
    } = bt(
      c,
      r,
      s,
      K,
      g,
      ye,
      D,
      B,
      V
    ), { widgets: ne, treeConfig: re, sortConfig: Ne, rowConfig: ae, editConfig: Ve, scrollY: Ye, columnConfig: je, seqConfig: Ue } = St(r, { isPaging: L, paginationConfig: ee }), {
      checkboxConfig: Ze,
      batchOpConfig: le,
      closeBatchOperation: Ge,
      checkBoxChange: Je,
      checkboxAllChange: We,
      initCheckedData: Xe,
      clearCheckedData: q,
      resetCheckboxStatus: p,
      _checkboxMethods: _e
    } = yt(c, r, g, d, te);
    At(() => {
      ce();
    }), Y(
      [() => r.data, () => {
        var e;
        return (e = r.data) == null ? void 0 : e.length;
      }],
      () => {
        q(), V(r.data ?? []), $(), Xe();
      },
      { immediate: !0 }
    ), Y(
      () => r.column,
      () => {
        F.value = r.column.map((e) => {
          const t = e.visible !== !1, a = e.field ?? `_table_column_${e.type ?? ""}`, i = e.editRender ?? (typeof e.renderEdit == "function" ? {} : void 0);
          return { ...Ht(e), visible: t, field: a, editRender: i };
        }), He();
      },
      { deep: !0 }
    );
    let R = !1;
    Y(
      () => {
        var e;
        return (e = d.value) == null ? void 0 : e.length;
      },
      () => {
        var e;
        !r.useTree || (e = re.value) != null && e.lazy || !G.value || H(() => {
          var t, a;
          if (D.value.trim() || R) {
            R = !1;
            const i = d.value.length > 500 ? 500 : d.value.length, o = d.value.slice(0, i);
            (t = c.value) == null || t.setTreeExpand(o, !0);
          } else
            (a = c.value) == null || a.clearTreeExpand();
        });
      },
      { immediate: !0 }
    );
    function et(e) {
      if (!r.rowStyle) {
        const { row: t } = e;
        return t.style || {};
      }
      return typeof r.rowStyle == "function" ? r.rowStyle(e) : r.rowStyle;
    }
    function tt(e) {
      if (!Z.value)
        return;
      const t = K.value.find((a) => a.field === e.field);
      t && (t.visible = !1, W.value = K.value.filter((a) => a.visible !== !1).map((a) => a.title && a.field ? a.field : null).filter((a) => a !== null), s("hide-column", e));
    }
    async function Q(e, t = [], a = !0) {
      var o;
      B.value = e;
      const { remote: i } = r.advancedFilterConfig ?? {};
      if (i === !0) {
        a && s("advanced-filter-confirm", { conditionInfo: e, tableData: [] }), await oe(), w.value = g.value;
        return;
      }
      if (p(), w.value = t, r.useTree) {
        const { isEvery: l = !1 } = r.advancedFilterConfig ?? {};
        w.value = te.handleTreeData(w.value, l);
      }
      (o = e == null ? void 0 : e.conditionList) != null && o.length ? R = !0 : R = !1, a && s("advanced-filter-confirm", { conditionInfo: e, tableData: [] });
    }
    function ot() {
      N(), s("advanced-filter-clear");
    }
    let y = !1, z = null;
    function nt({ row: e, rowid: t }) {
      var o, l, u;
      if (!r.cellClickToggleHighlight)
        return;
      y ? y && z === t && ((o = c.value) == null || o.setCurrentRow(null), y = !1, z = null, s("highlight-clear", e)) : y = !0;
      const a = (l = c.value) == null ? void 0 : l.getCurrentRecord(), i = (u = c.value) == null ? void 0 : u.getRowid(a);
      z !== t && i === t && (z = t), s("highlight-change", e, y);
    }
    async function $(e) {
      var l;
      const t = ie();
      if (!t)
        return;
      await H();
      const a = (l = t == null ? void 0 : t.filter) == null ? void 0 : l.call(t, e), { conditionInfo: i, data: o } = a ?? {};
      return await Q(i, o, !1), { conditionInfo: i, tableData: o };
    }
    async function N() {
      var o;
      const e = ie();
      if (!e)
        return;
      await H(), p();
      const t = (o = e == null ? void 0 : e.clearFilter) == null ? void 0 : o.call(e), { conditionInfo: a, data: i } = t ?? {};
      return await Q(a, i, !1), { conditionInfo: a, tableData: i };
    }
    function ie() {
      var e, t;
      return (t = (e = C.value) == null ? void 0 : e.filterRef) == null ? void 0 : t[0];
    }
    function se(e) {
      D.value = e ?? "", p();
    }
    function ue() {
      var e, t;
      (t = (e = C.value) == null ? void 0 : e.clearInput) == null || t.call(e), D.value = "";
    }
    function rt(e) {
      J(), s("sort-change", e);
    }
    function fe(e) {
      J(), s("filter-change", e);
    }
    function at(e) {
      De(), s("row-dragend", e);
    }
    async function lt(e) {
      await H(), e === "list" && p();
    }
    function it() {
      return d.value;
    }
    function st() {
      return g.value;
    }
    function ut(e) {
      Array.isArray(e) && (V(e), $(e));
    }
    function V(e) {
      g.value = Fe(e);
    }
    async function ce(e = !1) {
      var o, l, u;
      const t = ((o = r.searchConfig) == null ? void 0 : o.isRemoteQuery) || r.isRemoteQuery, a = ((l = r.advancedFilterConfig) == null ? void 0 : l.remote) === !0;
      (L.value && (r.isServerPaging || ((u = r.paginationConfig) == null ? void 0 : u.isRemotePaging)) || t || a) && (e && (q(), p()), oe());
    }
    function ft() {
      q(), N(), ue();
    }
    P("__showTransfer", Z), P(
      Ft,
      f(() => v.value === "small" || v.value === "mini" ? "sm" : "base")
    ), P(zt, v), P(
      "__hasSpace__",
      f(() => r.hasSpace)
    );
    const ct = {
      tableInstance: c,
      filter: se,
      advancedFilter: $,
      clearAdvancedFilter: N,
      getAdvancedCondition: qe,
      getVisibleData: it,
      getFullData: st,
      loadData: ut,
      clearSearch: ue,
      clearTableStatus: ft,
      refreshTableData: ce,
      ...Be,
      ..._e,
      ...Ee
    };
    return ve(Rt(ct, c)), (e, t) => {
      var i;
      const a = Ot("ksw_drag");
      return h(), b("div", {
        class: It([
          "k-tree-table flex h-full flex-col",
          r.class,
          { "tree-table-use-ant-style": e.useAntStyle, "has-space-between": e.hasSpace }
        ]),
        style: xt({ height: e.adaptive ? "fit-content" : e.height, ...e.style })
      }, [
        A(vt, {
          ref_key: "headerRef",
          ref: C,
          "current-mode": I.value,
          "onUpdate:currentMode": t[0] || (t[0] = (o) => I.value = o),
          simple: e.simple,
          "show-search-input": e.showSearchInput,
          "show-description": e.showDescription,
          "show-header-tools": e.showHeaderTools,
          widgets: n(ne),
          "data-length": n(_),
          "show-total": !e.useTree,
          "search-config": Se.value,
          "filter-config": ke.value,
          "transfer-config": Te.value,
          onInputChange: se,
          onFilterConfirm: Q,
          onFilterClear: ot,
          onFilterShow: n(Ke),
          onFilterHide: n(Le),
          onTransferChange: n(Me),
          onTransferShow: n(Ae),
          onTransferHide: t[1] || (t[1] = () => {
            n(Pe)(), n(X)();
          }),
          onSizeChange: t[2] || (t[2] = (o) => {
            v.value = o || void 0;
          }),
          onTransferDrag: n(Oe),
          onRefresh: t[3] || (t[3] = () => {
            s("refresh");
          }),
          onSwitchChange: lt
        }, O({ _: 2 }, [
          S(e.$slots, (o, l) => ({
            name: l,
            fn: k((u) => [
              M(e.$slots, l, x(E(u)))
            ])
          }))
        ]), 1032, ["current-mode", "simple", "show-search-input", "show-description", "show-header-tools", "widgets", "data-length", "show-total", "search-config", "filter-config", "transfer-config", "onFilterShow", "onFilterHide", "onTransferChange", "onTransferShow", "onTransferDrag"]),
        G.value ? (h(), b("div", Kt, [
          A(n(mt), j({
            ref_key: "xTree",
            ref: U,
            border: e.useAntStyle ? "inner" : e.border,
            size: be.value,
            data: n(d),
            "row-config": n(ae),
            "sort-config": n(Ne),
            "filter-config": e.filterConfig,
            "tree-config": n(re),
            "seq-config": n(Ue),
            "checkbox-config": n(Ze),
            "edit-config": n(Ve),
            "column-config": n(je),
            "empty-text": e.emptyText || ((i = n(T)) == null ? void 0 : i("table.noData")),
            "scroll-y": n(Ye),
            "row-style": et,
            "show-overflow": e.showOverflow,
            "auto-resize": e.autoResize,
            "show-column-menu": e.showColumnMenu,
            align: e.align,
            round: e.useAntStyle || e.round,
            height: e.adaptive ? void 0 : "100%"
          }, e.$attrs, {
            onCheckboxChange: t[4] || (t[4] = (o) => {
              n(Je)(o), s("checkbox-change", o);
            }),
            onCheckboxAll: t[5] || (t[5] = (o) => {
              n(We)(o), s("checkbox-all", o);
            }),
            onHideColumn: tt,
            onCellClick: t[6] || (t[6] = (o) => {
              nt(o), s("cell-click", o);
            }),
            onResizableChange: t[7] || (t[7] = (o) => {
              n(X)(), s("resizable-change", o);
            }),
            onSortChange: rt,
            onFilterChange: fe,
            onClearFilter: t[8] || (t[8] = (o) => {
              fe(o), s("clear-filter", o);
            }),
            onRowDragend: at
          }), O({
            default: k(() => [
              (h(!0), b(Et, null, S(F.value, (o, l) => (h(), he(n(gt), {
                key: l,
                column: o,
                size: e.size,
                align: e.align
              }, O({ _: 2 }, [
                S(e.$slots, (u, de) => ({
                  name: de,
                  fn: k((dt) => [
                    M(e.$slots, de, x(E(dt)))
                  ])
                }))
              ]), 1032, ["column", "size", "align"]))), 128))
            ]),
            _: 2
          }, [
            S(n(we)(e.$slots), (o, l) => ({
              name: l,
              fn: k((u) => [
                M(e.$slots, l, x(E(u)))
              ])
            }))
          ]), 1040, ["border", "size", "data", "row-config", "sort-config", "filter-config", "tree-config", "seq-config", "checkbox-config", "edit-config", "column-config", "empty-text", "scroll-y", "show-overflow", "auto-resize", "show-column-menu", "align", "round", "height"]),
          (e.batchOperateConfig || e.showBatchOperation) && n(le).total > 0 ? Mt((h(), b("div", Lt, [
            A(n(ht), j(n(le), { onClose: n(Ge) }), null, 16, ["onClose"])
          ])), [
            [a]
          ]) : me("", !0)
        ], 512)) : (h(), he(Ct, {
          key: 1,
          data: n(d),
          "key-field": n(ae).keyField,
          "card-attrs": e.cardOptions
        }, O({ _: 2 }, [
          S(e.$slots, (o, l) => ({
            name: l,
            fn: k((u) => [
              M(e.$slots, l, x(E(u)))
            ])
          }))
        ]), 1032, ["data", "key-field", "card-attrs"])),
        n(L) ? (h(), b("div", qt, [
          A(n(pt), j(n(ee), {
            total: n(_),
            onCurrentChange: n($e),
            onSizeChange: n(Qe),
            onChange: t[9] || (t[9] = (o, l) => {
              n(p)(), s("page-change", o, l);
            }),
            onPrevClick: t[10] || (t[10] = (o) => {
              s("prev-click", o);
            }),
            onNextClick: t[11] || (t[11] = (o) => {
              s("next-click", o);
            })
          }), null, 16, ["total", "onCurrentChange", "onSizeChange"])
        ], 512)) : me("", !0)
      ], 6);
    };
  }
});
export {
  ho as default
};
