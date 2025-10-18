import { apiClient } from '../api/client';
import { ApiResponse, Server, ServerStats } from './types';

class ServerService {
  /**
   * ✅ Получить список всех серверов с их товарами
   */
  async getServers(): Promise<Server[]> {
    try {
      // console.log('🖥️ Запрашиваем список серверов с товарами...');
      const response = await apiClient.get<ApiResponse<Server[]>>('/servers');
      
      if (response.success) {
        const servers = response.data.response || [];
        // console.log(`✅ Получено серверов: ${servers.length}`);
        return servers;
      } else {
        throw new Error('Не удалось получить список серверов');
      }
    } catch (error: any) {
      console.error('❌ Ошибка в getServers:', error.response?.data || error.message);
      throw new Error(error.response?.data?.error || error.message);
    }
  }

  /**
   * ✅ Получить сервер по ID
   */
  async getServerById(serverId: number): Promise<Server | null> {
    try {
      // console.log(`🔍 Запрашиваем информацию о сервере ${serverId}...`);
      const servers = await this.getServers();
      const server = servers.find(s => s.id === serverId);
      
      if (server) {
        // console.log(`✅ Найден сервер: ${server.name}`);
        return server;
      } else {
        console.log(`❌ Сервер с ID ${serverId} не найден`);
        return null;
      }
    } catch (error: any) {
      console.error('❌ Ошибка в getServerById:', error.message);
      throw error;
    }
  }

  /**
   * ✅ Получить статистику серверов (онлайн, слоты)
   */
  async getServerStats(): Promise<ServerStats[]> {
    try {
      // console.log('📈 Запрашиваем статистику серверов...');
      const servers = await this.getServers();
      
      const serverStatsPromises = servers.map(async (server) => {
        try {
          const stats = await this.getMinecraftServerStatus(server.ip, server.port);
          return {
            server,
            online: stats.online,
            slots: stats.slots,
            status: stats.status,
            fillPercentage: stats.slots ? Math.round((stats.online || 0) / stats.slots * 100) : 0
          };
        } catch (error) {
          console.log(`⚠️ Не удалось получить статус для сервера ${server.name}`);
          return {
            server,
            online: 0,
            slots: 0,
            status: 'unknown',
            fillPercentage: 0
          };
        }
      });

      const serverStats = await Promise.all(serverStatsPromises);
      
      // console.log('📊 Статистика серверов:');
      // serverStats.forEach(stat => {
      //   console.log(`   ${stat.server.name}: ${stat.online}/${stat.slots} (${stat.fillPercentage}%) - ${stat.status}`);
      // });
      
      return serverStats;
    } catch (error: any) {
      console.error('❌ Ошибка в getServerStats:', error.message);
      throw error;
    }
  }

  /**
   * ✅ Получить статус Minecraft сервера через mcstatus.io
   */
  private async getMinecraftServerStatus(ip: string, port: string): Promise<{
    online: number;
    slots: number;
    status: string;
  }> {
    try {
      const response = await fetch(`https://api.mcstatus.io/v2/status/java/${ip}:${port}`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });

      const data = await response.json();
      
      return {
        online: data.players?.online || 0,
        slots: data.players?.max || 0,
        status: data.online ? 'online' : 'offline'
      };
      
    } catch (error) {
      console.log(`❌ Ошибка получения статуса для ${ip}:${port}`);
      
      // Пробуем альтернативный API
      try {
        const altResponse = await fetch(`https://api.mcsrvstat.us/2/${ip}:${port}`, {
          method: 'GET',
          signal: AbortSignal.timeout(3000)
        });

        const altData = await altResponse.json();
        
        return {
          online: altData.players?.online || 0,
          slots: altData.players?.max || 0,
          status: altData.online ? 'online' : 'offline'
        };
      } catch (altError) {
        return {
          online: 0,
          slots: 0,
          status: 'unknown'
        };
      }
    }
  }
}

export const serverService = new ServerService();