import style from './Shop.module.sass';
import { Col, Row, Spinner } from 'react-bootstrap';
import coinIcon from './coin.svg';
import searchIcon from './searchIcon.svg';
import Default_layout from '../../layouts/Default/Default';
import { useEffect, useState } from 'react';
import { Product, productService } from '../../services';


export default function Shop(){
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
        setTimeout(()=>{setLoading(false);}, 1500);
        
        }
    };

    return(
        <Default_layout>
                <div className={style.wrap__top}>
                    <h1 className={style.title}>Покупай коины</h1>
                    <p className={style.text}>Коины — это виртуальная валюта Эндерити. С ее помощью можно преобразовать миры,отправиться на поиски эпичных сюжетных приключений, придать уникальный вид своему персонажу и сделать еще много всего интересного.</p>
                </div>
                {(loading)?
                <Row className={`${style.wrap__row} ${style.skeleton}`}>
                    {[1,2,3,4,5,6,7,8,9].map(item=>
                        <Col xs={2} className={style.card__wrap} key={item}>
                            <div className={style.card}>
                                <div className={style.card__icon__wrap}>
                                    
                                </div>
                                <div className={style.card__count}>
                                    <div className={style.card__title}>
                                        
                                    </div>
                                    <div className={style.card__promo}>
                                        
                                    </div>
                                </div>
                                <div className={style.card__price}>
                                    
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
                :
                (error)?
                    
                <Row className={`${style.wrap__row} ${style.skeleton} ${style.error}`}>
                    <div className={style.skeleton_error}>
                        <h2>Ошибка загрузки: {error}</h2>
                    </div>
                    {[1,2,3,4,5,6,7,8,9].map(item=>
                        <Col xs={2} className={style.card__wrap } key={item}>
                            <div className={style.card}>
                                <div className={style.card__icon__wrap}>
                                    ✖️
                                </div>
                                <div className={style.card__count}>
                                    <div className={style.card__title}>
                                        
                                    </div>
                                    <div className={style.card__promo}>
                                        
                                    </div>
                                </div>
                                <div className={style.card__price}>
                                    
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
                :
                <Row className={style.wrap__row}>
                    {products.map((coin)=>
                        (coin.category_id == 92595)?
                        <Col xs={2} key={coin.id} className={style.card__wrap}>
                            <div className={style.card}>
                                <div className={style.card__icon__wrap}>
                                    <img className={style.card__icon} src={coin.image} alt={`${coin.name}`}/>
                                </div>
                                <div className={style.card__count}>
                                    <div className={style.card__title}>
                                        {coin.name}
                                    </div>
                                    <div className={style.card__promo}>
                                        {(coin.price != Number(coin.name))? <span><img src={coinIcon} alt="coin" />  {Number(coin.name) - coin.price} Бонус!</span>: ''}
                                    </div>
                                </div>
                                <div className={style.card__price}>
                                    {coin.price} &#8381;
                                </div>
                            </div>
                        </Col>
                    :'')}
                </Row>
                }
                
                <div className={style.payBtn__wrap}>
                    <button type='button' className={style.payBtn}>В корзину</button>    
                </div>
                
                <div className={style.wrap__top}>
                    <h1 className={style.title}>За покупками в магазин</h1>
                    <p className={style.text}>Улучшите свой игровой процесс с помощью загружаемого контента Minecraft. Покупайте уникальные карты, скины и наборы текстур от ваших любимых авторов из сообщества Minecraft!</p>
                </div>
                <div className={style.search}>
                    <input type="text" placeholder='Поиск' className={style.search__input}/>
                    <button type='button' className={style.search__btn}><img src={searchIcon} alt="search"/></button>
                </div>
                <div className={style.category}>
                    <ul className={style.category__list}>
                        <li><button type="button">Все</button></li>
                        <li><button type="button">Броня</button></li>
                        <li><button type="button">Блоки</button></li>
                        <li><button type="button">Инструменты</button></li>
                        <li><button type="button">Ранги</button></li>
                    </ul>
                </div>
                <Row className={style.wrap__row}>
                    {products.map((coin)=>
                        (coin.category_id != 92595)?
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
                    :'')}
                </Row>
        </Default_layout>
    );
}