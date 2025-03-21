import style from './Shop.module.sass';
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import { Col, Container, Row } from 'react-bootstrap';

export default function Shop(){
    const coins =[
        {
            id: 1,
            image: 'coin_1.png',
            count:  100,
            bonus: null,
            price: 99
        },
        {
            id: 2,
            image: 'coin_1.png',
            count:  199,
            bonus: 20,
            price: 179
        },
        {
            id: 3,
            image: 'coin_1.png',
            count: 299,
            bonus: 20,
            price: 279
        },
        {
            id: 4,
            image: 'coin_1.png',
            count:  499,
            bonus: 50,
            price: 449
        },
        {
            id: 5,
            image: 'coin_1.png',
            count:  799,
            bonus: 50,
            price: 749
        },
        {
            id: 6,
            image: 'coin_1.png',
            count:  999,
            bonus: 100,
            price: 899
        },
        {
            id: 7,
            image: 'coin_1.png',
            count:  1999,
            bonus: 200,
            price: 1799
        },
        {
            id: 8,
            image: 'coin_1.png',
            count:  4999,
            bonus: 300,
            price: 4690
        },
        {
            id: 9,
            image: 'coin_1.png',
            count:  9999,
            bonus: 500,
            price: 9490
        },
    ]
    return(
<>
            <div className={style.wrap}>
                <Header />
                <Container>
                    <div className={style.wrap__top}>
                        <h1 className={style.title}>Покупай майнкоины</h1>
                        <p className={style.text}>Майнкоины — это виртуальная валюта Minecraft. С ее помощью можно преобразовать миры, отправиться на поиски эпичных сюжетных приключений, придать уникальный вид своему персонажу и сделать еще много всего интересного.</p>
                    </div>
                    <Row className={style.wrap__row}>
                        {coins.map((coin)=>
                        <Col xs={2} key={coin.id} className={style.card__wrap}>
                            <div className={style.card}>
                                <div>
                                    <img src={`images/${coin.image}`} alt="" />
                                </div>
                                <div className={style.card__count}>
                                    {coin.count}
                                    {(coin.bonus)? <span>+ O {coin.bonus} Бонус!</span>: ''}
                                </div>
                                <div className={style.card__price}>
                                    {coin.price} &#8381;
                                </div>
                            </div>
                        </Col>
                        )}
                        
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    );
}