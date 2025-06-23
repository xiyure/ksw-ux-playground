import { CSSProperties } from 'vue';
export interface PageTableViewProps {
    showAside?: boolean;
    asideTitle?: string;
    asideInfo?: string;
    asideRefresh?: boolean;
    pageIcon?: string;
    pageTitle?: string;
    pageInfo?: string;
    asideConfig?: TableViewAsideConfig;
}
export interface TableViewAsideConfig {
    title?: string;
    info?: string;
    showRefresh?: boolean;
    defaultWidth?: number;
    maxWidth?: number;
    minWidth?: number;
    resizeLineStyle?: CSSProperties;
    resizeLineClass?: string;
    previewLineStyle?: CSSProperties;
    previewLineClass?: string;
}
