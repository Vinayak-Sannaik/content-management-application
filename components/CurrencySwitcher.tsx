import React from 'react';
import { useLocale } from '../contexts/LocaleContext';
import { availableCurrencies } from '../lib/currencies';

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useLocale();
  
  return (
    <div className="relative inline-block text-left">
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        aria-label="Select currency"
      >
        {availableCurrencies.map((curr) => (
          <option key={curr.code} value={curr.code}>
            {curr.code} - {curr.name}
          </option>
        ))}
      </select>
    </div>
  );
}