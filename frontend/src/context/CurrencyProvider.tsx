import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { CurrencyContext } from "./CurrencyContext";
import { getCurrencySymbol } from "../constants/currencies";

interface Rates {
  [currency: string]: number;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [displayCurrency, setDisplayCurrencyState] = useState(
    localStorage.getItem("displayCurrency") ?? "ILS",
  );
  const [rates, setRates] = useState<Rates>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.frankfurter.dev/v1/latest?base=ILS&symbols=USD,EUR,GBP,CZK,PLN",
    )
      .then((res) => res.json())
      .then((data) => {
        setRates({ ...data.rates, ILS: 1 });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const setDisplayCurrency = (c: string) => {
    localStorage.setItem("displayCurrency", c);
    setDisplayCurrencyState(c);
  };

  const convert = (amount: number, fromCurrency: string): number => {
    if (fromCurrency === displayCurrency) return amount;
    if (!rates[fromCurrency] || !rates[displayCurrency]) return amount;
    const inILS =
      fromCurrency === "ILS" ? amount : amount / rates[fromCurrency];
    return displayCurrency === "ILS" ? inILS : inILS * rates[displayCurrency];
  };

  const symbol = (currency: string) => getCurrencySymbol(currency);

  return (
    <CurrencyContext.Provider
      value={{ displayCurrency, setDisplayCurrency, convert, symbol, loading }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}
