import React from 'react';
import { useLocale } from '../contexts/LocaleContext';

export default function PromotionalBanner() {
  const { locale } = useLocale();

  const promotions: Record<string, { title: string, content: string }> = {
    en: {
      title: 'Summer Sale!',
      content: 'Get 20% off on all products. Limited time offer!',
    },
    es: {
      title: '¡Rebajas de Verano!',
      content: 'Obtenga un 20% de descuento en todos los productos. ¡Oferta por tiempo limitado!',
    },
    fr: {
      title: 'Soldes d\'Été!',
      content: 'Obtenez 20% de réduction sur tous les produits. Offre à durée limitée!',
    },
  };
  
  const promotion = promotions[locale] || promotions.en;
  
  return (
    <div className="relative bg-blue-800">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">{promotion.title}</span>
            <span className="hidden md:inline">{promotion.content}</span>
          </p>
        </div>
      </div>
    </div>
  );
}