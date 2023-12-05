export interface ProductList {
  products: Products;
}

export interface Products {
  edges: ProductsEdge[];
}

export interface ProductsEdge {
  node: Product;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  featuredImage: FeaturedImage;
  variants: Variants;
}

export interface FeaturedImage {
  id: string;
  url: string;
}

export interface Variants {
  edges: VariantsEdge[];
}

export interface VariantsEdge {
  node: FluffyNode;
}

export interface FluffyNode {
  price: Price;
}

export interface Price {
  amount: string;
  currencyCode: CurrencyCode;
}

export enum CurrencyCode {
  CAD = "CAD",
}

export interface GetProductListResponse {
  data: {
    products: Products
  }
}


export interface GetProductResponse {
  data: {
    product: Product
  }
}
