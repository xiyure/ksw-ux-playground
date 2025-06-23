import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { ref as r } from "../../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { watch as W } from "../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function E(u, c) {
  let l = 0;
  const e = r(Number(u.defaultWidth)), n = r(!1);
  let s = 0;
  const i = r(0);
  W(() => c.value, (t) => {
    if (t) {
      o();
      return;
    }
    a();
  }, { immediate: !0 });
  function d(t) {
    n.value = !0, s = t.clientX, i.value = e.value, document.addEventListener("mousemove", v), document.addEventListener("mouseup", m);
  }
  function v(t) {
    if (n.value) {
      const h = t.clientX - s, g = e.value + h;
      i.value = Math.min(Math.max(g, u.minWidth), u.maxWidth);
    }
  }
  function m() {
    e.value = i.value, n.value = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", m);
  }
  function f() {
    e.value === 0 ? a() : o();
  }
  function a() {
    e.value > 0 || (e.value = l);
  }
  function o() {
    e.value <= 0 || (l = e.value, e.value = 0);
  }
  return {
    containerWidth: e,
    isDragging: n,
    previewPosition: i,
    startDrag: d,
    toggleAsidePanel: f,
    showAsidePanel: a,
    hideAsidePanel: o
  };
}
export {
  E as useResize
};
