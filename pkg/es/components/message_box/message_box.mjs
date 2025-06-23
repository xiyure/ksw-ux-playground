/* empty css            */
import { useZIndex as l } from "../../node_modules/element-plus/es/hooks/use-z-index/index.mjs";
import { ElMessageBox as u } from "../../node_modules/element-plus/es/components/message-box/index.mjs";
const { nextZIndex: m } = l(), c = (e = {}) => {
  const t = { ...e };
  t.customClass = `k-message-box ${e.customClass || ""}`, t.cancelButtonClass = `k-message-box-cancel k-button ${e.cancelButtonClass || ""}`, t.confirmButtonClass = `k-message-box-confirm k-button el-button--main ${e.confirmButtonClass || ""}`;
  let s = m();
  return t.zIndex = s++, t;
}, r = (e, t) => {
  const s = c(e);
  return u(s, t);
}, f = ["confirm", "prompt", "alert"], x = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
f.forEach((e) => {
  r[e] = i(e);
});
function i(e) {
  return (t, s, n, a) => {
    let o = "";
    return typeof s == "object" ? (n = s, o = "") : typeof s > "u" ? o = "" : o = s, n = c(n || {}), r(
      {
        title: o,
        message: t,
        type: "",
        ...x[e],
        ...n,
        boxType: e
      },
      a
    );
  };
}
export {
  r as default
};
