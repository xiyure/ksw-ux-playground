import { Slots } from 'vue';
import { StyleModule, BaseDataKey } from './typescript/util_types';
export declare function genRandomStr(bit: number): string;
export declare function isValid(value: any): boolean;
export declare function getCompSize(size: string | undefined): "small" | "default" | "large";
export declare function isValidColor(strColor: string | undefined): boolean;
export declare function GetColorLevel(hex: any): {
    lightColor: string;
    darkColor: string;
    loadingColor: string;
};
export declare function sortBySmallerList(targetData: any[], sourceData: string[], key?: string): any[];
export declare function treeDataToArray(treeData: any[] | undefined, childrenField: string): any[];
type TransformTreeConfig = {
    parentField?: string;
    children?: string;
    idField?: string;
    addPid?: boolean;
    deleteChildren?: boolean;
};
export declare function transformTreeData(treeData: any[] | undefined, config?: TransformTreeConfig): any[];
export declare function getValidTreeData(treeData: any[], childrenField: string, filterCallback: (item: any) => boolean): any[];
export declare function resetTreeData(sourceData: any[], targetData: any[], childrenField: string, key: string): {
    data: any[];
    rest: any[];
};
export declare function convertToMap(tableData: any[], rowField: string, parentField: string): Map<string | number, {
    node: any;
    children: any[];
}>;
export declare function getExposeProxy(instance: any, source: any): any;
type SortRules = {
    field: string;
    order: 'asc' | 'desc' | '' | null;
    sortBy?: string;
    sortType?: 'number' | 'string' | 'auto';
    [key: string]: any;
};
export declare function multiFieldSort(data: any[], sortRules: SortRules[]): any[];
export declare function formatterDate(date: Date | Date[], formatter: string | undefined): any;
export declare function padZero(num: number, length: number): string;
export declare function getCSSVar(varName: string, el?: Document | HTMLElement | null): string;
export declare function setCSSVar(varName: string, value: string, el?: Document | HTMLElement | null): void;
export declare function compatibleSlots(slots: Slots, names: string[]): string;
export declare function getAllCombinations(arr: (string[])[]): string[];
export declare function sortFunc(targetData: any[], sortData: any, key: string | number): any[];
export declare function mergeCssVar(cssVariables: Record<string, string> | undefined): void;
export declare function setStyleTheme(theme?: StyleModule): string;
export declare function convertPxToRem(value: number): number;
export declare function getDataByTree<T>(treeData: T[], keys: BaseDataKey[] | undefined, keyField: keyof T, childrenField: keyof T): T[];
export declare function getRestAttrs(obj: any, excludeKeys?: string[]): any;
export {};
