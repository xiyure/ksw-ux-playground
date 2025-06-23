import { computed as o } from "vue";
import { DEFAULT_TREE_CONFIG as c, DEFAULT_SCROLL_Y as f } from "../const.mjs";
import r from "../../../node_modules/lodash-es/cloneDeep.mjs";
function g(e) {
  const t = o(() => {
    if (e.useTree) {
      const n = Object.assign(r(c), e.treeConfig || {});
      return n.indent = 0, n;
    }
  }), i = o(() => Object.assign(r(f), e.scrollY || {}));
  return {
    treeConfig: t,
    scrollY: i
  };
}
export {
  g as useConfig
};
