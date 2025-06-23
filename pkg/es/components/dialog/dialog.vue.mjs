import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { useDeprecated as P } from "../../hooks/use_deprecated.mjs";
import { useInheritSlot as W } from "../../hooks/use_inherit_slot.mjs";
import { getExposeProxy as I } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { getElement as v, isInputElement as O } from "../../utils/dom.mjs";
import { defineComponent as q, mergeModels as w, computed as C, useModel as K, watch as B, createElementBlock as F, openBlock as p, createVNode as m, createBlock as V, createCommentVNode as L, createSlots as U, renderList as j, withCtx as y, renderSlot as g, guardReactiveProps as x, createElementVNode as h, createTextVNode as k, resolveDynamicComponent as A, mergeProps as G, Fragment as J } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import Q from "../../node_modules/ksw-vue-icon/es/icons/base/window-min.mjs";
import $ from "../../node_modules/ksw-vue-icon/es/icons/base/close.mjs";
import X from "../../node_modules/ksw-vue-icon/es/icons/base/window-max.mjs";
import Y from "../../node_modules/ksw-vue-icon/es/icons/base/window-maximize.mjs";
import Z from "../../node_modules/ksw-vue-icon/es/icons/base/window-reduce.mjs";
import { ElDialog as ee } from "../../node_modules/element-plus/es/components/dialog/index.mjs";
import { ElCard as oe } from "../../node_modules/element-plus/es/components/card/index.mjs";
import { ref as z, unref as a } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as le, toDisplayString as b } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const te = {
  key: 0,
  class: "k-dialog__resizable-header"
}, ae = { class: "k-dialog__title" }, ie = { class: "k-dialog__resizable-handler" }, se = { class: "k-dialog-minimization__content" }, ne = { class: "k-dialog__card-title" }, Ve = /* @__PURE__ */ q({
  name: "KDialog",
  __name: "dialog",
  props: /* @__PURE__ */ w({
    modelValue: { type: Boolean, default: !1 },
    title: { default: "" },
    fullscreen: { type: Boolean, default: !1 },
    minHeight: { default: 150 },
    minWidth: { default: 300 },
    useResizable: { type: Boolean, default: !1 },
    draggable: { type: Boolean, default: !1 },
    autoFocusFirst: { type: Boolean, default: !1 },
    autoFocusTo: {},
    resizable: { type: Boolean, default: !1 },
    showResizeHandles: { type: Boolean, default: !0 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ w(["opened"], ["update:modelValue"]),
  setup(_, { expose: R, emit: H }) {
    const f = z(), l = _;
    P(
      {
        scope: "k-dialog",
        from: "useResizable",
        replacement: "resizable",
        version: "2.0.0"
      },
      C(() => !!l.useResizable)
    );
    const T = H, D = W(["header"]), d = K(_, "modelValue"), c = { w: 0, h: 0 }, s = z(l.fullscreen), u = z(!1), r = C(() => l.resizable ?? l.useResizable);
    B(
      () => l.fullscreen,
      (e) => {
        s.value = e;
      }
    ), B(
      () => l.modelValue,
      (e) => {
        e && (u.value = !1);
      }
    );
    function E() {
      var o, i;
      const e = (i = (o = f.value) == null ? void 0 : o.dialogContentRef) == null ? void 0 : i.$el;
      if (e) {
        if (s.value)
          e.style.width = `${c.w}px`, e.style.height = `${c.h}px`;
        else {
          const { width: n, height: t } = e.getBoundingClientRect();
          c.w = n, c.h = t, e.style.width = "auto", e.style.height = "100%";
        }
        u.value = !1, s.value = !s.value;
      }
    }
    function N() {
      u.value = !0, d.value = !1;
    }
    function S() {
      (l.autoFocusTo || l.autoFocusFirst) && M(), T("opened");
    }
    function M() {
      var o, i, n;
      let e = null;
      if (typeof l.autoFocusTo == "string")
        e = v(l.autoFocusTo);
      else {
        const t = l.autoFocusTo;
        e = (t == null ? void 0 : t.$el) ?? t;
      }
      if (e && O(e)) {
        (o = e.focus) == null || o.call(e);
        return;
      }
      if (e = e ? v("input, textarea", e) : null, !e && l.autoFocusFirst) {
        const t = (n = (i = f.value) == null ? void 0 : i.dialogContentRef) == null ? void 0 : n.$el;
        e = v(
          ".el-dialog__body input, .el-dialog__body textarea",
          t
        );
      }
      typeof (e == null ? void 0 : e.focus) == "function" && e.focus();
    }
    return R(I({}, f)), (e, o) => (p(), F(J, null, [
      m(a(ee), G({
        ref_key: "$dialog",
        ref: f
      }, e.$attrs, {
        modelValue: d.value,
        "onUpdate:modelValue": o[1] || (o[1] = (i) => d.value = i),
        class: [
          "k-dialog",
          { "k-dialog-resizable": r.value && !s.value },
          { "k-dialog__is-show-handler": r.value && e.showResizeHandles }
        ],
        fullscreen: s.value,
        draggable: r.value || e.draggable,
        style: r.value ? { minWidth: e.minWidth + "px", minHeight: e.minHeight + "px" } : {},
        onOpened: S
      }), U({
        header: y(() => [
          r.value && e.showResizeHandles ? (p(), F("div", te, [
            h("div", ae, [
              g(e.$slots, "header", {}, () => [
                k(b(e.title), 1)
              ])
            ]),
            h("div", ie, [
              m(a(Q), {
                class: "mr-3",
                onClick: N
              }),
              (p(), V(A(s.value ? a(Z) : a(X)), { onClick: E })),
              m(a($), {
                class: "ml-3",
                onClick: o[0] || (o[0] = () => d.value = !1)
              })
            ])
          ])) : g(e.$slots, "header", { key: 1 }, () => [
            k(b(e.title), 1)
          ])
        ]),
        _: 2
      }, [
        j(a(D)(e.$slots), (i, n) => ({
          name: n,
          fn: y((t) => [
            g(e.$slots, n, le(x(t)))
          ])
        }))
      ]), 1040, ["modelValue", "class", "fullscreen", "draggable", "style"]),
      u.value && r.value ? (p(), V(a(oe), {
        key: 0,
        shadow: "always",
        class: "k-dialog-minimization"
      }, {
        default: y(() => [
          h("div", se, [
            h("div", ne, [
              g(e.$slots, "header", {}, () => [
                k(b(e.title), 1)
              ])
            ]),
            m(a(Y), {
              size: 18,
              class: "k-dialog__card-icon k-dialog__card-restore-icon",
              onClick: o[2] || (o[2] = () => d.value = !0)
            }),
            m(a($), {
              class: "k-dialog__card-icon",
              onClick: o[3] || (o[3] = () => u.value = !1)
            })
          ])
        ]),
        _: 3
      })) : L("", !0)
    ], 64));
  }
});
export {
  Ve as default
};
