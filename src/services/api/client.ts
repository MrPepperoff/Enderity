import axios, { AxiosInstance } from 'axios';

// Базовый URL нашего прокси-сервера
const PROXY_BASE_URL = 'https://hm369631.webhm.pro/easydonate';

// Создаем экземпляр axios с базовыми настройками
class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: PROXY_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Интерцептор для логирования запросов
    this.client.interceptors.request.use((config) => {
      // console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    });

    // Интерцептор для обработки ошибок
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('❌ API Error:', error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  // Публичные методы для работы с API
  public async get<T>(url: string, config?: any): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: any, config?: any): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: any, config?: any): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: any): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

export const apiClient = new ApiClient();