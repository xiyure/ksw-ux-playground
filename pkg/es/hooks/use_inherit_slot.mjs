import { computed as i } from "vue";
function u(o) {
  const r = new Set(o);
  return i(() => (e) => {
    const n = {};
    for (const t in e)
      r.has(t) || (n[t] = e[t]);
    return n;
  });
}
export {
  u as useInheritSlot
};
