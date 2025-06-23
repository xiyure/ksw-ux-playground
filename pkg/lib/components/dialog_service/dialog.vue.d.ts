import { DialogServiceOptions } from './type';
declare function showDialog({ id, attrs, slots, formItems, formAttrs, confirm, cancel, penetratePointer, showDefaultFooter, showCancelButton, showConfirmButton, confirmButtonText, cancelButtonText, ...rest }: DialogServiceOptions): Promise<unknown> | (() => void);
declare const _default: import('vue').DefineComponent<{}, {
    showDialog: typeof showDialog;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
export default _default;
