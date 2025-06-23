const e = [25, 50, 80, 100, 150], r = {
  pagerCount: 7,
  currentPage: 1,
  pageSizes: e,
  pageSize: e[0],
  total: 0
}, t = /* @__PURE__ */ new Map([
  ["search", "search"],
  ["refresh", "refresh"],
  ["filter", "filter"],
  ["size-control", "size-control"],
  ["transfer", "transfer"],
  ["card-switch", "card-switch"]
]), l = {
  isHover: !0,
  isCurrent: !0,
  useKey: !0,
  keyField: "id"
}, i = {
  transform: !0,
  rowField: "id",
  parentField: "pid",
  childrenField: "children",
  trigger: "cell",
  hasChildField: "hasChild"
}, a = { enabled: !0 }, s = { resizable: !0 }, c = {}, o = {
  key: "id",
  trigger: "click",
  mode: "cell"
}, n = [
  { label: "默认", value: "" },
  { label: "中等", value: "medium" },
  { label: "小号", value: "small" },
  { label: "紧凑", value: "mini" }
], d = Symbol("tableSize"), E = ["header", "footer", "title", "checkbox", "radio", "content", "filter", "valid"];
export {
  s as DEFAULT_COLUMN_CONFIG,
  o as DEFAULT_EDIT_CONFIG,
  e as DEFAULT_PAGES,
  r as DEFAULT_PAGE_CONFIG,
  l as DEFAULT_ROW_CONFIG,
  a as DEFAULT_SCROLL_Y,
  c as DEFAULT_SORT_CONFIG,
  i as DEFAULT_TREE_CONFIG,
  t as DEFAULT_WIDGETS,
  n as SIZE_OPTIONS,
  E as SLOT_NAMES,
  d as TABLE_SIZE_KEY
};
