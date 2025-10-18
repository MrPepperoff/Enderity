// Основной интерфейс ответа от нашего прокси
export interface ApiResponse<T> {
  success: boolean;
  data: {
    response: T;
  };
}

// Типы данных для магазина
export interface ShopInfo {
  id: number;
  name: string;
  url: string;
}

// Типы данных для товаров
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
  type: string;
  commands: string[];
  image: string;
  category_id: number | null;
}

// Типы данных для серверов
export interface Server {
  id: number;
  name: string;
  ip: string;
  port: string;
  version: string;
  is_plugin_installed: number;
  products: Product[];
}

export interface Category {
  id: number;
  name: string;
}

// Типы данных для платежей
export interface PaymentResponse {
  success: boolean;
  response: {
    id: number;
    url: string;
    status: string;
  };
}

// Комбинированные типы
export interface ProductWithServer {
  product: Product;
  server: Server;
}

export interface ServerStats {
  server: Server;
  online: number;
  slots: number;
  status: string;
  fillPercentage: number;
}

export interface PaymentRequest {
  productId: number;
  serverId: number;
  username: string;
  email?: string;
}