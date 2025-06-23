import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { defineComponent as l, computed as p, resolveDirective as c, createElementBlock as o, openBlock as a, withDirectives as d, createElementVNode as m, createTextVNode as f } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as v } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as _, normalizeClass as k } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const y = ["data-key", "data-value", "data-type"], g = { class: "k-script-tag-label" }, h = /* @__PURE__ */ m("span", { class: "k-script-tag-clear-mark" }, null, -1), b = /* @__PURE__ */ l({
  name: "KScriptTag",
  __name: "tag",
  props: {
    content: {},
    xid: {},
    type: {},
    isError: { type: Boolean },
    showTooltip: { type: [Boolean, String] }
  },
  setup(s) {
    const t = s, r = v(), i = p(() => ({
      visible: t.showTooltip === !1 ? !1 : void 0,
      content: t.content,
      showByOverflow: t.showTooltip === "overflow"
    }));
    return (e, u) => {
      const n = c("ksw_tooltip");
      return a(), o("div", {
        ref_key: "$tag",
        ref: r,
        class: k(`k-script-tag ${e.isError ? "is-error" : ""}`),
        "data-key": e.xid,
        "data-value": e.content,
        "data-type": e.type,
        contenteditable: "false"
      }, [
        d((a(), o("span", g, [
          f(_(e.content), 1)
        ])), [
          [n, i.value]
        ]),
        h
      ], 10, y);
    };
  }
});
export {
  b as default
};
