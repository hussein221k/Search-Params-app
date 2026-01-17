export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface Filters {
  search?: string;
  price?: "asc" | "desc";
  category?: string;
}
