import { defineComponent as n, createElementBlock as a, openBlock as o, createElementVNode as t, renderSlot as s, createBlock as i, createCommentVNode as c, resolveDynamicComponent as u, toDisplayString as f, Fragment as h, renderList as p, mergeProps as m } from "vue";
import g from "../KDetails/DetailsItem.vue.mjs";
const v = {
  id: "KPageDetails",
  class: "KPageDetails h-full flex-1",
  style: { "min-width": "0" }
}, _ = { class: "KPageDetailsHead-content w-full flex flex-col bg-white rounded overflow-hidden mb-2 shadow-sm" }, b = { class: "extra-head px-6 py-2 border-b border-gray-200" }, w = { class: "w-full flex justify-between items-center" }, y = { class: "head-title" }, D = { class: "flex items-center gap-1 h-8" }, x = { class: "head-toolbar" }, P = { class: "extra-head-body px-6 py-3" }, k = { class: "w-full relative overflow-auto scrollbar-hide flex gap-4" }, B = { class: "shadow-sm flex-1" }, C = /* @__PURE__ */ n({
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
  setup(d) {
    const r = d;
    return (e, $) => (o(), a("div", v, [
      t("div", _, [
        t("div", b, [
          s(e.$slots, "extra-head", {}, () => [
            t("div", w, [
              t("div", y, [
                s(e.$slots, "head-title", {}, () => [
                  t("div", D, [
                    e.pageIcon ? (o(), i(u(e.pageIcon), {
                      key: 0,
                      size: "24"
                    })) : c("", !0),
                    t("span", null, f(e.pageTitle), 1)
                  ])
                ], !0)
              ]),
              t("div", x, [
                s(e.$slots, "head-toolbar", {}, void 0, !0)
              ])
            ])
          ], !0)
        ]),
        t("div", P, [
          s(e.$slots, "head-abstract", {}, () => [
            t("div", k, [
              (o(!0), a(h, null, p(r.abstract, (l) => (o(), i(g, m({
                key: l.label,
                "show-line": e.showLine,
                direction: e.direction,
                useflex: e.useflex
              }, l), null, 16, ["show-line", "direction", "useflex"]))), 128))
            ])
          ], !0)
        ])
      ]),
      t("div", B, [
        s(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
export {
  C as default
};
