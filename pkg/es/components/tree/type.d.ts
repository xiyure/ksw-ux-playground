import { Component, CSSProperties } from 'vue';
import { TreeNodeData, TreeOptionProps } from 'element-plus/es/components/tree/src/tree.type';
import { default as Node } from 'element-plus/es/components/tree/src/model/node';
import { IconType } from '../../utils/typescript';
export type TreeNode = Node;
export interface IconProperties extends CSSProperties {
    icon: IconType;
    [key: string]: any;
}
export interface TreeProps {
    filterMethod?: (value: string, data: TreeNodeData, node: TreeNode) => boolean;
    icon?: ((data: TreeNodeData, node: TreeNode) => string | Component) | string | Component;
    expandIcon?: ((data: TreeNodeData, node: TreeNode) => string | Component) | string | Component;
    collapseIcon?: ((data: TreeNodeData, node: TreeNode) => string | Component) | string | Component;
    showArrow?: boolean;
    props?: TreeOptionProps;
    iconMethod?: (data: TreeNodeData, node: TreeNode) => (IconType | IconProperties);
}
