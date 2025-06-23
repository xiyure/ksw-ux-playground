import { watch as $, unref as d } from "vue";
const c = ({ from: t, replacement: i, scope: o, version: a, ref: e, type: r = "API" }, s) => {
  $(
    () => d(s),
    (n) => {
      n && console.warn(
        `${o}[${r}] ${t} is about to be deprecated in version ${a}, please use ${i} instead.
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
  c as useDeprecated
};
