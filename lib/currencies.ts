export const currencies = {
  USD: {
    symbol: "$",
    code: "USD",
    position: "before",
    decimals: 2,
    thousandsSeparator: ",",
    decimalSeparator: ".",
  },
  EUR: {
    symbol: "€",
    code: "EUR",
    position: "after",
    decimals: 2,
    thousandsSeparator: " ",
    decimalSeparator: ",",
  },
  GBP: {
    symbol: "£",
    code: "GBP",
    position: "before",
    decimals: 2,
    thousandsSeparator: ",",
    decimalSeparator: ".",
  },
  JPY: {
    symbol: "¥",
    code: "JPY",
    position: "before",
    decimals: 0,
    thousandsSeparator: ",",
    decimalSeparator: ".",
  },
  // Add more currencies as needed
};

export const availableCurrencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "INR", name: "Indian Rupee" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "KRW", name: "South Korean Won" },
  { code: "BRL", name: "Brazilian Real" },
];
