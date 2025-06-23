import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { defineComponent as c, inject as u, computed as l, createElementBlock as a, openBlock as n, createElementVNode as r, createBlock as p, resolveDynamicComponent as d } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { normalizeStyle as f, normalizeClass as x, toDisplayString as s } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const _ = { class: "titel text-base text-gray-400 text-nowrap leading-6" }, y = { class: "value text-base text-normal min-h-6 flex items-center leading-6 w-full" }, b = { key: 1 }, w = /* @__PURE__ */ c({
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
    const e = i, o = u(
      "__maxColumn__",
      l(() => e.column)
    ), m = l(() => o.value ? o.value >= e.column ? e.column : o.value : e.column);
    return (t, h) => (n(), a("div", {
      ref: "RefDetailsItem",
      class: x(["k-detailsItem bbm h-fit flex flex-col gap-1 shrink-0 pb-2", [
        { "border-b border-gray-200": e.showLine === !0 },
        { "!flex-row": e.direction === "horizontal" },
        { "min-w-24": e.useflex === !0 }
      ]]),
      style: f(e.useflex ? "" : `grid-column: span ${m.value};`)
    }, [
      r("p", _, s(t.label) + ":", 1),
      r("p", y, [
        typeof t.render == "function" ? (n(), p(d(t.render()), { key: 0 })) : (n(), a("span", b, s(t.value), 1))
      ])
    ], 6));
  }
});
export {
  w as default
};
