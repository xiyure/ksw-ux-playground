type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
export type Merge<T, U> = T & Partial<Omit<U, keyof T>>;
export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};
export {};
