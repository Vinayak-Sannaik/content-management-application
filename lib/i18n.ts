import { useLocale } from "../contexts/LocaleContext";

export function useTranslation() {
  const { locale } = useLocale();

  const t = (key: string): string => {
    try {
      const translations: Record<string, Record<string, string>> = {
        en: {
          welcome: "Welcome to our store",
          about: "About Us",
          contact: "Contact",
          recommended: "Recommended Products",
          addToCart: "Add to Cart",
        },
        es: {
          welcome: "Bienvenido a nuestra tienda",
          about: "Sobre Nosotros",
          contact: "Contacto",
          recommended: "Productos Recomendados",
          addToCart: "Añadir al Carrito",
        },
        fr: {
          welcome: "Bienvenue dans notre magasin",
          about: "À Propos",
          contact: "Contact",
          recommended: "Produits Recommandés",
          addToCart: "Ajouter au Panier",
        },
        // Add more languages as needed
      };

      return translations[locale]?.[key] || translations.en[key] || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  return { t };
}
