export interface MainHighlightData {
  id: number;
  title: string;
  discount: string;
  imageSrc: string;
  oldPrice: number;
  newPriceInt: string;
  newPriceCents: string;
}

export interface PromoSecondaryData {
  id: number;
  title: string;
  imageSrc: string;
  oldPrice: number;
  newPriceInt: string;
  newPriceCents: string;
}

export interface ProductsData {
  mainHighlights: MainHighlightData[];
  promoSecondary: PromoSecondaryData[];
}
