import { CompSize } from '../../utils';
export interface TagProps {
    type?: TagType;
    color?: string;
    size?: CompSize;
    point?: boolean;
    text?: string;
    textColor?: string;
    /**
    * 已废弃，请使用 effect: 'light
    * @deprecated
    */
    border?: boolean;
    showOverflow?: boolean;
    effect?: TagEffect;
}
export type TagType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type TagEffect = 'dark' | 'light' | 'plain';
