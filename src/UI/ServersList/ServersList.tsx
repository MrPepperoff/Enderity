import { useEffect, useState } from 'react';
import {serverService, Server } from '../../services';
import { Spinner } from 'react-bootstrap';
import style from './ServersList.module.sass';

export default function ServersList(){
    const [servers, setServers] = useState<Server[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        loadServerStats();
    }, []);

    const loadServerStats = async () => {
        try {
        setLoading(true);
        setError('');
        
        // console.log('🔄 Загружаем статистику серверов...');
        const serversData = await serverService.getServers();
        setServers(serversData);

        } catch (err: any) {
        console.error('❌ Ошибка загрузки:', err);
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };
    if(loading){
        return(
            <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </>
        )
    }
    
    
    return(
        <>
            {servers.map(server => 
                <div className={style.card} key={server.id}>
                    <h3>{server.name}</h3>
                    <span>{server.ip}</span>
                    <span>{server.version}</span>
                </div>
            )}
        </>
    )
}