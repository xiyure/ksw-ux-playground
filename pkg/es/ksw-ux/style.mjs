import { setStyleTheme as i, mergeCssVar as m } from "../utils/utils.mjs";
import "../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import "../node_modules/culori/src/index.mjs";
/* empty css                                           */
/* empty css                                       */
/* empty css                     */
/* empty css                                                              */
/* empty css                        */
/* empty css                    */
function h(p, t = {}) {
  const { styleModule: r, cssVariables: e, useDefaultFont: o = !0 } = t;
  o && document.body.classList.add("is-default-character"), i(r), m(e);
}
export {
  h as registerStyle
};
