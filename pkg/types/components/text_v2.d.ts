import { Ref, SetupContext, RenderFunction } from 'vue';
import { DefineComponentApp, DefineComponentInstance, ComponentBaseOptions, ComponentSlotType } from '../common';
import type { TextV2Props } from '../base';

export declare const KTextV2: DefineComponentApp<KTextV2Props, KTextV2Emits, KTextV2Slots>;

export type KTextV2Instance = DefineComponentInstance<KTextV2Props, KTextV2Constructor>

export interface KTextV2Constructor extends ComponentBaseOptions, KTextV2Methods {
  props: KTextV2Props
  context: SetupContext<KTextV2Emits>
  getRefMaps(): KTextV2PrivateRef
  getComputeMaps(): KTextV2PrivateComputed
  renderVN: RenderFunction
}

export interface KTextV2PrivateRef {
  refElem: Ref<HTMLDivElement | undefined>
}

export interface KTextV2PrivateComputed {}

export type KTextV2Props = TextV2Props;

export interface KTextV2Slots {
  default: () => ComponentSlotType
}

export interface KTextV2Emits {}

export interface KTextV2Methods {}