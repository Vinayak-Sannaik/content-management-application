import React from 'react';
import { useTranslation } from '../lib/i18n';
import { products } from '../lib/products';
import ProductCard from './ProductCard';

export default function RecommendedProducts() {
  const { t } = useTranslation();
  
  // For demo, just show 3 products as recommendations
  const recommendedProducts = products.slice(0, 3);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('recommended')}</h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
