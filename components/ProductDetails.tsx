import React from 'react';
import { useLocale } from '../contexts/LocaleContext';
import { useTranslation } from '../lib/i18n';
import { Product, getLocalizedProduct } from '../lib/products';
import Image from 'next/image';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { locale, formatCurrency } = useLocale();
  const { t } = useTranslation();
  const localizedProduct = getLocalizedProduct(product, locale);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={localizedProduct.name['en']}
            className="w-full h-full object-cover"
            width={600}
            height={400}
          />
        </div>
        <div className="mt-8 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {localizedProduct.name['en']}
          </h1>
          <div className="mt-3">
            <p className="text-3xl text-gray-900 dark:text-white">{formatCurrency(product.price)}</p>
          </div>
          <div className="mt-6">
            <h2 className="sr-only">{t('productDescription')}</h2>
            <p className="text-base text-gray-700 dark:text-gray-300">{localizedProduct.description['en']}</p>
          </div>
          <div className="mt-6">
            <div className="flex items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('inStock')}: {product.inventory}
              </p>
            </div>
          </div>
          <div className="mt-8 flex">
            <button
              type="button"
              className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t('addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}