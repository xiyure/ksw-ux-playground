export declare class Emitter {
    events: Map<string | number, any>;
    constructor();
    on(eventName: string, id: string, callback: () => any): void;
    emit(eventName: string, id: string, ...arg: any[]): void;
    remove(eventName: string, id: string): void;
}
