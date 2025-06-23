const t = {
  transform: !0,
  rowField: "id",
  parentField: "pid",
  childrenField: "children",
  trigger: "cell",
  hasChildField: "hasChild",
  indent: 0,
  showIcon: !1
}, r = { enabled: !0 }, e = [5, 10, 20, 50], i = {
  pagerCount: 7,
  currentPage: 1,
  pageSizes: e,
  pageSize: e[0],
  layout: "total, prev, jumper, next",
  size: "sm",
  total: 0
};
export {
  e as DEFAULT_PAGES,
  i as DEFAULT_PAGE_CONFIG,
  r as DEFAULT_SCROLL_Y,
  t as DEFAULT_TREE_CONFIG
};
