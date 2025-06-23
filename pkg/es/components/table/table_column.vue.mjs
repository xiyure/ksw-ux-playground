import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import "../../node_modules/vxe-table/es/components.mjs";
import ee from "./filter_popper.vue.mjs";
import { KPopover as oe } from "../popover/index.mjs";
import { KDialog as be } from "../dialog/index.mjs";
import { KInput as ye } from "../input/index.mjs";
import { KButton as te } from "../button/index.mjs";
import { KTooltip as Fe } from "../tooltip/index.mjs";
import { useLocale as he } from "../../hooks/use_locale.mjs";
import { useInheritSlot as ge } from "../../hooks/use_inherit_slot.mjs";
import { useSort as we } from "./hooks/use_sort.mjs";
import { useFilter as $e } from "./hooks/use_filter.mjs";
import { TABLE_KEY as Ve, DESC_CHANGE as Be, HIDE_COLUMN as De, TABLE_ID as Me, SHOW_COLUMN_MENU_KEY as Ne } from "./const.mjs";
import Ee from "../../node_modules/element-plus/es/directives/click-outside/index.mjs";
import Re from "../../node_modules/ksw-vue-icon/es/icons/base/table-sort-up-color.mjs";
import ze from "../../node_modules/ksw-vue-icon/es/icons/base/clearDate.mjs";
import Oe from "../../node_modules/ksw-vue-icon/es/icons/base/Edit.mjs";
import Ie from "../../node_modules/ksw-vue-icon/es/icons/base/ellipsis-horizontal.mjs";
import Ke from "../../node_modules/ksw-vue-icon/es/icons/base/eye-off.mjs";
import Te from "../../node_modules/ksw-vue-icon/es/icons/base/filter-fill.mjs";
import le from "../../node_modules/ksw-vue-icon/es/icons/base/filter.mjs";
import Le from "../../node_modules/ksw-vue-icon/es/icons/base/fold.mjs";
import Ae from "../../node_modules/ksw-vue-icon/es/icons/base/right.mjs";
import Ue from "../../node_modules/ksw-vue-icon/es/icons/base/table-sort-down-color.mjs";
import We from "../../node_modules/ksw-vue-icon/es/icons/base/table-sort-normal-color.mjs";
import xe from "../../node_modules/ksw-vue-icon/es/icons/base/tips.mjs";
import He from "../../node_modules/ksw-vue-icon/es/icons/base/unfold.mjs";
import { VxeColumn as Se } from "../../node_modules/vxe-table/es/column/index.mjs";
import { defineComponent as Ye, inject as M, computed as W, watch as je, createBlock as v, openBlock as s, createSlots as ie, withCtx as a, renderList as Ge, createElementBlock as d, createElementVNode as r, createCommentVNode as b, renderSlot as N, guardReactiveProps as x, createTextVNode as m, createVNode as n, resolveDynamicComponent as I, withDirectives as qe, mergeProps as Je } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as y, unref as e } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as H, toDisplayString as u, normalizeClass as K, normalizeStyle as T } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const Qe = ["onClick"], Xe = { class: "k-table-column__title" }, Ze = {
  key: 0,
  class: "k-table-column__edit vxe-table-icon-edit"
}, Pe = { class: "k-column__header-dialog" }, eo = { class: "header-dialog__buttons" }, oo = { class: "k-table-column__operate" }, to = {
  key: 0,
  class: "k-table-column__tooltip"
}, lo = ["onClick"], io = ["onClick"], no = {
  key: 2,
  class: "k-table-column__more"
}, so = { class: "more-menu" }, ro = { class: "more-menu-item" }, ao = { class: "more-menu-item" }, co = { class: "sort-menu" }, mo = ["onClick"], uo = ["onClick"], fo = ["onClick"], po = ["onClick"], _o = { key: 1 }, ko = /* @__PURE__ */ r("span", null, "-", -1), qo = /* @__PURE__ */ Ye({
  name: "KTableColumn",
  __name: "table_column",
  props: {
    sortable: { type: Boolean },
    filters: {},
    desc: {},
    showColumnMenu: { type: Boolean, default: void 0 },
    editRender: {},
    type: {},
    field: {},
    filterMultiple: { type: Boolean, default: !0 }
  },
  setup(ne) {
    const { t: c } = he(), se = ge(["default"]), F = M(
      Ve,
      W(() => null)
    ), re = M(
      "__showTransfer",
      W(() => !1)
    ), S = M(Me), ae = M(Ne, !1), f = ne, L = y(), A = y(), E = y(!1), Y = y(""), h = y(""), g = y(!1), R = y(""), _ = M("_emitter"), j = W(() => f.showColumnMenu ?? ae), {
      sortConfig: w,
      showSortIcon: ce,
      allowButtonSort: me,
      changeSortStatus: z,
      tableSort: G,
      tableSortByHeader: ue,
      clearSort: fe
    } = we(F, f, _), {
      isFilter: U,
      filterConfig: k,
      showFilterIcon: de,
      filterButtonText: q,
      filterPanelVisible: O,
      setFilter: J,
      clearFilter: Q,
      filterVisible: X,
      onCloseFilterPanel: pe
    } = $e(F, f, _, A);
    je(
      () => f.desc,
      (o) => {
        o && (h.value = o);
      },
      { immediate: !0 }
    );
    function _e(o) {
      const i = A.value.popperRef;
      (!L.value || !i.contains(o.target)) && (O.value = !1);
    }
    function Z(o) {
      var l, C;
      E.value = o;
      let i = "";
      o ? (Y.value = (l = F.value) == null ? void 0 : l.getColumnWidth(f.field ?? ""), i = "40") : i = Y.value ?? "", (C = F.value) == null || C.setColumnWidth(f.field ?? "", i);
    }
    function ke() {
      R.value = h.value ?? "";
    }
    function Ce(o) {
      h.value = R.value, g.value = !1, _ == null || _.emit(Be, S, o, h.value);
    }
    function ve(o) {
      var i;
      _ == null || _.emit(De, S, o), (i = L.value) == null || i.hide();
    }
    return (o, i) => (s(), v(e(Se), Je(o.$attrs, {
      "edit-render": o.editRender,
      filters: o.filters,
      sortable: o.sortable,
      type: o.type,
      field: o.field,
      class: "k-table-column"
    }), ie({ _: 2 }, [
      o.type ? void 0 : {
        name: "header",
        fn: a((l) => {
          var C;
          return [
            E.value ? (s(), d("div", _o, [
              n(e(He), {
                style: {
                  width: "20px",
                  cursor: "pointer"
                },
                class: "expand-icon",
                onClick: i[6] || (i[6] = (t) => Z(!1))
              })
            ])) : (s(), d("div", {
              key: 0,
              class: "k-table-column__header",
              onClick: (t) => e(ue)(l.column, t)
            }, [
              r("div", Xe, [
                N(o.$slots, "header", H(x(l)), () => {
                  var t, $, V;
                  return [
                    (t = e(F)) != null && t.editConfig && ((V = ($ = e(F)) == null ? void 0 : $.editConfig) == null ? void 0 : V.showIcon) !== !1 && o.editRender ? (s(), d("i", Ze)) : b("", !0),
                    m(" " + u(l.column.title ?? "-"), 1)
                  ];
                })
              ]),
              j.value ? (s(), v(e(be), {
                key: 0,
                modelValue: g.value,
                "onUpdate:modelValue": i[2] || (i[2] = (t) => g.value = t),
                title: (C = e(c)) == null ? void 0 : C("table.remark"),
                onOpen: ke
              }, {
                default: a(() => [
                  r("div", Pe, [
                    n(e(ye), {
                      modelValue: R.value,
                      "onUpdate:modelValue": i[0] || (i[0] = (t) => R.value = t),
                      type: "textarea"
                    }, null, 8, ["modelValue"]),
                    r("div", eo, [
                      n(e(te), {
                        onClick: i[1] || (i[1] = () => g.value = !1)
                      }, {
                        default: a(() => {
                          var t;
                          return [
                            m(u((t = e(c)) == null ? void 0 : t("table.cancel")), 1)
                          ];
                        }),
                        _: 1
                      }),
                      n(e(te), {
                        main: "",
                        onClick: (t) => Ce(l.column)
                      }, {
                        default: a(() => {
                          var t;
                          return [
                            m(u((t = e(c)) == null ? void 0 : t("table.confirm")), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ])
                ]),
                _: 2
              }, 1032, ["modelValue", "title"])) : b("", !0),
              r("div", oo, [
                h.value ? (s(), d("span", to, [
                  n(e(Fe), {
                    trigger: "click",
                    content: h.value,
                    placement: "top"
                  }, {
                    default: a(() => [
                      r("i", null, [
                        n(e(xe))
                      ])
                    ]),
                    _: 1
                  }, 8, ["content"])
                ])) : b("", !0),
                e(ce) ? (s(), d("span", {
                  key: 1,
                  class: K([
                    "k-table-column__sort",
                    e(w).iconLayout === "horizontal" ? "sort-icon__horizontal" : "sort-icon__vertical",
                    e(me) ? "" : "sort-btn-disabled"
                  ])
                }, [
                  e(w).iconAsc ? (s(), v(I(e(w).iconAsc), {
                    key: 0,
                    style: T({
                      color: l.column.order == "asc" ? "#2882FF" : "",
                      fontSize: "15px"
                    }),
                    onClick: (t) => e(z)("_asc-icon", l.column, t)
                  }, null, 8, ["style", "onClick"])) : (s(), d("i", {
                    key: 1,
                    class: "vxe-table-icon-caret-up icon-asc",
                    style: T({ color: l.column.order == "asc" ? "#2882FF" : "" }),
                    onClick: (t) => e(z)("_asc-icon", l.column, t)
                  }, null, 12, lo)),
                  e(w).iconDesc ? (s(), v(I(e(w).iconDesc), {
                    key: 2,
                    style: T({
                      color: l.column.order == "desc" ? "#2882FF" : "",
                      fontSize: "15px"
                    }),
                    onClick: (t) => e(z)("_desc-icon", l.column, t)
                  }, null, 8, ["style", "onClick"])) : (s(), d("i", {
                    key: 3,
                    class: "vxe-table-icon-caret-down icon-desc",
                    style: T({ color: l.column.order == "desc" ? "#2882FF" : "" }),
                    onClick: (t) => e(z)("_desc-icon", l.column, t)
                  }, null, 12, io))
                ], 2)) : b("", !0),
                n(ee, {
                  ref_key: "popperOutRef",
                  ref: A,
                  filters: f.filters,
                  column: l.column,
                  text: e(q),
                  teleported: e(k).transfer,
                  visible: e(O),
                  "destroy-on-close": e(k).destroyOnClose,
                  "filter-multiple": o.filterMultiple,
                  onSetFilter: e(J),
                  onClearFilter: e(Q),
                  onFilterVisible: e(X),
                  onCloseFilterPanel: e(pe)
                }, {
                  default: a(() => [
                    qe((s(), d("span", {
                      class: K(["k-table-column__filter", ["k-table-column__filter", { "k-table-column__filter--hide-icon": !e(de) }]]),
                      onClick: i[3] || (i[3] = () => O.value = !e(O))
                    }, [
                      e(k).iconNone && !e(U) ? (s(), v(I(e(k).iconNone), { key: 0 })) : e(k).iconMatch && e(U) ? (s(), v(I(e(k).iconMatch), { key: 1 })) : e(U) ? (s(), v(e(Te), {
                        key: 2,
                        size: 16,
                        color: "#2882FF"
                      })) : (s(), v(e(le), {
                        key: 3,
                        size: 16
                      }))
                    ], 2)), [
                      [e(Ee), _e]
                    ]),
                    o.$slots.filter ? N(o.$slots, "filter", {
                      key: 0,
                      column: l.column
                    }) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["filters", "column", "text", "teleported", "visible", "destroy-on-close", "filter-multiple", "onSetFilter", "onClearFilter", "onFilterVisible", "onCloseFilterPanel"]),
                j.value ? (s(), d("span", no, [
                  n(e(oe), {
                    ref_key: "popoverRef",
                    ref: L,
                    trigger: "click",
                    "show-arrow": !1,
                    placement: "bottom-start",
                    "popper-class": "more-box",
                    offset: 2,
                    width: "160px"
                  }, {
                    reference: a(() => [
                      r("i", null, [
                        n(e(Ie))
                      ])
                    ]),
                    default: a(() => {
                      var t, $, V;
                      return [
                        r("ul", so, [
                          r("li", ro, [
                            n(ee, {
                              filters: f.filters,
                              column: l.column,
                              text: e(q),
                              teleported: e(k).transfer,
                              "destroy-on-close": e(k).destroyOnClose,
                              "filter-multiple": o.filterMultiple,
                              onSetFilter: e(J),
                              onClearFilter: e(Q),
                              onFilterVisible: e(X)
                            }, ie({
                              default: a(({ disabled: p }) => {
                                var B;
                                return [
                                  r("div", {
                                    class: K(["filter-select-item", { disabled: p }])
                                  }, [
                                    n(e(le), { class: "menu-item-icon" }),
                                    m(" " + u((B = e(c)) == null ? void 0 : B("table.filter")), 1)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, [
                              o.$slots.filter ? {
                                name: "filter",
                                fn: a(() => [
                                  N(o.$slots, "filter", {
                                    column: l.column
                                  })
                                ]),
                                key: "0"
                              } : void 0
                            ]), 1032, ["filters", "column", "text", "teleported", "destroy-on-close", "filter-multiple", "onSetFilter", "onClearFilter", "onFilterVisible"])
                          ]),
                          r("li", ao, [
                            n(e(oe), {
                              trigger: "hover",
                              "show-arrow": !1,
                              placement: "right-start",
                              "popper-class": "more-box",
                              offset: 2,
                              disabled: !f.sortable,
                              teleported: !1
                            }, {
                              reference: a(() => {
                                var p;
                                return [
                                  r("div", {
                                    class: K(["sort-select-item", { disabled: !f.sortable }])
                                  }, [
                                    n(e(We), { class: "menu-item-icon" }),
                                    m(" " + u((p = e(c)) == null ? void 0 : p("table.sort")) + " ", 1),
                                    n(e(Ae), { class: "sort-arrow-right" })
                                  ], 2)
                                ];
                              }),
                              default: a(() => {
                                var p, B, P;
                                return [
                                  r("ul", co, [
                                    r("li", {
                                      class: "sort-menu-item",
                                      onClick: (D) => e(G)(l.column, "asc", D)
                                    }, [
                                      n(e(Re)),
                                      m(" " + u((p = e(c)) == null ? void 0 : p("table.asc")), 1)
                                    ], 8, mo),
                                    r("li", {
                                      class: "sort-menu-item",
                                      onClick: (D) => e(G)(l.column, "desc", D)
                                    }, [
                                      n(e(Ue)),
                                      m(" " + u((B = e(c)) == null ? void 0 : B("table.desc")), 1)
                                    ], 8, uo),
                                    r("li", {
                                      class: "sort-menu-item",
                                      onClick: (D) => e(fe)(l.column, D)
                                    }, [
                                      n(e(ze)),
                                      m(" " + u((P = e(c)) == null ? void 0 : P("table.clear")), 1)
                                    ], 8, fo)
                                  ])
                                ];
                              }),
                              _: 2
                            }, 1032, ["disabled"])
                          ]),
                          r("li", {
                            class: "more-menu-item",
                            onClick: i[4] || (i[4] = (p) => Z(!0))
                          }, [
                            n(e(Le), { class: "menu-item-icon" }),
                            m(" " + u((t = e(c)) == null ? void 0 : t("table.retract")), 1)
                          ]),
                          e(re) ? (s(), d("li", {
                            key: 0,
                            class: "more-menu-item",
                            onClick: (p) => ve(l.column)
                          }, [
                            n(e(Ke), { class: "menu-item-icon" }),
                            m(" " + u(($ = e(c)) == null ? void 0 : $("table.hide")), 1)
                          ], 8, po)) : b("", !0),
                          r("li", {
                            class: "more-menu-item",
                            onClick: i[5] || (i[5] = () => g.value = !0)
                          }, [
                            n(e(Oe), { class: "menu-item-icon" }),
                            m(" " + u((V = e(c)) == null ? void 0 : V("table.remark")), 1)
                          ])
                        ])
                      ];
                    }),
                    _: 2
                  }, 1536)
                ])) : b("", !0)
              ])
            ], 8, Qe))
          ];
        }),
        key: "0"
      },
      E.value ? {
        name: "default",
        fn: a(() => [
          ko
        ]),
        key: "1"
      } : o.$slots.default && !E.value ? {
        name: "default",
        fn: a((l) => [
          N(o.$slots, "default", H(x(l)))
        ]),
        key: "2"
      } : void 0,
      Ge(e(se)(o.$slots), (l, C) => ({
        name: C,
        fn: a((t) => [
          N(o.$slots, C, H(x(t)))
        ])
      }))
    ]), 1040, ["edit-render", "filters", "sortable", "type", "field"]));
  }
});
export {
  qo as default
};
