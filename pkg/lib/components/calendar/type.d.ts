import { dayjs } from 'element-plus';
export interface CalendarProps {
    schedule?: any;
    showLunar?: boolean;
    adaptive?: boolean;
}
export interface Schedule {
    date: string | Date;
    content: string[];
}
export type Dayjs = dayjs.Dayjs;
