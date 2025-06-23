import o from "./steps.vue.mjs";
/* empty css            */
import t from "./step.vue.mjs";
/* empty css           */
import { withInstall as m, withNoopInstall as p } from "../../utils/install.mjs";
const n = m(o, { Step: t }), e = p(t);
export {
  e as KStep,
  n as KSteps,
  n as default
};
