import React from 'react';
import { useTranslation } from '../lib/i18n';
import { useLocale } from '../contexts/LocaleContext';

export default function Footer() {
  const { t } = useTranslation();
  const { locale } = useLocale();
  
  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat(locale).format(date);
  
  return (
    <footer className="bg-white shadow dark:bg-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Multi-Language Store. {t('allRightsReserved')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {t('currentDate')}: {formattedDate}
            </p>
          </div>
          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/vinayak-sannaik/" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mx-2">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/vinayak-sannaik/" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mx-2">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/vinayak-sannaik/" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mx-2">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
