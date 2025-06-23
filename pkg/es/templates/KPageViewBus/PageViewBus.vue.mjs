import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KButton as W } from "../../components/button/index.mjs";
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
import { KTooltip as S } from "../../components/tooltip/index.mjs";
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
import { compatibleSlots as B } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { defineComponent as z, createElementBlock as m, openBlock as l, createElementVNode as t, createCommentVNode as p, createVNode as u, renderSlot as v, withCtx as x, withDirectives as $, createBlock as D } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as d, unref as r } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import E from "../../node_modules/ksw-vue-icon/es/icons/base/arrow-left.mjs";
import { toDisplayString as _, normalizeStyle as c, normalizeClass as h } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import M from "../../node_modules/ksw-vue-icon/es/icons/base/tips.mjs";
import { vShow as N } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
import X from "../../node_modules/ksw-vue-icon/es/icons/base/reload.mjs";
const j = { class: "drawer-btn flex h-5 w-5 items-center justify-center rounded-full border bg-white text-sm text-gray-400 hover:border-blue-400 hover:font-bold hover:text-blue-400" }, R = { class: "KPageViewBus-content h-full" }, q = { class: "KPageViewBus-content--drawer flex h-full flex-col" }, A = { class: "KPageViewBus-head box-border flex items-center justify-between border-b border-gray-200 py-4" }, T = { class: "KPageViewBus-head-title text-xl" }, F = {
  key: 0,
  class: "KPageViewBus-head-info"
}, G = { class: "KPageViewBus-main flex h-full w-full flex-col" }, H = {
  key: 0,
  class: "KPageViewBus-foot pt-3"
}, Ye = /* @__PURE__ */ z({
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
    const s = V, P = L, f = d(!1);
    let w = 0;
    const o = d(Number(s.defaultWidth)), n = d(!1);
    let g = 0;
    const a = d(0);
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
    return (e, i) => (l(), m("div", {
      class: h(["KPageViewBus relative border-r border-gray-100 px-3", { "is-hide": o.value === 0 }]),
      style: c({ width: o.value + "px" })
    }, [
      t("div", {
        class: "drawer-btn-box absolute flex h-6 w-6 items-center justify-center",
        onClick: K
      }, [
        t("div", j, [
          u(r(E), { class: "text-gray-400" })
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
              t("p", T, _(e.title), 1),
              s.info ? (l(), m("div", F, [
                u(r(S), {
                  content: s.info
                }, {
                  default: x(() => [
                    $(u(r(M), {
                      class: "cursor-pointer",
                      color: "#4193f2",
                      size: "16"
                    }, null, 512), [
                      [N, f.value]
                    ])
                  ]),
                  _: 1
                }, 8, ["content"])
              ])) : p("", !0)
            ], 32),
            v(e.$slots, r(B)(e.$slots, ["header", "head"]), {}, () => [
              s.showRefresh ? (l(), D(r(W), {
                key: 0,
                text: "",
                style: { "padding-right": "0" },
                onClick: i[2] || (i[2] = () => P("refresh"))
              }, {
                default: x(() => [
                  u(r(X), { color: "gray" })
                ]),
                _: 1
              })) : p("", !0)
            ])
          ]),
          t("div", G, [
            v(e.$slots, "default")
          ]),
          e.$slots.footer || e.$slots.foot ? (l(), m("div", H, [
            v(e.$slots, r(B)(e.$slots, ["footer", "foot"]))
          ])) : p("", !0)
        ])
      ]),
      t("div", {
        class: h(["k-page-view-bus-resizer", e.resizeLineClass]),
        style: c(e.resizeLineStyle),
        onMousedown: k
      }, null, 38),
      n.value ? (l(), m("div", {
        key: 0,
        class: h(["k-page-view-bus-preview", e.previewLineClass]),
        style: c({ left: a.value + "px", ...e.previewLineStyle ?? {} })
      }, null, 6)) : p("", !0)
    ], 6));
  }
});
export {
  Ye as default
};
