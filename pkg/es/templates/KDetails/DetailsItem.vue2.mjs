import { defineComponent as u, inject as c, computed as o, createElementBlock as a, openBlock as l, normalizeStyle as d, normalizeClass as p, createElementVNode as r, toDisplayString as s, createBlock as f, resolveDynamicComponent as x } from "vue";
const _ = { class: "titel text-base text-gray-400 text-nowrap leading-6" }, y = { class: "value text-base text-normal min-h-6 flex items-center leading-6 w-full" }, b = { key: 1 }, g = /* @__PURE__ */ u({
  name: "KDetailsItem",
  __name: "DetailsItem",
  props: {
    label: {},
    value: {},
    render: {},
    showLine: { type: Boolean, default: void 0 },
    column: { default: 1 },
    direction: {},
    useflex: { type: Boolean }
  },
  setup(i) {
    const e = i, n = c(
      "__maxColumn__",
      o(() => e.column)
    ), m = o(() => n.value ? n.value >= e.column ? e.column : n.value : e.column);
    return (t, h) => (l(), a("div", {
      ref: "RefDetailsItem",
      class: p(["k-detailsItem bbm h-fit flex flex-col gap-1 shrink-0 pb-2", [
        { "border-b border-gray-200": e.showLine === !0 },
        { "!flex-row": e.direction === "horizontal" },
        { "min-w-24": e.useflex === !0 }
      ]]),
      style: d(e.useflex ? "" : `grid-column: span ${m.value};`)
    }, [
      r("p", _, s(t.label) + ":", 1),
      r("p", y, [
        typeof t.render == "function" ? (l(), f(x(t.render()), { key: 0 })) : (l(), a("span", b, s(t.value), 1))
      ])
    ], 6));
  }
});
export {
  g as default
};
