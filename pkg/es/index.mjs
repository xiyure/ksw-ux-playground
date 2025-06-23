import { makeRegister as e } from "./ksw-ux/make_register.mjs";
import { importThirdLib as t } from "./ksw-ux/third.mjs";
import { useI18n as a } from "./ksw-ux/i18n.mjs";
import { useDirectives as m } from "./ksw-ux/directive.mjs";
import { registerStyle as p } from "./ksw-ux/style.mjs";
import { provide as l } from "./ksw-ux/provider.mjs";
import { KButton as d } from "./components/button/index.mjs";
import { KInput as I } from "./components/input/index.mjs";
import { KInputNumber as T } from "./components/input_number/index.mjs";
import { KRadio as P, KRadioGroup as k } from "./components/radio/index.mjs";
import { KCheckbox as v, KCheckboxGroup as b } from "./components/checkbox/index.mjs";
import { KSwitch as B } from "./components/switch/index.mjs";
import { KTabPane as M, KTabs as h } from "./components/tab/index.mjs";
import { KPagination as R } from "./components/pagination/index.mjs";
import { KOption as G, KOptionGroup as F, KSelect as O } from "./components/select/index.mjs";
import { KCascader as H } from "./components/cascader/index.mjs";
import { KDatePicker as z } from "./components/date_picker/index.mjs";
import { KUpload as U } from "./components/upload/index.mjs";
import { KTransfer as q } from "./components/transfer/index.mjs";
import { KOperate as Q } from "./components/operate/index.mjs";
import { KTag as Y } from "./components/tag/index.mjs";
import { KPopover as _ } from "./components/popover/index.mjs";
import { KPopconfirm as oo } from "./components/popconfirm/index.mjs";
import { KResult as eo } from "./components/result/index.mjs";
import { KEmpty as ao } from "./components/empty/index.mjs";
import { KMessage as po } from "./components/message/index.mjs";
import { KMessageBox as Ko } from "./components/message_box/index.mjs";
import { KDialog as io } from "./components/dialog/index.mjs";
import { showDialog as xo } from "./components/dialog_service/index.mjs";
import { KTooltip as Eo } from "./components/tooltip/index.mjs";
import { KFilter as uo } from "./components/filter/index.mjs";
import { KDrawer as Io } from "./components/drawer/index.mjs";
import { KForm as To, KFormItem as go } from "./components/form/index.mjs";
import { KStep as ko, KSteps as Do } from "./components/step/index.mjs";
import { KCollapse as bo, KCollapseItem as wo } from "./components/collapse/index.mjs";
import { KView as Ao } from "./components/view/index.mjs";
import { KBadge as ho } from "./components/badge/index.mjs";
import { KTimeline as Ro, KTimelineItem as Vo } from "./components/timeline/index.mjs";
import { KCalendar as Fo } from "./components/calendar/index.mjs";
import { KTree as yo } from "./components/tree/index.mjs";
import { KTreeTable as No } from "./components/tree_table/index.mjs";
import { KDropdown as Wo, KDropdownItem as Uo } from "./components/dropdown/index.mjs";
import { KTreeTransfer as qo } from "./components/tree_transfer/index.mjs";
import { KTreeSelect as Qo } from "./components/tree_select/index.mjs";
import { KFilterForm as Yo } from "./components/filter_form/index.mjs";
import { KButtonContainer as _o } from "./components/button_container/index.mjs";
import { KSliderButton as or } from "./components/slider_button/index.mjs";
import { KScriptInput as er } from "./components/script_input/index.mjs";
import { KIconPopover as ar } from "./components/icon_popover/index.mjs";
import { KGlobalProvider as pr } from "./components/global_provider/index.mjs";
import { KSplit as Kr } from "./components/split/index.mjs";
import { KList as ir } from "./components/list/index.mjs";
import { KTextV2 as xr } from "./components/text_v2/index.mjs";
import { KPageViewBus as Er } from "./templates/KPageViewBus/index.mjs";
import { KPageDetails as ur } from "./templates/KPageDetails/index.mjs";
import { KPageTableView as Cr } from "./templates/KPageTableView/index.mjs";
import { KDetails as Sr, KDetailsItem as Tr } from "./templates/KDetails/index.mjs";
import { KMenuView as Pr } from "./templates/KMenuView/index.mjs";
import { GFPageDetails as Dr } from "./templates/GFAOM/index.mjs";
import { KTransferView as br } from "./templates/KTransferView/index.mjs";
import { ElAffix as Br } from "./node_modules/element-plus/es/components/affix/index.mjs";
import { ElAlert as Mr } from "./node_modules/element-plus/es/components/alert/index.mjs";
import { ElAnchor as Lr, ElAnchorLink as Rr } from "./node_modules/element-plus/es/components/anchor/index.mjs";
import { ElAside as Gr, ElContainer as Fr, ElFooter as Or, ElHeader as yr, ElMain as Hr } from "./node_modules/element-plus/es/components/container/index.mjs";
import { ElAutocomplete as zr } from "./node_modules/element-plus/es/components/autocomplete/index.mjs";
import { ElAutoResizer as Ur } from "./node_modules/element-plus/es/components/table-v2/index.mjs";
import { ElAvatar as qr } from "./node_modules/element-plus/es/components/avatar/index.mjs";
import { ElBacktop as Qr } from "./node_modules/element-plus/es/components/backtop/index.mjs";
import { ElBreadcrumb as Yr, ElBreadcrumbItem as Zr } from "./node_modules/element-plus/es/components/breadcrumb/index.mjs";
import { ElButtonGroup as $r } from "./node_modules/element-plus/es/components/button/index.mjs";
import { ElCard as re } from "./node_modules/element-plus/es/components/card/index.mjs";
import { ElCarousel as te, ElCarouselItem as ae } from "./node_modules/element-plus/es/components/carousel/index.mjs";
import { ElCascaderPanel as pe } from "./node_modules/element-plus/es/components/cascader-panel/index.mjs";
import { ElCheckTag as Ke } from "./node_modules/element-plus/es/components/check-tag/index.mjs";
import { ElCol as ie } from "./node_modules/element-plus/es/components/col/index.mjs";
import { ElCollapseTransition as xe } from "./node_modules/element-plus/es/components/collapse-transition/index.mjs";
import { ElCollection as Ee, ElCollectionItem as ce } from "./node_modules/element-plus/es/components/dropdown/src/dropdown.mjs";
import { ElColorPicker as de } from "./node_modules/element-plus/es/components/color-picker/index.mjs";
import { ElConfigProvider as Ie } from "./node_modules/element-plus/es/components/config-provider/index.mjs";
import { ElCountdown as Te } from "./node_modules/element-plus/es/components/countdown/index.mjs";
import { ElDescriptions as Pe, ElDescriptionsItem as ke } from "./node_modules/element-plus/es/components/descriptions/index.mjs";
import { ElDivider as ve } from "./node_modules/element-plus/es/components/divider/index.mjs";
import { ElDropdownMenu as we } from "./node_modules/element-plus/es/components/dropdown/index.mjs";
import { ElIcon as Ae } from "./node_modules/element-plus/es/components/icon/index.mjs";
import { ElImage as he } from "./node_modules/element-plus/es/components/image/index.mjs";
import { ElImageViewer as Re } from "./node_modules/element-plus/es/components/image-viewer/index.mjs";
import { ElInfiniteScroll as Ge } from "./node_modules/element-plus/es/components/infinite-scroll/index.mjs";
import { ElLink as Oe } from "./node_modules/element-plus/es/components/link/index.mjs";
import { ElLoading as He } from "./node_modules/element-plus/es/components/loading/index.mjs";
import { vLoading as ze } from "./node_modules/element-plus/es/components/loading/src/directive.mjs";
import { Loading as Ue } from "./node_modules/element-plus/es/components/loading/src/service.mjs";
import { ElMention as qe } from "./node_modules/element-plus/es/components/mention/index.mjs";
import { ElMenu as Qe, ElMenuItem as Xe, ElMenuItemGroup as Ye, ElSubMenu as Ze } from "./node_modules/element-plus/es/components/menu/index.mjs";
import { ElNotification as $e } from "./node_modules/element-plus/es/components/notification/index.mjs";
import { ElOverlay as rt } from "./node_modules/element-plus/es/components/overlay/index.mjs";
import { ElPageHeader as tt } from "./node_modules/element-plus/es/components/page-header/index.mjs";
import { ElPopoverDirective as mt } from "./node_modules/element-plus/es/components/popover/index.mjs";
import { ElPopper as lt } from "./node_modules/element-plus/es/components/popper/index.mjs";
import { default as ft } from "./node_modules/element-plus/es/components/popper/src/arrow2.mjs";
import { default as st } from "./node_modules/element-plus/es/components/popper/src/content2.mjs";
import { default as nt } from "./node_modules/element-plus/es/components/popper/src/trigger2.mjs";
import { ElProgress as ct } from "./node_modules/element-plus/es/components/progress/index.mjs";
import { ElRate as dt } from "./node_modules/element-plus/es/components/rate/index.mjs";
import { ElRow as It } from "./node_modules/element-plus/es/components/row/index.mjs";
import { ElScrollbar as Tt } from "./node_modules/element-plus/es/components/scrollbar/index.mjs";
import { ElSelectV2 as Pt } from "./node_modules/element-plus/es/components/select-v2/index.mjs";
import { ElSkeleton as Dt, ElSkeletonItem as vt } from "./node_modules/element-plus/es/components/skeleton/index.mjs";
import { ElSlider as wt } from "./node_modules/element-plus/es/components/slider/index.mjs";
import { ElSpace as At } from "./node_modules/element-plus/es/components/space/index.mjs";
import { ElStatistic as ht } from "./node_modules/element-plus/es/components/statistic/index.mjs";
import { ElText as Rt } from "./node_modules/element-plus/es/components/text/index.mjs";
import { ElTimeSelect as Gt } from "./node_modules/element-plus/es/components/time-select/index.mjs";
import { ElTimePicker as Ot } from "./node_modules/element-plus/es/components/time-picker/index.mjs";
import { ElTour as Ht, ElTourStep as Nt } from "./node_modules/element-plus/es/components/tour/index.mjs";
import { ElWatermark as Wt } from "./node_modules/element-plus/es/components/watermark/index.mjs";
import { ElRadioButton as jt } from "./node_modules/element-plus/es/components/radio/index.mjs";
import { ElCheckboxButton as Jt } from "./node_modules/element-plus/es/components/checkbox/index.mjs";
const E = (o, r) => {
  e(o), p(o, r), t(o, r), a(o, r), m(o), l(o, r);
};
export {
  Dr as GFPageDetails,
  Br as KAffix,
  Mr as KAlert,
  Lr as KAnchor,
  Rr as KAnchorLink,
  Gr as KAside,
  Ur as KAutoResizer,
  zr as KAutocomplete,
  qr as KAvatar,
  Qr as KBacktop,
  ho as KBadge,
  Yr as KBreadcrumb,
  Zr as KBreadcrumbItem,
  d as KButton,
  _o as KButtonContainer,
  $r as KButtonGroup,
  Fo as KCalendar,
  re as KCard,
  te as KCarousel,
  ae as KCarouselItem,
  H as KCascader,
  pe as KCascaderPanel,
  Ke as KCheckTag,
  v as KCheckbox,
  Jt as KCheckboxButton,
  b as KCheckboxGroup,
  ie as KCol,
  bo as KCollapse,
  wo as KCollapseItem,
  xe as KCollapseTransition,
  Ee as KCollection,
  ce as KCollectionItem,
  de as KColorPicker,
  Ie as KConfigProvider,
  Fr as KContainer,
  Te as KCountdown,
  z as KDatePicker,
  Pe as KDescriptions,
  ke as KDescriptionsItem,
  Sr as KDetails,
  Tr as KDetailsItem,
  io as KDialog,
  ve as KDivider,
  Io as KDrawer,
  Wo as KDropdown,
  Uo as KDropdownItem,
  we as KDropdownMenu,
  ao as KEmpty,
  uo as KFilter,
  Yo as KFilterForm,
  Or as KFooter,
  To as KForm,
  go as KFormItem,
  pr as KGlobalProvider,
  yr as KHeader,
  Ae as KIcon,
  ar as KIconPopover,
  he as KImage,
  Re as KImageViewer,
  Ge as KInfiniteScroll,
  I as KInput,
  T as KInputNumber,
  Oe as KLink,
  ir as KList,
  He as KLoading,
  ze as KLoadingDirective,
  Ue as KLoadingService,
  Hr as KMain,
  qe as KMention,
  Qe as KMenu,
  Xe as KMenuItem,
  Ye as KMenuItemGroup,
  Pr as KMenuView,
  po as KMessage,
  Ko as KMessageBox,
  $e as KNotification,
  Q as KOperate,
  G as KOption,
  F as KOptionGroup,
  rt as KOverlay,
  ur as KPageDetails,
  tt as KPageHeader,
  Cr as KPageTableView,
  Er as KPageViewBus,
  R as KPagination,
  oo as KPopconfirm,
  _ as KPopover,
  mt as KPopoverDirective,
  lt as KPopper,
  ft as KPopperArrow,
  st as KPopperContent,
  nt as KPopperTrigger,
  ct as KProgress,
  P as KRadio,
  jt as KRadioButton,
  k as KRadioGroup,
  dt as KRate,
  eo as KResult,
  It as KRow,
  er as KScriptInput,
  Tt as KScrollbar,
  O as KSelect,
  Pt as KSelectV2,
  Dt as KSkeleton,
  vt as KSkeletonItem,
  wt as KSlider,
  or as KSliderButton,
  At as KSpace,
  Kr as KSplit,
  ht as KStatistic,
  ko as KStep,
  Do as KSteps,
  Ze as KSubMenu,
  B as KSwitch,
  M as KTabPane,
  h as KTabs,
  Y as KTag,
  Rt as KText,
  xr as KTextV2,
  Ot as KTimePicker,
  Gt as KTimeSelect,
  Ro as KTimeline,
  Vo as KTimelineItem,
  Eo as KTooltip,
  Ht as KTour,
  Nt as KTourStep,
  q as KTransfer,
  br as KTransferView,
  yo as KTree,
  Qo as KTreeSelect,
  No as KTreeTable,
  qo as KTreeTransfer,
  U as KUpload,
  Ao as KView,
  Wt as KWatermark,
  E as default,
  xo as showDialog
};
