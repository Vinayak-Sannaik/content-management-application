import React from 'react';
import { useLocale } from '../contexts/LocaleContext';
import { useTranslation } from '../lib/i18n';
import { Product, getLocalizedProduct } from '../lib/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { locale, formatCurrency } = useLocale();
  const { t } = useTranslation();
  const localizedProduct = getLocalizedProduct(product, locale);
  
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
        <Image
          src={product.image}
          alt={String(localizedProduct.name)}
          className="h-48 w-full object-cover object-center"
          width={300}
          height={200}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{String(localizedProduct.name)}</h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400 line-clamp-2">{String(localizedProduct.description)}</p>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(product.price)}</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm"
          >
            {t('addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
}
