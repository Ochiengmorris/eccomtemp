export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  discountPrice?: number;
  stock: number;
  images: string[];
  description: string;
  category: string;
}
