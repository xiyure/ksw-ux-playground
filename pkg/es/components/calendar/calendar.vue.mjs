import { defineComponent as V, ref as g, computed as _, resolveComponent as z, createBlock as y, openBlock as f, unref as s, mergeProps as B, withCtx as d, renderSlot as p, normalizeProps as M, guardReactiveProps as E, createElementVNode as o, withDirectives as P, toDisplayString as u, vShow as R, createElementBlock as $, Fragment as x, renderList as F, createVNode as c, createTextVNode as I, createCommentVNode as K, normalizeStyle as T } from "vue";
import { l as Y } from "../../node_modules/chinese-lunar-calendar/src/lunar_calendar.mjs";
import { lunarDay as j, lunarMonth as q } from "./const.mjs";
import { KCheckbox as U } from "../checkbox/index.mjs";
import { getExposeProxy as A } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useLocale as G } from "../../hooks/use_locale.mjs";
import { ElCalendar as H } from "../../node_modules/element-plus/es/components/calendar/index.mjs";
import J from "../../node_modules/ksw-vue-icon/es/icons/base/arrow-left.mjs";
import O from "../../node_modules/ksw-vue-icon/es/icons/base/right.mjs";
const Q = { class: "k-calendar__header" }, W = { class: "k-calendar__header-left" }, X = { class: "k-calendar__header-right" }, Z = { class: "k-calendar__item" }, ee = { class: "k-calendar__date" }, te = { class: "k-calendar__solar" }, ae = { class: "k-calendar__schedule" }, _e = /* @__PURE__ */ V({
  name: "KCalendar",
  __name: "calendar",
  props: {
    schedule: { default: () => [] },
    showLunar: { type: Boolean, default: !1 },
    adaptive: { type: Boolean, default: !1 }
  },
  setup(C, { expose: D }) {
    const { t: k } = G(), L = C, h = g(), i = g(!1), w = _(
      () => function(e) {
        const t = e.getFullYear(), n = e.getMonth() + 1, a = e.getDate(), r = Y.getLunar(t, n, a);
        return {
          ...r,
          lunarMonth_zh: q[r.lunarMonth],
          lunarDate_zh: j[r.lunarDate]
        };
      }
    ), b = _(() => L.schedule.map((e) => {
      const { date: t } = e;
      let n;
      const a = new Date(t);
      return a instanceof Date && !Number.isNaN(a == null ? void 0 : a.getTime()) && (n = v(a)), {
        date: n,
        content: e.content
      };
    }).filter((e) => e.date)), N = _(
      () => function(e) {
        const t = b.value.find(
          (n) => n.date === v(e)
        );
        return (t == null ? void 0 : t.content) || [];
      }
    );
    function m(e) {
      var t;
      (t = h.value) == null || t.selectDate(e);
    }
    function S(e) {
      i.value = e;
    }
    function v(e) {
      const t = e.getFullYear(), n = e.getMonth() + 1, a = e.getDate();
      return `${t}-${n < 10 ? "0" : ""}${n}-${a < 10 ? "0" : ""}${a}`;
    }
    return D(A({
      jumpDate: m,
      handleLunar: S
    }, h)), (e, t) => {
      const n = z("k-button");
      return f(), y(s(H), B({
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
                  c(n, {
                    onClick: t[0] || (t[0] = (l) => m("today"))
                  }, {
                    default: d(() => {
                      var l;
                      return [
                        I(u((l = s(k)) == null ? void 0 : l("calendar.today")), 1)
                      ];
                    }),
                    _: 1
                  }),
                  c(n, {
                    onClick: t[1] || (t[1] = (l) => m("prev-month"))
                  }, {
                    default: d(() => [
                      c(s(J))
                    ]),
                    _: 1
                  }),
                  c(n, {
                    onClick: t[2] || (t[2] = (l) => m("next-month"))
                  }, {
                    default: d(() => [
                      c(s(O))
                    ]),
                    _: 1
                  }),
                  o("span", null, u(a), 1)
                ]),
                o("div", X, [
                  p(e.$slots, "header-right"),
                  e.showLunar ? (f(), y(s(U), {
                    key: 0,
                    modelValue: i.value,
                    "onUpdate:modelValue": t[3] || (t[3] = (l) => i.value = l),
                    style: T({ marginLeft: e.$slots["header-right"] ? "8px" : 0 }),
                    class: "k-calendar__lunar-switch",
                    label: (r = s(k)) == null ? void 0 : r("calendar.showLunar")
                  }, null, 8, ["modelValue", "style", "label"])) : K("", !0)
                ])
              ])
            ];
          })
        ]),
        "date-cell": d((a) => [
          p(e.$slots, "date-cell", M(E(a)), () => [
            o("div", Z, [
              o("div", ee, [
                o("span", te, u(a.data.date.getDate()), 1),
                P(o("span", { class: "k-calendar__lunar" }, u(w.value(a.data.date).lunarDate_zh), 513), [
                  [R, i.value]
                ])
              ]),
              p(e.$slots, "schedule", {
                date: a.data.date
              }, () => [
                o("div", ae, [
                  o("ul", null, [
                    (f(!0), $(x, null, F(N.value(a.data.date), (r) => (f(), $("li", {
                      key: r,
                      ref_for: !0,
                      ref: "scheduleItemRef",
                      class: "k-calendar__schedule-item"
                    }, u(r), 1))), 128))
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
  _e as default
};
