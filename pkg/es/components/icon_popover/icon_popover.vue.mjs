import { defineComponent as C, ref as u, computed as V, resolveComponent as l, createElementBlock as d, openBlock as s, createVNode as m, withCtx as p, createElementVNode as _, Fragment as y, renderList as I, createBlock as B, resolveDynamicComponent as P, renderSlot as b, createTextVNode as E } from "vue";
import { iconsDataBase as v } from "../../node_modules/ksw-vue-icon/icons-base.mjs";
import { getExposeProxy as K } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
const M = { class: "icon-container" }, w = { class: "icon-list" }, U = /* @__PURE__ */ C({
  name: "KIconPopover",
  __name: "icon_popover",
  emits: ["updateIcon"],
  setup(D, { expose: f, emit: k }) {
    const i = u(null), N = {}, o = u(""), x = async (e) => {
      h("updateIcon", e);
    }, g = V(() => o.value.trim() === "" ? v : v.filter((e) => {
      const n = e.name.includes(o.value), c = e.componentName.includes(o.value), r = e.tag.some((a) => a.includes(o.value));
      return n || c || r;
    })), h = k;
    return f(K(N, i)), (e, n) => {
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
            b(e.$slots, "default", {}, () => [
              m(r, null, {
                default: p(() => [
                  E("点击我")
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
                (s(!0), d(y, null, I(g.value, (t) => (s(), B(P(t.componentName), {
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
  U as default
};
