import { default as ResizeObserver } from 'resize-observer-polyfill';
export declare class ElementObserver {
    resizeObserver: ResizeObserver | null;
    actions: any;
    constructor();
    observe(el: HTMLElement | Element, callback: (entry: ResizeObserverEntry) => any): void;
    unobserve(el: HTMLElement | Element): void;
}
