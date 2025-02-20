export interface Product {
  id: number;
  nameKey: string;
  descriptionKey: string;
  price: number;
  image: string;
  inventory: number;
}

export const products: Product[] = [
  {
    id: 1,
    nameKey: "product1Name",
    descriptionKey: "product1Description",
    price: 99.99,
    image: "/images/products/product1.jpg",
    inventory: 25,
  },
  {
    id: 2,
    nameKey: "product2Name",
    descriptionKey: "product2Description",
    price: 149.99,
    image: "/images/products/product2.jpg",
    inventory: 15,
  },
  {
    id: 3,
    nameKey: "product3Name",
    descriptionKey: "product3Description",
    price: 199.99,
    image: "/images/products/product3.jpg",
    inventory: 10,
  },
  // Add more products as needed
];

export const productTranslations: Record<
  string,
  Record<string, Record<string, string>>
> = {
  en: {
    product1Name: "Premium Headphones",
    product1Description:
      "High-quality noise-cancelling headphones with premium sound.",
    product2Name: "Smart Watch",
    product2Description:
      "Track your fitness and stay connected with this stylish smart watch.",
    product3Name: "Wireless Speaker",
    product3Description:
      "Portable speaker with rich sound and 24-hour battery life.",
  },
  es: {
    product1Name: "Auriculares Premium",
    product1Description:
      "Auriculares con cancelación de ruido de alta calidad con sonido premium.",
    product2Name: "Reloj Inteligente",
    product2Description:
      "Controla tu actividad física y mantente conectado con este elegante reloj inteligente.",
    product3Name: "Altavoz Inalámbrico",
    product3Description:
      "Altavoz portátil con sonido rico y batería de 24 horas de duración.",
  },
  fr: {
    product1Name: "Casque Premium",
    product1Description:
      "Casque à réduction de bruit de haute qualité avec son premium.",
    product2Name: "Montre Intelligente",
    product2Description:
      "Suivez votre forme et restez connecté avec cette montre intelligente élégante.",
    product3Name: "Haut-parleur Sans Fil",
    product3Description:
      "Haut-parleur portable avec un son riche et une autonomie de 24 heures.",
  },
  // Add more languages as needed
};

export function getLocalizedProduct(product: Product, locale: string) {
  const fallbackLocale = "en";
  const translations =
    productTranslations[locale] || productTranslations[fallbackLocale];

  return {
    ...product,
    name:
      translations[product.nameKey] ||
      productTranslations[fallbackLocale][product.nameKey] ||
      product.nameKey,
    description:
      translations[product.descriptionKey] ||
      productTranslations[fallbackLocale][product.descriptionKey] ||
      product.descriptionKey,
  };
}
