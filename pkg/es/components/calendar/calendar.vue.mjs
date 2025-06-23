import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { l as S } from "../../node_modules/chinese-lunar-calendar/src/lunar_calendar.mjs";
import { lunarDay as B, lunarMonth as z } from "./const.mjs";
import { KCheckbox as M } from "../checkbox/index.mjs";
import { getExposeProxy as E } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useLocale as P } from "../../hooks/use_locale.mjs";
import R from "../../node_modules/ksw-vue-icon/es/icons/base/arrow-left.mjs";
import x from "../../node_modules/ksw-vue-icon/es/icons/base/right.mjs";
import { ElCalendar as F } from "../../node_modules/element-plus/es/components/calendar/index.mjs";
import { defineComponent as I, computed as _, resolveComponent as K, createBlock as g, openBlock as f, withCtx as d, renderSlot as p, guardReactiveProps as T, createElementVNode as o, withDirectives as Y, createElementBlock as y, Fragment as j, renderList as q, createVNode as u, createTextVNode as U, createCommentVNode as A, mergeProps as G } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as $, unref as s } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { normalizeProps as H, toDisplayString as c, normalizeStyle as J } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { vShow as O } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
const Q = { class: "k-calendar__header" }, W = { class: "k-calendar__header-left" }, X = { class: "k-calendar__header-right" }, Z = { class: "k-calendar__item" }, ee = { class: "k-calendar__date" }, te = { class: "k-calendar__solar" }, ae = { class: "k-calendar__schedule" }, ye = /* @__PURE__ */ I({
  name: "KCalendar",
  __name: "calendar",
  props: {
    schedule: { default: () => [] },
    showLunar: { type: Boolean, default: !1 },
    adaptive: { type: Boolean, default: !1 }
  },
  setup(C, { expose: D }) {
    const { t: k } = P(), L = C, h = $(), i = $(!1), w = _(
      () => function(e) {
        const t = e.getFullYear(), n = e.getMonth() + 1, a = e.getDate(), r = S.getLunar(t, n, a);
        return {
          ...r,
          lunarMonth_zh: z[r.lunarMonth],
          lunarDate_zh: B[r.lunarDate]
        };
      }
    ), N = _(() => L.schedule.map((e) => {
      const { date: t } = e;
      let n;
      const a = new Date(t);
      return a instanceof Date && !Number.isNaN(a == null ? void 0 : a.getTime()) && (n = v(a)), {
        date: n,
        content: e.content
      };
    }).filter((e) => e.date)), V = _(
      () => function(e) {
        const t = N.value.find(
          (n) => n.date === v(e)
        );
        return (t == null ? void 0 : t.content) || [];
      }
    );
    function m(e) {
      var t;
      (t = h.value) == null || t.selectDate(e);
    }
    function b(e) {
      i.value = e;
    }
    function v(e) {
      const t = e.getFullYear(), n = e.getMonth() + 1, a = e.getDate();
      return `${t}-${n < 10 ? "0" : ""}${n}-${a < 10 ? "0" : ""}${a}`;
    }
    return D(E({
      jumpDate: m,
      handleLunar: b
    }, h)), (e, t) => {
      const n = K("k-button");
      return f(), g(s(F), G({
        ref_key: "kCalendarRef",
        ref: h,
        class: ["k-calendar", { "k-calendar--adaptive": e.adaptive }, "text-base"]
      }, e.$attrs), {
        header: d(({ date: a }) => [
          p(e.$slots, "header", { date: a }, () => {
            var r;
            return [
              o("div", Q, [
                o("div", W, [
                  u(n, {
                    onClick: t[0] || (t[0] = (l) => m("today"))
                  }, {
                    default: d(() => {
                      var l;
                      return [
                        U(c((l = s(k)) == null ? void 0 : l("calendar.today")), 1)
                      ];
                    }),
                    _: 1
                  }),
                  u(n, {
                    onClick: t[1] || (t[1] = (l) => m("prev-month"))
                  }, {
                    default: d(() => [
                      u(s(R))
                    ]),
                    _: 1
                  }),
                  u(n, {
                    onClick: t[2] || (t[2] = (l) => m("next-month"))
                  }, {
                    default: d(() => [
                      u(s(x))
                    ]),
                    _: 1
                  }),
                  o("span", null, c(a), 1)
                ]),
                o("div", X, [
                  p(e.$slots, "header-right"),
                  e.showLunar ? (f(), g(s(M), {
                    key: 0,
                    modelValue: i.value,
                    "onUpdate:modelValue": t[3] || (t[3] = (l) => i.value = l),
                    style: J({ marginLeft: e.$slots["header-right"] ? "8px" : 0 }),
                    class: "k-calendar__lunar-switch",
                    label: (r = s(k)) == null ? void 0 : r("calendar.showLunar")
                  }, null, 8, ["modelValue", "style", "label"])) : A("", !0)
                ])
              ])
            ];
          })
        ]),
        "date-cell": d((a) => [
          p(e.$slots, "date-cell", H(T(a)), () => [
            o("div", Z, [
              o("div", ee, [
                o("span", te, c(a.data.date.getDate()), 1),
                Y(o("span", { class: "k-calendar__lunar" }, c(w.value(a.data.date).lunarDate_zh), 513), [
                  [O, i.value]
                ])
              ]),
              p(e.$slots, "schedule", {
                date: a.data.date
              }, () => [
                o("div", ae, [
                  o("ul", null, [
                    (f(!0), y(j, null, q(V.value(a.data.date), (r) => (f(), y("li", {
                      key: r,
                      ref_for: !0,
                      ref: "scheduleItemRef",
                      class: "k-calendar__schedule-item"
                    }, c(r), 1))), 128))
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
export {
  ye as default
};
