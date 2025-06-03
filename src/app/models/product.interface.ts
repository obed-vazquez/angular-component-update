export interface ProductDetail {
  id: number;
  property: string;
  value: string;
}

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  stock: number;
  details: ProductDetail[];
}

export interface ProductGroup {
  id: number;
  name: string;
  category: string;
  status: string;
  items: ProductItem[];
}