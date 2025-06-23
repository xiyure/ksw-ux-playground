import { defineComponent as y, inject as A } from "vue";
import { selectKey as K } from "../../node_modules/element-plus/es/components/select/src/token.mjs";
import O from "../../node_modules/lodash-es/isEqual.mjs";
const V = /* @__PURE__ */ y({
  name: "KOptions",
  setup(g, {
    slots: e
  }) {
    const t = A(K);
    let a = [];
    return () => {
      var c, f;
      const i = (c = e.default) == null ? void 0 : c.call(e), n = [];
      function o(l) {
        Array.isArray(l) && l.forEach((r) => {
          var s, u, d, h;
          const p = (s = (r == null ? void 0 : r.type) || {}) == null ? void 0 : s.name;
          p === "KOptionGroup" ? o(typeof r.children != "string" && !Array.isArray(r.children) && typeof ((u = r.children) == null ? void 0 : u.default) == "function" ? (d = r.children) == null ? void 0 : d.default() : r.children) : p === "KOption" ? n.push((h = r.props) == null ? void 0 : h.value) : Array.isArray(r.children) && o(r.children);
        });
      }
      return i.length && o((f = i[0]) == null ? void 0 : f.children), O(n, a) || (a = n, t && (t.states.optionValues = n)), i;
    };
  }
});
export {
  V as default
};
