import m from "./time_line.vue.mjs";
/* empty css                */
import i from "./timeline_item.vue.mjs";
/* empty css                    */
import { withInstall as t, withNoopInstall as o } from "../../utils/install.mjs";
const s = t(m, { TimelineItem: i }), a = o(i);
export {
  s as KTimeline,
  a as KTimelineItem,
  s as default
};
