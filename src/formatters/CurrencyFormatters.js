import currency from "currency.js";

export const USD = value => currency(value);
export const JPY = value => currency(value, { precision: 0, symbol: '¥' });
export const EURO = value => currency(value, { symbol: '€', decimal: ',', separator: '.' });
export const INR = value => currency(value, { symbol: '₹', decimal: '.', separator: ',' });