export declare const dateTypeOptions: {
    label: string;
    value: string;
}[];
export declare const logicOptions: ({
    type: string;
    logicList: {
        logic: string;
        handler(a: number, b: number): boolean;
    }[];
} | {
    type: string;
    logicList: {
        logic: string;
        handler(a: string, b: string, ignoreCase: boolean): boolean;
    }[];
})[];
