"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { formatPrice } from '../lib/utils'

type Direction = 'ltr' | 'rtl';

interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  direction: Direction;
  formatCurrency: (price: number) => string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const defaultLocale = 'en';
const defaultCurrency = 'USD';
const rtlLocales = ['ar', 'he'];

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  currency: defaultCurrency,
  setCurrency: () => {},
  direction: 'ltr',
  formatCurrency: () => '',
  theme: 'light',
  toggleTheme: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState(defaultLocale);
  const [currency, setCurrencyState] = useState(defaultCurrency);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    // Load saved preferences from localStorage
    const savedLocale = localStorage.getItem('locale');
    const savedCurrency = localStorage.getItem('currency');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedLocale) setLocaleState(savedLocale);
    if (savedCurrency) setCurrencyState(savedCurrency);
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) setTheme(savedTheme);
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);
  
  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };
  
  const setCurrency = (newCurrency: string) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  
  const direction: Direction = rtlLocales.includes(locale) ? 'rtl' : 'ltr';
  
  const formatCurrency = (price: number) => {
    return formatPrice(price, currency);
  };
  
  useEffect(() => {
    // Update document direction when locale changes
    document.documentElement.dir = direction;
  }, [direction]);
  
  return (
    <LocaleContext.Provider value={{
      locale,
      setLocale,
      currency,
      setCurrency,
      direction,
      formatCurrency,
      theme,
      toggleTheme
    }}>
      {children}
    </LocaleContext.Provider>
  );
};