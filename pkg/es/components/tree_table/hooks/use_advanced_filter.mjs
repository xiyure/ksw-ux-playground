import "../../../node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { useLocale as C } from "../../../hooks/use_locale.mjs";
import { getValidTreeData as $, resetTreeData as w } from "../../../utils/utils.mjs";
import "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.mjs";
import "../../../node_modules/sortablejs/modular/sortable.esm.mjs";
import "../../../node_modules/culori/src/index.mjs";
import D from "../../../node_modules/lodash-es/cloneDeep.mjs";
import { ref as s } from "../../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs";
import { computed as v } from "../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
function E(m, i, h) {
  const { t: e } = C(), d = s([]), c = s(), F = v(() => {
    var o, l;
    let t = "";
    if ((l = (o = c.value) == null ? void 0 : o.conditionList) != null && l.length) {
      const { filterRule: f } = c.value;
      t += f === 0 ? e == null ? void 0 : e("filter.anyOne") : e == null ? void 0 : e("filter.all"), c.value.conditionList.forEach((r, n) => {
        const u = i.useTree && n === 0 ? "" : "·";
        t += `  ${u} ${r.title} ${e == null ? void 0 : e(`filter.${r.logic}`)} ${r.showValue}`;
      });
    } else {
      const f = i.useTree ? "" : "· ";
      t += `${f}${e == null ? void 0 : e("table.showAll")}`;
    }
    return t;
  }), g = v(() => {
    const { filterColumns: t, filterAll: o, exclude: l = [], remote: f } = i.advancedFilterConfig ?? {}, r = $(
      D(h.value),
      "group",
      (n) => !n.type && n.title && n.field && (o !== !1 || n.visible !== !1) && !l.includes(n.field)
    );
    if (t) {
      const { data: n, rest: u = [] } = w(r, t, "group", "field");
      return f === !0 && n.push(...u), n;
    }
    return r;
  });
  function p() {
    typeof i.onAdvancedFilterShow == "function" && i.onAdvancedFilterShow();
  }
  function A() {
    if (typeof i.onAdvancedFilterHide == "function") {
      const t = a(), o = d.value;
      i.onAdvancedFilterHide({ conditionInfo: t, filterData: o });
    }
  }
  function a() {
    var t, o, l;
    return (l = (o = (t = m.value) == null ? void 0 : t.filterRef) == null ? void 0 : o[0]) == null ? void 0 : l.getConditionInfo();
  }
  return {
    newFilterData: d,
    filterConditionInfo: c,
    headerText: F,
    filterColumns: g,
    advancedFilterHide: A,
    advancedFilterShow: p,
    getAdvancedCondition: a
  };
}
export {
  E as useAdvancedFilter
};
