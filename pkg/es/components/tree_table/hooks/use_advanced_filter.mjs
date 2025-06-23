import { ref as s, computed as v } from "vue";
import { useLocale as $ } from "../../../hooks/use_locale.mjs";
import { getValidTreeData as p, resetTreeData as w } from "../../../utils/utils.mjs";
import "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../../node_modules/culori/src/index.mjs";
import D from "../../../node_modules/lodash-es/cloneDeep.mjs";
function R(m, o, h) {
  const { t: e } = $(), d = s([]), c = s(), F = v(() => {
    var i, l;
    let n = "";
    if ((l = (i = c.value) == null ? void 0 : i.conditionList) != null && l.length) {
      const { filterRule: f } = c.value;
      n += f === 0 ? e == null ? void 0 : e("filter.anyOne") : e == null ? void 0 : e("filter.all"), c.value.conditionList.forEach((r, t) => {
        const u = o.useTree && t === 0 ? "" : "·";
        n += `  ${u} ${r.title} ${e == null ? void 0 : e(`filter.${r.logic}`)} ${r.showValue}`;
      });
    } else {
      const f = o.useTree ? "" : "· ";
      n += `${f}${e == null ? void 0 : e("table.showAll")}`;
    }
    return n;
  }), g = v(() => {
    const { filterColumns: n, filterAll: i, exclude: l = [], remote: f } = o.advancedFilterConfig ?? {}, r = p(
      D(h.value),
      "group",
      (t) => !t.type && t.title && t.field && (i !== !1 || t.visible !== !1) && !l.includes(t.field)
    );
    if (n) {
      const { data: t, rest: u = [] } = w(r, n, "group", "field");
      return f === !0 && t.push(...u), t;
    }
    return r;
  });
  function A() {
    typeof o.onAdvancedFilterShow == "function" && o.onAdvancedFilterShow();
  }
  function C() {
    if (typeof o.onAdvancedFilterHide == "function") {
      const n = a(), i = d.value;
      o.onAdvancedFilterHide({ conditionInfo: n, filterData: i });
    }
  }
  function a() {
    var n, i, l;
    return (l = (i = (n = m.value) == null ? void 0 : n.filterRef) == null ? void 0 : i[0]) == null ? void 0 : l.getConditionInfo();
  }
  return {
    newFilterData: d,
    filterConditionInfo: c,
    headerText: F,
    filterColumns: g,
    advancedFilterHide: C,
    advancedFilterShow: A,
    getAdvancedCondition: a
  };
}
export {
  R as useAdvancedFilter
};
