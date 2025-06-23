import { Ref, SetupContext, RenderFunction } from 'vue';
import { DefineComponentApp, DefineComponentInstance, ComponentBaseOptions, ComponentSlotType } from '../common';
import type { PageViewBusProps } from '../base';

export declare const KPageViewBus: DefineComponentApp<KPageViewBusProps, KPageViewBusEmits, KPageViewBusSlots>;

export type KPageViewBusInstance = DefineComponentInstance<KPageViewBusProps, KPageViewBusConstructor>

export interface KPageViewBusConstructor extends ComponentBaseOptions, KPageViewBusMethods {
  props: KPageViewBusProps
  context: SetupContext<KPageViewBusEmits>
  getRefMaps(): KPageViewBusPrivateRef
  getComputeMaps(): KPageViewBusPrivateComputed
  renderVN: RenderFunction
}

export interface KPageViewBusPrivateRef {
  refElem: Ref<HTMLDivElement | undefined>
}

export interface KPageViewBusPrivateComputed {}

export type KPageViewBusProps = PageViewBusProps;
export type KPageViewBusEmits = {
  refresh: () => void
}

export interface KPageViewBusSlots {
  default: () => ComponentSlotType
  header: () => ComponentSlotType
  footer: () => ComponentSlotType
  /**
  * 已废弃，请使用 header
  * @deprecated
  */
  head: () => ComponentSlotType
  /**
  * 已废弃，请使用 footer
  * @deprecated
  */
  foot: () => ComponentSlotType
}

export interface KPageViewBusMethods {}