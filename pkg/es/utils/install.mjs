import { NOOP as s } from "../node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
const e = (t, l) => {
  if (t.install = (o) => {
    for (const n of [t, ...Object.values(l ?? {})])
      o.component(n.name, n);
  }, l)
    for (const [o, n] of Object.entries(l))
      t[o] = n;
  return t;
}, r = (t, l) => (t.install = (o) => {
  t._context = o._context, o.config.globalProperties[l] = t;
}, t), i = (t) => (t.install = s, t);
export {
  e as withInstall,
  r as withInstallFunction,
  i as withNoopInstall
};
