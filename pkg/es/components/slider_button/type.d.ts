export interface SliderButtonProps {
    items: SliderButtonPaneProps[];
    modelValue?: string | number;
    defaultActive?: string | number;
    /**
    * 已废弃，请使用 defaultActive
    * @deprecated
    */
    active?: string | number;
}
export interface SliderButtonPaneProps {
    label?: string;
    name?: string;
}
