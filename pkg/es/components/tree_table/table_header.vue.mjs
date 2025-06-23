import { defineComponent as Q, inject as W, computed as N, ref as F, resolveComponent as X, resolveDirective as _, createElementBlock as s, openBlock as i, Fragment as $, createCommentVNode as p, createVNode as u, unref as r, normalizeStyle as x, createElementVNode as j, renderSlot as h, toDisplayString as k, renderList as O, createBlock as f, withDirectives as I, withCtx as m, resolveDynamicComponent as T, createTextVNode as ee } from "vue";
import { KButton as V } from "../button/index.mjs";
import { KInput as R } from "../input/index.mjs";
import "../input_number/index.mjs";
import "../radio/index.mjs";
import "../checkbox/index.mjs";
import "../switch/index.mjs";
import "../tab/index.mjs";
import "../pagination/index.mjs";
import "../select/index.mjs";
import "../cascader/index.mjs";
import "../date_picker/index.mjs";
import "../upload/index.mjs";
import { KTransfer as te } from "../transfer/index.mjs";
import "../operate/index.mjs";
import "../tag/index.mjs";
import { KPopover as re } from "../popover/index.mjs";
import "../popconfirm/index.mjs";
import "../result/index.mjs";
import "../empty/index.mjs";
import "../message/index.mjs";
import "../message_box/index.mjs";
import "../dialog/index.mjs";
import "../dialog_service/index.mjs";
import "../tooltip/index.mjs";
import "../filter/index.mjs";
import "../drawer/index.mjs";
import "../form/index.mjs";
import "../step/index.mjs";
import "../collapse/index.mjs";
import "../view/index.mjs";
import "../badge/index.mjs";
import "../timeline/index.mjs";
import "../calendar/index.mjs";
import "../tree/index.mjs";
import "./index.mjs";
import { KDropdown as oe, KDropdownItem as ie } from "../dropdown/index.mjs";
import "../tree_transfer/index.mjs";
import "../tree_select/index.mjs";
import "../filter_form/index.mjs";
import "../button_container/index.mjs";
import { KSliderButton as le } from "../slider_button/index.mjs";
import "../script_input/index.mjs";
import "../icon_popover/index.mjs";
import "../global_provider/index.mjs";
import "../split/index.mjs";
import "../list/index.mjs";
import "../text_v2/index.mjs";
import { useLocale as ne } from "../../hooks/use_locale.mjs";
import { compatibleSlots as K } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { TABLE_SIZE_KEY as ae, SIZE_OPTIONS as se } from "./const.mjs";
import fe from "../../node_modules/ksw-vue-icon/es/icons/base/size-controls.mjs";
import me from "../../node_modules/ksw-vue-icon/es/icons/base/filter-fill.mjs";
import de from "../../node_modules/ksw-vue-icon/es/icons/base/filter.mjs";
import ue from "../../node_modules/ksw-vue-icon/es/icons/base/reload.mjs";
import Y from "../../node_modules/ksw-vue-icon/es/icons/base/search.mjs";
import ce from "../../node_modules/ksw-vue-icon/es/icons/base/setting.mjs";
const ge = {
  key: 0,
  class: "k-tree-table__header-pure"
}, pe = {
  key: 0,
  class: "k-table-info"
}, he = { key: 0 }, ke = ["title"], ye = { class: "k-table-func" }, Ce = { class: "text-sm" }, be = { class: "text-sm" }, ve = {
  key: 2,
  class: "k-tree-table__header-extra"
}, Tt = /* @__PURE__ */ Q({
  name: "TableHeader",
  __name: "table_header",
  props: {
    currentMode: String,
    simple: Boolean,
    showHeaderTools: Boolean,
    showSearchInput: Boolean,
    showDescription: Boolean,
    showTotal: Boolean,
    dataLength: Number,
    widgets: Array,
    searchConfig: Object,
    filterConfig: Object,
    transferConfig: Object
  },
  emits: [
    "update:current-mode",
    "input-change",
    "filter-confirm",
    "filter-clear",
    "filter-show",
    "filter-hide",
    "transfer-show",
    "transfer-hide",
    "transfer-change",
    "transfer-drag",
    "size-change",
    "refresh",
    "switch-change"
  ],
  setup(e, { expose: U, emit: A }) {
    const H = W(ae, N(() => {
    })), { t: d } = ne(), P = e, n = A, Z = [
      { label: "卡片", name: "card" },
      { label: "列表", name: "list" }
    ], L = {
      width: "80px"
    }, z = F(), E = F(), y = F(""), q = N(() => H.value === "small" || H.value === "mini" ? { ...L, height: "1.5rem", fontSize: "12px" } : { ...L, height: "2rem", fontSize: "14px" });
    function M(a) {
      n("input-change", a);
    }
    function G() {
      y.value = "";
    }
    return U({
      filterRef: z,
      transferRef: E,
      clearInput: G
    }), (a, t) => {
      const J = X("k-filter"), D = _("ksw_tooltip");
      return i(), s($, null, [
        e.simple && e.showSearchInput ? (i(), s("div", ge, [
          u(r(R), {
            modelValue: y.value,
            "onUpdate:modelValue": t[0] || (t[0] = (o) => y.value = o),
            "suffix-icon": r(Y),
            placeholder: e.searchConfig.placeholder,
            clearable: "",
            onChange: M
          }, null, 8, ["modelValue", "suffix-icon", "placeholder"])
        ])) : e.showHeaderTools && !e.simple ? (i(), s("div", {
          key: 1,
          class: "k-tree-table__header",
          style: x({
            justifyContent: e.showDescription ? "space-between" : "flex-end"
          })
        }, [
          P.showDescription ? (i(), s("div", pe, [
            h(a.$slots, "description", {
              total: e.dataLength,
              conditionInfo: e.filterConfig.conditionInfo
            }, () => {
              var o, C, b, v, w, S, B;
              return [
                e.showTotal ? (i(), s("span", he, k((o = r(d)) == null ? void 0 : o("table.total")) + " " + k(e.dataLength) + " " + k((C = r(d)) == null ? void 0 : C("table.data")), 1)) : p("", !0),
                j("span", {
                  title: e.filterConfig.text,
                  class: "condition-info"
                }, k(e.filterConfig.text), 9, ke),
                (v = (b = e.filterConfig.conditionInfo) == null ? void 0 : b.conditionList) != null && v.length && ((S = (w = z.value) == null ? void 0 : w[0]) != null && S.clearFilter) ? (i(), s("span", {
                  key: 1,
                  class: "filter-reset",
                  onClick: t[1] || (t[1] = () => {
                    n("filter-clear");
                  })
                }, " · " + k((B = r(d)) == null ? void 0 : B("table.reset")), 1)) : p("", !0)
              ];
            })
          ])) : p("", !0),
          j("div", ye, [
            (i(!0), s($, null, O(e.widgets, (o) => {
              var C, b, v, w, S, B;
              return i(), s($, {
                key: o.id
              }, [
                o.slot && a.$slots[o.slot] ? h(a.$slots, o.slot, { key: 0 }) : o.id === "search" ? (i(), f(r(R), {
                  key: 1,
                  modelValue: y.value,
                  "onUpdate:modelValue": t[2] || (t[2] = (l) => y.value = l),
                  "suffix-icon": r(Y),
                  placeholder: e.searchConfig.placeholder,
                  clearable: "",
                  onChange: M
                }, null, 8, ["modelValue", "suffix-icon", "placeholder"])) : o.id === "refresh" ? I((i(), f(r(V), {
                  key: 2,
                  class: "k-tree-table__header-btn",
                  onClick: t[3] || (t[3] = () => {
                    n("refresh");
                  })
                }, {
                  default: m(() => [
                    u(r(ue))
                  ]),
                  _: 1
                })), [
                  [D, (C = r(d)) == null ? void 0 : C("table.refresh")]
                ]) : o.id === "filter" ? (i(), f(J, {
                  key: 3,
                  ref_for: !0,
                  ref_key: "filterRef",
                  ref: z,
                  data: e.filterConfig.data,
                  options: e.filterConfig.columns,
                  "children-field": "group",
                  "filter-key": "field",
                  remote: ((b = e.filterConfig) == null ? void 0 : b.remote) ?? !1,
                  "ignore-case": (v = e.filterConfig) == null ? void 0 : v.ignoreCase,
                  "date-format": ((w = e.filterConfig) == null ? void 0 : w.dateFormat) ?? "YYYY-MM-DD HH:mm:ss",
                  "time-format": ((S = e.filterConfig) == null ? void 0 : S.timeFormat) ?? "HH:mm:ss",
                  "default-condition": ((B = e.filterConfig) == null ? void 0 : B.defaultCondition) ?? e.filterConfig.conditionInfo,
                  onConfirm: t[4] || (t[4] = (l, c) => {
                    n("filter-confirm", l, c);
                  }),
                  onClear: t[5] || (t[5] = () => {
                    n("filter-clear");
                  }),
                  onShow: t[6] || (t[6] = () => {
                    n("filter-show");
                  }),
                  onHide: t[7] || (t[7] = () => {
                    n("filter-hide");
                  })
                }, {
                  reference: m(({ hasConfigCondition: l }) => {
                    var c;
                    return [
                      I((i(), s("div", null, [
                        o.widget ? (i(), f(T(typeof o.widget == "function" ? o.widget() : o.widget), { key: 0 })) : h(a.$slots, r(K)(a.$slots, ["filter-trigger", "filterTrigger"]), {
                          key: 1,
                          isFilter: l
                        }, () => [
                          u(r(V), { class: "k-tree-table__header-btn" }, {
                            default: m(() => [
                              l ? (i(), f(r(me), {
                                key: 1,
                                color: "#2882FF"
                              })) : (i(), f(r(de), { key: 0 }))
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ])), [
                        [D, (c = r(d)) == null ? void 0 : c("table.advancedFilter_c")]
                      ])
                    ];
                  }),
                  _: 2
                }, 1032, ["data", "options", "remote", "ignore-case", "date-format", "time-format", "default-condition"])) : o.id === "card-switch" ? (i(), f(r(le), {
                  key: 4,
                  class: "k-tree-table__slider-button",
                  "default-active": e.currentMode,
                  style: x(q.value),
                  items: Z,
                  onChange: t[8] || (t[8] = (l) => {
                    n("update:current-mode", l), n("switch-change", l);
                  })
                }, null, 8, ["default-active", "style"])) : o.id === "size-control" && e.currentMode === "list" ? (i(), f(r(oe), {
                  key: 5,
                  trigger: "click",
                  onCommand: t[9] || (t[9] = (l) => {
                    n("size-change", l);
                  })
                }, {
                  title: m(() => {
                    var l;
                    return [
                      I((i(), s("div", Ce, [
                        o.widget ? (i(), f(T(typeof o.widget == "function" ? o.widget() : o.widget), { key: 0 })) : h(a.$slots, r(K)(a.$slots, ["size-control-trigger", "sizeControlTrigger"]), { key: 1 }, () => [
                          u(r(V), { class: "k-tree-table__header-btn" }, {
                            default: m(() => [
                              u(r(fe))
                            ]),
                            _: 1
                          })
                        ])
                      ])), [
                        [D, (l = r(d)) == null ? void 0 : l("table.sizeControlTrigger")]
                      ])
                    ];
                  }),
                  default: m(() => [
                    (i(!0), s($, null, O(r(se), (l) => (i(), f(r(ie), {
                      key: l.value,
                      style: x({
                        color: r(H) === (l.value || void 0) ? "#2882FF" : ""
                      }),
                      command: l.value
                    }, {
                      default: m(() => [
                        ee(k(l.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["style", "command"]))), 128))
                  ]),
                  _: 2
                }, 1024)) : o.id === "transfer" && e.currentMode === "list" ? (i(), f(r(re), {
                  key: 6,
                  trigger: "click",
                  width: "auto",
                  teleported: !1,
                  onShow: t[14] || (t[14] = () => {
                    n("transfer-show");
                  }),
                  onHide: t[15] || (t[15] = () => {
                    n("transfer-hide");
                  })
                }, {
                  reference: m(() => {
                    var l;
                    return [
                      I((i(), s("div", be, [
                        o.widget ? (i(), f(T(typeof o.widget == "function" ? o.widget() : o.widget), { key: 0 })) : h(a.$slots, r(K)(a.$slots, ["transfer-trigger", "transferTrigger"]), { key: 1 }, () => [
                          u(r(V), { class: "k-tree-table__header-btn" }, {
                            default: m(() => [
                              u(r(ce))
                            ]),
                            _: 1
                          })
                        ])
                      ])), [
                        [D, (l = r(d)) == null ? void 0 : l("table.columnHeaderController")]
                      ])
                    ];
                  }),
                  default: m(() => {
                    var l, c;
                    return [
                      u(r(te), {
                        ref_for: !0,
                        ref_key: "transferRef",
                        ref: E,
                        modelValue: e.transferConfig.selectData,
                        "onUpdate:modelValue": t[10] || (t[10] = (g) => e.transferConfig.selectData = g),
                        data: e.transferConfig.originData,
                        "default-keys": e.transferConfig.defaultHeader,
                        format: {
                          noChecked: " ",
                          hasChecked: " "
                        },
                        titles: [(l = r(d)) == null ? void 0 : l("table.unselected"), (c = r(d)) == null ? void 0 : c("table.selected")],
                        drag: e.transferConfig.drag,
                        filterable: e.transferConfig.showSearch,
                        onChange: t[11] || (t[11] = (...g) => {
                          n("transfer-change", ...g);
                        }),
                        onReset: t[12] || (t[12] = (g) => {
                        }),
                        onDrag: t[13] || (t[13] = (g) => {
                          n("transfer-drag", g);
                        })
                      }, null, 8, ["modelValue", "data", "default-keys", "titles", "drag", "filterable"])
                    ];
                  }),
                  _: 2
                }, 1024)) : o.widget ? (i(), f(T(typeof o.widget == "function" ? o.widget() : o.widget), { key: 7 })) : p("", !0)
              ], 64);
            }), 128))
          ])
        ], 4)) : p("", !0),
        a.$slots["header-extra"] ? (i(), s("div", ve, [
          h(a.$slots, "header-extra")
        ])) : p("", !0)
      ], 64);
    };
  }
});
export {
  Tt as default
};
