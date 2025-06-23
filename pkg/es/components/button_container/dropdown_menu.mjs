import { defineComponent as a, createVNode as o, Fragment as r, mergeProps as t } from "vue";
import { KDropdown as p, KDropdownItem as s } from "../dropdown/index.mjs";
const u = /* @__PURE__ */ a({
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
    return () => o(r, null, [o(p, t(m, {
      disabled: d.tabs.length === 0,
      onCommand: (e) => {
        l("command", e);
      }
    }), {
      default: () => [d.tabs.map((e) => o(s, {
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
  u as default
};
