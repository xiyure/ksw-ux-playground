import { DateType, CompSize, BaseDataKey } from '../../utils';
export interface FilterProps {
    data?: any[];
    options?: FilterOption[];
    border?: boolean;
    size?: CompSize;
    childrenField?: string;
    filterKey?: string;
    defaultCondition?: ConditionInfo;
    remote?: boolean | string[];
    dateFormat?: string;
    timeFormat?: string;
    ignoreCase?: boolean;
    maxNumber?: number;
    simpleDateDisplay?: boolean;
}
export type AdvancedFilterValue = BaseDataKey | Date | null | Array<BaseDataKey | Date>;
export type FilterData = {
    title: string[];
    logic: FilterLogic;
    value: AdvancedFilterValue;
    showValue: AdvancedFilterValue;
    key: string | null;
    dateRange?: string;
    dateType?: DateType;
    handler: ((a: AdvancedFilterValue, b?: AdvancedFilterValue, ignoreCase?: boolean) => boolean) | null;
    _allowSelectLogic?: boolean;
    isMultiple?: boolean;
    multipleValue?: string[];
};
export interface FilterOption {
    title: string;
    value?: BaseDataKey;
    multiple?: boolean | FilterMultipleUiType;
    dataType?: FilterDataType;
    options?: {
        label: string;
        value: BaseDataKey;
    }[];
    format?: string;
    valueFormat?: string;
    group?: FilterOption[];
    logics?: FilterLogic | FilterLogic[];
    [key: string]: any;
}
export interface Condition {
    title: string;
    logic: FilterLogic;
    value: AdvancedFilterValue;
    showValue: AdvancedFilterValue;
    key: string | null;
    handler: ((a: AdvancedFilterValue, b?: AdvancedFilterValue, ignoreCase?: boolean) => boolean) | null;
}
export interface ConditionInfo {
    conditionList?: (Condition & {
        config?: any;
    })[];
    filterRule?: number;
}
export type FilterLogic = 'equal' | 'notEqual' | 'gt' | 'lt' | 'gte' | 'lte' | 'empty' | 'nonEmpty' | 'contain' | 'before' | 'after' | '';
export type FilterDataType = 'string' | 'number' | 'date' | 'time';
export type FilterMultipleUiType = 'select' | 'tree-select';
