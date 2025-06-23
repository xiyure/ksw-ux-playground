import { ref as r, watch as W } from "vue";
function D(i, d) {
  let l = 0;
  const e = r(Number(i.defaultWidth)), n = r(!1);
  let s = 0;
  const u = r(0);
  W(() => d.value, (t) => {
    if (t) {
      o();
      return;
    }
    a();
  }, { immediate: !0 });
  function m(t) {
    n.value = !0, s = t.clientX, u.value = e.value, document.addEventListener("mousemove", v), document.addEventListener("mouseup", c);
  }
  function v(t) {
    if (n.value) {
      const h = t.clientX - s, g = e.value + h;
      u.value = Math.min(Math.max(g, i.minWidth), i.maxWidth);
    }
  }
  function c() {
    e.value = u.value, n.value = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", c);
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
    previewPosition: u,
    startDrag: m,
    toggleAsidePanel: f,
    showAsidePanel: a,
    hideAsidePanel: o
  };
}
export {
  D as useResize
};
