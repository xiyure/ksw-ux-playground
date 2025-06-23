import { VxeColumnProps } from 'vxe-table';
import { ExpandTrigger } from 'element-plus';
import { SortConfig, FilterConfig, TableFilterItem, EditRender, ColumnType } from '../tree_table/type';
export interface KTableProps {
    showColumnMenu?: boolean;
    sortConfig?: SortConfig;
    filterConfig?: FilterConfig;
}
export interface TableColumnProps {
    sortable?: boolean;
    filters?: TableFilterItem[];
    desc?: string;
    showColumnMenu?: boolean;
    editRender?: EditRender;
    type?: ColumnType;
    field?: string;
    filterMultiple?: boolean;
}
export interface TableColumnGroupProps {
    resizable?: boolean;
}
export interface FilterPopperProps {
    filters?: TableFilterItem[];
    column?: VxeColumnProps;
    trigger?: ExpandTrigger;
    visible?: boolean;
    text?: {
        resetButtonText?: string;
        confirmButtonText?: string;
    };
    teleported?: boolean;
    destroyOnClose?: boolean;
    filterMultiple?: boolean;
}
export type EventMap = Record<string, {
    name: string;
    callback: (...arg: any) => void;
}>;
