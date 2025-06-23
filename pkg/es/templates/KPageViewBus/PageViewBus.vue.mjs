import { defineComponent as W, ref as m, createElementBlock as p, openBlock as l, normalizeStyle as v, normalizeClass as c, createElementVNode as t, createCommentVNode as u, createVNode as d, unref as r, renderSlot as h, toDisplayString as S, withCtx as B, withDirectives as z, vShow as $, createBlock as D } from "vue";
import { KButton as E } from "../../components/button/index.mjs";
import "../../components/input/index.mjs";
import "../../components/input_number/index.mjs";
import "../../components/radio/index.mjs";
import "../../components/checkbox/index.mjs";
import "../../components/switch/index.mjs";
import "../../components/tab/index.mjs";
import "../../components/pagination/index.mjs";
import "../../components/select/index.mjs";
import "../../components/cascader/index.mjs";
import "../../components/date_picker/index.mjs";
import "../../components/upload/index.mjs";
import "../../components/transfer/index.mjs";
import "../../components/operate/index.mjs";
import "../../components/tag/index.mjs";
import "../../components/popover/index.mjs";
import "../../components/popconfirm/index.mjs";
import "../../components/result/index.mjs";
import "../../components/empty/index.mjs";
import "../../components/message/index.mjs";
import "../../components/message_box/index.mjs";
import "../../components/dialog/index.mjs";
import "../../components/dialog_service/index.mjs";
import { KTooltip as _ } from "../../components/tooltip/index.mjs";
import "../../components/filter/index.mjs";
import "../../components/drawer/index.mjs";
import "../../components/form/index.mjs";
import "../../components/step/index.mjs";
import "../../components/collapse/index.mjs";
import "../../components/view/index.mjs";
import "../../components/badge/index.mjs";
import "../../components/timeline/index.mjs";
import "../../components/calendar/index.mjs";
import "../../components/tree/index.mjs";
import "../../components/tree_table/index.mjs";
import "../../components/dropdown/index.mjs";
import "../../components/tree_transfer/index.mjs";
import "../../components/tree_select/index.mjs";
import "../../components/filter_form/index.mjs";
import "../../components/button_container/index.mjs";
import "../../components/slider_button/index.mjs";
import "../../components/script_input/index.mjs";
import "../../components/icon_popover/index.mjs";
import "../../components/global_provider/index.mjs";
import "../../components/split/index.mjs";
import "../../components/list/index.mjs";
import "../../components/text_v2/index.mjs";
import { compatibleSlots as x } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import M from "../../node_modules/ksw-vue-icon/es/icons/base/arrow-left.mjs";
import N from "../../node_modules/ksw-vue-icon/es/icons/base/tips.mjs";
import X from "../../node_modules/ksw-vue-icon/es/icons/base/reload.mjs";
const j = { class: "drawer-btn flex h-5 w-5 items-center justify-center rounded-full border bg-white text-sm text-gray-400 hover:border-blue-400 hover:font-bold hover:text-blue-400" }, R = { class: "KPageViewBus-content h-full" }, q = { class: "KPageViewBus-content--drawer flex h-full flex-col" }, A = { class: "KPageViewBus-head box-border flex items-center justify-between border-b border-gray-200 py-4" }, T = { class: "KPageViewBus-head-title text-xl" }, F = {
  key: 0,
  class: "KPageViewBus-head-info"
}, G = { class: "KPageViewBus-main flex h-full w-full flex-col" }, H = {
  key: 0,
  class: "KPageViewBus-foot pt-3"
}, Je = /* @__PURE__ */ W({
  name: "KPageViewBus",
  __name: "PageViewBus",
  props: {
    title: { default: "" },
    info: {},
    showRefresh: { type: Boolean, default: !0 },
    defaultWidth: { default: 250 },
    maxWidth: { default: 9999 },
    minWidth: { default: 0 },
    resizeLineStyle: {},
    resizeLineClass: {},
    previewLineStyle: {},
    previewLineClass: {}
  },
  emits: ["refresh"],
  setup(V, { emit: L }) {
    const s = V, P = L, f = m(!1);
    let w = 0;
    const o = m(Number(s.defaultWidth)), n = m(!1);
    let g = 0;
    const a = m(0);
    function k(e) {
      n.value = !0, g = e.clientX, a.value = o.value, document.addEventListener("mousemove", y), document.addEventListener("mouseup", b);
    }
    function y(e) {
      if (n.value) {
        const i = e.clientX - g, C = o.value + i;
        a.value = Math.min(Math.max(C, s.minWidth), s.maxWidth);
      }
    }
    function b() {
      o.value = a.value, n.value = !1, document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", b);
    }
    function K() {
      const e = o.value;
      e === 0 ? o.value = w : (w = e, o.value = 0);
    }
    return (e, i) => (l(), p("div", {
      class: c(["KPageViewBus relative border-r border-gray-100 px-3", { "is-hide": o.value === 0 }]),
      style: v({ width: o.value + "px" })
    }, [
      t("div", {
        class: "drawer-btn-box absolute flex h-6 w-6 items-center justify-center",
        onClick: K
      }, [
        t("div", j, [
          d(r(M), { class: "text-gray-400" })
        ])
      ]),
      t("div", R, [
        t("div", q, [
          t("div", A, [
            t("div", {
              class: "flex h-8 items-center gap-1",
              onMouseenter: i[0] || (i[0] = () => f.value = !0),
              onMouseleave: i[1] || (i[1] = () => f.value = !1)
            }, [
              t("p", T, S(e.title), 1),
              s.info ? (l(), p("div", F, [
                d(r(_), {
                  content: s.info
                }, {
                  default: B(() => [
                    z(d(r(N), {
                      class: "cursor-pointer",
                      color: "#4193f2",
                      size: "16"
                    }, null, 512), [
                      [$, f.value]
                    ])
                  ]),
                  _: 1
                }, 8, ["content"])
              ])) : u("", !0)
            ], 32),
            h(e.$slots, r(x)(e.$slots, ["header", "head"]), {}, () => [
              s.showRefresh ? (l(), D(r(E), {
                key: 0,
                text: "",
                style: { "padding-right": "0" },
                onClick: i[2] || (i[2] = () => P("refresh"))
              }, {
                default: B(() => [
                  d(r(X), { color: "gray" })
                ]),
                _: 1
              })) : u("", !0)
            ])
          ]),
          t("div", G, [
            h(e.$slots, "default")
          ]),
          e.$slots.footer || e.$slots.foot ? (l(), p("div", H, [
            h(e.$slots, r(x)(e.$slots, ["footer", "foot"]))
          ])) : u("", !0)
        ])
      ]),
      t("div", {
        class: c(["k-page-view-bus-resizer", e.resizeLineClass]),
        style: v(e.resizeLineStyle),
        onMousedown: k
      }, null, 38),
      n.value ? (l(), p("div", {
        key: 0,
        class: c(["k-page-view-bus-preview", e.previewLineClass]),
        style: v({ left: a.value + "px", ...e.previewLineStyle ?? {} })
      }, null, 6)) : u("", !0)
    ], 6));
  }
});
export {
  Je as default
};
