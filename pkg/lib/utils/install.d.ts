import { SFCWithInstall, SFCInstallWithContext } from '../utils';
export declare const withInstall: <T, E extends Record<string, any> = Record<string, any>>(main: any, extra?: any) => SFCWithInstall<T> & E;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
export declare const withNoopInstall: <T>(component: any) => SFCWithInstall<T>;
