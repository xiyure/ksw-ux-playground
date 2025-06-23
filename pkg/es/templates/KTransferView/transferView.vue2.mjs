import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KButton as k } from "../../components/button/index.mjs";
import "../../components/input/index.mjs";
import "../../components/input_number/index.mjs";
import { KRadioGroup as N, KRadio as $ } from "../../components/radio/index.mjs";
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
import { KPopconfirm as B } from "../../components/popconfirm/index.mjs";
import "../../components/result/index.mjs";
import "../../components/empty/index.mjs";
import "../../components/message/index.mjs";
import "../../components/message_box/index.mjs";
import "../../components/dialog/index.mjs";
import "../../components/dialog_service/index.mjs";
import "../../components/tooltip/index.mjs";
import "../../components/filter/index.mjs";
import "../../components/drawer/index.mjs";
import { KFormItem as E, KForm as P } from "../../components/form/index.mjs";
import "../../components/step/index.mjs";
import "../../components/collapse/index.mjs";
import "../../components/view/index.mjs";
import "../../components/badge/index.mjs";
import "../../components/timeline/index.mjs";
import "../../components/calendar/index.mjs";
import "../../components/tree/index.mjs";
import "../../components/tree_table/index.mjs";
import "../../components/dropdown/index.mjs";
import { KTreeTransfer as L } from "../../components/tree_transfer/index.mjs";
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
import { defineComponent as R, watch as q, createElementBlock as T, openBlock as s, renderSlot as g, createVNode as i, createCommentVNode as A, createElementVNode as l, createTextVNode as c, withCtx as n, Fragment as G, renderList as M, createBlock as O, mergeProps as Q, pushScopeId as U, popScopeId as Y } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { reactive as j, ref as d, unref as a } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import z from "../../node_modules/ksw-vue-icon/es/icons/base/tips.mjs";
import { toDisplayString as _ } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { withModifiers as H } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
const K = (m) => (U("data-v-70780ac9"), m = m(), Y(), m), J = {
  class: "k-transfer-view"
}, W = {
  class: "transfer-dialog-content"
}, X = {
  key: 0,
  class: "transfer-view-box"
}, Z = {
  class: "empty-text"
}, ee = /* @__PURE__ */ K(() => /* @__PURE__ */ l("div", null, "没有找到包含", -1)), te = /* @__PURE__ */ K(() => /* @__PURE__ */ l("div", null, "的数据", -1)), oe = {
  class: "footer"
}, ot = /* @__PURE__ */ R({
  name: "KTransferView",
  __name: "transferView",
  props: {
    treeTransferData: {
      default: () => []
    },
    title: {
      default: "仅允许选择同一种类型的机器"
    },
    defaultVal: {
      default: ""
    },
    selectList: {
      default: () => []
    },
    defaultData: {
      default: () => []
    }
  },
  setup(m, {
    expose: b
  }) {
    const f = m, r = j({
      machineType: f.defaultVal
    }), u = d(null), I = () => {
      r.machineType = y, setTimeout(() => {
        u.value.clearData();
      }, 0), p.value = !1;
    }, S = () => {
      p.value = !1;
    }, v = d(f.defaultData), D = (e) => {
      v.value = e;
    }, p = d(!1);
    let y = "";
    const w = (e) => {
      y = e, r.machineType && v.value.length !== 0 ? p.value = !0 : r.machineType = e;
    };
    q(() => r.machineType, (e) => {
      setTimeout(() => {
        u.value.clearQuery();
      }, 0);
      const t = f.selectList.find((o) => o.type === e);
      t && t.fun && typeof t.fun == "function" && t.fun(y);
    });
    const h = d(), C = () => {
      h.value && h.value.validate((e) => e ? {
        arr: v.value,
        type: r.machineType
      } : (console.warn("error submit!!"), !1));
    }, V = () => {
    };
    return b({
      handleSubmit: C,
      handleSelectType: w,
      handleCancel: V
    }), (e, t) => (s(), T("div", J, [g(e.$slots, "header", {}, () => [l("div", W, [i(a(z), {
      class: "transfer-dialog-icon"
    }), c(" " + _(e.title), 1)])], !0), i(a(P), {
      ref_key: "KFormRef",
      ref: h,
      model: r,
      "label-width": "auto",
      style: {
        "max-width": "600px"
      }
    }, {
      default: n(() => [i(a(E), {
        value: "选择机器类型",
        prop: "machineType",
        rules: {
          required: !0,
          message: "请选择类型"
        }
      }, {
        default: n(() => [i(a(N), {
          modelValue: r.machineType,
          "onUpdate:modelValue": t[1] || (t[1] = (o) => r.machineType = o)
        }, {
          default: n(() => [(s(!0), T(G, null, M(e.selectList, (o, F) => (s(), O(a(B), {
            key: F,
            visible: o.type === r.machineType && p.value,
            "confirm-button-text": "Yes",
            "cancel-button-text": "No",
            icon: "IconClear",
            "icon-color": "#626AEF",
            title: "切换类型会清空你已选择的数据, 是否继续?",
            onConfirm: t[0] || (t[0] = (x) => I()),
            onCancel: S
          }, {
            reference: n(() => [i(a($), {
              value: o.type,
              onClick: H((x) => w(o.type), ["prevent"])
            }, {
              default: n(() => [c(_(o.name), 1)]),
              _: 2
            }, 1032, ["value", "onClick"])]),
            _: 2
          }, 1032, ["visible"]))), 128))]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      })]),
      _: 1
    }, 8, ["model"]), r.machineType ? (s(), T("div", X, [i(a(L), Q({
      ref_key: "myTreeTransfer",
      ref: u,
      data: e.treeTransferData,
      titles: ["待选IP", "已选IP"],
      "default-data": e.defaultData,
      value: "name",
      "expand-icon": "IconFolderOpen",
      "expand-icon-color": "#f60",
      "collapse-icon-color": "red",
      "icon-color": "green",
      "collapse-icon": "IconFolderClose",
      class: "transfer-view-box-item"
    }, e.$attrs, {
      onChange: D
    }), {
      empty: n(({
        query: o
      }) => [l("div", Z, [ee, l("div", null, "'" + _(o) + "'", 1), te])]),
      _: 1
    }, 16, ["data", "default-data"])])) : A("", !0), g(e.$slots, "footer", {}, () => [l("div", oe, [i(a(k), {
      onClick: V
    }, {
      default: n(() => [c("取消")]),
      _: 1
    }), i(a(k), {
      type: "primary",
      main: "",
      onClick: t[2] || (t[2] = (o) => C())
    }, {
      default: n(() => [c("确定")]),
      _: 1
    })])], !0)]));
  }
});
export {
  ot as default
};
