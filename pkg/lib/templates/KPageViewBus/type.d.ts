import { CSSProperties } from 'vue';
export interface PageViewBusProps {
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
