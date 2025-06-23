import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { watch as p } from "../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
import { unref as n } from "../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
const u = ({ from: t, replacement: o, scope: i, version: r, ref: e, type: a = "API" }, s) => {
  p(
    () => n(s),
    (m) => {
      m && console.warn(
        `${i}[${a}] ${t} is about to be deprecated in version ${r}, please use ${o} instead.
${e ? `For more detail, please visit:${e}` : "."}
`
      );
    },
    {
      immediate: !0
    }
  );
};
export {
  u as useDeprecated
};
