'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PromotionalBanner from '../../components/PromotionalBanner';
import ProductDetails from '../../components/ProductDetails';
import RecommendedProducts from '../../components/RecommendedProducts';
import AboutSection from '../../components/AboutSection';
import ContactInfo from '../../components/ContactInfo';
import { products } from '../../lib/products';

export default function Home() {
  const params = useParams();
  const { setLocale } = useLocale();
  const locale = params.locale as string;
  
  // Set locale based on URL parameter
  useEffect(() => {
    if (locale) {
      setLocale(locale);
    }
  }, [locale, setLocale]);
  
  // Display the first product as the main product
  const mainProduct = products[0];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PromotionalBanner />
        <ProductDetails product={mainProduct} />
        <RecommendedProducts />
        <AboutSection />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}