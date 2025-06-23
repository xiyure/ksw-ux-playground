import { inject as r, computed as _, unref as m } from "vue";
import s from "../node_modules/lodash-es/toString.mjs";
const S = Symbol("__size__"), f = /* @__PURE__ */ new Map([
  ["default", "base"],
  ["small", "sm"],
  ["large", "lg"],
  ["base", "base"],
  ["sm", "sm"],
  ["lg", "lg"]
]), g = /* @__PURE__ */ new Map([
  ["base", "default"],
  ["sm", "small"],
  ["lg", "large"],
  ["default", "default"],
  ["small", "small"],
  ["large", "large"]
]);
function c(a) {
  const o = r(S, "base");
  return _(() => {
    const e = a.size || m(o);
    let l, t;
    if (typeof e == "object") {
      const { ownSize: n, elSize: i } = e;
      l = n, t = i;
    } else
      l = e, t = e;
    return {
      ownSize: f.get(s(l)) ?? "base",
      elSize: g.get(s(t)) ?? "default"
    };
  });
}
export {
  S as SIZE_KEY,
  c as useSize
};
