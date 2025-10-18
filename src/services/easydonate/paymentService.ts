import { apiClient } from '../api/client';
import { PaymentResponse, PaymentRequest } from './types';
import { productService } from './productService';

class PaymentService {
  /**
   * ✅ Создать платеж для товара на конкретном сервере
   */
  async createPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      console.log('💳 Создаем платеж...', request);
      
      // Проверяем, что товар существует на этом сервере
      const serverProducts = await productService.getProductsByServer(request.serverId);
      const product = serverProducts.find(p => p.id === request.productId);
      
      if (!product) {
        throw new Error(`Товар с ID ${request.productId} не найден на сервере ${request.serverId}`);
      }
      
      const response = await apiClient.post<PaymentResponse>('/payment', {
        productId: request.productId,
        serverId: request.serverId,
        username: request.username,
        email: request.email || 'user@example.com'
      });
      
      console.log('✅ Платеж создан');
      return response;
      
    } catch (error: any) {
      console.error('❌ Ошибка в createPayment:', error.response?.data || error.message);
      throw new Error(error.response?.data?.error || error.message);
    }
  }
}

export const paymentService = new PaymentService();