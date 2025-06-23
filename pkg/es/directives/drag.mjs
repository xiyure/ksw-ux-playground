const h = {
  mounted(t) {
    t.style.cursor = "move", t.style.position = "absolute";
    const u = (i) => {
      var c;
      i.preventDefault(), i.stopPropagation();
      const a = i.clientX, f = i.clientY, o = t.getBoundingClientRect(), l = a - o.left, p = f - o.top, e = (c = t.parentElement) == null ? void 0 : c.getBoundingClientRect();
      if (!e)
        return;
      const r = (m) => {
        let n = m.clientX - l, s = m.clientY - p;
        n < e.left && (n = e.left), s < e.top && (s = e.top), n + o.width > e.right && (n = e.right - o.width), s + o.height > e.bottom && (s = e.bottom - o.height), t.style.left = `${n - e.left}px`, t.style.top = `${s - e.top}px`;
      }, d = () => {
        document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", d);
      };
      document.addEventListener("mousemove", r), document.addEventListener("mouseup", d);
    };
    t.addEventListener("mousedown", u), t._handleMouseDown = u;
  },
  beforeUnmount(t) {
    t._handleMouseDown && t.removeEventListener("mousedown", t._handleMouseDown);
  }
};
export {
  h as drag
};
