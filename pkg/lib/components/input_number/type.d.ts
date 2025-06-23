import { CompSize } from '../../utils';
export interface InputNumberProps {
    size?: CompSize;
    onlyDigits?: boolean;
    supportSymbols?: NumberSymbol[];
}
export type NumberSymbol = '+' | '-' | '.' | 'e' | 'E';
