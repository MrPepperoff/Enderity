import { apiClient } from '../api/client';
import { ApiResponse, ShopInfo } from './types';

class ShopService {
  /**
   * ✅ Получить информацию о магазине
   */
  async getShopInfo(): Promise<ShopInfo> {
    try {
      console.log('🛍️ Запрашиваем информацию о магазине...');
      const response = await apiClient.get<ApiResponse<ShopInfo>>('/shop');
      
      if (response.success) {
        console.log('✅ Информация о магазине получена');
        return response.data.response;
      } else {
        throw new Error('Не удалось получить информацию о магазине');
      }
    } catch (error: any) {
      console.error('❌ Ошибка в getShopInfo:', error.response?.data || error.message);
      throw new Error(error.response?.data?.error || error.message);
    }
  }

  /**
   * ✅ Проверить здоровье сервера
   */
  async healthCheck(): Promise<{ success: boolean; message: string }> {
    try {
      console.log('❤️ Проверяем здоровье сервера...');
      const response = await apiClient.get<{ success: boolean; message: string }>('/health');
      
      console.log('✅ Сервер здоров:', response.message);
      return response;
      
    } catch (error: any) {
      console.error('❌ Сервер не отвечает:', error.message);
      throw new Error('Прокси-сервер не отвечает');
    }
  }
}

export const shopService = new ShopService();