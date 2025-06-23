import { Ref, SetupContext, RenderFunction, ComputedRef } from 'vue';
import type {
  FormProps as ElFormProps,
  FormEmits as ElFormEmits,
  FormItemProps as ElFormItemProps,
  FormValidateCallback,
  FormValidationResult,
  FormItemProp,
  FormItemContext,
  FormItemValidateState
} from 'element-plus';
import { DefineComponentApp, DefineComponentInstance, ComponentBaseOptions, ComponentSlotType, Merge } from '../common';
import type { FormProps, FormItemProps, Arrayable, CompSize } from '../base';

// form
export declare const KForm: DefineComponentApp<KFormProps, KFormEmits, KFormSlots>;

export type KFormInstance = DefineComponentInstance<KFormProps, KFormConstructor>

export interface KFormConstructor extends ComponentBaseOptions, KFormMethods {
  props: KFormProps
  context: SetupContext<KFormEmits>
  getRefMaps(): KFormPrivateRef
  getComputeMaps(): KFormPrivateComputed
  renderVN: RenderFunction
}

export interface KFormPrivateRef {
  refElem: Ref<HTMLDivElement | undefined>
}

export interface KFormPrivateComputed {}
export type KFormProps = Merge<FormProps, ElFormProps>;
export type KFormEmits = ElFormEmits;

export interface KFormSlots {
  default: () => ComponentSlotType
}

export type KFormMethods = {
  validate: (callback?: FormValidateCallback) => Promise<void>
  validateField: (props?: Arrayable<FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => FormValidationResult
  resetFields: (props?: Arrayable<FormItemProp> | undefined) => void
  scrollToField: (prop: FormItemProp) => void
  clearValidate: (props?: Arrayable<FormItemProp> | undefined) => void
  fields: FormItemContext[]
}

// form-item
export declare const KFormItem: DefineComponentApp<KFormItemProps, KFormItemEmits, KFormItemSlots>;

export type KFormItemInstance = DefineComponentInstance<KFormItemProps, KFormItemConstructor>

export interface KFormItemConstructor extends ComponentBaseOptions, KFormItemMethods {
  props: KFormItemProps
  context: SetupContext<KFormItemEmits>
  getRefMaps(): KFormItemPrivateRef
  getComputeMaps(): KFormItemPrivateComputed
  renderVN: RenderFunction
}

export interface KFormItemPrivateRef {
  refElem: Ref<HTMLDivElement | undefined>
}

export interface KFormItemPrivateComputed {}

export type KFormItemProps = Merge<FormItemProps, ElFormItemProps>;
export interface KFormItemEmits {}

export interface KFormItemSlots {
  default: () => ComponentSlotType
  label: (_: { label: string }) => ComponentSlotType
  error: (_: { error: string }) => ComponentSlotType
}

export type KFormItemMethods = {
  size: ComputedRef<CompSize>
  validateMessage: Ref<string>
  validateState: Ref<FormItemValidateState>
  validate: (trigger: string, callback?: FormValidateCallback | undefined) => FormValidationResult
  resetField: () => void
  clearValidate: () => void
}