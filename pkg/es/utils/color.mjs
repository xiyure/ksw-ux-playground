import "../node_modules/culori/src/index.mjs";
import R from "../node_modules/culori/src/parse.mjs";
import f from "../node_modules/culori/src/converter.mjs";
const v = {
  primary: "#3b82f6",
  success: "#22c55e",
  warning: "#f97316",
  danger: "#ef4444",
  error: "#ef4444",
  info: "#64748b"
}, t = [
  97.78,
  93.56,
  88.11,
  82.67,
  74.22,
  64.78,
  57.33,
  46.89,
  39.44,
  32,
  23.78
], k = [
  0.0108,
  0.0321,
  0.0609,
  0.0908,
  0.1398,
  0.1472,
  0.1299,
  0.1067,
  0.0898,
  0.0726,
  0.054
], B = [
  "--k-oklch-50",
  "--k-oklch-100",
  "--k-oklch-200",
  "--k-oklch-300",
  "--k-oklch-400",
  "--k-oklch-500",
  "--k-oklch-600",
  "--k-oklch-700",
  "--k-oklch-800",
  "--k-oklch-900",
  "--k-oklch-950"
];
function D(n) {
  const l = t.map((o) => o - t[5]), e = k.map((o) => o - k[5]), a = v[n] ?? n, g = f("oklch"), p = f("rgb"), i = {};
  if (R(a)) {
    const { l: o = 0, c: m = 0, h: C = 0 } = g(a) ?? {};
    for (let c = 0; c < 11; c++) {
      const b = o + l[c] / 100, x = t[t.length - 1] / 100, u = t[0] / 100, M = r(b, x, u), w = m + e[c], d = k[0], G = r(w, d, m), h = p({ l: M, c: G, h: C, mode: "oklch" }), s = {
        r: (r(h.r, 0, 1) * 255).toFixed(2),
        g: (r(h.g, 0, 1) * 255).toFixed(2),
        b: (r(h.b, 0, 1) * 255).toFixed(2)
      };
      i[B[c]] = `rgb(${s.r}, ${s.g}, ${s.b})`;
    }
  }
  return {
    colorLevel: i
  };
}
function r(n, l = 0, e = 255) {
  return Math.max(l, Math.min(e, n));
}
export {
  D as GetColorLevelNew
};
