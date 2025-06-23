import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KDropdown as x, KDropdownItem as g } from "../dropdown/index.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import { flattenChildren as h, isValidElement as y, camelize as I } from "../../utils/props.mjs";
import "../../node_modules/culori/src/index.mjs";
import { defineComponent as L, createVNode as i, Fragment as T } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const O = /* @__PURE__ */ L({
  name: "TabLabel",
  props: {
    tabIndexList: {
      type: Array,
      default: () => []
    },
    tabSlots: {
      type: Object,
      default: () => null
    }
  },
  emits: ["command"],
  setup(r, {
    slots: s,
    emit: p
  }) {
    return () => {
      var n, a;
      const l = new Map(r.tabIndexList.map((e, o) => [e, o])), t = u(h((a = (n = r.tabSlots) == null ? void 0 : n.default) == null ? void 0 : a.call(n))).filter((e, o) => l.has(o));
      return i(T, null, [i(x, {
        trigger: "click",
        disabled: r.tabIndexList.length === 0,
        maxHeight: "300px",
        onCommand: f
      }, {
        default: () => [t.map((e) => i(g, {
          key: e.name,
          command: e,
          disabled: e.disabled
        }, {
          default: () => [typeof (e == null ? void 0 : e.label) == "function" ? e.label() : e.label]
        }))],
        ...s
      })]);
    };
    function f(l) {
      p("command", l);
    }
    function u(l) {
      return l.map((t) => {
        var n;
        if (y(t)) {
          const a = {
            ...t.props || {}
          };
          for (const [d, b] of Object.entries(a))
            delete a[d], a[I(d)] = b;
          const e = t.children || {}, o = ((n = t.props) == null ? void 0 : n.name) !== void 0 ? t.props.name : void 0, {
            label: c = e.label,
            disabled: m
          } = a;
          return {
            name: o,
            label: c,
            disabled: m === "" || m
          };
        }
        return null;
      }).filter((t) => t);
    }
  }
});
export {
  O as default
};
