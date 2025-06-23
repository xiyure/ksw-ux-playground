import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KDropdown as r, KDropdownItem as a } from "../dropdown/index.mjs";
import { defineComponent as t, createVNode as o, Fragment as p, mergeProps as i } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const c = /* @__PURE__ */ t({
  name: "TabLabel",
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  emits: ["command"],
  setup(d, {
    slots: n,
    attrs: m,
    emit: l
  }) {
    return () => o(p, null, [o(r, i(m, {
      disabled: d.tabs.length === 0,
      onCommand: (e) => {
        l("command", e);
      }
    }), {
      default: () => [d.tabs.map((e) => o(a, {
        key: e.index,
        disabled: e.disabled,
        command: e.index
      }, {
        default: () => [typeof (e == null ? void 0 : e.label) == "function" ? e.label() : e.label]
      }))],
      ...n
    })]);
  }
});
export {
  c as default
};
