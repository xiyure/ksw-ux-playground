import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KButton as K } from "../../components/button/index.mjs";
import "../../components/input/index.mjs";
import "../../components/input_number/index.mjs";
import "../../components/radio/index.mjs";
import "../../components/checkbox/index.mjs";
import "../../components/switch/index.mjs";
import { KTabPane as j, KTabs as x } from "../../components/tab/index.mjs";
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
import "../../components/tooltip/index.mjs";
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
import E from "../../node_modules/ksw-vue-icon/es/icons/base/up.mjs";
import H from "../../node_modules/ksw-vue-icon/es/icons/base/tips.mjs";
import { defineComponent as L, onMounted as U, resolveComponent as w, createElementBlock as u, openBlock as s, createElementVNode as i, renderSlot as a, createBlock as f, createCommentVNode as v, resolveDynamicComponent as q, withCtx as d, withDirectives as J, createVNode as g, Fragment as k, renderList as $, createTextVNode as O, mergeProps as P, createSlots as Q } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as m, unref as c } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as D, normalizeStyle as S, normalizeClass as W } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { vShow as X } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
const Y = {
  id: "GFPageDetails",
  class: "GFPageDetails",
  style: { "min-width": "0" }
}, Z = { class: "GFPageDetailsHead-content px-10 w-full flex flex-col bg-white rounded overflow-hidden shadow-sm" }, A = { class: "head" }, R = { class: "w-full flex justify-between items-center mb-4" }, ee = { class: "head-title" }, te = { class: "text-2xl font-bold" }, oe = {
  key: 1,
  class: "KPageHead-info h-6 w-6"
}, le = { class: "head-toolbar" }, ie = { class: "head-abstract mb-4 flex flex-col" }, se = {
  key: 0,
  class: "!m-auto p-2"
}, re = { class: "GFPageDetails-slot--default flex-1" }, at = /* @__PURE__ */ L({
  name: "GFPageDetails",
  __name: "GFPageDetails",
  props: {
    icon: { default: "" },
    title: { default: "标题" },
    descriptions: {},
    columns: { default: 3 },
    abstract: { default: () => [] },
    tabsConfig: {},
    tabs: { default: () => [] },
    direction: { default: "horizontal" },
    useItemCollapse: { type: Boolean, default: !1 }
  },
  setup(T, { expose: V }) {
    var _;
    const h = T, n = m(!0), t = m(), F = (_ = h.tabsConfig) == null ? void 0 : _.defaultActive, y = m(F ?? h.tabs[0].name), C = m(1), N = m(1), b = m(!1);
    U(() => {
      B(), I();
    });
    function z(e) {
      y.value = e;
    }
    function B() {
      var o;
      return (o = t.value) == null ? void 0 : o.children[0].children[0].clientHeight;
    }
    function G() {
      n.value = !n.value;
    }
    function I() {
      if (!(t != null && t.value)) return;
      let e = 1;
      const o = getComputedStyle(t == null ? void 0 : t.value).gridTemplateColumns.split(
        " "
      );
      for (let r = 1; r < o.length; r++) {
        if (Math.abs(parseInt(o[r]) - parseInt(o[r - 1])) > 2) {
          C.value = e;
          break;
        }
        e++;
      }
      C.value = e, setTimeout(() => {
        M();
      }, 1);
    }
    function M() {
      var p;
      const e = ((p = t.value) == null ? void 0 : p.clientHeight) ?? 0, o = getComputedStyle(t == null ? void 0 : t.value).gridTemplateRows.split(
        " "
      ), r = o[0];
      N.value = o.length, t == null || t.value.style.setProperty("--expandHeight", `${e}px`), t == null || t.value.style.setProperty("--transition-duration", "0.3s"), t == null || t.value.style.setProperty("--firstRowHeight", `${r}`);
    }
    return V({ toggleActiveTab: z }), (e, o) => {
      const r = w("k-tooltip"), p = w("k-details-item");
      return s(), u("div", Y, [
        i("div", Z, [
          i("div", A, [
            a(e.$slots, "extra-head", {}, () => [
              i("div", R, [
                i("div", ee, [
                  a(e.$slots, "head-title", {}, () => [
                    i("div", {
                      class: "flex items-center gap-1 h-8 items-center justify-center",
                      onMouseenter: o[1] || (o[1] = () => b.value = !0)
                    }, [
                      e.icon ? (s(), f(q(e.icon), {
                        key: 0,
                        size: "24"
                      })) : v("", !0),
                      i("span", te, D(e.title), 1),
                      e.descriptions ? (s(), u("div", oe, [
                        e.descriptions ? (s(), f(r, {
                          key: 0,
                          content: e.descriptions,
                          onHide: o[0] || (o[0] = () => b.value = !1)
                        }, {
                          default: d(() => [
                            J(g(c(H), {
                              color: "#4193f2",
                              size: "24"
                            }, null, 512), [
                              [X, b.value]
                            ])
                          ]),
                          _: 1
                        }, 8, ["content"])) : v("", !0)
                      ])) : v("", !0)
                    ], 32)
                  ])
                ]),
                i("div", le, [
                  a(e.$slots, "head-toolbar")
                ])
              ])
            ])
          ]),
          i("div", ie, [
            a(e.$slots, "head-abstract", {}, () => [
              i("div", {
                ref_key: "RefHeadAbstract",
                ref: t,
                class: W(["RefHeadAbstract grid gap-4", {
                  "is-collapse": !n.value && e.useItemCollapse,
                  "use-collapse": e.useItemCollapse && n.value
                }]),
                style: S(`grid-template-columns:repeat(${e.columns},minmax(0, 1fr))`)
              }, [
                (s(!0), u(k, null, $(h.abstract, (l) => (s(), f(p, {
                  key: l.label,
                  label: l.label,
                  value: l.value,
                  render: l.render,
                  style: S(`grid-column: span ${l.column}`),
                  direction: e.direction
                }, null, 8, ["label", "value", "render", "style", "direction"]))), 128))
              ], 6),
              e.useItemCollapse ? (s(), u("div", se, [
                g(c(K), {
                  text: "",
                  onClick: G
                }, {
                  default: d(() => [
                    g(c(E), {
                      rotate: n.value ? 180 : 0
                    }, null, 8, ["rotate"]),
                    O(" " + D(n.value ? "展开详情" : "收起详情"), 1)
                  ]),
                  _: 1
                })
              ])) : v("", !0)
            ])
          ])
        ]),
        i("div", re, [
          a(e.$slots, "detail", {}, () => [
            g(c(x), P({
              modelValue: y.value,
              "onUpdate:modelValue": o[2] || (o[2] = (l) => y.value = l)
            }, e.tabsConfig), {
              default: d(() => [
                (s(!0), u(k, null, $(e.tabs, (l) => (s(), f(c(j), P({
                  key: l.name
                }, l), Q({
                  default: d(() => [
                    a(e.$slots, l.name)
                  ]),
                  _: 2
                }, [
                  e.$slots[`${l.name}-label`] ? {
                    name: "label",
                    fn: d(() => [
                      a(e.$slots, `${l.name}-label`)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040))), 128))
              ]),
              _: 3
            }, 16, ["modelValue"])
          ])
        ])
      ]);
    };
  }
});
export {
  at as default
};
