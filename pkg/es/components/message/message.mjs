/* empty css            */
import { ElMessage as g } from "../../node_modules/element-plus/es/components/message/index.mjs";
import s from "../../node_modules/ksw-vue-icon/es/icons/base/warning.mjs";
const f = (e) => {
  if (typeof e == "string")
    e = {
      message: e
    };
  else {
    const { type: a } = e;
    a === "warning" && (e.icon = s);
  }
  return g(e);
};
["success", "error", "info", "warning"].forEach((e) => {
  const a = e;
  f[e] = (r) => (typeof r == "string" ? r = {
    message: r,
    type: a
  } : (e === "warning" && (r.icon = s), r.type = a), f(r));
});
export {
  f as default
};
