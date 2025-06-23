import { defineComponent as fe, computed as h, ref as Y, onMounted as he, onBeforeUnmount as ge, watch as we, provide as q, createElementBlock as u, openBlock as i, normalizeStyle as A, createElementVNode as p, createCommentVNode as g, normalizeClass as K, unref as n, createVNode as P, renderSlot as v, createTextVNode as ke, toDisplayString as G, withCtx as k, createBlock as N, Fragment as H, renderList as J, mergeProps as D, createSlots as L } from "vue";
import { Sortable as Q } from "../../utils/constructor/sortable.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/culori/src/index.mjs";
import { getElement as X } from "../../utils/dom.mjs";
import Z from "./view_item.vue.mjs";
/* empty css                */
import { useLocale as be } from "../../hooks/use_locale.mjs";
import { useDeprecated as ye } from "../../hooks/use_deprecated.mjs";
import { useResize as Ce } from "./hooks/use_resize.mjs";
import { KTree as x } from "../tree/index.mjs";
import { ACTIVE_VIEW_KEY as Ee, P_PROPS_KEY as Ve } from "./const.mjs";
import $e from "../../node_modules/ksw-vue-icon/es/icons/base/left.mjs";
import Ae from "../../node_modules/ksw-vue-icon/es/icons/base/reload.mjs";
import { ElScrollbar as Ne } from "../../node_modules/element-plus/es/components/scrollbar/index.mjs";
const De = { class: "k-view-aside" }, Le = {
  key: 0,
  class: "k-view__header"
}, Se = { class: "k-view-title text-base font-bold" }, Be = { class: "k-view__special-data" }, Te = {
  key: 0,
  class: "k-view__custom text-base"
}, Ke = { class: "k-view__custom-default-title" }, Pe = { class: "k-view__custom-data" }, _e = {
  key: 0,
  class: "k-view-content"
}, Xe = /* @__PURE__ */ fe({
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
    const { t: _ } = be(), ae = {
      label: "label",
      value: "value",
      count: "count",
      children: "children",
      disabled: "disabled",
      custom: "custom"
    }, t = ee;
    ye(
      {
        scope: "k-view",
        from: "show-arrow",
        replacement: "treeConfig.showArrow",
        version: "2.0.0"
      },
      h(() => !!t.showArrow)
    );
    const m = le, r = Y(""), S = Y(), a = h(() => Object.assign(ae, t.props ?? {})), te = h(() => {
      var e;
      return ((e = t.data) == null ? void 0 : e.filter((o) => !o[a.value.custom])) ?? [];
    }), z = h(() => {
      var e;
      return (e = t.data) == null ? void 0 : e.filter((o) => !!o[a.value.custom]);
    }), R = h(() => {
      const {
        emptyText: e,
        expandOnClickNode: o,
        checkOnClickNode: s,
        defaultExpandedKeys: l,
        accordion: c,
        indent: E,
        lazy: V,
        load: $,
        icon: B,
        expandIcon: T,
        collapseIcon: w,
        showArrow: pe
      } = t.treeConfig ?? {};
      return {
        emptyText: e,
        expandOnClickNode: o,
        checkOnClickNode: s,
        defaultExpandedKeys: [r.value ?? "", ...l ?? []],
        accordion: c,
        indent: E,
        lazy: V,
        load: $,
        icon: B,
        expandIcon: T,
        collapseIcon: w,
        showArrow: pe ?? t.showArrow,
        iconMethod: t.iconMethod
      };
    }), {
      containerWidth: f,
      previewPosition: ne,
      isDragging: se,
      startDrag: M,
      toggleAsidePanel: O,
      showAsidePanel: ie,
      hideAsidePanel: re
    } = Ce(
      t,
      h(() => t.collapse)
    );
    he(() => {
      ue(), t.modelValue === void 0 && (r.value = t.defaultActive ?? "");
    }), ge(() => {
      var e, o;
      (e = y.common) == null || e.destroy(), (o = y.custom) == null || o.destroy();
    }), we(
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
      const e = X(".k-view__special-data", S.value), o = X(".k-view__custom-data", S.value);
      e && (y.common = Q(e, {
        handle: ".k-view-common",
        animation: 150,
        onMove: (s) => {
          d = s.related;
        },
        onEnd: C
      })), o && (y.custom = Q(o, {
        handle: ".k-view-custom",
        animation: 150,
        onMove: (s) => {
          d = s.related;
        },
        onEnd: C
      }));
    }
    function C(e, o, s) {
      var c, E;
      const l = {
        targetNode: e,
        lastOverNode: o,
        position: s
      };
      if (!t.useTree) {
        if (!d || d === e)
          return;
        const { item: V } = e, $ = V.compareDocumentPosition(d);
        $ === 2 ? l.position = "after" : $ === 4 && (l.position = "before");
        const B = d == null ? void 0 : d.getAttribute("data-view-value");
        l.lastOverNode = (c = t.data) == null ? void 0 : c.find((w) => w[a.value.value] === B);
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
    return q(Ee, r), q(Ve, t), oe({
      expand: ie,
      collapse: re,
      toggle: O,
      isExpand: ve,
      isCollapse: me,
      getCurrentView: ce
    }), (e, o) => (i(), u("div", {
      ref_key: "KViewRef",
      ref: S,
      class: "k-view text-base",
      style: A({ height: typeof e.height == "number" ? `${e.height}px` : e.height })
    }, [
      p("div", {
        class: K(["k-view-nav relative h-full flex-shrink-0 border-gray-200", {
          "is-collapse": n(f) === 0,
          "is-simple": e.simple,
          "border-r": !e.simple,
          "p-2": !e.simple,
          "pr-2": e.simple,
          "is-hide": n(f) === 0
        }]),
        style: A({ width: `${n(f)}px` })
      }, [
        e.simple ? g("", !0) : (i(), u("div", {
          key: 0,
          class: "show-view-button flex items-center justify-center rounded-full",
          onClick: o[0] || (o[0] = () => {
            n(O)(), m("visible-change", n(f) > 0);
          })
        }, [
          P(n($e))
        ])),
        p("div", De, [
          e.simple ? g("", !0) : (i(), u("div", Le, [
            p("div", Se, [
              v(e.$slots, "header", {}, () => {
                var s;
                return [
                  ke(G((s = n(_)) == null ? void 0 : s("view.view")), 1)
                ];
              })
            ]),
            p("span", {
              class: "view-fresh",
              onClick: de
            }, [
              v(e.$slots, "refresh", {}, () => [
                P(n(Ae))
              ])
            ])
          ])),
          P(n(Ne), null, {
            default: k(() => {
              var s;
              return [
                p("div", Be, [
                  e.useTree ? (i(), N(n(x), D({
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
                  }), L({ _: 2 }, [
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
                  ]), 1040, ["node-key", "props", "current-node-key", "data", "draggable"])) : (i(!0), u(H, { key: 0 }, J(te.value, (l) => (i(), N(Z, D({
                    key: l[a.value.value],
                    "origin-data": l
                  }, U(l), {
                    onChange: b,
                    onRemove: I
                  }), L({ _: 2 }, [
                    e.$slots.label ? {
                      name: "label",
                      fn: k(() => [
                        v(e.$slots, "label", { data: l })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1040, ["origin-data"]))), 128))
                ]),
                (s = z.value) != null && s.length ? (i(), u("div", Te, [
                  v(e.$slots, "custom-header", {}, () => {
                    var l;
                    return [
                      p("span", Ke, G((l = n(_)) == null ? void 0 : l("view.customView")), 1)
                    ];
                  }),
                  p("div", Pe, [
                    e.useTree ? (i(), N(n(x), D({
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
                    }), L({ _: 2 }, [
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
                    ]), 1040, ["node-key", "props", "current-node-key", "data", "draggable"])) : (i(!0), u(H, { key: 0 }, J(z.value, (l) => (i(), N(Z, D({
                      key: l[a.value.value],
                      "origin-data": l
                    }, U(l), {
                      onChange: b,
                      onRemove: I
                    }), L({ _: 2 }, [
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
          class: K(["k-view-resizer", e.resizeLineClass]),
          style: A(e.resizeLineStyle),
          onMousedown: o[1] || (o[1] = //@ts-ignore
          (...s) => n(M) && n(M)(...s))
        }, null, 38)),
        !e.simple && n(se) ? (i(), u("div", {
          key: 2,
          class: K(["k-view-preview", e.previewLineClass]),
          style: A({ left: n(ne) + "px", ...e.previewLineStyle ?? {} })
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
  Xe as default
};
