import React from 'react';
import { useTranslation } from '../lib/i18n';
import { useLocale } from '../contexts/LocaleContext';

export default function AboutSection() {
  const { t } = useTranslation();
  const { locale } = useLocale();
  
  // Simplified content for demo
  const aboutContent: Record<string, string> = {
    en: 'Our company was founded in 2010 with a mission to provide high-quality products at affordable prices. We have since expanded to multiple countries and continue to grow our product offerings.',
    es: 'Nuestra empresa fue fundada en 2010 con la misión de ofrecer productos de alta calidad a precios accesibles. Desde entonces, nos hemos expandido a múltiples países y continuamos ampliando nuestra oferta de productos.',
    fr: 'Notre entreprise a été fondée en 2010 avec pour mission de fournir des produits de haute qualité à des prix abordables. Depuis, nous nous sommes développés dans plusieurs pays et continuons à élargir notre gamme de produits.',
   
  };
  
  const content = aboutContent[locale] || aboutContent.en;
  
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">{t('about')}</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">{content}</p>
      </div>
    </section>
  );
}
