import p from "./select.vue.mjs";
/* empty css             */
import o from "./option.vue.mjs";
/* empty css             */
import t from "./option_group.vue.mjs";
/* empty css                   */
import { withInstall as m, withNoopInstall as i } from "../../utils/install.mjs";
const _ = m(p, { Option: o, OptionGroup: t }), e = i(o), O = i(t);
export {
  e as KOption,
  O as KOptionGroup,
  _ as KSelect,
  _ as default
};
