import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { useLocale as P } from "../../hooks/use_locale.mjs";
import { getExposeProxy as N } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import E from "../../node_modules/ksw-vue-icon/es/icons/base/check.mjs";
import S from "../../node_modules/ksw-vue-icon/es/icons/base/delete.mjs";
import V from "../../node_modules/ksw-vue-icon/es/icons/base/EmptyBox.mjs";
import D from "../../node_modules/ksw-vue-icon/es/icons/base/file.mjs";
import F from "../../node_modules/ksw-vue-icon/es/icons/base/warning.mjs";
import { ElProgress as R } from "../../node_modules/element-plus/es/components/progress/index.mjs";
import { ElUpload as T } from "../../node_modules/element-plus/es/components/upload/index.mjs";
import { defineComponent as K, computed as q, resolveComponent as z, createElementBlock as g, openBlock as i, createVNode as u, createSlots as L, withCtx as r, renderSlot as m, createElementVNode as l, createBlock as f, createCommentVNode as I, resolveDynamicComponent as U, createTextVNode as k, mergeProps as M } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as j, unref as n } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as v, normalizeClass as A } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { withModifiers as G } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
const H = {
  key: 0,
  class: "default-sign"
}, J = { class: "file-list" }, O = ["onClick"], Q = { class: "header-icon" }, W = ["title"], X = { class: "status-icon-box" }, Y = { class: "status-icon" }, Z = { class: "remove-file" }, x = { class: "el-upload__tip" }, ye = /* @__PURE__ */ K({
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
    const { t: p } = P(), o = $, c = j(), B = q(() => (e) => {
      if (e === "success" && o.successIcon)
        return o.successIcon;
      if (e === "success")
        return E;
      if (e === "fail" && o.failIcon)
        return o.failIcon;
      if (e === "fail")
        return F;
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
    return w(N({ submit: y, selectFile: h, handleRemove: _ }, c)), (e, a) => {
      const d = z("k-button");
      return i(), g("div", {
        class: A(["k-upload", { "k-dragger": e.drag }])
      }, [
        u(n(T), M({
          ref_key: "KUploadRef",
          ref: c
        }, e.$attrs, {
          action: e.action,
          "on-preview": b,
          "auto-upload": e.autoUpload,
          disabled: e.disabled,
          drag: e.drag,
          "list-type": e.listType
        }), L({
          trigger: r(() => [
            m(e.$slots, "trigger", {}, () => {
              var t;
              return [
                o.drag ? (i(), g("div", H, [
                  u(n(V), { color: "#2882ff" }),
                  k(" " + v((t = n(p)) == null ? void 0 : t("upload.uploadDragSign")), 1)
                ])) : (i(), g("div", {
                  key: 1,
                  class: "default-upload-btn",
                  onClick: a[0] || (a[0] = G(() => {
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
                        k(v(o.autoUpload ? (s = n(p)) == null ? void 0 : s("upload.uploadFile") : (C = n(p)) == null ? void 0 : C("upload.selectFile")), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["icon-left"]),
                  o.autoUpload ? I("", !0) : (i(), f(d, {
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
                        k(v((s = n(p)) == null ? void 0 : s("upload.uploadFile")), 1)
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
            l("div", x, [
              m(e.$slots, "tip")
            ])
          ]),
          _: 2
        }, [
          e.listType === "text" ? {
            name: "file",
            fn: r(({ file: t }) => [
              m(e.$slots, "file", {}, () => [
                l("div", J, [
                  l("div", null, [
                    l("a", {
                      onClick: (s) => b(t)
                    }, [
                      l("span", Q, [
                        u(n(D))
                      ]),
                      l("span", {
                        title: t.name
                      }, v(t.name), 9, W)
                    ], 8, O),
                    t.status === "uploading" ? (i(), f(n(R), {
                      key: 0,
                      type: "line",
                      "stroke-width": 2,
                      percentage: Number(t.percentage),
                      style: "margin-top: 0.5rem"
                    }, null, 8, ["percentage"])) : I("", !0)
                  ]),
                  l("div", X, [
                    l("span", Y, [
                      (i(), f(U(B.value(t.status)), {
                        color: t.status === "success" ? "#22c55e" : "#ef4444"
                      }, null, 8, ["color"]))
                    ]),
                    l("span", Z, [
                      (i(), f(U(o.removeIcon ?? n(S)), {
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
  ye as default
};
