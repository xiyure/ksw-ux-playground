import { Component, CSSProperties } from 'vue';
import { TreeData, TreeNodeData } from 'element-plus/es/components/tree/src/tree.type';
import { default as TreeNode } from 'element-plus/es/components/tree/src/model/node';
import { IconProperties } from '../tree/type';
import { IconType } from '../../utils/typescript';
export interface ViewProps {
    modelValue?: string | number;
    defaultActive?: string | number;
    data?: ViewData[];
    draggable?: boolean;
    collapse?: boolean;
    showCustomControl?: boolean;
    useTree?: boolean;
    treeConfig?: TreeViewConfig;
    /**
    * 已废弃，请使用 reeConfig.showArrow
    * @deprecated
    */
    showArrow?: boolean;
    showCount?: boolean;
    props?: ViewAttributes;
    simple?: boolean;
    height?: string | number;
    defaultWidth?: number;
    minWidth?: number;
    maxWidth?: number;
    resizeLineStyle?: CSSProperties;
    resizeLineClass?: string;
    previewLineStyle?: CSSProperties;
    previewLineClass?: string;
    iconMethod?: (data: ViewData, node: TreeNode | undefined) => (IconProperties | IconType);
}
export interface ViewAttributes {
    label?: string;
    value?: string;
    count?: string;
    custom?: string;
    disabled?: string;
    children?: string;
}
export interface ViewData {
    label?: string;
    value?: string | number;
    count?: number | string;
    custom?: boolean;
    disabled?: boolean;
    showCustomControl?: boolean;
    [key: string]: any;
}
export interface ViewItemProps {
    label: string;
    value: string | number;
    count: number | string;
    custom: boolean;
    disabled: boolean;
    showCustomControl?: boolean;
    originData?: any;
}
export interface TreeViewProps {
    data: ViewData[];
    treeConfig: TreeViewConfig;
}
export interface TreeViewConfig {
    emptyText?: string;
    expandOnClickNode?: boolean;
    checkOnClickNode?: boolean;
    defaultExpandedKeys?: (string | number)[];
    accordion?: boolean;
    indent?: number;
    lazy?: boolean;
    load?: (node: TreeNodeData, loadedCallback: (data: TreeData) => void, stopLoading: () => void) => void;
    icon?: string | Component | (() => string | Component);
    expandIcon?: string | Component | (() => string | Component);
    collapseIcon?: string | Component | (() => string | Component);
    showArrow?: boolean;
}
