import { defineComponent as l, ref as c, computed as p, resolveDirective as d, createElementBlock as o, openBlock as a, normalizeClass as f, withDirectives as v, createElementVNode as _, createTextVNode as k, toDisplayString as m } from "vue";
const y = ["data-key", "data-value", "data-type"], g = { class: "k-script-tag-label" }, h = /* @__PURE__ */ _("span", { class: "k-script-tag-clear-mark" }, null, -1), B = /* @__PURE__ */ l({
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
    const t = s, n = c(), r = p(() => ({
      visible: t.showTooltip === !1 ? !1 : void 0,
      content: t.content,
      showByOverflow: t.showTooltip === "overflow"
    }));
    return (e, u) => {
      const i = d("ksw_tooltip");
      return a(), o("div", {
        ref_key: "$tag",
        ref: n,
        class: f(`k-script-tag ${e.isError ? "is-error" : ""}`),
        "data-key": e.xid,
        "data-value": e.content,
        "data-type": e.type,
        contenteditable: "false"
      }, [
        v((a(), o("span", g, [
          k(m(e.content), 1)
        ])), [
          [i, r.value]
        ]),
        h
      ], 10, y);
    };
  }
});
export {
  B as default
};
