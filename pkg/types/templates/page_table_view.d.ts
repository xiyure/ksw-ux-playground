import { Ref, SetupContext, RenderFunction } from 'vue';
import { DefineComponentApp, DefineComponentInstance, ComponentBaseOptions, ComponentSlotType } from '../common';
import type { PageTableViewProps } from '../base';

export declare const KPageTableView: DefineComponentApp<KPageTableViewProps, KPageTableViewEmits, KPageTableViewSlots>;

export type KPageTableViewInstance = DefineComponentInstance<KPageTableViewProps, KPageTableViewConstructor>

export interface KPageTableViewConstructor extends ComponentBaseOptions, KPageTableViewMethods {
  props: KPageTableViewProps
  context: SetupContext<KPageTableViewEmits>
  getRefMaps(): KPageTableViewPrivateRef
  getComputeMaps(): KPageTableViewPrivateComputed
  renderVN: RenderFunction
}

export interface KPageTableViewPrivateRef {
  refElem: Ref<HTMLDivElement | undefined>
}

export interface KPageTableViewPrivateComputed {}

export type KPageTableViewProps = PageTableViewProps;
export type KPageTableViewEmits = {
  refresh: () => void
}

export interface KPageTableViewSlots {
  default: () => ComponentSlotType
  'aside-toolbar': () => ComponentSlotType
  aside: () => ComponentSlotType
  'aside-footer': () => ComponentSlotType
  toolbar: () => ComponentSlotType
  'page-title': () => ComponentSlotType
  /**
  * 已废弃，请使用 aside-footer
  * @deprecated
  */
  'aside-foot': () => ComponentSlotType
}

export interface KPageTableViewMethods {}