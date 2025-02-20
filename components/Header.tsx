import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import CurrencySwitcher from './CurrencySwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { useTranslation } from '../lib/i18n';
import Link from 'next/link';

export default function Header() {
  const { t } = useTranslation();
  
  return (
    <header className="bg-white shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between py-4 space-y-4 md:space-y-0">
          <div className="flex justify-between items-center w-full md:w-auto gap-5 ">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              E-COM
            </Link>
            <ThemeSwitcher />
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Home
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </Link>
          </nav>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          
            <LanguageSwitcher />
            <CurrencySwitcher />
            
          </div>
        </div>
      </div>
    </header>
  );
  //   <header className="bg-white shadow dark:bg-gray-800 dark:border-gray-700">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex justify-between items-center py-4">
  //         <div className="flex items-center">
  //           <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
  //             E-COM
  //           </Link>
  //         </div>
  //         <nav className="hidden md:flex space-x-4">
  //           <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
  //             {t('home')}
  //           </Link>
  //           <Link href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
  //             {t('about')}
  //           </Link>
  //           <Link href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
  //             {t('contact')}
  //           </Link>
  //         </nav>
  //         <div className="flex items-center space-x-4">
  //           <LanguageSwitcher />
  //           <CurrencySwitcher />
  //           <ThemeSwitcher />
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );
}
