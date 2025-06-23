import { defineComponent as P, mergeModels as w, ref as v, computed as C, useModel as W, watch as F, createElementBlock as $, openBlock as p, Fragment as I, createVNode as m, createBlock as B, createCommentVNode as O, unref as a, mergeProps as q, createSlots as K, withCtx as y, renderSlot as g, createElementVNode as h, createTextVNode as k, toDisplayString as z, resolveDynamicComponent as L, renderList as U, normalizeProps as j, guardReactiveProps as x } from "vue";
import { useDeprecated as A } from "../../hooks/use_deprecated.mjs";
import { useInheritSlot as G } from "../../hooks/use_inherit_slot.mjs";
import { getExposeProxy as J } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { getElement as b, isInputElement as Q } from "../../utils/dom.mjs";
import { ElDialog as X } from "../../node_modules/element-plus/es/components/dialog/index.mjs";
import Y from "../../node_modules/ksw-vue-icon/es/icons/base/window-min.mjs";
import V from "../../node_modules/ksw-vue-icon/es/icons/base/close.mjs";
import Z from "../../node_modules/ksw-vue-icon/es/icons/base/window-max.mjs";
import ee from "../../node_modules/ksw-vue-icon/es/icons/base/window-maximize.mjs";
import le from "../../node_modules/ksw-vue-icon/es/icons/base/window-reduce.mjs";
import { ElCard as oe } from "../../node_modules/element-plus/es/components/card/index.mjs";
const te = {
  key: 0,
  class: "k-dialog__resizable-header"
}, ae = { class: "k-dialog__title" }, ie = { class: "k-dialog__resizable-handler" }, se = { class: "k-dialog-minimization__content" }, ne = { class: "k-dialog__card-title" }, Ce = /* @__PURE__ */ P({
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
    const f = v(), o = _;
    A(
      {
        scope: "k-dialog",
        from: "useResizable",
        replacement: "resizable",
        version: "2.0.0"
      },
      C(() => !!o.useResizable)
    );
    const T = H, D = G(["header"]), d = W(_, "modelValue"), c = { w: 0, h: 0 }, s = v(o.fullscreen), u = v(!1), r = C(() => o.resizable ?? o.useResizable);
    F(
      () => o.fullscreen,
      (e) => {
        s.value = e;
      }
    ), F(
      () => o.modelValue,
      (e) => {
        e && (u.value = !1);
      }
    );
    function E() {
      var l, i;
      const e = (i = (l = f.value) == null ? void 0 : l.dialogContentRef) == null ? void 0 : i.$el;
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
    function S() {
      u.value = !0, d.value = !1;
    }
    function M() {
      (o.autoFocusTo || o.autoFocusFirst) && N(), T("opened");
    }
    function N() {
      var l, i, n;
      let e = null;
      if (typeof o.autoFocusTo == "string")
        e = b(o.autoFocusTo);
      else {
        const t = o.autoFocusTo;
        e = (t == null ? void 0 : t.$el) ?? t;
      }
      if (e && Q(e)) {
        (l = e.focus) == null || l.call(e);
        return;
      }
      if (e = e ? b("input, textarea", e) : null, !e && o.autoFocusFirst) {
        const t = (n = (i = f.value) == null ? void 0 : i.dialogContentRef) == null ? void 0 : n.$el;
        e = b(
          ".el-dialog__body input, .el-dialog__body textarea",
          t
        );
      }
      typeof (e == null ? void 0 : e.focus) == "function" && e.focus();
    }
    return R(J({}, f)), (e, l) => (p(), $(I, null, [
      m(a(X), q({
        ref_key: "$dialog",
        ref: f
      }, e.$attrs, {
        modelValue: d.value,
        "onUpdate:modelValue": l[1] || (l[1] = (i) => d.value = i),
        class: [
          "k-dialog",
          { "k-dialog-resizable": r.value && !s.value },
          { "k-dialog__is-show-handler": r.value && e.showResizeHandles }
        ],
        fullscreen: s.value,
        draggable: r.value || e.draggable,
        style: r.value ? { minWidth: e.minWidth + "px", minHeight: e.minHeight + "px" } : {},
        onOpened: M
      }), K({
        header: y(() => [
          r.value && e.showResizeHandles ? (p(), $("div", te, [
            h("div", ae, [
              g(e.$slots, "header", {}, () => [
                k(z(e.title), 1)
              ])
            ]),
            h("div", ie, [
              m(a(Y), {
                class: "mr-3",
                onClick: S
              }),
              (p(), B(L(s.value ? a(le) : a(Z)), { onClick: E })),
              m(a(V), {
                class: "ml-3",
                onClick: l[0] || (l[0] = () => d.value = !1)
              })
            ])
          ])) : g(e.$slots, "header", { key: 1 }, () => [
            k(z(e.title), 1)
          ])
        ]),
        _: 2
      }, [
        U(a(D)(e.$slots), (i, n) => ({
          name: n,
          fn: y((t) => [
            g(e.$slots, n, j(x(t)))
          ])
        }))
      ]), 1040, ["modelValue", "class", "fullscreen", "draggable", "style"]),
      u.value && r.value ? (p(), B(a(oe), {
        key: 0,
        shadow: "always",
        class: "k-dialog-minimization"
      }, {
        default: y(() => [
          h("div", se, [
            h("div", ne, [
              g(e.$slots, "header", {}, () => [
                k(z(e.title), 1)
              ])
            ]),
            m(a(ee), {
              size: 18,
              class: "k-dialog__card-icon k-dialog__card-restore-icon",
              onClick: l[2] || (l[2] = () => d.value = !0)
            }),
            m(a(V), {
              class: "k-dialog__card-icon",
              onClick: l[3] || (l[3] = () => u.value = !1)
            })
          ])
        ]),
        _: 3
      })) : O("", !0)
    ], 64));
  }
});
export {
  Ce as default
};
