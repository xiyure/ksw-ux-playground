import { CompSize } from '../../utils';
export interface TextV2Props {
    content?: string;
    type?: TextType;
    size?: CompSize;
    lineHeight?: number;
    lineClamp?: number;
    truncated?: boolean;
    color?: string;
    tag?: string;
    expandText?: string;
    collapseText?: string;
    showHandler?: boolean | 'expand' | 'collapse';
}
export type TextType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
