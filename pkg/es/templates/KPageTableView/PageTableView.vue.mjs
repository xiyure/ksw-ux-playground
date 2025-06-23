import { defineComponent as C, computed as a, ref as b, createVNode as g, createElementBlock as l, openBlock as i, createBlock as w, createCommentVNode as n, createElementVNode as t, unref as p, mergeProps as V, withCtx as m, renderSlot as s, resolveDynamicComponent as I, createTextVNode as $, toDisplayString as k, withDirectives as B, vShow as R } from "vue";
import { KPageViewBus as H } from "../KPageViewBus/index.mjs";
import "../../components/button/index.mjs";
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
import { KTooltip as D } from "../../components/tooltip/index.mjs";
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
import { useDeprecated as u } from "../../hooks/use_deprecated.mjs";
import { compatibleSlots as N } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import S from "../../node_modules/ksw-vue-icon/es/icons/base/tips.mjs";
const j = {
  id: "KPageTableView",
  class: "KPageTableView flex h-full w-full rounded bg-white text-gray-700"
}, z = {
  key: 0,
  class: "k-page-view-aside-content flex h-full flex-col"
}, A = {
  id: "KPageContent",
  class: "KPageContent flex h-full flex-1 flex-col py-3 pl-6 pr-3",
  style: {
    "min-width": "0",
    "min-height": "0"
  }
}, E = {
  id: "KPageHead",
  class: "KPageHead flex justify-between pb-1"
}, M = {
  key: 0,
  class: "KPageHead-icon mr-1 h-6 w-6"
}, U = {
  class: "KPageHead-title"
}, q = {
  key: 1,
  class: "KPageHead-info pl-1"
}, F = {
  id: "KPageBody",
  class: "KPageBody overflow-hidden",
  style: {
    height: "calc(100vh - 10.375rem)"
  }
}, Le = /* @__PURE__ */ C({
  name: "KPageTableView",
  __name: "PageTableView",
  props: {
    showAside: {
      type: Boolean,
      default: !1
    },
    asideTitle: {
      default: ""
    },
    asideInfo: {
      default: ""
    },
    asideRefresh: {
      type: Boolean,
      default: !1
    },
    pageIcon: {
      default: ""
    },
    pageTitle: {
      default: ""
    },
    pageInfo: {
      default: ""
    },
    asideConfig: {}
  },
  emits: ["refresh"],
  setup(P, {
    emit: K
  }) {
    const r = P;
    u({
      scope: "KPageTableView",
      from: "asideTitle",
      replacement: "asideConfig.title",
      version: "2.0.0"
    }, a(() => !!r.asideTitle)), u({
      scope: "KPageTableView",
      from: "asideInfo",
      replacement: "asideConfig.info",
      version: "2.0.0"
    }, a(() => !!r.asideInfo)), u({
      scope: "KPageTableView",
      from: "asideRefresh",
      replacement: "asideConfig.showRefresh",
      version: "2.0.0"
    }, a(() => !!r.asideRefresh));
    const d = b(!1), y = /.(jpg|jpeg|png|gif|svg)$/, f = a(() => {
      const e = r.pageIcon;
      return typeof e == "string" && y.test(e) ? () => g("img", {
        src: e,
        alt: "icon",
        class: "k-page-head-icon"
      }, null) : e;
    }), T = K;
    return (e, o) => {
      var h, c, v;
      return i(), l("div", j, [e.showAside ? (i(), w(p(H), V({
        key: 0,
        title: ((h = e.asideConfig) == null ? void 0 : h.title) ?? e.asideTitle,
        info: ((c = e.asideConfig) == null ? void 0 : c.info) ?? e.asideInfo,
        "show-refresh": ((v = e.asideConfig) == null ? void 0 : v.showRefresh) ?? e.asideRefresh
      }, e.asideConfig, {
        onRefresh: o[0] || (o[0] = (G) => T("refresh"))
      }), {
        header: m(() => [s(e.$slots, "aside-toolbar")]),
        footer: m(() => [s(e.$slots, p(N)(e.$slots, ["aside-footer", "aside-foot"]))]),
        default: m(() => [e.$slots.aside ? (i(), l("div", z, [s(e.$slots, "aside")])) : n("", !0)]),
        _: 3
      }, 16, ["title", "info", "show-refresh"])) : n("", !0), t("div", A, [t("div", E, [t("div", {
        class: "KPageHead-title-container flex items-center",
        onMouseenter: o[1] || (o[1] = () => d.value = !0),
        onMouseleave: o[2] || (o[2] = () => d.value = !1)
      }, [f.value ? (i(), l("div", M, [(i(), w(I(f.value), {
        size: "24"
      }))])) : n("", !0), t("p", U, [s(e.$slots, "page-title", {}, () => [$(k(e.pageTitle), 1)])]), f.value && e.pageInfo ? (i(), l("div", q, [g(p(D), {
        content: e.pageInfo
      }, {
        default: m(() => [B(g(p(S), {
          color: "#4193f2",
          size: "16"
        }, null, 512), [[R, d.value]])]),
        _: 1
      }, 8, ["content"])])) : n("", !0)], 32), t("div", null, [s(e.$slots, "toolbar")])]), t("div", F, [s(e.$slots, "default")])])]);
    };
  }
});
export {
  Le as default
};
