import { TreeConfig, SearchConfig } from '../tree_table/type';
import { CompSize } from '../../utils';
export interface ScriptInputProps {
    /**
     *  输入框的值;
     */
    modelValue: string | number;
    /**
     *  输入框尺寸, 可选值为 'base' | 'sm', 默认值为'base';
     */
    size?: CompSize;
    /**
     *  输入框占位符;
     */
    placeholder?: string;
    /**
     *  是否禁用输入框, 默认值为false;
     */
    disabled?: boolean;
    /**
     *  下拉列表的选项
     */
    options?: ScriptOptions[];
    /**
     *  下拉列表是否使用树形结构, 默认值为false;
     */
    useTree?: boolean;
    /**
     *  是否显示打开下拉列表的按钮, 默认值为true;
     */
    showPopperSwitch?: boolean;
    /**
     *  是否显示模式切换按钮, 默认值为true;
     */
    showModeSwitch?: boolean;
    /**
     *  默认模式, 可选值为 'expression' |'string'， 默认值为 'string'
     */
    defaultMode?: ScriptInputMode;
    /**
     *   输入框高度
     */
    height?: string;
    /**
     *   是否只允许单一输入（纯文本或者单个标签）, 后续输入将替换掉之前的输入，默认值为false;
     */
    onlyOneInput?: boolean | ScriptInputMode[];
    /**
     *   是否允许拖动调整大小, 默认值为true;
     */
    resize?: boolean;
    /**
     *   是否显示密码框, 默认值为false;
     */
    showPassword?: boolean;
    /**
     *  下拉选项为树形结构时的配置项，与 TreeTable 组件的 treeConfig 配置项相同
     */
    treeConfig?: TreeConfig;
    /**
     *  自定义选项的属性, 默认值为 { label: 'label', value: 'value', disabled: 'disabled', optionLabel: 'label' }
     */
    props?: {
        label?: string;
        value?: string;
        disabled?: string;
        optionLabel?: string;
    };
    scriptKey?: string;
    /**
     *   校验输入字符串是否合规, 单独使用时, 作用是校验变量是否合规
     */
    checkContentType?: boolean;
    /**
     *   校验输入字符串是否合规, number判断是否为数字, 包含浮点; boolean判断是否为true/false;
     */
    contentType?: ScriptInputContentType;
    /**
     *   值是否可重复, 默认值为true; 改为false, 则值不可重复
     */
    optionRepeatable?: boolean;
    /**
     *   输入框的最大高度
     */
    maxHeight?: string;
    /**
     *  用于输入框校验，number类型输入框的最大值;
     */
    max?: number;
    /**
     *  用于输入框校验，number类型输入框的最小值;
     */
    min?: number;
    /**
     *   输入框是否可关闭, 默认值为false;
     */
    tagClosable?: boolean;
    /**
     *  下拉列表搜索功能配置，与 TreeTable 组件的 searchConfig 配置项相同;
     */
    searchConfig?: SearchConfig;
    /**
     *  下拉框是否挂载到body下, 默认值为true;
     */
    teleported?: boolean;
    /**
     *   是否允许手动输入, 默认值为true;
     */
    readonly?: boolean;
    /**
     *  标签配置
     */
    tagConfig?: TagConfig;
}
export type ScriptOptions = {
    [key: string]: any;
};
export type ScriptInputMode = 'expression' | 'string';
export type ScriptInputContentType = 'number' | 'boolean' | 'string' | '' | 'limit';
export type ChangeEventParams = {
    result: string;
    scriptTags: (ScriptOptions | null)[];
    isStringMode: boolean;
    checkVariableResult: boolean;
};
export type ScriptTagConfig = {
    key?: string;
    isError?: boolean;
    isFunction?: boolean;
};
export interface TagConfig {
    color?: string;
    textColor?: string;
    maxWidth: number;
    showTooltip?: boolean | 'overflow';
}
