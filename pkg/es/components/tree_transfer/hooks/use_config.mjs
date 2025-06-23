import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { DEFAULT_TREE_CONFIG as c, DEFAULT_SCROLL_Y as f } from "../const.mjs";
import n from "../../../node_modules/lodash-es/cloneDeep.mjs";
import { computed as r } from "../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function C(e) {
  const t = r(() => {
    if (e.useTree) {
      const o = Object.assign(n(c), e.treeConfig || {});
      return o.indent = 0, o;
    }
  }), i = r(() => Object.assign(n(f), e.scrollY || {}));
  return {
    treeConfig: t,
    scrollY: i
  };
}
export {
  C as useConfig
};
