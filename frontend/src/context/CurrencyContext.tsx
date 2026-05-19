import { createContext } from "react";

interface Rates {
  [currency: string]: number;
}

export interface CurrencyContextType {
  displayCurrency: string;
  setDisplayCurrency: (c: string) => void;
  convert: (amount: number, fromCurrency: string) => number;
  symbol: (currency: string) => string;
  loading: boolean;
}

export const CurrencyContext = createContext<CurrencyContextType | null>(null);
