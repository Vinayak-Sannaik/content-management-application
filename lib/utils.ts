import { currencies } from "./currencies";

export function formatPrice(price: number, currencyCode: string): string {
  const currency =
    currencies[currencyCode as keyof typeof currencies] || currencies.USD;

  // Convert the price based on simple fixed exchange rates (for demo purposes)
  const rates: Record<string, number> = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.78,
    JPY: 110,
    INR: 74,
    AUD: 1.4,
    CAD: 1.3,
    CHF: 0.92,
    CNY: 6.5,
    RUB: 75,
    KRW: 1180,
    BRL: 5.2,
  };

  const convertedPrice = price * (rates[currencyCode] || 1);

  // Format the price
  const formatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: currency.decimals,
    maximumFractionDigits: currency.decimals,
  });

  const formattedPrice = formatter.format(convertedPrice);

  // Apply the currency symbol in the correct position
  if (currency.position === "before") {
    return `${currency.symbol}${formattedPrice}`;
  } else {
    return `${formattedPrice} ${currency.symbol}`;
  }
}
