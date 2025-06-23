import { defineComponent as B, ref as E, computed as N, resolveComponent as S, createElementBlock as g, openBlock as i, normalizeClass as D, createVNode as u, unref as l, mergeProps as F, createSlots as R, withCtx as r, createElementVNode as n, renderSlot as m, createTextVNode as k, toDisplayString as f, withModifiers as T, createBlock as v, createCommentVNode as I, resolveDynamicComponent as U } from "vue";
import { useLocale as V } from "../../hooks/use_locale.mjs";
import { getExposeProxy as K } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import q from "../../node_modules/ksw-vue-icon/es/icons/base/check.mjs";
import z from "../../node_modules/ksw-vue-icon/es/icons/base/delete.mjs";
import L from "../../node_modules/ksw-vue-icon/es/icons/base/EmptyBox.mjs";
import M from "../../node_modules/ksw-vue-icon/es/icons/base/file.mjs";
import j from "../../node_modules/ksw-vue-icon/es/icons/base/warning.mjs";
import { ElUpload as A } from "../../node_modules/element-plus/es/components/upload/index.mjs";
import { ElProgress as G } from "../../node_modules/element-plus/es/components/progress/index.mjs";
const H = {
  key: 0,
  class: "default-sign"
}, J = { class: "file-list" }, O = ["onClick"], Q = { class: "header-icon" }, W = ["title"], X = { class: "status-icon-box" }, Y = { class: "status-icon" }, Z = { class: "remove-file" }, x = { class: "el-upload__tip" }, fe = /* @__PURE__ */ B({
  name: "KUpload",
  __name: "upload",
  props: {
    action: {},
    drag: { type: Boolean },
    autoUpload: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    listType: { default: "text" },
    removeIcon: {},
    successIcon: {},
    failIcon: {},
    onPreview: {}
  },
  setup($, { expose: w }) {
    const { t: p } = V(), o = $, c = E(), P = N(() => (e) => {
      if (e === "success" && o.successIcon)
        return o.successIcon;
      if (e === "success")
        return q;
      if (e === "fail" && o.failIcon)
        return o.failIcon;
      if (e === "fail")
        return j;
    });
    function y(e) {
      var a;
      e && e.stopPropagation(), e && e.preventDefault(), (a = c.value) == null || a.submit();
    }
    function _(e, a) {
      var d;
      (d = c.value) == null || d.handleRemove(e, a);
    }
    function b(e) {
      var a;
      (a = o.onPreview) == null || a.call(o, e);
    }
    function h() {
      c.value.$el.querySelector("input").click();
    }
    return w(K({ submit: y, selectFile: h, handleRemove: _ }, c)), (e, a) => {
      const d = S("k-button");
      return i(), g("div", {
        class: D(["k-upload", { "k-dragger": e.drag }])
      }, [
        u(l(A), F({
          ref_key: "KUploadRef",
          ref: c
        }, e.$attrs, {
          action: e.action,
          "on-preview": b,
          "auto-upload": e.autoUpload,
          disabled: e.disabled,
          drag: e.drag,
          "list-type": e.listType
        }), R({
          trigger: r(() => [
            m(e.$slots, "trigger", {}, () => {
              var t;
              return [
                o.drag ? (i(), g("div", H, [
                  u(l(L), { color: "#2882ff" }),
                  k(" " + f((t = l(p)) == null ? void 0 : t("upload.uploadDragSign")), 1)
                ])) : (i(), g("div", {
                  key: 1,
                  class: "default-upload-btn",
                  onClick: a[0] || (a[0] = T(() => {
                  }, ["stop"]))
                }, [
                  u(d, {
                    secondary: "",
                    "icon-left": e.autoUpload ? "IconUpload" : "",
                    onClick: h
                  }, {
                    default: r(() => {
                      var s, C;
                      return [
                        k(f(o.autoUpload ? (s = l(p)) == null ? void 0 : s("upload.uploadFile") : (C = l(p)) == null ? void 0 : C("upload.selectFile")), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["icon-left"]),
                  o.autoUpload ? I("", !0) : (i(), v(d, {
                    key: 0,
                    main: "",
                    class: "main-btn",
                    disabled: o.disabled,
                    "icon-left": "IconUpload",
                    onClick: y
                  }, {
                    default: r(() => {
                      var s;
                      return [
                        k(f((s = l(p)) == null ? void 0 : s("upload.uploadFile")), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["disabled"]))
                ]))
              ];
            })
          ]),
          default: r(() => [
            m(e.$slots, "default")
          ]),
          tip: r(() => [
            n("div", x, [
              m(e.$slots, "tip")
            ])
          ]),
          _: 2
        }, [
          e.listType === "text" ? {
            name: "file",
            fn: r(({ file: t }) => [
              m(e.$slots, "file", {}, () => [
                n("div", J, [
                  n("div", null, [
                    n("a", {
                      onClick: (s) => b(t)
                    }, [
                      n("span", Q, [
                        u(l(M))
                      ]),
                      n("span", {
                        title: t.name
                      }, f(t.name), 9, W)
                    ], 8, O),
                    t.status === "uploading" ? (i(), v(l(G), {
                      key: 0,
                      type: "line",
                      "stroke-width": 2,
                      percentage: Number(t.percentage),
                      style: "margin-top: 0.5rem"
                    }, null, 8, ["percentage"])) : I("", !0)
                  ]),
                  n("div", X, [
                    n("span", Y, [
                      (i(), v(U(P.value(t.status)), {
                        color: t.status === "success" ? "#22c55e" : "#ef4444"
                      }, null, 8, ["color"]))
                    ]),
                    n("span", Z, [
                      (i(), v(U(o.removeIcon ?? l(z)), {
                        color: "#f97316",
                        onClick: (s) => _(t)
                      }, null, 8, ["onClick"]))
                    ])
                  ])
                ])
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["action", "auto-upload", "disabled", "drag", "list-type"])
      ], 2);
    };
  }
});
export {
  fe as default
};
