import React from 'react';
import { useTranslation } from '../lib/i18n';
import { useLocale } from '../contexts/LocaleContext';

export default function ContactInfo() {
  const { t } = useTranslation();
  const { locale } = useLocale();
  
  // Region-specific contact information
  const contactInfo: Record<string, { address: string, phone: string, email: string }> = {
    en: {
      address: '123 Main St, New York, NY 10001, USA',
      phone: '+91 7259574599',
      email: 'vinflyer@example.com',
    },
    es: {
      address: 'Calle Principal 123, Madrid, 28001, España',
      phone: '+91 7259574599',
      email: 'vinflyer@example.com',
    },
    fr: {
      address: '123 Rue Principale, Paris, 75001, France',
      phone: '+91 7259574599',
      email: 'vinflyer@example.com',
    },
    // Add more regions as needed
  };
  
  const info = contactInfo[locale] || contactInfo.en;
  
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">{t('contact')}</h2>
        <div className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('address')}</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">{info.address}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('phone')}</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">{info.phone}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('email')}</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">{info.email}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}