import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { iconsDataBase as u } from "../../node_modules/ksw-vue-icon/icons-base.mjs";
import { getExposeProxy as h } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { defineComponent as C, computed as y, resolveComponent as l, createElementBlock as d, openBlock as s, createVNode as m, withCtx as p, createElementVNode as _, Fragment as B, renderList as I, createBlock as P, resolveDynamicComponent as b, renderSlot as E, createTextVNode as K } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as v } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const M = { class: "icon-container" }, w = { class: "icon-list" }, q = /* @__PURE__ */ C({
  name: "KIconPopover",
  __name: "icon_popover",
  emits: ["updateIcon"],
  setup(D, { expose: f, emit: k }) {
    const i = v(null), N = {}, o = v(""), x = async (e) => {
      g("updateIcon", e);
    }, V = y(() => o.value.trim() === "" ? u : u.filter((e) => {
      const n = e.name.includes(o.value), c = e.componentName.includes(o.value), r = e.tag.some((a) => a.includes(o.value));
      return n || c || r;
    })), g = k;
    return f(h(N, i)), (e, n) => {
      const c = l("k-input"), r = l("k-button"), a = l("k-popover");
      return s(), d("div", {
        ref_key: "KIconPopoverRef",
        ref: i
      }, [
        m(a, {
          trigger: "click",
          width: 470,
          placement: "bottom"
        }, {
          reference: p(() => [
            E(e.$slots, "default", {}, () => [
              m(r, null, {
                default: p(() => [
                  K("点击我")
                ]),
                _: 1
              })
            ])
          ]),
          default: p(() => [
            _("div", M, [
              m(c, {
                modelValue: o.value,
                "onUpdate:modelValue": n[0] || (n[0] = (t) => o.value = t)
              }, null, 8, ["modelValue"]),
              _("div", w, [
                (s(!0), d(B, null, I(V.value, (t) => (s(), P(b(t.componentName), {
                  key: t.id,
                  class: "icon-item",
                  onClick: (R) => x(t.componentName)
                }, null, 8, ["onClick"]))), 128))
              ])
            ])
          ]),
          _: 3
        })
      ], 512);
    };
  }
});
export {
  q as default
};
