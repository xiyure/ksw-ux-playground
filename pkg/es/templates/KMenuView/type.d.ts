import { Component } from 'vue';
export interface MenuViewOption {
    index?: any;
    title?: string;
    icon?: string | Component;
    disabled?: boolean;
    route?: object;
    children?: MenuViewOption[];
    href?: string;
    [key: string]: any;
}
export interface MenuViewProps {
    options?: MenuViewOption[];
    defaultActive?: string;
    showCollapse?: boolean;
    collapse?: boolean;
    link?: boolean;
}
export interface SubMenuViewProps {
    options: MenuViewOption[];
    link?: boolean;
}
