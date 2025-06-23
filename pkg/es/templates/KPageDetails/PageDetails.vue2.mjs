import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import n from "../KDetails/DetailsItem.vue.mjs";
import { defineComponent as c, createElementBlock as l, openBlock as o, createElementVNode as t, renderSlot as s, createBlock as i, createCommentVNode as u, resolveDynamicComponent as f, Fragment as h, renderList as p, mergeProps as m } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { toDisplayString as g } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const v = {
  id: "KPageDetails",
  class: "KPageDetails h-full flex-1",
  style: { "min-width": "0" }
}, _ = { class: "KPageDetailsHead-content w-full flex flex-col bg-white rounded overflow-hidden mb-2 shadow-sm" }, b = { class: "extra-head px-6 py-2 border-b border-gray-200" }, w = { class: "w-full flex justify-between items-center" }, y = { class: "head-title" }, D = { class: "flex items-center gap-1 h-8" }, x = { class: "head-toolbar" }, B = { class: "extra-head-body px-6 py-3" }, P = { class: "w-full relative overflow-auto scrollbar-hide flex gap-4" }, k = { class: "shadow-sm flex-1" }, N = /* @__PURE__ */ c({
  name: "KPageDetails",
  __name: "PageDetails",
  props: {
    pageIcon: { default: "" },
    pageTitle: { default: "标题" },
    pageDescription: { default: "" },
    abstract: { default: () => [] },
    showLine: { type: Boolean, default: !1 },
    direction: { default: "vertical" },
    useflex: { type: Boolean, default: !0 }
  },
  setup(r) {
    const d = r;
    return (e, $) => (o(), l("div", v, [
      t("div", _, [
        t("div", b, [
          s(e.$slots, "extra-head", {}, () => [
            t("div", w, [
              t("div", y, [
                s(e.$slots, "head-title", {}, () => [
                  t("div", D, [
                    e.pageIcon ? (o(), i(f(e.pageIcon), {
                      key: 0,
                      size: "24"
                    })) : u("", !0),
                    t("span", null, g(e.pageTitle), 1)
                  ])
                ], !0)
              ]),
              t("div", x, [
                s(e.$slots, "head-toolbar", {}, void 0, !0)
              ])
            ])
          ], !0)
        ]),
        t("div", B, [
          s(e.$slots, "head-abstract", {}, () => [
            t("div", P, [
              (o(!0), l(h, null, p(d.abstract, (a) => (o(), i(n, m({
                key: a.label,
                "show-line": e.showLine,
                direction: e.direction,
                useflex: e.useflex
              }, a), null, 16, ["show-line", "direction", "useflex"]))), 128))
            ])
          ], !0)
        ])
      ]),
      t("div", k, [
        s(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
export {
  N as default
};
