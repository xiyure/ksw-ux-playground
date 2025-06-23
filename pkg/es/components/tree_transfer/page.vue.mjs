import { defineComponent as x, ref as l, resolveComponent as s, createElementBlock as b, createCommentVNode as y, openBlock as S, createVNode as p, mergeProps as z, withCtx as N, renderSlot as V } from "vue";
const _ = {
  key: 0,
  class: "pagination-box bg-white pt-3"
}, B = /* @__PURE__ */ x({
  name: "Pagination",
  __name: "page",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "left"
    },
    emits: {
      type: Function,
      default: () => {
      }
    },
    dataLength: {
      type: Number,
      default: 0
    },
    pageConfig: {
      type: Object,
      default: () => ({})
    },
    resetCheckboxStatus: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(a) {
    const e = a;
    function f(t, o) {
      var i;
      e.position === "left" && ((i = e.resetCheckboxStatus) == null || i.call(e)), e.pageConfig.isRemotePaging && e.emits("server-paging", { ...e.pageConfig, position: e.position }), e.emits("page-change", t, o, e.position), n.value = t;
    }
    function g(t) {
      e.pageConfig.currentPage = t, e.emits("page-current-change", t, e.position);
    }
    function r(t) {
      e.pageConfig.pageSize = t, e.emits("page-size-change", t, e.position);
    }
    function C(t) {
      e.emits("page-prev-click", t, e.position);
    }
    function m(t) {
      e.emits("page-next-click", t, e.position);
    }
    const n = l(1), u = l(1), d = l(e.dataLength), v = l(e.pageConfig.pageSize), c = Math.ceil(d.value / v.value);
    function h() {
      const t = n.value;
      Number.isNaN(t) ? n.value = u.value : (n.value < 1 ? n.value = 1 : n.value > c && (n.value = c), u.value = n.value, g(n.value));
    }
    return (t, o) => {
      const i = s("k-input"), k = s("k-pagination");
      return a.visible ? (S(), b("div", _, [
        p(k, z(a.pageConfig, {
          total: a.dataLength,
          onCurrentChange: g,
          onSizeChange: r,
          onChange: f,
          onPrevClick: C,
          onNextClick: m
        }), {
          default: N(() => [
            V(t.$slots, "default", { pageConfig: a.pageConfig }, () => [
              p(i, {
                modelValue: n.value,
                "onUpdate:modelValue": o[0] || (o[0] = (P) => n.value = P),
                style: { width: "50px" },
                onChange: h
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 3
        }, 16, ["total"])
      ])) : y("", !0);
    };
  }
});
export {
  B as default
};
