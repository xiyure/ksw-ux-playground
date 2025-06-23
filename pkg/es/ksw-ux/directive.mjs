import * as i from "../directives/index.mjs";
function o(n) {
  for (const e in i)
    n.directive(`ksw_${e}`, i[e]);
}
export {
  o as useDirectives
};
