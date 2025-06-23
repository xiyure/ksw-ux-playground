import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { useLocale as H } from "../../hooks/use_locale.mjs";
import { Sortable as P } from "../../utils/constructor/sortable.mjs";
import { KInput as R } from "../input/index.mjs";
import { getExposeProxy as $, sortBySmallerList as O } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/culori/src/index.mjs";
import U from "../../node_modules/ksw-vue-icon/es/icons/base/search.mjs";
import { ElTransfer as J } from "../../node_modules/element-plus/es/components/transfer/index.mjs";
import { defineComponent as j, inject as F, onMounted as G, onUnmounted as Q, computed as _, watch as k, createElementBlock as L, openBlock as h, createElementVNode as C, createVNode as W, createBlock as A, createCommentVNode as S, withCtx as X, resolveDynamicComponent as Y, mergeProps as Z } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as v, unref as g } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as ee, normalizeClass as te } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { withModifiers as ae } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
const re = { class: "k-transfer_searcher" }, le = { class: "k-transfer-item" }, ne = { class: "k-transfer-label" }, Ce = /* @__PURE__ */ j({
  name: "KTransfer",
  __name: "transfer",
  props: {
    modelValue: {},
    data: {},
    filterablePlaceholder: {},
    props: {},
    defaultKeys: {},
    filterable: { type: Boolean, default: !0 },
    searchStrictly: { type: Boolean },
    drag: { type: Boolean },
    dragIcon: {}
  },
  emits: [
    "update:modelValue",
    "change",
    "left-check-change",
    "right-check-change",
    "input",
    "reset",
    "drag"
  ],
  setup(V, { expose: x, emit: B }) {
    const n = V, o = B, E = F("_styleModule", ""), { t: c } = H(), r = v([]), y = v(""), s = v([]), u = v();
    let f = [];
    G(() => {
      I(), q();
    }), Q(() => {
      m == null || m.destroy();
    });
    const p = _(() => ({
      label: "label",
      key: "key",
      disabled: "disabled",
      ...n.props
    })), T = _(
      () => n.filterablePlaceholder ?? (c == null ? void 0 : c("transfer.searchHeaderName"))
    );
    k(
      () => n.modelValue,
      (e) => {
        if (!e || !Array.isArray(e)) {
          r.value = [];
          return;
        }
        JSON.stringify(e) !== JSON.stringify(r.value) && (r.value = e);
      },
      { immediate: !0 }
    ), k(
      () => n.data,
      (e) => {
        if (Array.isArray(e)) {
          s.value = e, f = s.value.map((t) => t[p.value.key]);
          return;
        }
        s.value = [], f.length = 0;
      },
      { immediate: !0 }
    ), k(
      () => y.value,
      (e) => {
        const t = u.value.$el.querySelectorAll(
          ".el-input__inner"
        );
        if (!(!t || !t.length))
          for (let a = 0; a < t.length; a++) {
            t[a].value = e;
            const l = new Event("input", { bubbles: !0 });
            t[a].dispatchEvent(l);
          }
      }
    );
    function K(e, t, a) {
      if (o("update:modelValue", r.value), o("change", e, t, a), r.value.length === 0) {
        const l = u.value.$el.querySelectorAll(".el-transfer-panel__list")[1], d = (l == null ? void 0 : l.children) ?? [];
        for (let i = 0; i < d.length; i++)
          d[i].tagName.toLocaleUpperCase() === "LABEL" && (l.removeChild(d[i]), i--);
      }
    }
    function N(e, t) {
      o("left-check-change", e, t);
    }
    function D(e, t) {
      o("right-check-change", e, t);
    }
    function I() {
      if (!u.value)
        return;
      const e = u.value.$el, t = e.querySelectorAll(".el-transfer-panel__header")[1];
      t.classList.add("transfer-right-header");
      const a = document.createElement("label");
      a.innerHTML = c == null ? void 0 : c("transfer.reset"), a.classList.add("transfer-restore__text"), a.addEventListener("click", () => {
        M();
      }), t.appendChild(a);
      const l = e.querySelectorAll(".el-transfer__button");
      l[1].innerHTML = '<span class="ksw-icon ksw-icon-ArrowToRight"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="m18.397 12-6.91 6.976a.58.58 0 0 0-.173.409c0 .34.307.615.686.615a.72.72 0 0 0 .513-.207l7.314-7.384a.57.57 0 0 0 0-.818l-7.314-7.384A.72.72 0 0 0 12 4c-.379 0-.686.276-.686.615 0 .151.062.297.173.41z"></path><path fill-rule="evenodd" d="m11.083 12-6.91 6.976a.58.58 0 0 0-.173.409c0 .34.307.615.686.615a.72.72 0 0 0 .512-.207l7.315-7.384a.57.57 0 0 0 0-.818L5.199 4.207A.72.72 0 0 0 4.686 4C4.307 4 4 4.276 4 4.615c0 .151.062.297.173.41z"></path></svg></span>', l[0].innerHTML = '<span class="ksw-icon ksw-icon-ArrowToLeft"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="m5.477 12 6.363-6.976a.6.6 0 0 0 .16-.409.624.624 0 0 0-.632-.615.64.64 0 0 0-.472.207L4.16 11.59a.604.604 0 0 0 0 .818l6.736 7.384a.64.64 0 0 0 .472.207.624.624 0 0 0 .632-.615.6.6 0 0 0-.16-.41z"></path><path fill-rule="evenodd" d="m13.477 12 6.363-6.976a.6.6 0 0 0 .16-.409.624.624 0 0 0-.632-.615.64.64 0 0 0-.472.207L12.16 11.59a.604.604 0 0 0 0 .818l6.736 7.384a.64.64 0 0 0 .472.207.624.624 0 0 0 .632-.615.6.6 0 0 0-.16-.41z"></path></svg></span>';
    }
    function M() {
      if (!Array.isArray(n.defaultKeys)) {
        o("update:modelValue", []);
        return;
      }
      const { key: e } = p.value;
      s.value.sort(
        (t, a) => f.indexOf(t[e]) - f.indexOf(a[e])
      ), o("update:modelValue", [...n.defaultKeys]), o("reset", [...n.defaultKeys]);
    }
    let m = null;
    function q() {
      var t, a;
      if (!n.drag)
        return;
      const e = (a = (t = u.value.$el) == null ? void 0 : t.querySelectorAll(
        ".el-transfer-panel__list"
      )) == null ? void 0 : a[1];
      e && (m = P(e, {
        handle: ".k-transfer-sort",
        animation: 150,
        onEnd: (l) => {
          var w;
          const { newIndex: d, oldIndex: i } = l;
          if (d === i || d === void 0 || i === void 0)
            return;
          const b = r.value.splice(i, 1)[0];
          b && (r.value.splice(d, 0, b), r.value = [...r.value], s.value = O(
            s.value,
            r.value,
            ((w = n.props) == null ? void 0 : w.key) ?? "key"
          ), o("update:modelValue", r.value), o("drag", s.value));
        }
      }));
    }
    function z() {
      return {
        sourceData: s.value,
        selectData: r.value
      };
    }
    return x($({ getTransferData: z }, u)), (e, t) => (h(), L("div", {
      class: te(["k-transfer", g(E)])
    }, [
      C("div", re, [
        e.filterable && !e.searchStrictly ? (h(), A(g(R), {
          key: 0,
          modelValue: y.value,
          "onUpdate:modelValue": t[0] || (t[0] = (a) => y.value = a),
          placeholder: T.value,
          "prefix-icon": g(U)
        }, null, 8, ["modelValue", "placeholder", "prefix-icon"])) : S("", !0)
      ]),
      W(g(J), Z({
        ref_key: "KTransferRef",
        ref: u,
        modelValue: r.value,
        "onUpdate:modelValue": t[2] || (t[2] = (a) => r.value = a)
      }, e.$attrs, {
        data: s.value,
        props: n.props,
        class: { "k-transfer_search-strictly": !e.searchStrictly },
        filterable: "",
        onChange: K,
        onLeftCheckChange: N,
        onRightCheckChange: D
      }), {
        default: X(({ option: a }) => [
          C("div", le, [
            C("span", ne, ee(a[p.value.label]), 1),
            e.drag && r.value.includes(a[p.value.key]) ? (h(), L("span", {
              key: 0,
              class: "k-transfer-sort",
              onClick: t[1] || (t[1] = ae(() => {
              }, ["prevent"]))
            }, [
              (h(), A(Y(e.dragIcon ?? "IconDrag")))
            ])) : S("", !0)
          ])
        ]),
        _: 1
      }, 16, ["modelValue", "data", "props", "class"])
    ], 2));
  }
});
export {
  Ce as default
};
