import { Component, VNode, CSSProperties } from 'vue';
import { VxeColgroupProps, VxeColumnPropTypes, VxeColumnProps } from 'vxe-table';
import { Row, RowConfig, ColumnConfig, SortConfig, ScrollY, FilterConfig, EditConfig, CheckboxConfig, TreeConfig, SeqConfig } from './vxe-type';
import { PaginationProps as ElPaginationProps, CardProps } from 'element-plus';
import { OperateData } from '../operate/type';
import { Condition, AdvancedFilterValue, ConditionInfo, FilterMultipleUiType } from '../filter/type';
import { Merge, CompSize } from '../../utils/typescript';
export interface TreeTableProps {
    data?: RowData[];
    size?: string;
    sortConfig?: SortConfig;
    filterConfig?: FilterConfig;
    seqConfig?: SeqConfig;
    rowConfig?: RowConfig;
    editConfig?: EditConfig;
    scrollY?: ScrollY;
    columnConfig?: ColumnConfig;
    checkboxConfig?: CheckboxConfig;
    treeConfig?: TreeConfig;
    showOverflow?: string | boolean;
    autoResize?: boolean;
    height?: string | number;
    align?: string;
    border?: boolean | string;
    emptyText?: string;
    rowStyle?: CSSProperties | ((rowInfo: Row) => CSSProperties);
    column: Column[];
    showPage?: boolean;
    useTree?: boolean;
    isRemoteQuery?: boolean;
    isServerPaging?: boolean;
    paginationConfig?: TablePaginationConfig;
    showDescription?: boolean;
    showHeaderTools?: boolean;
    batchOperations?: OperateData[];
    showBatchOperation?: boolean;
    batchOperateConfig?: BatchOperateConfig;
    showColumnMenu?: boolean;
    showDragColumn?: boolean;
    cellClickToggleHighlight?: boolean;
    widgets?: (string | WidgetItem)[];
    showSearchInput?: boolean;
    showFilter?: boolean;
    showRefresh?: boolean;
    showTransfer?: boolean;
    showSizeControl?: boolean;
    advancedFilterConfig?: AdvancedFilterConfig;
    searchConfig?: SearchConfig;
    style?: CSSProperties;
    class?: string | {
        [className: string]: boolean;
    } | Array<string | {
        [className: string]: boolean;
    }>;
    simple?: boolean;
    defaultTransferData?: (() => TableHeaderControl[] | Promise<TableHeaderControl[]>) | TableHeaderControl[];
    onTransferShow?: () => void;
    onTransferHide?: (transferData: TableHeaderControl[]) => void;
    onTransferChange?: (transferData: TableHeaderControl[]) => void;
    onAdvancedFilterShow?: () => void;
    onAdvancedFilterHide?: (filterInfo: {
        conditionInfo: ConditionInfo;
        filterData: any[];
    }) => void;
    useAntStyle?: boolean;
    round?: boolean;
    adaptive?: boolean;
    hasSpace?: boolean;
    requestMethod?: (params: TableRemoteMethod) => Promise<TableMethodReturn>;
    cardOptions?: CardOptions;
    defaultMode?: TableMode;
    transferConfig?: TransferConfig;
}
export interface Column extends VxeColumnProps {
    visible?: boolean;
    key?: string | number;
    field?: string;
    title?: string;
    width?: string | number;
    filters?: VxeColumnPropTypes.Filters;
    treeNode?: boolean;
    cellRender?: VxeColumnPropTypes.CellRender;
    editRender?: VxeColumnPropTypes.EditRender;
    minWidth?: string | number;
    sortable?: boolean;
    showIcon?: boolean;
    showColumnMenu?: boolean;
    group?: (Column & VxeColgroupProps)[];
    dataType?: string;
    format?: string;
    valueFormat?: string;
    render?: (...arg: any) => VNode;
    renderEdit?: (...arg: any) => VNode;
    allowChangeVisible?: boolean;
    [key: string]: any;
}
export type WidgetItem = {
    id: string;
    widget?: Component | (() => VNode | Component);
};
type FilterColumn = {
    title: string;
    field: string;
    dataType?: string;
    multiple?: boolean | FilterMultipleUiType;
    options?: {
        label: string;
        value: AdvancedFilterValue;
        children?: FilterColumnOption[];
    }[];
};
export type FilterColumnOption = {
    label: string;
    value: string;
    disabled?: boolean;
    [key: string]: any;
};
export type TablePaginationConfig = Merge<{
    size?: CompSize;
    isRemotePaging?: boolean;
}, {
    -readonly [K in keyof ElPaginationProps]: ElPaginationProps[K];
}>;
export interface Store {
    data: RowData[];
}
export interface TableHeaderControl {
    label: string;
    key: string;
    visible?: boolean;
    disabled?: boolean;
    width?: string;
}
export interface AdvancedFilterConfig {
    filterColumns?: FilterColumn[];
    filterAll?: boolean;
    exclude?: string[];
    ignoreCase?: boolean;
    remote?: boolean | string[];
    dateFormat?: string;
    timeFormat?: string;
    defaultCondition?: {
        conditionList?: Condition[];
        filterRule?: number;
    };
    isEvery?: boolean;
}
export interface SearchConfig {
    strict?: boolean;
    searchMethod?: (params: TableRemoteMethod) => RowData[] | Promise<RowData[]>;
    isRemoteQuery?: boolean;
    ignoreCase?: boolean;
    searchColumns?: string[];
    supportPinYin?: string[] | boolean;
    placeholder?: string;
    isEvery?: boolean;
}
export interface TransferConfig {
    showSearch?: boolean;
    excludes?: string[];
    drag?: boolean;
}
export interface BatchOperateConfig {
    data?: OperateData[];
    showTotal?: boolean;
    total?: number;
    checkMethod?: (...args: any[]) => any[];
}
export interface RowData {
    icon?: string;
    __folder?: boolean;
    iconStyle?: CSSProperties & {
        empty?: boolean;
        size?: number;
    };
    [key: string]: any;
}
export type TableRemoteMethod = {
    searchKeyword: string;
    currentPage: number | undefined;
    pageSize: number | undefined;
    pageSizes: number[] | undefined;
    conditionInfo: ConditionInfo;
    currentData?: RowData[];
};
export type TableMethodReturn = {
    data: RowData[];
    total?: number;
};
export type TableMode = 'list' | 'card';
export type CardOptions = CardProps;
export type SortOrder = 'asc' | 'desc' | '' | null;
export * from './vxe-type';
