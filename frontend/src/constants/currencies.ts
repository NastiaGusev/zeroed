export const CURRENCIES = [
  { code: "ILS", symbol: "₪", name: "Israeli Shekel" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "CZK", symbol: "Kč", name: "Czech Koruna" },
  { code: "PLN", symbol: "zł", name: "Polish Złoty" },
];

export const getCurrencySymbol = (code: string): string => {
  return CURRENCIES.find((c) => c.code === code)?.symbol ?? code;
};
