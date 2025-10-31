import { useEffect, useState } from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { Product, productService } from "../../services";
import style from './Category.module.sass';

export default function Category(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const categories =[
        {
            id: 92595,
            name: "Коин"
        },
        {
            id: 92897,
            name: "Ранг"
        },
        {
            id: 1,
            name: "Броня"
        },
        {
            id: 2,
            name: "Блоки"
        },
        {
            id: 3,
            name: "Инструменты"
        }
    ]
    const colors=[
        {
            id: 976564,
            name: 'VIP 1',
            color: '#88fc00'
        },
        {
            id: 976565,
            name: 'VIP 2',
            color: '#0096fc'
        },
        {
            id: 976566,
            name: 'VIP 3',
            color: '#e803f9'
        },
        {
            id: 976567,
            name: 'GOLD',
            color: '#fcd400'
        },
    ]
    
    useEffect(() => {
            loadCategoryStats();
        }, []);
    
        const loadCategoryStats = async () => {
            try {
            setLoading(true);
            
            setError('');
            
            console.log('🔄 Загружаем статистику серверов...');
            const productsData = await productService.getProductsByServer(115859);
            setProducts(productsData);
    
            } catch (err: any) {
            console.error('❌ Ошибка загрузки:', err);
            setError(err.message);
            } finally {
            setTimeout(()=>{setLoading(false);}, 1500);
            
            }
        };
    console.log(products);
    return(
        <>
            <Tabs
                defaultActiveKey="all"
                id="uncontrolled-tab-example"
                className={style.tabs}
                >
                <Tab eventKey='all' title='Все'>
                    <Row className={style.wrap__row}>
                        {products.map((coin)=>
                            (coin.category_id != 92595)?
                            <Col xs={3} key={coin.id} className={style.card__wrap}>
                                <div className={style.card}>
                                    <div>
                                        <img className={style.card__icon} src={coin.image} alt={`${coin.name}`}/>
                                    </div>
                                    <div className={style.card__count} style={{ background: colors.filter(color => color.id === coin.id)[0]?.color, color: colors.filter(color => color.id === coin.id).length > 0 ? 'rgb(var(--c-black))': '' }}>
                                        <div>
                                            {coin.name}
                                            <br/>
                                            {coin.description}
                                        </div>
                                    </div>
                                    <div className={style.card__price}>
                                        {coin.price} &#8381;
                                    </div>
                                </div>
                            </Col>
                        :'')}
                    </Row>
                </Tab>
                {
                    categories.map(category =>
                        (category.id != 92595)?
                            <Tab eventKey={category.id} title={category.name}>

                                <Row className={style.wrap__row}>
                                    {products.map((coin)=>
                                        (coin.category_id == category.id)?
                                        <Col xs={3} key={coin.id} className={style.card__wrap}>
                                            <div className={style.card} >
                                                
                                                <div>
                                                    <img className={style.card__icon} src={coin.image} alt={`${coin.name}`}/>
                                                </div>
                                                <div className={style.card__count} style={{ background: colors.filter(color => color.id === coin.id)[0]?.color, color: 'rgb(var(--c-black))' }}>
                                                    <div>
                                                        {coin.name}
                                                        <br/>
                                                        {coin.description}
                                                    </div>
                                                </div>
                                                <div className={style.card__price}>
                                                    {coin.price} &#8381;
                                                </div>
                                            </div>
                                        </Col>
                                    :'')}
                                </Row>
                            </Tab>
                            :''
                        
                    )
                }
            </Tabs>
        </>
    );
}