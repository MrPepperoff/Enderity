export interface ShopInfo {
  id: number;
  name: string;
  url: string;
  success_url: string;
  fail_url: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  server_id: number;
  category_id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface CustomerData {
  username: string;
  email: string;
  server_id?: number;
}

export interface PaymentRequest {
  product_id: number;
  customer: CustomerData;
  email: string;
  coupon?: string;
}

export interface Payment {
  id: number;
  shop_id: number;
  product_id: number;
  customer: string;
  price: number;
  status: 'success' | 'wait' | 'error';
  url: string;
  created_at: string;
  updated_at: string;
}

export interface PaymentResponse {
  success: boolean;
  message?: string;
  response: Payment;
}

export interface ApiError {
  message: string;
  code?: number;
  details?: unknown;
}