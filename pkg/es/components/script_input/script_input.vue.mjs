import "../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { KMessage as kt } from "../message/index.mjs";
import Ct from "./tag.vue.mjs";
import { usePassword as Tt } from "./hooks/use_password.mjs";
import { genRandomStr as Y, transformTreeData as _t } from "../../utils/utils.mjs";
import "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../node_modules/culori/src/index.mjs";
import { getElement as Z } from "../../utils/dom.mjs";
import { useLocale as xt } from "../../hooks/use_locale.mjs";
import { checkInputMessage as St, typeRules as we } from "./const.mjs";
import { ElScrollbar as Mt } from "../../node_modules/element-plus/es/components/scrollbar/index.mjs";
import Ue from "../../node_modules/ksw-vue-icon/es/icons/base/mode-expression-color.mjs";
import We from "../../node_modules/ksw-vue-icon/es/icons/base/mode-expression.mjs";
import It from "../../node_modules/ksw-vue-icon/es/icons/base/variable.mjs";
import { defineComponent as Vt, onMounted as Rt, onBeforeUnmount as Pt, computed as F, watch as G, nextTick as I, getCurrentInstance as Et, createVNode as V, resolveComponent as ee, resolveDirective as Bt, createElementBlock as be, openBlock as _, withCtx as R, createElementVNode as C, createBlock as K, createCommentVNode as te, renderSlot as ye, guardReactiveProps as At, createTextVNode as ne, withDirectives as Lt, resolveDynamicComponent as je } from "../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { ref as f, unref as y } from "../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { render as $t } from "../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.mjs";
import { normalizeClass as ke, normalizeProps as Ft, toDisplayString as J, normalizeStyle as qe } from "../../node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const Kt = { class: "flex flex-col w-full min-h-8" }, Dt = { class: "flex w-full min-h-8 relative" }, Ht = { class: "k-script-input-prepend" }, zt = {
  key: 0,
  class: "k-script-input-wrap flex-1"
}, Nt = ["contenteditable", "placeholder"], Ot = { class: "k-script-input-append" }, Ut = {
  key: 2,
  class: "k-script-input-check-result text-red-500 text-xs flex items-center gap-0.5 w-fit"
}, Wt = { class: "k-script-input-mode-switch__popper" }, jt = { class: "k-script-input-mode-switch__popper-title" }, fn = /* @__PURE__ */ Vt({
  name: "KScriptInput",
  __name: "script_input",
  props: {
    modelValue: { default: "" },
    size: { default: "base" },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    options: { default: () => [] },
    useTree: { type: Boolean, default: !1 },
    showPopperSwitch: { type: Boolean, default: !0 },
    showModeSwitch: { type: Boolean, default: !0 },
    defaultMode: { default: "string" },
    height: {},
    onlyOneInput: { type: [Boolean, Array], default: !1 },
    resize: { type: Boolean, default: !0 },
    showPassword: { type: Boolean },
    treeConfig: {},
    props: {},
    scriptKey: {},
    checkContentType: { type: Boolean, default: !1 },
    contentType: { default: "string" },
    optionRepeatable: { type: Boolean, default: !0 },
    maxHeight: {},
    max: {},
    min: {},
    tagClosable: { type: Boolean, default: !1 },
    searchConfig: {},
    teleported: { type: Boolean, default: !0 },
    readonly: { type: Boolean, default: !1 },
    tagConfig: {}
  },
  emits: [
    "change",
    "input",
    "focus",
    "blur",
    "select",
    "update:modelValue",
    "mode-change"
  ],
  setup(Ge, { expose: Je, emit: Qe }) {
    var Oe;
    const { t: D } = xt(), s = Ge, Xe = {
      parentField: "pid",
      rowField: m().value,
      expandAll: !1,
      trigger: "default"
    }, S = Qe;
    Rt(() => {
      document.addEventListener("keydown", Pe), document.addEventListener("click", Fe), window.addEventListener("resize", he), he();
    }), Pt(() => {
      document.removeEventListener("keydown", Pe), document.removeEventListener("click", Fe), window.removeEventListener("resize", he);
    });
    const H = { node: void 0, offset: 0 }, z = `_${Y(8)}`, Ye = [{ field: m().optionLabel, title: "", treeNode: !0 }], oe = f(), d = f(), Q = f(), Ce = f(), w = f(), M = f(s.defaultMode !== "expression");
    let le = "";
    const T = f(""), v = f(-1);
    let P = !1, se = !1;
    const k = f(!1), ae = f(!0), N = f(!1), O = f(!1), Te = f(0), re = f(!0), ie = /fx\((.*?)\)|RPA_Func\{\{(.*?)\}\}/, ue = /* @__PURE__ */ new Set(), E = f(!1);
    let B = !0;
    const ce = f(""), U = f(""), g = f(!1), A = f(s.modelValue.toString()), { _methods: W } = Tt(g, A), _e = F(() => {
      if (s.useTree)
        return Object.assign(Xe, s.treeConfig || {});
    }), x = F(() => {
      var t;
      const e = ((t = w.value) == null ? void 0 : t.getTableData().fullData) ?? [];
      return _t(e, { parentField: m().value, children: "children" }) ?? [];
    }), Ze = F(() => ({
      content: St.tooltip,
      visible: E.value && s.contentType !== "number" && s.contentType !== "boolean" && !U.value
    })), pe = F(() => {
      const e = s.onlyOneInput, t = b() ? "string" : "expression";
      return !!(e === !0 || Array.isArray(e) && e.includes(t));
    }), de = F(() => s.options.map((e) => (e.__kid__ = `uid_${Y(8)}`, e))), et = F(() => {
      const { maxWidth: e, color: t = "var(--k-gray-200)", textColor: n = "var(--k-theme-text--normal)" } = s.tagConfig ?? {};
      return {
        "--tag-max-width": e ? `${e}px` : "auto",
        "--tag-bg-color": t,
        "--tag-text-color": n
      };
    });
    G(
      () => s.height,
      async () => {
        var t;
        await I();
        const e = oe.value;
        (t = e == null ? void 0 : e.style) != null && t.height && (e.style.height = s.height ?? "auto");
      },
      { immediate: !0 }
    ), G(
      () => T.value,
      () => {
        var e, t, n;
        if (T.value === "" && !P) {
          k.value = !1;
          return;
        }
        (e = w.value) == null || e.filter(T.value), (n = (t = w.value) == null ? void 0 : t.getVisibleData()) != null && n.length ? k.value = !0 : k.value = !1, g.value || Le();
      },
      { immediate: !0 }
    ), G(
      () => s.showPassword,
      (e) => {
        W.setPasswordMode(e);
      },
      { immediate: !0 }
    ), G(
      () => [s.modelValue, s.options],
      () => {
        const e = typeof s.modelValue;
        if (e !== "string" && e !== "number" || s.modelValue === void 0) {
          console.warn(`'modelValue' must be a string or number, but got ${e}`);
          return;
        }
        if (s.modelValue === le)
          return;
        $();
        const t = s.modelValue.toString();
        if (g.value && !ie.test(t)) {
          A.value = t;
          return;
        }
        g.value = !1;
        const n = ht(t);
        le = n, re.value = !(pe.value && (n.includes("fx(") || n.includes("RPA_Func{{"))), I(() => {
          Re(n);
        });
      },
      { immediate: !0, deep: !0 }
    ), G(
      () => s.contentType,
      () => {
        q(L());
      }
    );
    function j(e) {
      le = e, se = !0, S("update:modelValue", e), re.value = !(pe.value && (e.includes("fx(") || e.includes("RPA_Func{{")));
    }
    function X(e) {
      se && (S("change", e), se = !1);
    }
    function tt(e = !1) {
      const { innerHTML: t, textContent: n } = d.value;
      return (e ? n : t).replace(/&nbsp;/g, " ");
    }
    function xe(e) {
      d.value.innerHTML = e;
    }
    function Se(e) {
      var l;
      if (!(e.target instanceof HTMLElement) || !ae.value)
        return;
      const t = e.data;
      t === " " ? $() : t === null && T.value.length ? T.value = T.value.slice(0, -1) : t !== null && (T.value += t ?? "");
      const n = L();
      (l = n.result) != null && l.length || xe(""), j(n.result ?? ""), q(n);
    }
    function q(e) {
      const { result: t = "" } = e;
      if (U.value = "", !s.checkContentType)
        return;
      const n = we.has(s.contentType) ? we.get(s.contentType) : we.get("string");
      n != null && n.reg.test(t) ? (E.value = !1, B = !0) : (ce.value = (n == null ? void 0 : n.message) ?? "", E.value = !0, B = !1), U.value = nt(t), U.value && (E.value = !0, ce.value = `${U.value}`), e.checkVariableResult = B;
    }
    function nt(e) {
      if (typeof s.max != "number" || typeof s.min != "number" || s.max < s.min)
        return;
      const t = s.contentType === "number" ? Number(e) : e.length, n = s.contentType === "number" ? "数值范围" : "字符长度";
      if (s.min && Number.isInteger(s.min) && t < s.min)
        return `${n}必须大于等于 ${s.min} `;
      if (s.max && Number.isInteger(s.max) && t > s.max)
        return `${n}必须小于等于 ${s.max} `;
    }
    function Me(e) {
      N.value = !0, S("focus", e);
    }
    function Ie(e) {
      if (!(e.target instanceof HTMLElement))
        return;
      const t = Z(`.${z}`);
      t && !t.contains(e.relatedTarget) && (S("blur", e), X(L()), N.value = !1, k.value = !1);
    }
    function ot({ row: e }) {
      var n;
      if ((n = e.children) != null && n.length && !e.optional)
        return;
      const t = x.value.findIndex(
        (l) => l[m().value] === e[m().value]
      );
      v.value = t, Ve(e);
    }
    async function Ve(e) {
      const t = await lt(e);
      $(), ct(t), k.value = !1, I(() => {
        const n = L();
        j((n == null ? void 0 : n.result) ?? ""), q(n), S("select", e), X(n);
      });
    }
    async function lt(e) {
      g.value && (W.setPasswordMode(!1), await I());
      const t = Y(8), n = st(e, t);
      return pe.value ? (d.value.innerHTML = "", d.value.appendChild(n)) : at(n), t;
    }
    function st(e, t) {
      const n = e[m().label], l = e[m().value];
      return M.value && (e != null && e.isFunction) ? fe(l, { key: t, isFunction: !0 }) : M.value && e[m().tag] !== !1 ? fe(n, { key: t }) : document.createTextNode(l);
    }
    function at(e) {
      const { node: t, offset: n } = H;
      if (!s.optionRepeatable && (e == null ? void 0 : e.nodeType) === 1 && rt(e), !t || n === void 0) {
        d.value.appendChild(e);
        return;
      }
      if (t.nodeType === 3) {
        const o = t.textContent ?? "", c = P ? n : n - T.value.length, i = o.slice(0, c), a = o.slice(n), r = t.parentNode;
        if (!(a != null && a.length))
          r == null || r.replaceChild(e, t);
        else {
          const p = document.createTextNode(a);
          r == null || r.replaceChild(p, t), r == null || r.insertBefore(e, p);
        }
        i != null && i.length && (r == null || r.insertBefore(document.createTextNode(i), e));
        return;
      }
      const l = t.childNodes ?? [];
      if (l.length === 0 || !l[n]) {
        t.appendChild(e);
        return;
      }
      n > l.length || t.insertBefore(e, l[n]);
    }
    function rt(e) {
      const t = e.getAttribute("data-value");
      Array.from(
        d.value.querySelectorAll(`[data-value="${t}"]`)
      ).forEach((l) => {
        d.value.removeChild(l);
      });
    }
    function L() {
      if (g.value || !b())
        return {
          result: g.value ? A.value : tt(!0),
          scriptTags: [],
          isStringMode: b(),
          checkVariableResult: B
        };
      let e = "";
      const t = [], n = (l) => {
        if (!l)
          return {};
        const o = l.childNodes;
        for (let c = 0; c < o.length; c++) {
          const i = o[c];
          if (i.nodeType === 3)
            e += i.textContent ?? "";
          else if (i.tagName.toUpperCase() === "DIV" && i.classList.contains("k-script-tag")) {
            const a = i.innerText;
            if (i.getAttribute("data-type") === "function")
              e += `RPA_Func{{${a}}}`;
            else if (ue.has(a))
              e += `fx(${a})`, t.push(null);
            else {
              const p = s.options.find((h) => h[m().label] === a), u = Ne();
              e += `fx(${(p == null ? void 0 : p[u]) ?? null})`, t.push(p ?? null);
            }
          } else i.tagName.toUpperCase() === "DIV" && n(i);
        }
      };
      return n(d.value), e = e.replace(/\u00A0/g, " "), e.length && e[e.length - 1].charCodeAt(0) === 10 && (e = e.slice(0, -1)), it(e), S("input", e), {
        result: e,
        checkVariableResult: B,
        scriptTags: t,
        isStringMode: !0
      };
    }
    function it(e) {
      !(e != null && e.length) && s.showPassword && !g.value && (W.setPasswordMode(!0), I(() => {
        var t, n;
        (n = (t = Q.value) == null ? void 0 : t.focus) == null || n.call(t);
      }));
    }
    function Re(e) {
      ue.clear();
      let t = e;
      b() || (d.value.innerHTML = t);
      const n = [];
      for (; ie.test(t); ) {
        const o = t.match(ie), c = o == null ? void 0 : o[0], i = (o == null ? void 0 : o[1]) ?? (o == null ? void 0 : o[2]);
        if (!o || c === void 0 || !i === void 0)
          break;
        const a = { key: Y(8), isError: !1, isFunction: !1 }, r = o[1] ?? o[2], p = Ne(), u = s.options.find((yt) => yt[p] === r);
        let h = (u == null ? void 0 : u[m().label]) ?? "";
        o[0].includes("RPA_Func{{") ? (h = r, a.isFunction = !0) : u || (h = r, kt.error(`'${r}' not found`), ue.add(h), a.isError = !0), n.push(fe(h, a)), t = t.replace(o == null ? void 0 : o[0], "<custom-tag></custom-tag>");
      }
      const l = d.value;
      for (l.innerHTML = t; n.length; ) {
        const o = l.querySelector("custom-tag");
        o && o.replaceWith(n.shift());
      }
    }
    const ut = (Oe = Et()) == null ? void 0 : Oe.appContext;
    function fe(e, t) {
      const { key: n = "", isError: l = !1, isFunction: o = !1 } = t, c = o ? "function" : "variable", { showTooltip: i = "overflow" } = s.tagConfig ?? {}, a = V(Ct, { xid: n, content: e, type: c, isError: l, showTooltip: i });
      a.appContext = ut;
      const r = document.createElement("div");
      return $t(a, r), r.firstElementChild;
    }
    function Pe(e) {
      var c, i, a;
      if (!N.value || !k.value)
        return;
      const t = x.value.length, n = Z(`.${z} .el-input__inner`);
      if (e.code === "ArrowUp")
        for (n == null || n.blur(), v.value = (v.value - 1 + t) % t; Ee(x.value[v.value]) || x.value[v.value].optional === !1; )
          v.value = (v.value - 1 + t) % t;
      else if (e.code === "ArrowDown")
        for (n == null || n.blur(), v.value = (v.value + 1) % t; Ee(x.value[v.value]) || x.value[v.value].optional === !1; )
          v.value = (v.value + 1) % t;
      const l = x.value[v.value], o = (c = w.value) == null ? void 0 : c.getRowById(l == null ? void 0 : l.__kid__);
      o && w.value.setCurrentRow(o), e.code === "Enter" && k.value && document.activeElement !== n && v.value >= 0 ? (e.preventDefault(), s.useTree && o && ((i = o.children) != null && i.length) && !o.optional ? (a = w.value) == null || a.toggleTreeExpand(o) : Ve(l)) : e.code === "Enter" && $();
    }
    function Ee(e) {
      var l, o;
      const t = x.value.find((c) => c[m().value] === e.pid), n = (l = w.value) == null ? void 0 : l.getRowById(t == null ? void 0 : t.__kid__);
      return n ? !!(!((o = w.value) != null && o.isTreeExpandByRow(n)) && e.pid) : !1;
    }
    function ct(e) {
      if (window.getSelection === void 0)
        return;
      const t = window.getSelection();
      if (e == null)
        d.value.focus(), t == null || t.selectAllChildren(d.value), t == null || t.collapseToEnd();
      else {
        const n = document.createRange();
        n.selectNodeContents(d.value);
        const { node: l, offset: o } = pt(e);
        n.setStart(l, o), n.collapse(!0), t == null || t.removeAllRanges(), t == null || t.addRange(n);
      }
    }
    function pt(e) {
      let t = !1;
      const n = {
        node: d.value,
        offset: 0
      }, l = (o) => {
        var i, a, r;
        if (t)
          return;
        const c = o.childNodes;
        for (let p = 0; p < c.length && !t; p++) {
          const u = c[p];
          if (u.parentNode !== n.node && (n.node = u.parentNode, n.offset = p), n.offset++, ((i = u == null ? void 0 : u.getAttribute) == null ? void 0 : i.call(u, "data-key")) === e) {
            t = !0;
            break;
          }
          u.nodeType !== 3 && ((a = u == null ? void 0 : u.tagName) == null ? void 0 : a.toUpperCase()) === "DIV" && !((r = u == null ? void 0 : u.classList) != null && r.contains("k-script-tag")) && (n.node = u, n.offset = 0, l(u));
        }
      };
      return l(d.value), n;
    }
    function Be() {
      var e, t;
      v.value = -1, (e = w.value) == null || e.setCurrentRow(null), (t = w.value) == null || t.clearTreeExpand(), O.value = !1, P && (P = !1);
    }
    function Ae() {
      s.disabled || (O.value = !0, k.value = !0, N.value = !0, g.value || Le(), setTimeout(() => {
        P = !0, $(), dt();
      }), I(() => {
        const e = Z(`.${z} .el-input__inner`);
        e == null || e.focus();
      }));
    }
    function dt() {
      var i, a;
      const { expandAll: e, expandRowKeys: t, rowField: n = m().value, parentField: l = "pid" } = _e.value ?? {};
      if (e) {
        (i = w.value) == null || i.setAllTreeExpand(!0);
        return;
      }
      const o = new Map(de.value.map((r) => [r[n], r])), c = /* @__PURE__ */ new Map();
      if (Array.isArray(t)) {
        const r = (p) => {
          const u = p[l], h = o.get(u);
          h && (c.get(u) || c.set(u, h), h[l] !== null && r(h));
        };
        for (const p of t) {
          const u = de.value.find((h) => h[n] === p);
          u && (c.set(u[n], u), r(u));
        }
      }
      (a = w.value) == null || a.setTreeExpand(Array.from(c.values()), !0);
    }
    function Le() {
      var l, o, c, i, a;
      const e = window.getSelection(), { focusNode: t, focusOffset: n } = e ?? {};
      if ((o = (l = t == null ? void 0 : t.parentElement) == null ? void 0 : l.classList) != null && o.contains("k-script-tag-label") || (i = (c = t == null ? void 0 : t.parentElement) == null ? void 0 : c.classList) != null && i.contains("k-script-tag") || (a = t == null ? void 0 : t.classList) != null && a.contains("k-script-tag")) {
        H.node = null, H.offset = 0, d.value.blur();
        return;
      }
      !e || !d.value.contains(t) || (H.node = t, H.offset = n);
    }
    function $e() {
      k.value = !1, Be();
    }
    function Fe(e) {
      ft(e), vt(e);
    }
    function ft(e) {
      var n;
      const t = Z(`.${z}`);
      !P || (n = t == null ? void 0 : t.contains) != null && n.call(t, e.target) || $e();
    }
    function vt(e) {
      var o, c, i;
      const t = e.target;
      if (!((c = (o = t == null ? void 0 : t.classList) == null ? void 0 : o.contains) != null && c.call(o, "k-script-tag-clear-mark")))
        return;
      const n = t.parentNode;
      n && ((i = n.parentNode) == null || i.removeChild(n));
      const l = L();
      j((l == null ? void 0 : l.result) ?? ""), q(l), X(l);
    }
    function $() {
      T.value = "";
    }
    function Ke() {
      g.value ? A.value = "" : xe(""), $();
    }
    function De() {
      He(), M.value = !M.value, ze();
    }
    function ve(e) {
      b() !== e && (He(), M.value = e, ze());
    }
    function gt(e) {
      e === "password" ? W.setPasswordMode(!0) : ve(e === "string");
    }
    function mt() {
      return b() ? "string" : "expression";
    }
    function b() {
      return M.value;
    }
    const ge = {
      expression: void 0,
      string: void 0
    }, me = {
      expression: void 0,
      string: void 0
    };
    function He() {
      if (g.value)
        return;
      const e = b() ? "string" : "expression";
      me[e] = L();
    }
    function ze() {
      if (g.value)
        return;
      Ke();
      const e = b() ? "string" : "expression", t = ge[e] || {
        result: "",
        scriptTags: [],
        isStringMode: b(),
        checkVariableResult: B
      };
      ge.expression = me.expression, ge.string = me.string, Re(t.result), j(t.result ?? ""), q(t), X(t);
    }
    function he() {
      I(() => {
        var e;
        Te.value = ((e = oe.value) == null ? void 0 : e.offsetWidth) ?? 0;
      });
    }
    function ht(e) {
      return typeof e != "string" ? e : e.replace(/<|>/g, (t) => t === "<" ? "&lt;" : "&gt;");
    }
    function m() {
      const t = Object.assign({ label: "label", value: "value", disabled: "disabled", tag: "tag" }, s.props ?? {});
      return {
        label: t.label,
        value: t.value,
        disabled: t.disabled,
        optionLabel: t.optionLabel ?? t.label,
        tag: t.tag
      };
    }
    function Ne() {
      return s.scriptKey ?? m().value;
    }
    function wt() {
      const e = g.value ? Q.value : d.value;
      e && setTimeout(() => {
        e == null || e.focus();
      });
    }
    function bt() {
      const e = g.value ? Q.value : d.value;
      e && setTimeout(() => {
        e == null || e.blur();
      });
    }
    return Je({
      clear: Ke,
      showPopper: Ae,
      hidePopper: $e,
      toggleMode: De,
      setStringMode: ve,
      getCurrentMode: mt,
      setCurrentMode: gt,
      isStringMode: b,
      focus: wt,
      blur: bt,
      ...W
    }), (e, t) => {
      const n = ee("k-button"), l = ee("k-input"), o = ee("k-tree-table"), c = ee("k-popover"), i = Bt("ksw_tooltip");
      return _(), be("div", {
        ref_key: "KScriptInput",
        ref: oe,
        class: ke(["k-script-input box-border", { "is-disabled": e.disabled }]),
        style: qe(et.value)
      }, [
        V(c, {
          width: Te.value,
          "show-arrow": !1,
          visible: k.value,
          "popper-class": `k-script-input-popper ${z}`,
          teleported: e.teleported,
          class: "overflow-hidden",
          onHide: Be
        }, {
          reference: R(() => {
            var a, r;
            return [
              C("div", Kt, [
                C("div", Dt, [
                  C("div", Ht, [
                    e.showModeSwitch ? (_(), K(n, {
                      key: 0,
                      ref_key: "modeSwitchRef",
                      ref: Ce,
                      tabindex: "-1",
                      disabled: e.disabled,
                      onClick: t[0] || (t[0] = () => {
                        De(), S("mode-change", b() ? "string" : "expression");
                      })
                    }, {
                      default: R(() => [
                        (_(), K(je(M.value ? y(We) : y(Ue)), { color: "var(--k-gray-400)" }))
                      ]),
                      _: 1
                    }, 8, ["disabled"])) : te("", !0),
                    ye(e.$slots, "prepend")
                  ]),
                  g.value ? (_(), K(l, {
                    key: 1,
                    ref_key: "KScriptInputPassword",
                    ref: Q,
                    modelValue: A.value,
                    "onUpdate:modelValue": t[3] || (t[3] = (p) => A.value = p),
                    type: "password",
                    disabled: e.disabled,
                    class: "k-script-input-wrapper showPassword !h-8 z-10 !p-0 flex-1",
                    placeholder: e.placeholder ?? ((r = y(D)) == null ? void 0 : r("scriptInput.placeholder")),
                    "show-password": "",
                    onInput: j,
                    onFocus: Me,
                    onBlur: Ie
                  }, null, 8, ["modelValue", "disabled", "placeholder"])) : (_(), be("div", zt, [
                    C("div", {
                      ref_key: "KScriptInputWrapper",
                      ref: d,
                      class: ke([
                        "k-script-input-wrapper",
                        {
                          "k-script-input-placeholder": !0,
                          "hidden-result ": E.value === !0,
                          "is-disabled": e.disabled,
                          "is-readonly": e.readonly,
                          "k-script-tag--closable": e.tagClosable
                        }
                      ]),
                      style: qe({
                        maxHeight: e.maxHeight,
                        resize: e.resize ? "vertical" : "none"
                      }),
                      contenteditable: e.disabled || !re.value || e.readonly ? !1 : "plaintext-only",
                      spellcheck: !1,
                      placeholder: e.placeholder ?? ((a = y(D)) == null ? void 0 : a("scriptInput.placeholder")),
                      onInput: Se,
                      onBlur: Ie,
                      onFocus: Me,
                      onCompositionstart: t[1] || (t[1] = () => {
                        ae.value = !1;
                      }),
                      onCompositionend: t[2] || (t[2] = (p) => {
                        ae.value = !0, Se(p);
                      })
                    }, null, 46, Nt)
                  ])),
                  C("div", Ot, [
                    ye(e.$slots, "append"),
                    e.showPopperSwitch ? (_(), K(n, {
                      key: 0,
                      tabindex: "-1",
                      disabled: e.disabled,
                      onClick: Ae
                    }, {
                      default: R(() => [
                        V(y(It))
                      ]),
                      _: 1
                    }, 8, ["disabled"])) : te("", !0)
                  ]),
                  E.value ? Lt((_(), be("div", Ut, [
                    (_(), K(je("IconStatusWarning"))),
                    ne(" " + J(ce.value), 1)
                  ])), [
                    [i, Ze.value]
                  ]) : te("", !0)
                ])
              ])
            ];
          }),
          default: R(() => [
            C("div", null, [
              V(y(Mt), null, {
                default: R(() => [
                  N.value ? (_(), K(o, {
                    key: 0,
                    id: "k-script-input-tree",
                    ref_key: "$tree",
                    ref: w,
                    class: ke(["k-script-options-scrollbar", {
                      "input-tips": !O.value
                    }]),
                    border: "none",
                    height: "320px",
                    "use-tree": e.useTree,
                    column: Ye,
                    data: de.value,
                    "show-search-input": O.value,
                    "show-filter": !1,
                    "show-header": !1,
                    "show-page": !1,
                    "show-header-tools": O.value,
                    "cell-click-toggle-highlight": !1,
                    "show-description": !1,
                    "show-refresh": !1,
                    "row-config": {
                      keyField: "__kid__",
                      isCurrent: !0,
                      currentMethod: ({ row: a }) => a.optional !== !1
                    },
                    "row-class-name": ({ row: a }) => {
                      var r;
                      return a.optional === !1 && !((r = a.children) != null && r.length) ? "k-script-input-tree-disabled" : "";
                    },
                    "tree-config": _e.value,
                    "search-config": e.searchConfig,
                    "highlight-current": "",
                    adaptive: "",
                    onCellClick: ot
                  }, {
                    [m().optionLabel]: R((a) => [
                      ye(e.$slots, "option", Ft(At(a)), () => [
                        ne(J(a == null ? void 0 : a.row[m().optionLabel]), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class", "use-tree", "data", "show-search-input", "show-header-tools", "row-config", "row-class-name", "tree-config", "search-config"])) : te("", !0)
                ]),
                _: 3
              })
            ])
          ]),
          _: 3
        }, 8, ["width", "visible", "popper-class", "teleported"]),
        V(c, {
          "virtual-triggering": "",
          "virtual-ref": Ce.value,
          "show-arrow": !1,
          "show-after": 300,
          "popper-style": { width: "fit-content" }
        }, {
          default: R(() => [
            C("div", Wt, [
              C("h2", jt, J(y(D)("scriptInput.modelTipTitle")), 1),
              C("p", null, [
                V(y(We), { size: 16 }),
                ne(J(y(D)("scriptInput.modelTipContent_s")), 1)
              ]),
              C("p", null, [
                V(y(Ue), { size: 16 }),
                ne(J(y(D)("scriptInput.modelTipContent_e")), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["virtual-ref"])
      ], 6);
    };
  }
});
export {
  fn as default
};
