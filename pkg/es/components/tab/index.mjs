import t from "./tabs.vue.mjs";
/* empty css           */
import o from "./tab_pane.vue.mjs";
/* empty css               */
import { withInstall as a, withNoopInstall as m } from "../../utils/install.mjs";
const f = a(t, { TabPane: o }), l = m(o);
export {
  l as KTabPane,
  f as KTabs,
  f as default
};
