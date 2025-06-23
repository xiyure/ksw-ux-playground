import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { Sortable as Y } from "../../utils/constructor/sortable.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/culori/src/index.mjs";
import { getElement as q } from "../../utils/dom.mjs";
import G from "./view_item.vue.mjs";
/* empty css                */
import { useLocale as fe } from "../../hooks/use_locale.mjs";
import { useDeprecated as he } from "../../hooks/use_deprecated.mjs";
import { useResize as ge } from "./hooks/use_resize.mjs";
import { KTree as H } from "../tree/index.mjs";
import { ACTIVE_VIEW_KEY as we, P_PROPS_KEY as ke } from "./const.mjs";
import be from "../../node_modules/ksw-vue-icon/es/icons/base/left.mjs";
import ye from "../../node_modules/ksw-vue-icon/es/icons/base/reload.mjs";
import { ElScrollbar as Ce } from "../../node_modules/element-plus/es/components/scrollbar/index.mjs";
import { defineComponent as Ee, computed as h, onMounted as Ve, onBeforeUnmount as Ne, watch as $e, provide as J, createElementBlock as u, openBlock as i, createElementVNode as p, createCommentVNode as g, createVNode as K, renderSlot as v, createTextVNode as Ae, withCtx as k, createBlock as $, Fragment as Q, renderList as X, mergeProps as A, createSlots as B } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as Z, unref as s } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { toDisplayString as x, normalizeStyle as D, normalizeClass as P } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const Be = { class: "k-view-aside" }, De = {
  key: 0,
  class: "k-view__header"
}, Le = { class: "k-view-title text-base font-bold" }, Se = { class: "k-view__special-data" }, Te = {
  key: 0,
  class: "k-view__custom text-base"
}, Ke = { class: "k-view__custom-default-title" }, Pe = { class: "k-view__custom-data" }, _e = {
  key: 0,
  class: "k-view-content"
}, eo = /* @__PURE__ */ Ee({
  name: "KView",
  __name: "view",
  props: {
    modelValue: {},
    defaultActive: {},
    data: {},
    draggable: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    showCustomControl: { type: Boolean, default: !1 },
    useTree: { type: Boolean, default: !1 },
    treeConfig: {},
    showArrow: { type: Boolean, default: !1 },
    showCount: { type: Boolean, default: !0 },
    props: {},
    simple: { type: Boolean, default: !1 },
    height: {},
    defaultWidth: { default: 250 },
    minWidth: { default: 0 },
    maxWidth: { default: 9999 },
    resizeLineStyle: {},
    resizeLineClass: {},
    previewLineStyle: {},
    previewLineClass: {},
    iconMethod: {}
  },
  emits: [
    "update:modelValue",
    "refresh",
    "change",
    "remove",
    "drag",
    "visible-change",
    "node-expand",
    "node-collapse"
  ],
  setup(ee, { expose: oe, emit: le }) {
    const { t: _ } = fe(), ae = {
      label: "label",
      value: "value",
      count: "count",
      children: "children",
      disabled: "disabled",
      custom: "custom"
    }, t = ee;
    he(
      {
        scope: "k-view",
        from: "show-arrow",
        replacement: "treeConfig.showArrow",
        version: "2.0.0"
      },
      h(() => !!t.showArrow)
    );
    const m = le, r = Z(""), L = Z(), a = h(() => Object.assign(ae, t.props ?? {})), te = h(() => {
      var e;
      return ((e = t.data) == null ? void 0 : e.filter((o) => !o[a.value.custom])) ?? [];
    }), z = h(() => {
      var e;
      return (e = t.data) == null ? void 0 : e.filter((o) => !!o[a.value.custom]);
    }), R = h(() => {
      const {
        emptyText: e,
        expandOnClickNode: o,
        checkOnClickNode: n,
        defaultExpandedKeys: l,
        accordion: c,
        indent: E,
        lazy: V,
        load: N,
        icon: S,
        expandIcon: T,
        collapseIcon: w,
        showArrow: pe
      } = t.treeConfig ?? {};
      return {
        emptyText: e,
        expandOnClickNode: o,
        checkOnClickNode: n,
        defaultExpandedKeys: [r.value ?? "", ...l ?? []],
        accordion: c,
        indent: E,
        lazy: V,
        load: N,
        icon: S,
        expandIcon: T,
        collapseIcon: w,
        showArrow: pe ?? t.showArrow,
        iconMethod: t.iconMethod
      };
    }), {
      containerWidth: f,
      previewPosition: se,
      isDragging: ne,
      startDrag: M,
      toggleAsidePanel: O,
      showAsidePanel: ie,
      hideAsidePanel: re
    } = ge(
      t,
      h(() => t.collapse)
    );
    Ve(() => {
      ue(), t.modelValue === void 0 && (r.value = t.defaultActive ?? "");
    }), Ne(() => {
      var e, o;
      (e = y.common) == null || e.destroy(), (o = y.custom) == null || o.destroy();
    }), $e(
      () => t.modelValue,
      (e) => {
        e !== r.value && (r.value = e);
      },
      { immediate: !0 }
    );
    function de() {
      m("refresh");
    }
    function b(e, o) {
      r.value = e[a.value.value], m("update:modelValue", r.value), m("change", { value: r.value, data: e, node: o });
    }
    function I(e) {
      m("remove", { value: e[a.value.value], data: e });
    }
    function W(e, o) {
      j(o) || m("node-expand", e, o);
    }
    function F(e, o) {
      j(o) || m("node-collapse", e, o);
    }
    function j(e) {
      return e.isLeaf;
    }
    const y = {
      common: null,
      custom: null
    };
    let d = null;
    function ue() {
      if (!t.draggable)
        return;
      const e = q(".k-view__special-data", L.value), o = q(".k-view__custom-data", L.value);
      e && (y.common = Y(e, {
        handle: ".k-view-common",
        animation: 150,
        onMove: (n) => {
          d = n.related;
        },
        onEnd: C
      })), o && (y.custom = Y(o, {
        handle: ".k-view-custom",
        animation: 150,
        onMove: (n) => {
          d = n.related;
        },
        onEnd: C
      }));
    }
    function C(e, o, n) {
      var c, E;
      const l = {
        targetNode: e,
        lastOverNode: o,
        position: n
      };
      if (!t.useTree) {
        if (!d || d === e)
          return;
        const { item: V } = e, N = V.compareDocumentPosition(d);
        N === 2 ? l.position = "after" : N === 4 && (l.position = "before");
        const S = d == null ? void 0 : d.getAttribute("data-view-value");
        l.lastOverNode = (c = t.data) == null ? void 0 : c.find((w) => w[a.value.value] === S);
        const T = V.getAttribute("data-view-value");
        l.targetNode = (E = t.data) == null ? void 0 : E.find((w) => w[a.value.value] === T), d = null;
      }
      m("drag", l);
    }
    function ve() {
      return f.value > 0;
    }
    function me() {
      return f.value <= 0;
    }
    function ce() {
      return r.value;
    }
    function U(e) {
      return {
        label: e[a.value.label] ?? "",
        value: e[a.value.value] ?? "",
        count: e[a.value.count] ?? 0,
        disabled: e[a.value.disabled] ?? !1,
        custom: e[a.value.custom] ?? !1,
        showCustomControl: e.showCustomControl ?? t.showCustomControl ?? !1
      };
    }
    return J(we, r), J(ke, t), oe({
      expand: ie,
      collapse: re,
      toggle: O,
      isExpand: ve,
      isCollapse: me,
      getCurrentView: ce
    }), (e, o) => (i(), u("div", {
      ref_key: "KViewRef",
      ref: L,
      class: "k-view text-base",
      style: D({ height: typeof e.height == "number" ? `${e.height}px` : e.height })
    }, [
      p("div", {
        class: P(["k-view-nav relative h-full flex-shrink-0 border-gray-200", {
          "is-collapse": s(f) === 0,
          "is-simple": e.simple,
          "border-r": !e.simple,
          "p-2": !e.simple,
          "pr-2": e.simple,
          "is-hide": s(f) === 0
        }]),
        style: D({ width: `${s(f)}px` })
      }, [
        e.simple ? g("", !0) : (i(), u("div", {
          key: 0,
          class: "show-view-button flex items-center justify-center rounded-full",
          onClick: o[0] || (o[0] = () => {
            s(O)(), m("visible-change", s(f) > 0);
          })
        }, [
          K(s(be))
        ])),
        p("div", Be, [
          e.simple ? g("", !0) : (i(), u("div", De, [
            p("div", Le, [
              v(e.$slots, "header", {}, () => {
                var n;
                return [
                  Ae(x((n = s(_)) == null ? void 0 : n("view.view")), 1)
                ];
              })
            ]),
            p("span", {
              class: "view-fresh",
              onClick: de
            }, [
              v(e.$slots, "refresh", {}, () => [
                K(s(ye))
              ])
            ])
          ])),
          K(s(Ce), null, {
            default: k(() => {
              var n;
              return [
                p("div", Se, [
                  e.useTree ? (i(), $(s(H), A({
                    key: 1,
                    ref: "KViewTree",
                    class: "k-tree-view-item",
                    "node-key": a.value.value,
                    props: {
                      label: a.value.label,
                      disabled: a.value.disabled,
                      children: a.value.children
                    },
                    "current-node-key": r.value,
                    data: e.data,
                    draggable: e.draggable,
                    "highlight-current": ""
                  }, R.value, {
                    onCurrentChange: b,
                    onNodeExpand: W,
                    onNodeCollapse: F,
                    onNodeDrop: C
                  }), B({ _: 2 }, [
                    e.$slots.label ? {
                      name: "default",
                      fn: k(({ node: l, data: c }) => [
                        v(e.$slots, "label", {
                          node: l,
                          data: c
                        })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1040, ["node-key", "props", "current-node-key", "data", "draggable"])) : (i(!0), u(Q, { key: 0 }, X(te.value, (l) => (i(), $(G, A({
                    key: l[a.value.value],
                    "origin-data": l
                  }, U(l), {
                    onChange: b,
                    onRemove: I
                  }), B({ _: 2 }, [
                    e.$slots.label ? {
                      name: "label",
                      fn: k(() => [
                        v(e.$slots, "label", { data: l })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1040, ["origin-data"]))), 128))
                ]),
                (n = z.value) != null && n.length ? (i(), u("div", Te, [
                  v(e.$slots, "custom-header", {}, () => {
                    var l;
                    return [
                      p("span", Ke, x((l = s(_)) == null ? void 0 : l("view.customView")), 1)
                    ];
                  }),
                  p("div", Pe, [
                    e.useTree ? (i(), $(s(H), A({
                      key: 1,
                      ref: "KCustomViewTree",
                      class: "k-tree-view-item",
                      "node-key": a.value.value,
                      props: {
                        label: a.value.label,
                        disabled: a.value.disabled,
                        children: a.value.children
                      },
                      "current-node-key": r.value,
                      data: e.data,
                      draggable: e.draggable,
                      "highlight-current": ""
                    }, R.value, {
                      onCurrentChange: b,
                      onNodeExpand: W,
                      onNodeCollapse: F,
                      onNodeDrop: C
                    }), B({ _: 2 }, [
                      e.$slots.label ? {
                        name: "default",
                        fn: k(({ node: l, data: c }) => [
                          v(e.$slots, "label", {
                            node: l,
                            data: c
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["node-key", "props", "current-node-key", "data", "draggable"])) : (i(!0), u(Q, { key: 0 }, X(z.value, (l) => (i(), $(G, A({
                      key: l[a.value.value],
                      "origin-data": l
                    }, U(l), {
                      onChange: b,
                      onRemove: I
                    }), B({ _: 2 }, [
                      e.$slots.label ? {
                        name: "label",
                        fn: k(() => [
                          v(e.$slots, "label", { data: l })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["origin-data"]))), 128))
                  ])
                ])) : g("", !0)
              ];
            }),
            _: 3
          })
        ]),
        e.simple ? g("", !0) : (i(), u("div", {
          key: 1,
          class: P(["k-view-resizer", e.resizeLineClass]),
          style: D(e.resizeLineStyle),
          onMousedown: o[1] || (o[1] = //@ts-ignore
          (...n) => s(M) && s(M)(...n))
        }, null, 38)),
        !e.simple && s(ne) ? (i(), u("div", {
          key: 2,
          class: P(["k-view-preview", e.previewLineClass]),
          style: D({ left: s(se) + "px", ...e.previewLineStyle ?? {} })
        }, null, 6)) : g("", !0)
      ], 6),
      e.simple ? g("", !0) : (i(), u("div", _e, [
        v(e.$slots, "default"),
        v(e.$slots, r.value)
      ]))
    ], 4));
  }
});
export {
  eo as default
};
