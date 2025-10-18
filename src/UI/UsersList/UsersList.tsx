import { useEffect, useState } from 'react';

import { Col, Row, Spinner } from 'react-bootstrap';
import style from './UsersList.module.sass';


export default function UsersList(){
    const [servers, setServers] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        loadServerStats();
    }, []);

    const loadServerStats = async () => {
        
    };
    if(loading){
        return(
            <Row className={style.skeleton}>
                {[1,2,3,4,5,6,7,8].map(item=>
                    <Col xs={2} className={style.card__wrap} key={item}>
                        <div className={style.card}>
                            <div>
                                <Spinner className={style.card__icon} animation="border" role="status" variant="light">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        )
    }
    
    
    return(
        <>
            
        </>
    )
}