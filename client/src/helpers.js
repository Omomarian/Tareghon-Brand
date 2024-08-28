export function formatCurrency(value, currency, locale = "en-NG") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export const baseUrl = "http://localhost:3000/api/v1";
