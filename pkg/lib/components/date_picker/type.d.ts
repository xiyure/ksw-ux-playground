import { DatePickType } from 'element-plus';
import { CompSize } from '../../utils';
export interface DatePickerProps {
    size?: CompSize;
    shortcuts?: any[];
    showDefaultShortcuts?: boolean;
    type?: DatePickType;
}
export type DateValue = string | Date | [string, string] | [Date, Date];
export type PanelModel = 'year' | 'month';
