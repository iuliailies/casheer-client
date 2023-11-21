export type Currency = 'RON' | 'EUR';
export const defaultCurrency: Currency = 'RON';

export interface Value {
    amount: number;
    currency: Currency;
    exponent?: number;
}