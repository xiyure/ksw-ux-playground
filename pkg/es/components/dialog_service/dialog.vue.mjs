import { defineComponent as A, reactive as g, ref as D, createElementBlock as M, openBlock as w, Fragment as ee, renderList as N, createBlock as O, unref as oe, mergeProps as s, createSlots as te, withCtx as re, resolveDynamicComponent as ne, nextTick as le, createVNode as a, isVNode as ae, resolveComponent as ue } from "vue";
import { KDialog as ie } from "../dialog/index.mjs";
import { KForm as ce, KFormItem as de } from "../form/index.mjs";
import { KCheckboxGroup as fe, KCheckbox as W } from "../checkbox/index.mjs";
import { KRadioGroup as se, KRadio as q } from "../radio/index.mjs";
import { KTreeSelect as pe } from "../tree_select/index.mjs";
import { KInput as me } from "../input/index.mjs";
import { KButton as T } from "../button/index.mjs";
import { KSelect as ve } from "../select/index.mjs";
import { genRandomStr as ge } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { useLocale as he } from "../../hooks/use_locale.mjs";
function y(b) {
  return typeof b == "function" || Object.prototype.toString.call(b) === "[object Object]" && !ae(b);
}
const Ge = /* @__PURE__ */ A({
  __name: "dialog",
  setup(b, {
    expose: z
  }) {
    const {
      t: E
    } = he(), V = g([]), C = /* @__PURE__ */ new Map(), R = D();
    function B(t, r) {
      const e = r.reduce((c, n) => {
        const {
          prop: o,
          value: l = ""
        } = n;
        return o ? (c[o] = l, c) : console.warn("exist form item without prop");
      }, {}), i = g({
        labelPosition: "top",
        model: e,
        labelWidth: "100",
        ...t
      }), d = r.map((c) => {
        const n = g(c ?? {}), o = H(i, n);
        return c.noFormItemWrap && typeof o == "function" ? o() : a(de, n, y(o) ? o : {
          default: () => [o]
        });
      });
      return [i, d];
    }
    function H(t, r) {
      const {
        attrs: e,
        type: i,
        prop: d,
        render: c
      } = r, n = d;
      if (typeof c == "function")
        return c(r, t.model, t);
      switch (i) {
        case "select":
          if (!Array.isArray(r.options)) {
            console.error("please provide correct options for select type");
            return;
          }
          return () => {
            let o;
            return a(ve, s({
              modelValue: t.model[n],
              "onUpdate:modelValue": (l) => t.model[n] = l
            }, e), y(o = g(r.options).map((l) => a(ue("k-option"), {
              label: l.label,
              value: l.value
            }, null))) ? o : {
              default: () => [o]
            });
          };
        case "checkbox":
          return () => a(W, s({
            modelValue: t.model[n],
            "onUpdate:modelValue": (o) => t.model[n] = o
          }, e), null);
        case "checkboxGroup":
          if (!Array.isArray(r.options)) {
            console.error("checkboxGroup 类型需要传入正确的 options");
            return;
          }
          return () => {
            let o;
            return a(fe, s({
              modelValue: t.model[n],
              "onUpdate:modelValue": (l) => t.model[n] = l
            }, e), y(o = g(r.options).map((l) => a(W, {
              label: l.label,
              value: l.value
            }, null))) ? o : {
              default: () => [o]
            });
          };
        case "radio":
          return () => a(q, s({
            modelValue: t.model[n],
            "onUpdate:modelValue": (o) => t.model[n] = o
          }, e), null);
        case "radioGroup":
          if (!Array.isArray(r.options)) {
            console.error("checkboxGroup 类型需要传入正确的 options");
            return;
          }
          return () => {
            let o;
            return a(se, s({
              modelValue: t.model[n],
              "onUpdate:modelValue": (l) => t.model[n] = l
            }, e), y(o = g(r.options).map((l) => a(q, {
              label: l.label,
              value: l.value
            }, null))) ? o : {
              default: () => [o]
            });
          };
        case "treeSelect":
          return () => a(pe, s({
            modelValue: t.model[n],
            "onUpdate:modelValue": (o) => t.model[n] = o
          }, e), null);
        default:
          return () => a(me, s({
            modelValue: t.model[n],
            "onUpdate:modelValue": (o) => t.model[n] = o
          }, e), null);
      }
    }
    function J({
      id: t = `dialog_${ge(8)}`,
      attrs: r,
      slots: e = {},
      formItems: i,
      formAttrs: d = {},
      confirm: c,
      cancel: n,
      penetratePointer: o = !1,
      showDefaultFooter: l = !0,
      showCancelButton: X = !0,
      showConfirmButton: Y = !0,
      confirmButtonText: S = E("dialog.confirm"),
      cancelButtonText: K = E("dialog.cancel"),
      ...Z
    }) {
      if (r = r ?? Z, o && (r.modal = !1), typeof e == "function" && (e = {
        default: e
      }), i && e.default)
        return Promise.reject(new TypeError("formItems and default slots cannot be used together"));
      if (!e.default && !i)
        return Promise.reject(new TypeError("must provide default slot or formItems"));
      const m = g({
        draggable: !0,
        modelValue: !0,
        closeOnClickModal: !1,
        width: "500",
        alignCenter: !0,
        ...r
      }), _ = () => {
        m.modelValue = !1;
      }, h = D(null);
      let p, F;
      const f = {
        ref: h,
        dialogAttrs: m,
        formAttrs: d,
        formItems: i,
        confirm: null,
        cancel: null,
        close: _
      }, I = {
        header: () => e.header ? e.header(f) : a("div", {
          class: "el-dialog__title"
        }, [m.title]),
        default: () => e.default ? e.default(f) : ([p, F] = B(d, i), a(ce, s({
          ref: h
        }, p), {
          default: () => F
        })),
        footer: () => {
          var k;
          if (!l) return "";
          if (f.confirm = async (u) => {
            var G, j, L, P, $;
            typeof ((G = h.value) == null ? void 0 : G.validate) == "function" && await ((L = (j = h.value).validate) == null ? void 0 : L.call(j));
            try {
              u instanceof Event ? (u = {
                ok: !0,
                dialogAttrs: m
              }, i ? (u.form = p == null ? void 0 : p.model, u.formAttrs = p) : typeof ((P = h.value) == null ? void 0 : P.getResult) == "function" && (u.result = await (($ = h.value) == null ? void 0 : $.getResult()))) : u = {
                ok: !0,
                result: u
              }, typeof c == "function" ? await c(_, u) : (U(t, u), _());
            } catch (x) {
              console.error(x.error ? x.error.toString() : x.toString());
            }
          }, f.cancel = async () => {
            try {
              typeof n == "function" && await n(m, p, i), _();
            } catch (u) {
              console.error(u.toString());
            }
          }, e.footer)
            return f.formAttrs = p, e.footer(f);
          const v = typeof e.footerLeft == "function";
          return a("div", {
            class: `k-dialog-service-footer${v ? " k-dialog-service-footer-has-left" : ""}`
          }, [v ? a("div", {
            class: "k-dialog-service-footer-left"
          }, [(k = e.footerLeft) == null ? void 0 : k.call(e, f)]) : "", X !== !1 && a(T, {
            class: "k-dialog-service-cancel-button__default",
            onClick: f.cancel
          }, y(K) ? K : {
            default: () => [K]
          }), Y !== !1 && a(T, {
            onClick: f.confirm,
            main: !0
          }, y(S) ? S : {
            default: () => [S]
          })]);
        }
      };
      return V.push({
        id: t,
        attrs: m,
        slots: I
      }), o && le().then(() => {
        const v = m.appendTo ?? R.value, k = v.querySelector(`#${t}`);
        k && (k.style.pointerEvents = "auto");
        let u = k.parentElement;
        for (; u !== v; )
          u.style.pointerEvents = "none", u = u.parentElement;
      }), typeof c == "function" ? _ : new Promise((v) => {
        C.set(t, v);
      });
    }
    function U(t, r) {
      const e = C.get(t);
      e && (e(r), C.delete(t));
    }
    function Q(t) {
      U(t, {
        ok: !1
      });
      const r = V.findIndex((e) => e.id === t);
      r !== -1 && V.splice(r, 1);
    }
    return z({
      showDialog: J
    }), (t, r) => (w(), M("div", {
      ref_key: "root",
      ref: R,
      class: "k-dialogs"
    }, [(w(!0), M(ee, null, N(V, (e) => (w(), O(oe(ie), s(e.attrs, {
      id: e.id,
      key: e.id,
      onClosed: (i) => Q(e.id)
    }), te({
      _: 2
    }, [N(e.slots, (i, d) => ({
      name: d,
      fn: re(() => [(w(), O(ne(e.slots[d])))])
    }))]), 1040, ["id", "onClosed"]))), 128))], 512));
  }
});
export {
  Ge as default
};
