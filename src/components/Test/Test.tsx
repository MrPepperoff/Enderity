import React, { useState, useEffect } from 'react';
import { serverService, Server } from '../../services/easydonate';

const DataTest: React.FC = () => {
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Загружаем только серверы
  useEffect(() => {
    loadServers();
  }, []);

  const loadServers = async () => {
    try {
      setLoading(true);
      setError('');
    //   console.log('🔄 Загружаем список серверов...');

      const serversData = await serverService.getServers();
      setServers(serversData);

    //   console.log('✅ Серверы загружены:', serversData);

    } catch (err: any) {
      console.error('❌ Ошибка загрузки серверов:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Загрузка
  if (loading) {
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center',
        border: '2px solid #2196F3',
        borderRadius: '8px',
        backgroundColor: '#E3F2FD',
        margin: '20px'
      }}>
        <h3>🔄 Загружаем серверы...</h3>
        <p>Пожалуйста, подождите</p>
      </div>
    );
  }

  // Ошибка
  if (error) {
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center',
        border: '2px solid #F44336',
        borderRadius: '8px',
        backgroundColor: '#FFEBEE',
        margin: '20px'
      }}>
        <h3>❌ Ошибка загрузки серверов!</h3>
        <p><strong>Сообщение:</strong> {error}</p>
        <button 
          onClick={loadServers}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  // Успех
  return (
    <div style={{ 
      padding: '20px',
      border: '2px solid #4CAF50',
      borderRadius: '8px',
      backgroundColor: '#E8F5E8',
      margin: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#2E7D32', textAlign: 'center' }}>✅ СЕРВЕРЫ ЗАГРУЖЕНЫ!</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ 
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '20px',
          fontWeight: 'bold'
        }}>
          🖥️ Найдено серверов: {servers.length}
        </div>
      </div>

      {/* Список серверов */}
      <div>
        <h3>Список серверов:</h3>
        {servers.length === 0 ? (
          <div style={{ 
            padding: '20px', 
            textAlign: 'center',
            backgroundColor: '#FFF3CD',
            border: '1px solid #FFEAA7',
            borderRadius: '6px'
          }}>
            <p>🤔 Серверов не найдено</p>
          </div>
        ) : (
          <div style={{ 
            display: 'grid',
            gap: '10px'
          }}>
            {servers.map(server => (
              <div 
                key={server.id}
                style={{
                  padding: '15px',
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <strong>🖥️ {server.name}</strong>
                  <div style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>
                    ID: {server.id}
                  </div>
                </div>
                <div style={{ 
                  padding: '5px 10px',
                  backgroundColor: '#E3F2FD',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}>
                  #{server.id}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Сырые данные (для отладки) */}
      <details style={{ marginTop: '20px' }}>
        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          📋 Показать сырые данные (JSON)
        </summary>
        <div style={{ 
          padding: '15px', 
          backgroundColor: 'white', 
          borderRadius: '6px',
          border: '1px solid #ddd',
          marginTop: '10px',
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          <pre style={{ margin: 0, fontSize: '12px' }}>
            {JSON.stringify(servers, null, 2)}
          </pre>
        </div>
      </details>

      <button 
        onClick={loadServers}
        style={{
          padding: '10px 20px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '15px',
          width: '100%'
        }}
      >
        🔄 Обновить список серверов
      </button>
    </div>
  );
};

export default DataTest;