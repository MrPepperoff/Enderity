import { useEffect, useState } from 'react';
import style from './ProductsList.module.sass';
import { Product, productService} from '../../services';
import { Col, Row } from 'react-bootstrap';
import coinIcon from './coin.svg';

export default function ProductsList(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        loadCategoryStats();
    }, []);

    const loadCategoryStats = async () => {
        try {
        setLoading(true);
        setError('');
        
        // console.log('🔄 Загружаем статистику серверов...');
        const productsData = await productService.getProductsByServer(115859);
        setProducts(productsData);

        } catch (err: any) {
        console.error('❌ Ошибка загрузки:', err);
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };
    return(
        // <div className={style.wrap}>

        // {products.map(product =>
        //     <div key={product.id} className={style.card}>
        //         <img src={product.image} alt="" />
        //         {product.name}
        //     </div>
        // )}
        // </div>
        <Row className={style.wrap__row}>
            {products.map((coin)=>
            (coin.category_id == 92595)?
            <Col xs={2} key={coin.id} className={style.card__wrap}>
                <div className={style.card}>
                    <div>
                        <img className={style.card__icon} src={coin.image} alt={`${coin.name}`}/>
                    </div>
                    <div className={style.card__count}>
                        <div>
                            {coin.name}
                        </div>
                        <div>
                            {/* {coin.category_id} */}
                            {(coin.price != Number(coin.name))? <span><img src={coinIcon} alt="coin" />  {Number(coin.name) - coin.price} Бонус!</span>: ''}
                            {/* {(coin.bonus)? <span><img src={coinIcon} alt="coin" />  {coin.bonus} Бонус!</span>: ''} */}
                        </div>
                    </div>
                    <div className={style.card__price}>
                        {coin.price} &#8381;
                    </div>
                </div>
            </Col>
            :
            <Col xs={2} key={coin.id} className={style.card__wrap}>
                <div className={style.card}>
                    <div>
                        <img className={style.card__icon} src={coin.image} alt={`${coin.name}`}/>
                    </div>
                    <div className={style.card__count}>
                        <div>
                            {coin.name}
                        </div>
                        
                    </div>
                    <div className={style.card__price}>
                        {coin.price} &#8381;
                    </div>
                </div>
            </Col>
            )}
        </Row>
    );
}