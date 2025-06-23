import { defineComponent as Y, inject as D, ref as h, onMounted as F, onBeforeUnmount as K, onUpdated as q, watch as y, nextTick as G, createBlock as x, openBlock as z, unref as H, mergeProps as J, createSlots as Q, withCtx as T, createElementVNode as L, renderSlot as B, normalizeClass as X, createCommentVNode as Z, createVNode as ee } from "vue";
import te from "./tab_dropdown_menu.mjs";
import { getExposeProxy as oe } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { getElement as f, getElementAll as ne, isElementInContainerView as ae } from "../../utils/dom.mjs";
import le from "../../node_modules/lodash-es/throttle.mjs";
import { ElTabs as se } from "../../node_modules/element-plus/es/components/tabs/index.mjs";
import ie from "../../node_modules/ksw-vue-icon/es/icons/base/ellipsis-horizontal.mjs";
const $e = /* @__PURE__ */ Y({
  name: "KTabs",
  __name: "tabs",
  props: {
    modelValue: { default: void 0 },
    tabPosition: { default: "top" },
    maxWidth: { default: void 0 },
    addable: { type: Boolean },
    editable: { type: Boolean },
    showHideList: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(O, { expose: R, emit: N }) {
    const m = D("__elementObserver"), c = O, M = N, p = h(void 0), l = h(), $ = h(), C = h(), g = h(!1), S = h([]);
    let _ = 0;
    F(() => {
      var t;
      window.addEventListener("resize", w), window.addEventListener("wheel", V);
      const e = f(".el-tabs__nav", (t = l.value) == null ? void 0 : t.$el);
      e && (m == null || m.observe(e, le(w, 200)));
    }), K(() => {
      var t;
      window.removeEventListener("resize", w), window.removeEventListener("wheel", V);
      const e = f(".el-tabs__nav", (t = l.value) == null ? void 0 : t.$el);
      e && (m == null || m.unobserve(e));
    }), q(() => {
      w();
    }), y(
      () => c.tabPosition,
      () => {
        b() || G(() => {
          var o;
          const e = (o = l.value) == null ? void 0 : o.$el, t = f(".el-tabs__nav-wrap", e);
          e == null || e.style.setProperty("--dropdown-trigger-width", `${t == null ? void 0 : t.offsetWidth}px`);
        });
      },
      { immediate: !0 }
    ), y(
      () => c.modelValue,
      () => {
        p.value = c.modelValue;
      },
      { immediate: !0 }
    ), y(
      () => p.value,
      (e) => {
        c.modelValue !== void 0 && c.modelValue !== e && M("update:modelValue", e), A();
      }
    );
    function V(e) {
      var r;
      const t = (r = l.value) == null ? void 0 : r.$el, o = f(".el-tabs__nav", t), s = f(".el-tabs__nav-scroll", t);
      if (!o || !s || !(o != null && o.contains(e.target)))
        return;
      const d = e.deltaY, a = W();
      let n = a - d;
      const u = s.getBoundingClientRect();
      let i = b() ? o.offsetWidth - u.width : o.offsetHeight - u.height;
      i <= 0 && (i = -a), n > 0 ? n = 0 : n < -i && (n = -i), k(n);
    }
    function U(e) {
      const t = e.name ?? "";
      p.value = t;
    }
    function j() {
      var a;
      if (!c.showHideList)
        return;
      const e = [], t = (a = l.value) == null ? void 0 : a.$el, o = ne(".el-tabs__item", t), s = f(".el-tabs__nav-scroll", t);
      if (!t || !s || !(o != null && o.length))
        return;
      const d = s.getBoundingClientRect();
      for (let n = 0; n < o.length; n++) {
        const u = o[n].getBoundingClientRect();
        ae(u, d, b() ? "horizontal" : "vertical") || e.push(n);
      }
      S.value = e;
    }
    function A() {
      setTimeout(() => {
        var v;
        const e = (v = l.value) == null ? void 0 : v.$el, t = f(".el-tabs__nav", e), o = f(".el-tabs__nav-scroll", e);
        if (!e || !o || !t) return;
        const s = f(".el-tabs__item.is-active", e);
        if (!s) return;
        const d = b(), a = s.getBoundingClientRect(), n = o.getBoundingClientRect();
        let u = d ? t.offsetWidth - n.width : t.offsetHeight - n.height;
        const i = -W();
        u <= 0 && (u = i);
        let r = i;
        d ? (a.left < n.left && (r = i - (n.left - a.left)), a.right > n.right && (r = i + a.right - n.right)) : (a.top < n.top && (r = i - (n.top - a.top)), a.bottom > n.bottom && (r = i + (a.bottom - n.bottom))), r = Math.max(r, 0), k(-Math.min(r, u));
      }, 200);
    }
    function W() {
      var t;
      if (!((t = l.value) != null && t.$el))
        return 0;
      const e = l.value.$el.style.getPropertyValue("--translate") || 0;
      return parseFloat(e);
    }
    function k(e) {
      var t;
      (t = l.value) != null && t.$el && l.value.$el.style.setProperty("--translate", `${e}px`);
    }
    function b() {
      return c.tabPosition === "top" || c.tabPosition === "bottom";
    }
    function w() {
      var r;
      const e = (r = l.value) == null ? void 0 : r.$el, t = f(".el-tabs__nav", e), o = f(".el-tabs__nav-scroll", e);
      if (!e || !t || !o)
        return;
      const { offsetWidth: s = 0, offsetHeight: d = 0 } = C.value ?? {}, { offsetWidth: a, offsetHeight: n } = o, { offsetWidth: u, offsetHeight: i } = t;
      if (b()) {
        const v = _ === s ? 0 : s;
        g.value = u > a - v + (g.value ? $.value.offsetWidth - s : 0), _ = s;
      } else {
        const v = _ === d ? 0 : d;
        g.value = i > n - v + (g.value ? $.value.offsetHeight - d : 0), _ = d;
      }
      setTimeout(() => {
        var P, E;
        const { offsetWidth: v, offsetHeight: I } = $.value ?? {};
        (E = (P = l.value) == null ? void 0 : P.$el) == null || E.style.setProperty("--extra-width", `${b() ? v : I}px`);
      });
    }
    return R(oe({}, l)), (e, t) => (z(), x(H(se), J({
      ref_key: "$tab",
      ref: l,
      modelValue: p.value,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => p.value = o),
      class: "k-tabs"
    }, e.$attrs, {
      "tab-position": e.tabPosition,
      editable: e.editable,
      addable: e.addable
    }), Q({
      default: T(() => [
        L("div", {
          ref_key: "$list",
          ref: $,
          class: X(["k-tabs-more", `tab-${e.tabPosition}-layout ${e.editable || e.addable ? "is-addable" : ""}`])
        }, [
          e.showHideList && g.value ? (z(), x(H(te), {
            key: 0,
            "tab-index-list": S.value,
            "tab-slots": e.$slots,
            onCommand: U
          }, {
            title: T(() => [
              ee(H(ie), { onClick: j })
            ]),
            _: 1
          }, 8, ["tab-index-list", "tab-slots"])) : Z("", !0),
          L("div", {
            ref_key: "$slotContent",
            ref: C,
            class: "k-tabs_header-right"
          }, [
            B(e.$slots, "extra")
          ], 512)
        ], 2),
        B(e.$slots, "default")
      ]),
      _: 2
    }, [
      e.$slots["add-icon"] ? {
        name: "add-icon",
        fn: T(() => [
          B(e.$slots, "add-icon")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["modelValue", "tab-position", "editable", "addable"]));
  }
});
export {
  $e as default
};
