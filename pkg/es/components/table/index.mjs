import r from "./table.vue.mjs";
/* empty css            */
import o from "./table_column.vue.mjs";
/* empty css                   */
import m from "./column_group.vue.mjs";
/* empty css                   */
import { withInstall as i, withNoopInstall as t } from "../../utils/install.mjs";
const c = i(r, { TableColumn: o, ColumnGroup: m }), _ = t(o), e = t(m);
export {
  e as KColumnGroup,
  c as KTable,
  _ as KTableColumn,
  c as default
};
