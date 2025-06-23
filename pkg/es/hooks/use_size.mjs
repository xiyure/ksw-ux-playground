import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import s from "../node_modules/lodash-es/toString.mjs";
import { inject as r, computed as m } from "../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { unref as _ } from "../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const f = Symbol("__size__"), S = /* @__PURE__ */ new Map([
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
function b(o) {
  const a = r(f, "base");
  return m(() => {
    const e = o.size || _(a);
    let t, l;
    if (typeof e == "object") {
      const { ownSize: i, elSize: n } = e;
      t = i, l = n;
    } else
      t = e, l = e;
    return {
      ownSize: S.get(s(t)) ?? "base",
      elSize: g.get(s(l)) ?? "default"
    };
  });
}
export {
  f as SIZE_KEY,
  b as useSize
};
