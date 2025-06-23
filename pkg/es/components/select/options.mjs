import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import y from "../../node_modules/lodash-es/isEqual.mjs";
import { selectKey as A } from "../../node_modules/element-plus/es/components/select/src/token.mjs";
import { defineComponent as K, inject as O } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const j = /* @__PURE__ */ K({
  name: "KOptions",
  setup(g, {
    slots: e
  }) {
    const t = O(A);
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
      return i.length && o((f = i[0]) == null ? void 0 : f.children), y(n, a) || (a = n, t && (t.states.optionValues = n)), i;
    };
  }
});
export {
  j as default
};
