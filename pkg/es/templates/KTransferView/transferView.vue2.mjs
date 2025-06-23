import { defineComponent as $, reactive as E, ref as s, watch as N, createElementBlock as T, openBlock as c, renderSlot as V, createVNode as i, createCommentVNode as P, createElementVNode as l, createTextVNode as d, unref as a, toDisplayString as _, withCtx as n, Fragment as B, renderList as L, createBlock as R, withModifiers as q, mergeProps as A, pushScopeId as G, popScopeId as M } from "vue";
import { KButton as g } from "../../components/button/index.mjs";
import "../../components/input/index.mjs";
import "../../components/input_number/index.mjs";
import { KRadioGroup as O, KRadio as Q } from "../../components/radio/index.mjs";
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
import { KPopconfirm as U } from "../../components/popconfirm/index.mjs";
import "../../components/result/index.mjs";
import "../../components/empty/index.mjs";
import "../../components/message/index.mjs";
import "../../components/message_box/index.mjs";
import "../../components/dialog/index.mjs";
import "../../components/dialog_service/index.mjs";
import "../../components/tooltip/index.mjs";
import "../../components/filter/index.mjs";
import "../../components/drawer/index.mjs";
import { KForm as Y, KFormItem as j } from "../../components/form/index.mjs";
import "../../components/step/index.mjs";
import "../../components/collapse/index.mjs";
import "../../components/view/index.mjs";
import "../../components/badge/index.mjs";
import "../../components/timeline/index.mjs";
import "../../components/calendar/index.mjs";
import "../../components/tree/index.mjs";
import "../../components/tree_table/index.mjs";
import "../../components/dropdown/index.mjs";
import { KTreeTransfer as z } from "../../components/tree_transfer/index.mjs";
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
import H from "../../node_modules/ksw-vue-icon/es/icons/base/tips.mjs";
const K = (m) => (G("data-v-70780ac9"), m = m(), M(), m), J = {
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
}, Xe = /* @__PURE__ */ $({
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
    const f = m, r = E({
      machineType: f.defaultVal
    }), u = s(null), I = () => {
      r.machineType = y, setTimeout(() => {
        u.value.clearData();
      }, 0), p.value = !1;
    }, S = () => {
      p.value = !1;
    }, v = s(f.defaultData), D = (e) => {
      v.value = e;
    }, p = s(!1);
    let y = "";
    const w = (e) => {
      y = e, r.machineType && v.value.length !== 0 ? p.value = !0 : r.machineType = e;
    };
    N(() => r.machineType, (e) => {
      setTimeout(() => {
        u.value.clearQuery();
      }, 0);
      const t = f.selectList.find((o) => o.type === e);
      t && t.fun && typeof t.fun == "function" && t.fun(y);
    });
    const h = s(), C = () => {
      h.value && h.value.validate((e) => e ? {
        arr: v.value,
        type: r.machineType
      } : (console.warn("error submit!!"), !1));
    }, k = () => {
    };
    return b({
      handleSubmit: C,
      handleSelectType: w,
      handleCancel: k
    }), (e, t) => (c(), T("div", J, [V(e.$slots, "header", {}, () => [l("div", W, [i(a(H), {
      class: "transfer-dialog-icon"
    }), d(" " + _(e.title), 1)])], !0), i(a(Y), {
      ref_key: "KFormRef",
      ref: h,
      model: r,
      "label-width": "auto",
      style: {
        "max-width": "600px"
      }
    }, {
      default: n(() => [i(a(j), {
        value: "选择机器类型",
        prop: "machineType",
        rules: {
          required: !0,
          message: "请选择类型"
        }
      }, {
        default: n(() => [i(a(O), {
          modelValue: r.machineType,
          "onUpdate:modelValue": t[1] || (t[1] = (o) => r.machineType = o)
        }, {
          default: n(() => [(c(!0), T(B, null, L(e.selectList, (o, F) => (c(), R(a(U), {
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
            reference: n(() => [i(a(Q), {
              value: o.type,
              onClick: q((x) => w(o.type), ["prevent"])
            }, {
              default: n(() => [d(_(o.name), 1)]),
              _: 2
            }, 1032, ["value", "onClick"])]),
            _: 2
          }, 1032, ["visible"]))), 128))]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      })]),
      _: 1
    }, 8, ["model"]), r.machineType ? (c(), T("div", X, [i(a(z), A({
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
    }, 16, ["data", "default-data"])])) : P("", !0), V(e.$slots, "footer", {}, () => [l("div", oe, [i(a(g), {
      onClick: k
    }, {
      default: n(() => [d("取消")]),
      _: 1
    }), i(a(g), {
      type: "primary",
      main: "",
      onClick: t[2] || (t[2] = (o) => C())
    }, {
      default: n(() => [d("确定")]),
      _: 1
    })])], !0)]));
  }
});
export {
  Xe as default
};
