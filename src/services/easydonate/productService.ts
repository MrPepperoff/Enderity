import { serverService } from './serverService';
import { Product, ProductWithServer, Category } from './types';

class ProductService {
  /**
   * ✅ Получить товары конкретного сервера по ID
   */
  async getProductsByServer(serverId: number): Promise<Product[]> {
    try {
      // console.log(`📋 Запрашиваем товары для сервера ${serverId}...`);
      const servers = await serverService.getServers();
      const server = servers.find(s => s.id === serverId);
      
      if (server) {
        const products = server.products || [];
        // console.log(`✅ Найдено товаров для сервера "${server.name}": ${products.length}`);
        return products;
      } else {
        throw new Error(`Сервер с ID ${serverId} не найден`);
      }
    } catch (error: any) {
      console.error('❌ Ошибка в getProductsByServer:', error.message);
      throw error;
    }
  }

  /**
   * ✅ Получить все товары всех серверов (объединенный список)
   */
  async getAllProducts(): Promise<ProductWithServer[]> {
    try {
      console.log('📦 Запрашиваем все товары всех серверов...');
      const servers = await serverService.getServers();
      
      const allProducts: ProductWithServer[] = [];
      
      servers.forEach(server => {
        if (server.products && server.products.length > 0) {
          server.products.forEach(product => {
            allProducts.push({
              product,
              server
            });
          });
        }
      });
      
      console.log(`✅ Всего товаров: ${allProducts.length} с ${servers.length} серверов`);
      return allProducts;
    } catch (error: any) {
      console.error('❌ Ошибка в getAllProducts:', error.message);
      throw error;
    }
  }

  /**
   * ✅ Поиск товаров по названию (по всем серверам)
   */
  async searchProducts(query: string): Promise<ProductWithServer[]> {
    try {
      console.log(`🔍 Ищем товары по запросу: "${query}"`);
      const allProducts = await this.getAllProducts();
      
      const filteredProducts = allProducts.filter(item =>
        item.product.name.toLowerCase().includes(query.toLowerCase()) ||
        item.product.description.toLowerCase().includes(query.toLowerCase())
      );
      
      console.log(`✅ Найдено товаров: ${filteredProducts.length}`);
      return filteredProducts;
    } catch (error: any) {
      console.error('❌ Ошибка в searchProducts:', error.message);
      throw error;
    }
  }

  /**
   * ✅ Получить товары по категории (по всем серверам)
   */
  async getProductsByCategory(categoryId: number): Promise<ProductWithServer[]> {
    try {
      console.log(`📂 Запрашиваем товары категории ${categoryId}...`);
      const allProducts = await this.getAllProducts();
      
      const categoryProducts = allProducts.filter(item =>
        item.product.category_id === categoryId
      );
      
      console.log(`✅ Найдено товаров в категории: ${categoryProducts.length}`);
      return categoryProducts;
    } catch (error: any) {
      console.error('❌ Ошибка в getProductsByCategory:', error.message);
      throw error;
    }
  }

  /**
   * ✅ Получить уникальные категории из всех товаров
   */
  async getUniqueCategories(): Promise<Category[]> {
    try {
      console.log('📚 Запрашиваем уникальные категории...');
      const allProducts = await this.getAllProducts();
      
      const categoryMap = new Map<number, Category>();
      
      allProducts.forEach(item => {
        if (item.product.category_id && !categoryMap.has(item.product.category_id)) {
          categoryMap.set(item.product.category_id, {
            id: item.product.category_id,
            name: `Категория ${item.product.category_id}`
          });
        }
      });
      
      const categories = Array.from(categoryMap.values());
      console.log(`✅ Найдено уникальных категорий: ${categories.length}`);
      return categories;
    } catch (error: any) {
      console.error('❌ Ошибка в getUniqueCategories:', error.message);
      throw error;
    }
  }
}

export const productService = new ProductService();